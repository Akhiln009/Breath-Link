
// ============================================
// script.js — All simulator, quiz & certificate logic
// ============================================

const canvas = document.getElementById("lungCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let currentType = 'radon';
let simState = { exposure: 0, targetExposure: 0, breathTime: 0 };
let progress = { healthy: false, low: false, medium: false, high: false };

// ── PARTICLE CLASS ──
class Particle {
    constructor() { this.reset(); }
    reset() {
        const s = pathologyData[currentType] || pathologyData['radon'];
        this.x = canvas.width / 2; this.y = 50;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = Math.random() * s.speed + 2;
        this.reachedLungs = false;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        if (this.y > 180 && !this.reachedLungs) {
            this.vx += (this.x < canvas.width/2 ? -1.5 : 1.5);
            this.reachedLungs = true;
        }
        if (this.y > 480) this.reset();
    }
    draw() {
        ctx.fillStyle = (pathologyData[currentType] || pathologyData['radon']).color;
        ctx.beginPath(); ctx.arc(this.x, this.y, 4, 0, Math.PI * 2); ctx.fill();
    }
}

// ── DRAW ANATOMY ──
function drawAnatomy(scale, exp) {
    const cx = canvas.width / 2; const cy = 280;
    const s = pathologyData[currentType] || pathologyData['radon'];
    let r = 255 - (exp * 210); let g = 165 - (exp * 140); let b = 175 - (exp * 150);
    const drawSide = (side) => {
        ctx.save(); ctx.translate(cx + (side * 110), cy);
        const lScale = scale * (1 - (exp * 0.18)); ctx.scale(lScale * side, lScale);
        ctx.beginPath(); ctx.moveTo(0, -120); ctx.bezierCurveTo(160, -120, 195, 160, 0, 200);
        ctx.bezierCurveTo(-70, 200, -40, -60, 0, -120);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`; ctx.fill();
        if (exp > 0.05) {
            ctx.globalAlpha = exp; ctx.fillStyle = s.stain;
            for(let i=0; i<15; i++) {
                ctx.beginPath(); ctx.arc(Math.sin(i*5)*60, Math.cos(i*3)*90, 5 + (exp*20), 0, Math.PI*2); ctx.fill();
            }
        }
        ctx.restore();
    };
    drawSide(-1); drawSide(1);
    ctx.fillStyle = "#444"; ctx.fillRect(cx - 18, 40, 36, 140);
}

// ── ANIMATION LOOP ──
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    simState.exposure += (simState.targetExposure - simState.exposure) * 0.04;
    simState.breathTime += (0.04 - (simState.exposure * 0.025));
    const scale = 1 + (Math.sin(simState.breathTime) * 0.03);
    drawAnatomy(scale, simState.exposure);
    if (simState.targetExposure > 0) {
        if (particles.length < simState.targetExposure * 200) particles.push(new Particle());
    } else { particles = []; }
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();

// ── UI LOGIC ──
function openSim(type) {
    currentType = type; particles = []; progress = { healthy: false, low: false, medium: false, high: false };
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("simulator").style.display = "block";
    updateUI();
    setExposure('healthy');
}

function updateUI() {
    const s = pathologyData[currentType] || pathologyData['radon'];
    document.getElementById("simTitle").innerText = currentType.toUpperCase() + " CLINICAL ANALYSIS";
    document.getElementById("eduHeading").innerText = s.heading;
    document.getElementById("infoText").innerText = s.info;
    document.getElementById("specMech").innerHTML = s.mech;
    document.getElementById("specProg").innerHTML = s.prog;
}

function setExposure(level) {
    progress[level] = true;
    document.querySelectorAll('.controls button').forEach(b => b.classList.remove('active'));
    document.getElementById('step-' + level).classList.add('active');

    let target, health, color;
    if(level==="healthy")     { target=0;    health=100; color="#27ae60"; }
    else if(level==="low")    { target=0.25; health=75;  color="#f1c40f"; }
    else if(level==="medium") { target=0.55; health=45;  color="#e67e22"; }
    else if(level==="high")   { target=1.0;  health=15;  color="#e74c3c"; }

    simState.targetExposure = target;
    document.getElementById("healthFill").style.width = health + "%";
    document.getElementById("healthFill").style.background = color;
    checkUnlockStatus();
}

function checkUnlockStatus() {
    if(progress.healthy && progress.low && progress.medium && progress.high) {
        document.getElementById("lockMessage").style.display = "none";
        document.getElementById("quizButton").style.display = "inline-block";
    }
}

function goBack() {
    document.getElementById("simulator").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}

// ── QUIZ LOGIC ──
function startQuiz() {
    const quiz = (pathologyData[currentType] || {quiz:[]}).quiz;
    const body = document.getElementById("quizBody");
    const results = document.getElementById("quizResults");
    const header = document.getElementById("quizHeader");

    header.innerText = currentType.toUpperCase() + " CERTIFICATION EXAM";
    results.style.display = "none";
    document.getElementById("nameSection").style.display = "none";
    document.getElementById("submitQuizBtn").style.display = "block";
    document.getElementById("downloadCertBtn").style.display = "none";
    document.getElementById("firstNameInput").value = "";
    document.getElementById("lastNameInput").value = "";
    document.getElementById("nameError").style.display = "none";

    let html = "";
    quiz.forEach((q, i) => {
        html += `<div class="quiz-q"><p><strong>${i+1}. ${q.q}</strong></p>`;
        q.o.forEach(opt => {
            html += `<label style="display:block;margin:4px 0;"><input type="radio" name="q${i}" value="${opt}"> ${opt}</label>`;
        });
        html += `</div>`;
    });
    body.innerHTML = html;
    document.getElementById("quizModal").style.display = "flex";
}

function submitQuiz() {
    const quiz = (pathologyData[currentType] || {quiz:[]}).quiz;
    let score = 0;
    quiz.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if(selected && selected.value === q.a) score++;
    });

    const results = document.getElementById("quizResults");
    results.style.display = "block";

    if(score >= 8) {
        results.style.background = "#d4edda";
        results.style.color = "#155724";
        results.innerHTML = `🎓 PASSED: ${score}/10! You have demonstrated clinical mastery of ${currentType} pathology.`;
        document.getElementById("submitQuizBtn").style.display = "none";
        document.getElementById("nameSection").style.display = "block";
        document.getElementById("downloadCertBtn").style.display = "block";
    } else {
        results.style.background = "#f8d7da";
        results.style.color = "#721c24";
        results.innerHTML = `❌ FAILED: ${score}/10. You need 8/10 to pass. Review the detailed sub-topics and try again!`;
    }
}

function closeQuiz() { document.getElementById("quizModal").style.display = "none"; }

// ── CERTIFICATE LOGIC ──
function generateCertificate() {
    const firstName = document.getElementById("firstNameInput").value.trim();
    const lastName  = document.getElementById("lastNameInput").value.trim();
    const nameError  = document.getElementById("nameError");
    const firstInput = document.getElementById("firstNameInput");
    const lastInput  = document.getElementById("lastNameInput");

    if (!firstName || !lastName) {
        nameError.style.display = "block";
        if (!firstName) firstInput.classList.add("input-error");
        else firstInput.classList.remove("input-error");
        if (!lastName) lastInput.classList.add("input-error");
        else lastInput.classList.remove("input-error");
        setTimeout(() => {
            firstInput.classList.remove("input-error");
            lastInput.classList.remove("input-error");
        }, 400);
        return;
    }

    nameError.style.display = "none";
    const fullName = firstName + " " + lastName;
    const c = document.getElementById("certCanvas");
    const x = c.getContext("2d");

    // Background
    x.fillStyle = "#fffdf5";
    x.fillRect(0, 0, 900, 650);

    // Decorative background pattern
    x.globalAlpha = 0.04;
    x.fillStyle = "#1a4a7c";
    for (let i = 0; i < 900; i += 40) {
        for (let j = 0; j < 650; j += 40) {
            x.beginPath(); x.arc(i, j, 15, 0, Math.PI * 2); x.fill();
        }
    }
    x.globalAlpha = 1;

    // Borders
    x.strokeStyle = "#1a4a7c"; x.lineWidth = 18; x.strokeRect(12, 12, 876, 626);
    x.strokeStyle = "#c9a227"; x.lineWidth = 4;  x.strokeRect(28, 28, 844, 594);
    x.strokeStyle = "#1a4a7c"; x.lineWidth = 1.5; x.strokeRect(36, 36, 828, 578);

    // Corner ornaments
    const drawCorner = (cx, cy, angle) => {
        x.save(); x.translate(cx, cy); x.rotate(angle);
        x.strokeStyle = "#c9a227"; x.lineWidth = 2;
        x.beginPath(); x.moveTo(0, 0); x.lineTo(30, 0); x.moveTo(0, 0); x.lineTo(0, 30); x.stroke();
        x.restore();
    };
    drawCorner(36, 36, 0);
    drawCorner(864, 36, Math.PI / 2);
    drawCorner(864, 614, Math.PI);
    drawCorner(36, 614, -Math.PI / 2);

    // Header ribbon
    x.fillStyle = "#1a4a7c";
    x.fillRect(0, 55, 900, 75);
    x.textAlign = "center";
    x.fillStyle = "#ffffff";
    x.font = "bold 28px Georgia, serif";
    x.fillText("GLOBAL BREATH-LINK INITIATIVE", 450, 100);

    // Subtitle
    x.fillStyle = "#c9a227";
    x.font = "italic 15px Georgia, serif";
    x.fillText("Certificate of Clinical Competency", 450, 170);
    x.strokeStyle = "#c9a227"; x.lineWidth = 1;
    x.beginPath(); x.moveTo(250, 180); x.lineTo(650, 180); x.stroke();

    // Body text
    x.fillStyle = "#444";
    x.font = "16px Georgia, serif";
    x.fillText("This document certifies that", 450, 220);

    // Recipient name
    x.fillStyle = "#1a4a7c";
    x.font = "bold 48px Georgia, serif";
    x.fillText(fullName, 450, 290);
    const nameWidth = x.measureText(fullName).width;
    x.strokeStyle = "#c9a227"; x.lineWidth = 2;
    x.beginPath(); x.moveTo(450 - nameWidth/2, 302); x.lineTo(450 + nameWidth/2, 302); x.stroke();

    // Achievement text
    x.fillStyle = "#444";
    x.font = "16px Georgia, serif";
    x.fillText("has successfully completed advanced pathological simulation", 450, 340);
    x.fillText("and diagnostic training for:", 450, 365);

    // Pathology type
    x.fillStyle = "#27ae60";
    x.font = "bold 36px Arial, sans-serif";
    x.fillText(currentType.toUpperCase() + " PATHOLOGY", 450, 420);

    // Divider
    x.strokeStyle = "#ddd"; x.lineWidth = 1;
    x.beginPath(); x.moveTo(100, 450); x.lineTo(800, 450); x.stroke();

    // Footer info
    x.fillStyle = "#666";
    x.font = "13px Arial, sans-serif";
    x.fillText("Issued by the Global Breath-Link Initiative", 450, 480);
    x.fillText("Date: " + new Date().toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'}), 450, 502);

    // Official seal
    const sx = 450, sy = 565;
    x.beginPath(); x.arc(sx, sy, 48, 0, Math.PI*2);
    x.fillStyle = "#c9a227"; x.fill();
    x.beginPath(); x.arc(sx, sy, 40, 0, Math.PI*2);
    x.fillStyle = "#27ae60"; x.fill();
    x.beginPath(); x.arc(sx, sy, 34, 0, Math.PI*2);
    x.strokeStyle = "#fff"; x.lineWidth = 2; x.stroke();
    x.fillStyle = "#fff";
    x.font = "bold 9px Arial, sans-serif";
    x.fillText("GLOBAL BREATH-LINK", sx, sy - 7);
    x.fillText("✦ OFFICIAL SEAL ✦", sx, sy + 8);

    // Download
    const link = document.createElement('a');
    link.download = 'BreathLink_Certificate_' + currentType + '_' + firstName + '_' + lastName + '.png';
    link.href = c.toDataURL('image/png');
    link.click();
}