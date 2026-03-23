// ============================================
// data.js — All pathology simulation data
// ============================================

const pathologyData = {
    radon: {
        speed: 7, color: "rgba(180, 100, 255, 0.8)", stain: "#2b1042",
        heading: "Radon: Alpha Decay Inhalation",
        info: "Radon gas decays into heavy metallic 'radon daughters' that lodge in the bronchi. These emit high-energy, high-LET alpha particles directly into cell nuclei.",
        mech: "Ionizing alpha particles physically strip electrons from DNA, causing complex double-strand DNA breaks in basal cells of the bronchial epithelium.",
        prog: "Risk of Small-Cell Lung Carcinoma (SCLC), which doubles every 10 years of chronic exposure.",
        quiz: [
            {q: "What radioactive decay gas is color/odorless?", a: "Radon", o: ["Ozone", "Radon", "Carbon Monoxide"]},
            {q: "Radon gas decays into what particles?", a: "Radon daughters", o: ["Oxygen", "Radon daughters", "Lead"]},
            {q: "What kind of radiation is emitted?", a: "Alpha", o: ["Alpha", "Beta", "Gamma"]},
            {q: "Is alpha radiation considered low or high LET?", a: "High LET", o: ["Low LET", "High LET", "Neither"]},
            {q: "Where do decay particles lodge?", a: "Bronchi", o: ["Alveoli sacs", "Bronchi", "Trachea"]},
            {q: "Which specific cell layer is targeted?", a: "Basal cells", o: ["Epithelial surface", "Basal cells", "Red cells"]},
            {q: "How does the radiation impact DNA?", a: "Double-strand breaks", o: ["Single-strand only", "Double-strand breaks", "Strengthens it"]},
            {q: "What cancer is the long-term risk?", a: "SCLC", o: ["SCLC", "Mesothelioma", "Benign polyps"]},
            {q: "What leads to point mutations?", a: "Complex DNA breaks", o: ["Infection", "Complex DNA breaks", "Poor diet"]},
            {q: "Does risk increase with time?", a: "Yes, it doubles", o: ["Yes, it doubles", "No change", "It decreases"]}
        ]
    },
    cookfire: {
        speed: 1.8, color: "rgba(50, 50, 50, 0.9)", stain: "#080808",
        heading: "Biomass Smoke: PM 2.5 Particulates",
        info: "Burning wood/waste releases microscopic soot that bypasses mucus defenses, physically clogging the alveoli and overloading immune cells.",
        mech: "Persistent Alveolar Macrophage Overload leads to pro-inflammatory cytokine cascades and a permanent state of oxidative stress in deep lung tissue.",
        prog: "Development of 'Grinders Disease' (Severe COPD), with parenchymal remodeling and pulmonary hypertension.",
        quiz: [
            {q: "What is the common term for PM 2.5?", a: "Soot", o: ["Steam", "Soot", "Fresh Air"]},
            {q: "Which air sacs get physically clogged?", a: "Alveoli", o: ["Alveoli", "Trachea", "Bronchi"]},
            {q: "Which immune cell is overloaded?", a: "Macrophages", o: ["T-cells", "Macrophages", "Red cells"]},
            {q: "Cytokine cascades lead to what?", a: "Pro-inflammatory response", o: ["Antibody production", "Pro-inflammatory response", "Muscle healing"]},
            {q: "Is soot larger or smaller than dust?", a: "Smaller (PM 2.5)", o: ["Smaller (PM 2.5)", "Larger", "Same size"]},
            {q: "Can mucus defenses stop soot?", a: "No, soot bypasses it", o: ["Yes", "No, soot bypasses it", "Only wood smoke"]},
            {q: "What vascular issue results from hypoxia?", a: "Pulmonary Hypertension", o: ["Low blood pressure", "Pulmonary Hypertension", "Better blood flow"]},
            {q: "Parenchymal remodeling means what?", a: "Permanent tissue change", o: ["Temporary change", "Permanent tissue change", "Muscle growth"]},
            {q: "What fuel source is mentioned?", a: "Biomass/Wood", o: ["Biomass/Wood", "Natural Gas", "Solar"]},
            {q: "What is the prognosis disease nickname?", a: "Grinders Disease", o: ["Grinders Disease", "Soot Cough", "Wood Flu"]}
        ]
    },
    genetics: {
        speed: 1.2, color: "rgba(255, 150, 150, 0.5)", stain: "#5e2a2a",
        heading: "Genetic: AAT Deficiency",
        info: "A genetic error where the liver doesn't make Alpha-1 Antitrypsin, the body's 'stopper' for a powerful lung-cleaning enzyme.",
        mech: "Protease-antiprotease imbalance. Inhaled Neutrophil Elastase 'digests' its own healthy structural fibers (elastin) in the lung walls.",
        prog: "Panacinar Emphysema, usually in the lower lobes, leading to progressive dyspnea (shortness of breath).",
        quiz: [
            {q: "What protein is deficient?", a: "AAT", o: ["Insulin", "AAT", "Glutathione"]},
            {q: "Where is AAT produced?", a: "Liver", o: ["Lungs", "Liver", "Heart"]},
            {q: "AAT inhibits which enzyme?", a: "Neutrophil Elastase", o: ["Lactase", "Neutrophil Elastase", "Amylase"]},
            {q: "What fibers are digested?", a: "Elastin", o: ["Muscle", "Elastin", "Collagin"]},
            {q: "This creates a ________-antiprotease imbalance.", a: "Protease", o: ["Protease", "Antibiotic", "Protein"]},
            {q: "Which part of the lung is hit first?", a: "Lower lobes", o: ["Upper lobes", "Lower lobes", "Trachea"]},
            {q: "Emphysema is obstructive or restrictive?", a: "Obstructive", o: ["Restrictive", "Obstructive", "Both"]},
            {q: "Smoke exposure accelerates this condition by?", a: "500%", o: ["10%", "50%", "500%"]},
            {q: "What is 'dyspnea'?", a: "Shortness of breath", o: ["Fast heartbeat", "Shortness of breath", "Headache"]},
            {q: "Is AAT deficiency genetic or viral?", a: "Genetic", o: ["Genetic", "Viral", "Bacterial"]}
        ]
    },
    radiation: {
        speed: 8, color: "rgba(80, 255, 80, 0.7)", stain: "#1a3d1a",
        heading: "Ionizing Radiation: Fibrotic Trigger",
        info: "High-energy external rays cause radiolytic decomposition of cellular water, creating a 'flood' of free radicals that scar lung tissue.",
        mech: "Cytokine-mediated inflammatory cascade leading to fibroblast proliferation, making the lung stiff and unable to expand.",
        prog: "Restrictive Lung Fibrosis, resulting in a permanent reduction in Total Lung Capacity (TLC).",
        quiz: [
            {q: "What causes radiolytic damage?", a: "High-energy rays", o: ["Chemicals", "High-energy rays", "Heat"]},
            {q: "Cellular ______ is decomposed.", a: "Water", o: ["Water", "Salt", "Fat"]},
            {q: "What particles cause the scarring?", a: "Free radicals", o: ["Oxygen", "Free radicals", "Bacteria"]},
            {q: "This creates a stiff, ________ lung.", a: "Restrictive", o: ["Restrictive", "Obstructive", "Smaller"]},
            {q: "Can restrictive damage be reversed?", a: "No", o: ["Yes", "No", "Sometimes"]},
            {q: "What cascades make the lung stiff?", a: "Cytokine-mediated", o: ["Blood-sugar", "Cytokine-mediated", "Nerve-based"]},
            {q: "What happens to TLC?", a: "Reduced", o: ["Increased", "Reduced", "No change"]},
            {q: "Are the lungs able to expand well?", a: "No, they are stiff", o: ["Yes", "No, they are stiff", "Better than usual"]},
            {q: "This triggers which specific cell type?", a: "Fibroblasts", o: ["Neurons", "Fibroblasts", "Red cells"]},
            {q: "This is primarily an ________ damage source.", a: "External", o: ["External", "Internal", "Genetic"]}
        ]
    },
    alcohol: {
        speed: 1.1, color: "rgba(150, 180, 255, 0.5)", stain: "#4d3838",
        heading: "Alcohol: Ciliary Dysmotility",
        info: "Ethanol exposure paralyzes the 'brushes' of the lung (cilia), preventing the removal of environmental toxins and pathogens.",
        mech: "Ethanol causes desensitization of dynein arms in cilia, leading to mucus stasis (stopping), and bacterial colonization.",
        prog: "Frequent bacterial pneumonia and lung abscesses (pus pockets); weakened local immunity.",
        quiz: [
            {q: "What is ethanol?", a: "Alcohol", o: ["Alcohol", "Virus", "Chemical"]},
            {q: "What brushes are paralyzed?", a: "Cilia", o: ["Hair", "Cilia", "Nails"]},
            {q: "What does 'dysmotility' mean?", a: "Improper movement", o: ["No movement", "Improper movement", "Fast movement"]},
            {q: "Ethanol desensitizes which arms?", a: "Dynein", o: ["Mitotic", "Dynein", "Muscle"]},
            {q: "What does 'stasis' mean?", a: "Stopped", o: ["Fast", "Stopped", "Repairing"]},
            {q: "Stagnant mucus causes colonization of?", a: "Bacteria", o: ["Oxygen", "Bacteria", "Fat"]},
            {q: "Local lung _______ is weakened.", a: "Immunity", o: ["Muscle", "Immunity", "Vision"]},
            {q: "Is pneumonia a prognosis risk?", a: "Yes", o: ["Yes", "No", "Only for kids"]},
            {q: "What is a lung abscess?", a: "A pus pocket", o: ["A water pocket", "A pus pocket", "A clean spot"]},
            {q: "Does alcohol clear toxins?", a: "No, it prevents clearance", o: ["Yes", "No, it prevents clearance", "Only red wine"]}
        ]
    },
    air: {
        speed: 3.8, color: "rgba(140, 130, 100, 0.8)", stain: "#2e2e1e",
        heading: "Urban Pollution: Chemical Scald",
        info: "Ground-level Ozone (O3) and NO2 physically 'scald' the lung epithelium, creating a chronic, chemically reactive surface.",
        mech: "Lipid peroxidation of alveolar membranes and epithelial cell death, making the airways hyper-reactive to everything.",
        prog: "Chronic Bronchitis and RADS (Reactive Airways Dysfunction Syndrome). Common in high-traffic areas.",
        quiz: [
            {q: "What does pollution do to epithelium?", a: "Chemical scald", o: ["Freezes it", "Chemical scald", "Moisturizes it"]},
            {q: "What gas is O3?", a: "Ozone", o: ["Oxygen", "Ozone", "Nitrogen"]},
            {q: "Where is Ozone described as 'ground-level'?", a: "Urban zones", o: ["The moon", "Urban zones", "Forests"]},
            {q: "What is lipid peroxidation?", a: "Membrane damage", o: ["Fat growth", "Membrane damage", "Water gain"]},
            {q: "Does this cause hyper-reactive airways?", a: "Yes", o: ["Yes", "No", "Sometimes"]},
            {q: "What cells die widespread?", a: "Epithelial", o: ["Muscle", "Epithelial", "Blood"]},
            {q: "Smog is described as photochemically what?", a: "Reactive", o: ["Nuclear", "Reactive", "Biological"]},
            {q: "What is RADS?", a: "Airway Dysfunction Syndrome", o: ["Air Delivery System", "Airway Dysfunction Syndrome", "Air Danger Sign"]},
            {q: "Chronic bronchitis is obstructive?", a: "Yes", o: ["Yes", "No", "Both"]},
            {q: "NO2 and Ozone: are they described as good?", a: "No", o: ["Yes", "No", "Only in forests"]}
        ]
    },
    diet: {
        speed: 1.3, color: "rgba(255, 160, 0, 0.5)", stain: "#45382d",
        heading: "Diet: Nutritional Weakness",
        info: "Low intake of Vitamin A, C, and E leaves the vital surfactant layer (the lung's soap) without a chemical 'shield' against air toxins.",
        mech: "Insufficient glutathione and alpha-tocopherol levels to quench inhaled oxidants, accelerating lipid peroxidation and cell aging.",
        prog: "Accelerated lung aging and massive sensitivity to all other environmental triggers.",
        quiz: [
            {q: "Which vitamins make the shield?", a: "A, C, E", o: ["B, D", "A, C, E", "Calcium"]},
            {q: "What is the primary supportive layer?", a: "Surfactant layer", o: ["Outer skin", "Surfactant layer", "Muscle layer"]},
            {q: "Does low Vit A increase weakness?", a: "Yes", o: ["Yes", "No", "Maybe"]},
            {q: "Surfactant acts as a chemical ________.", a: "Shield", o: ["Water", "Shield", "Toxin"]},
            {q: "Low diet means insufficient what?", a: "Glutathione", o: ["Sugar", "Glutathione", "Fat"]},
            {q: "Prognosis includes accelerated cell?", a: "Aging", o: ["Healing", "Aging", "Growth"]},
            {q: "Poor diet increases massive what?", a: "Sensitivity to other triggers", o: ["Muscle strength", "Sensitivity to other triggers", "Airflow"]},
            {q: "The body cannot quench inhaled what?", a: "Oxidants", o: ["Oxygen", "Oxidants", "Vitamins"]},
            {q: "The surfactant layer is the lung's ________.", a: "Soap/shield", o: ["Stomach", "Soap/shield", "Filter"]},
            {q: "Lifestyle and nutrition: supportive or primary?", a: "Supportive", o: ["Supportive", "Primary", "Irrelevant"]}
        ]
    },
    carcinogens: {
        speed: 3.2, color: "rgba(0, 0, 0, 1)", stain: "#000000",
        heading: "Carcinogens: Chromosome Interference",
        info: "Industrial carcinogens like Asbestos (fibers) physically pierce cells, causing point mutations and direct translocation of DNA.",
        mech: "Physical interference with mitotic spindles during cell division leads to irreversible chromosome damage and abnormal cell growth.",
        prog: "Malignant Mesothelioma; symptoms typically manifest 20-40 years after original exposure.",
        quiz: [
            {q: "Carcinogens: biological or industrial?", a: "Industrial", o: ["Industrial", "Biological", "Bacterial"]},
            {q: "What toxin is a fiber?", a: "Asbestos", o: ["Asbestos", "Sugar", "Arsenic"]},
            {q: "How do fibers damage cells?", a: "Physically pierce them", o: ["Freeze them", "Physically pierce them", "Dissolve them"]},
            {q: "What does DNA translocation mean?", a: "Abnormal DNA damage", o: ["DNA repair", "Abnormal DNA damage", "DNA copier"]},
            {q: "It interferes with what process?", a: "Cell division", o: ["Cell division", "Breathing", "Eating"]},
            {q: "Point mutations are reversible?", a: "No", o: ["Yes", "No", "Sometimes"]},
            {q: "Asbestos cancer: Mesothelioma?", a: "Yes", o: ["Yes", "No", "Flu"]},
            {q: "What are mitotic spindles?", a: "Cell dividers", o: ["Lung muscles", "Cell dividers", "Nerves"]},
            {q: "Symptom delay is how long?", a: "20-40 years", o: ["1 day", "20-40 years", "Next year"]},
            {q: "Chronic irritation leads to normal or abnormal growth?", a: "Abnormal", o: ["Normal", "Abnormal", "Muscle"]}
        ]
    }
};
