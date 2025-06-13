const categories = {
    "Infectious Diseases": [
        {
            question: "Which canine virus is most commonly associated with hemorrhagic gastroenteritis?",
            options: ["Canine parvovirus", "Canine distemper virus", "Canine coronavirus", "Rabies virus"],
            answer: 0,
            explanation: "Canine parvovirus targets rapidly dividing intestinal crypt cells leading to severe hemorrhagic diarrhea."
        },
        {
            question: "Feline leukemia virus (FeLV) is primarily transmitted through which route?",
            options: ["Fleas", "Saliva and close contact", "Fecal-oral", "In utero only"],
            answer: 1,
            explanation: "FeLV spreads via saliva through mutual grooming and close social contact between cats."
        },
        {
            question: "What is the first-line treatment for dogs diagnosed with leptospirosis?",
            options: ["Amoxicillin", "Doxycycline", "Enrofloxacin", "Metronidazole"],
            answer: 1,
            explanation: "Doxycycline eliminates leptospiral shedding and is considered the treatment of choice."
        }
    ],
    "Endocrine": [
        {
            question: "Which test is considered the gold standard for diagnosing hyperadrenocorticism in dogs?",
            options: ["Low-dose dexamethasone suppression test", "ACTH stimulation test", "Urine cortisol:creatinine ratio", "High-dose dexamethasone suppression test"],
            answer: 0,
            explanation: "The low-dose dexamethasone suppression test is highly sensitive for diagnosing Cushing's disease."
        },
        {
            question: "Which insulin type has the longest duration of action in cats?",
            options: ["NPH", "Regular", "Glargine", "Lente"],
            answer: 2,
            explanation: "Glargine is a long-acting insulin commonly used for managing feline diabetes mellitus."
        },
        {
            question: "What hormone is deficient in dogs with diabetes insipidus?",
            options: ["Adrenocorticotropic hormone", "Antidiuretic hormone", "Insulin", "Thyroxine"],
            answer: 1,
            explanation: "Lack of antidiuretic hormone production or response leads to diabetes insipidus."
        }
    ],
    "Gastrointestinal": [
        {
            question: "Which breed is predisposed to exocrine pancreatic insufficiency due to pancreatic acinar atrophy?",
            options: ["German Shepherd", "Beagle", "Labrador Retriever", "Boxer"],
            answer: 0,
            explanation: "German Shepherds have a heritable predisposition to pancreatic acinar atrophy causing EPI."
        },
        {
            question: "What is the primary therapeutic dietary modification for cats with inflammatory bowel disease?",
            options: ["Low protein diet", "High fiber diet", "Novel protein or hydrolyzed diet", "Low fat diet"],
            answer: 2,
            explanation: "Novel protein or hydrolyzed diets reduce immune stimulation from dietary antigens in IBD."
        },
        {
            question: "Which medication is commonly used as a prokinetic in dogs with gastric motility disorders?",
            options: ["Metoclopramide", "Famotidine", "Omeprazole", "Sucralfate"],
            answer: 0,
            explanation: "Metoclopramide enhances gastric emptying by acting as a dopamine antagonist." 
        }
    ],
    "Cardiovascular": [
        {
            question: "What congenital heart defect is characterized by a continuous 'machinery' murmur in puppies?",
            options: ["Patent ductus arteriosus", "Ventricular septal defect", "Pulmonic stenosis", "Atrial septal defect"],
            answer: 0,
            explanation: "Patent ductus arteriosus creates a continuous murmur due to shunting from the aorta to the pulmonary artery."
        },
        {
            question: "Which drug is commonly used as a positive inotrope in dogs with dilated cardiomyopathy?",
            options: ["Furosemide", "Pimobendan", "Atenolol", "Enalapril"],
            answer: 1,
            explanation: "Pimobendan increases contractility and is often included in therapy for dilated cardiomyopathy." 
        },
        {
            question: "In cats, what is the most frequent cause of aortic thromboembolism?",
            options: ["Hypertrophic cardiomyopathy", "Hyperthyroidism", "Chronic kidney disease", "Diabetes mellitus"],
            answer: 0,
            explanation: "Hypertrophic cardiomyopathy predisposes cats to thrombus formation in the heart, which can lodge in the aorta." 
        }
    ],
    "Respiratory": [
        {
            question: "Which pathogen commonly causes feline upper respiratory tract infections along with feline herpesvirus?",
            options: ["Bordetella bronchiseptica", "Chlamydia felis", "Mycoplasma felis", "Calicivirus"],
            answer: 3,
            explanation: "Feline calicivirus often works in concert with feline herpesvirus to cause upper respiratory disease." 
        },
        {
            question: "What is the primary therapy for feline asthma?",
            options: ["Bronchodilators", "Antibiotics", "Inhaled corticosteroids", "Antitussives"],
            answer: 2,
            explanation: "Inhaled corticosteroids control airway inflammation in cats with asthma." 
        },
        {
            question: "Which diagnostic test can confirm collapsing trachea in small breed dogs?",
            options: ["Thoracic radiographs", "Bronchoscopy", "Fluoroscopy", "CT scan"],
            answer: 2,
            explanation: "Fluoroscopy allows dynamic visualization of tracheal collapse during respiration." 
        }
    ],
    "Renal": [
        {
            question: "Which biomarker is considered most sensitive for early detection of kidney dysfunction in cats?",
            options: ["Creatinine", "Symmetric dimethylarginine (SDMA)", "BUN", "Urine specific gravity"],
            answer: 1,
            explanation: "SDMA rises earlier than creatinine, making it a more sensitive indicator of kidney disease." 
        },
        {
            question: "What is the recommended initial therapy for hyperkalemia in cats with urethral obstruction?",
            options: ["Calcium gluconate", "Insulin and dextrose", "Sodium bicarbonate", "Furosemide"],
            answer: 0,
            explanation: "Calcium gluconate stabilizes the myocardium against arrhythmias caused by high potassium." 
        },
        {
            question: "Which diet change is generally advised for dogs with chronic kidney disease?",
            options: ["High protein", "Low phosphorus", "Low fat", "High sodium"],
            answer: 1,
            explanation: "Reducing dietary phosphorus helps slow progression of chronic kidney disease." 
        }
    ],
    "Neurology": [
        {
            question: "Which breed is predisposed to intervertebral disc disease due to chondrodystrophy?",
            options: ["Dachshund", "Great Dane", "Greyhound", "Doberman"],
            answer: 0,
            explanation: "Chondrodystrophic breeds like Dachshunds commonly suffer from intervertebral disc disease." 
        },
        {
            question: "What is the most appropriate initial diagnostic imaging modality for a cat with suspected intracranial disease?",
            options: ["CT scan", "MRI", "Ultrasound", "Radiographs"],
            answer: 1,
            explanation: "MRI provides superior detail for soft tissues and is preferred for brain imaging." 
        },
        {
            question: "Which medication is first-line therapy for controlling seizures in dogs?",
            options: ["Phenobarbital", "Levetiracetam", "Potassium bromide", "Diazepam"],
            answer: 0,
            explanation: "Phenobarbital is widely used as an effective and affordable anticonvulsant in dogs." 
        }
    ],
    "Oncology": [
        {
            question: "Mast cell tumors typically respond to which type of medical therapy?",
            options: ["Antibiotics", "Antihistamines", "Vinblastine and prednisone", "NSAIDs"],
            answer: 2,
            explanation: "Vinblastine in combination with prednisone is a common chemotherapy protocol for mast cell tumors." 
        },
        {
            question: "What is the most common oral tumor in cats?",
            options: ["Squamous cell carcinoma", "Melanoma", "Fibrosarcoma", "Lymphoma"],
            answer: 0,
            explanation: "Squamous cell carcinoma accounts for the majority of malignant oral tumors in cats." 
        },
        {
            question: "Which diagnostic test provides a definitive diagnosis for lymphoma in dogs?",
            options: ["Fine needle aspirate", "Biopsy and histopathology", "Flow cytometry", "PCR for antigen receptor rearrangements"],
            answer: 1,
            explanation: "Histopathology of a biopsy sample confirms lymphoma diagnosis and allows grading." 
        }
    ]
, "Dermatology": [
    {
        question: "Which mite species causes canine scabies?",
        options: ["Demodex canis", "Sarcoptes scabiei var. canis", "Otodectes cynotis", "Cheyletiella yasguri"],
        answer: 1,
        explanation: "Sarcoptes scabiei var. canis burrows into the skin causing intense pruritus."
    },
    {
        question: "A common topical treatment for flea allergy dermatitis in dogs is:",
        options: ["Topical antibiotic", "Corticosteroid spray", "Antifungal shampoo", "Vitamin E oil"],
        answer: 1,
        explanation: "Corticosteroid sprays reduce inflammation associated with flea allergy."
    },
    {
        question: "Which diagnostic test confirms ringworm in cats?",
        options: ["Skin cytology", "Wood's lamp", "Fungal culture", "Allergy testing"],
        answer: 2,
        explanation: "Fungal culture is considered the gold standard for diagnosing dermatophytosis."
    },
    {
        question: "What is the typical first step in managing a dog with atopic dermatitis?",
        options: ["Start systemic antibiotics", "Begin allergen-specific immunotherapy", "Identify and reduce exposure to allergens", "Administer antifungal medication"],
        answer: 2,
        explanation: "Avoiding or minimizing allergen exposure is key in initial management of atopic dermatitis."
    }
],
"Musculoskeletal": [
    {
        question: "Which joint is most commonly affected by hip dysplasia in dogs?",
        options: ["Elbow", "Stifle", "Coxofemoral", "Carpal"],
        answer: 2,
        explanation: "Hip dysplasia primarily affects the coxofemoral (hip) joint leading to laxity and arthritis."
    },
    {
        question: "What is a typical first-line analgesic for osteoarthritis in dogs?",
        options: ["Aspirin", "Carprofen", "Acetaminophen", "Ibuprofen"],
        answer: 1,
        explanation: "Carprofen is an NSAID commonly prescribed to manage canine osteoarthritis pain."
    },
    {
        question: "Which supplement is often recommended for joint support in cats with arthritis?",
        options: ["Glucosamine and chondroitin", "Vitamin K", "Iron", "Vitamin C"],
        answer: 0,
        explanation: "Glucosamine and chondroitin help maintain joint cartilage and are frequently used in arthritic cats."
    },
    {
        question: "Cruciate ligament rupture in dogs typically results in instability of which joint?",
        options: ["Hip", "Stifle", "Carpus", "Shoulder"],
        answer: 1,
        explanation: "The cranial cruciate ligament stabilizes the stifle; rupture leads to stifle instability."
    }
],
"Ophthalmology": [
    {
        question: "Which test is used to assess tear production in dogs?",
        options: ["Fluorescein staining", "Schirmer tear test", "Tonometry", "Ophthalmoscopy"],
        answer: 1,
        explanation: "The Schirmer tear test quantitatively measures tear production."
    },
    {
        question: "What is the first-line treatment for conjunctivitis in cats due to Chlamydophila felis?",
        options: ["Topical antifungals", "Topical antivirals", "Topical tetracycline", "Topical corticosteroids"],
        answer: 2,
        explanation: "Topical tetracycline is effective against Chlamydophila infections causing conjunctivitis."
    },
    {
        question: "Which breed is predisposed to primary glaucoma in dogs?",
        options: ["Poodle", "Cocker Spaniel", "Boxer", "Beagle"],
        answer: 1,
        explanation: "Cocker Spaniels are among the breeds commonly affected by primary glaucoma."
    },
    {
        question: "Entropion refers to which ocular condition?",
        options: ["Inward rolling of the eyelid", "Outward rolling of the eyelid", "Opacity of the lens", "Protrusion of the third eyelid"],
        answer: 0,
        explanation: "Entropion describes inward rolling of the eyelid margin, causing irritation."
    }
],
"Reproductive": [
    {
        question: "Which hormone can be measured to confirm ovulation timing in dogs?",
        options: ["Progesterone", "Estrogen", "LH", "Prolactin"],
        answer: 0,
        explanation: "Serum progesterone levels rise sharply following ovulation in dogs."
    },
    {
        question: "Pyometra most commonly occurs during which phase of the canine estrous cycle?",
        options: ["Proestrus", "Estrus", "Diestrus", "Anestrus"],
        answer: 2,
        explanation: "Diestrus is the phase when progesterone is high, predisposing to pyometra."
    },
    {
        question: "Which diagnostic method is preferred for pregnancy detection in cats at 3-4 weeks gestation?",
        options: ["Radiography", "Ultrasound", "Palpation", "Blood progesterone"],
        answer: 1,
        explanation: "Ultrasound can reliably detect feline pregnancy around 3 weeks."
    },
    {
        question: "Cryptorchidism in dogs refers to failure of what?",
        options: ["Testicular descent", "Penile development", "Sperm production", "Prostate enlargement"],
        answer: 0,
        explanation: "Cryptorchidism is the failure of one or both testes to descend into the scrotum."
    }
],
"Behavior": [
    {
        question: "Which pheromone product is commonly used to reduce stress in cats?",
        options: ["Adaptil", "Feliway", "Rescue Remedy", "Attractant"],
        answer: 1,
        explanation: "Feliway contains synthetic feline facial pheromones that help calm cats."
    },
    {
        question: "Counter-conditioning is best described as:",
        options: ["Punishment for undesirable behavior", "Introducing a new behavior to replace an unwanted one", "Allowing a behavior to extinguish by ignoring it", "Using medication to suppress a behavior"],
        answer: 1,
        explanation: "Counter-conditioning replaces an undesirable response with a desirable one via training."
    },
    {
        question: "Separation anxiety in dogs commonly manifests as:",
        options: ["Excessive sleeping", "Destructive behavior when left alone", "Aggression to strangers", "Loss of appetite"],
        answer: 1,
        explanation: "Dogs with separation anxiety often destroy items or vocalize when left alone."
    },
    {
        question: "Which medication is often prescribed for long-term management of anxiety disorders in dogs?",
        options: ["Prednisone", "Fluoxetine", "Amoxicillin", "Metoclopramide"],
        answer: 1,
        explanation: "Fluoxetine, an SSRI, is frequently used for canine anxiety issues."
    }
],
"Nutrition": [
    {
        question: "Which nutrient is essential for cats because they cannot synthesize it in sufficient quantities?",
        options: ["Taurine", "Vitamin C", "Carbohydrate", "Vitamin K"],
        answer: 0,
        explanation: "Cats require taurine in their diet to prevent cardiomyopathy and retinal degeneration."
    },
    {
        question: "Obesity in dogs is best managed through:",
        options: ["Free feeding high-calorie food", "Increasing dietary fiber and controlled portions", "Switching to raw food diet only", "Giving more treats"],
        answer: 1,
        explanation: "Higher fiber diets and portion control help reduce caloric intake for weight loss."
    },
    {
        question: "Which life stage requires the highest protein percentage in canine diets?",
        options: ["Puppy", "Adult", "Senior", "Geriatric"],
        answer: 0,
        explanation: "Growing puppies need higher protein to support growth and development."
    },
    {
        question: "A deficiency of which vitamin can lead to ventral flexion of the neck in cats?",
        options: ["Vitamin B1 (thiamine)", "Vitamin D", "Vitamin E", "Vitamin A"],
        answer: 0,
        explanation: "Thiamine deficiency can cause neurological signs including cervical ventroflexion."
    }
],
"Emergency": [
    {
        question: "What is the recommended first step when treating a dog with suspected gastric dilatation-volvulus (GDV)?",
        options: ["Provide food", "Take radiographs", "Stabilize with fluids and decompress the stomach", "Administer antibiotics"],
        answer: 2,
        explanation: "Rapid stabilization and gastric decompression are essential initial steps in GDV."
    },
    {
        question: "Which sign is most indicative of shock in a cat?",
        options: ["Bright pink gums", "Normal heart rate", "Cold extremities", "Lying in sternal recumbency"],
        answer: 2,
        explanation: "Poor perfusion from shock often leads to cold paws and extremities."
    },
    {
        question: "In canine CPR, the recommended chest compression rate is approximately:",
        options: ["60 compressions per minute", "100-120 compressions per minute", "150 compressions per minute", "30 compressions per minute"],
        answer: 1,
        explanation: "Current guidelines suggest 100-120 compressions per minute for effective CPR."
    },
    {
        question: "What drug is typically administered first in cases of anaphylactic shock in dogs?",
        options: ["Epinephrine", "Atropine", "Diazepam", "Lidocaine"],
        answer: 0,
        explanation: "Epinephrine is given to counteract severe allergic reactions."
    }
],
"Pharmacology": [
    {
        question: "Which antibiotic class should be avoided in young growing dogs due to effects on cartilage?",
        options: ["Cephalosporins", "Aminoglycosides", "Fluoroquinolones", "Macrolides"],
        answer: 2,
        explanation: "Fluoroquinolones can damage developing cartilage in young dogs."
    },
    {
        question: "The antidote for acetaminophen toxicity in cats is:",
        options: ["Vitamin K1", "Atropine", "N-acetylcysteine", "Activated charcoal"],
        answer: 2,
        explanation: "N-acetylcysteine replenishes glutathione and mitigates acetaminophen toxicity."
    },
    {
        question: "Which drug is commonly used to induce vomiting in dogs?",
        options: ["Apomorphine", "Hydrogen peroxide", "Xylazine", "Dexmedetomidine"],
        answer: 0,
        explanation: "Apomorphine is often used by veterinarians to induce emesis in dogs."
    },
    {
        question: "Ketamine anesthesia should be used cautiously in cats with which condition?",
        options: ["Kidney disease", "Hyperthyroidism", "Hypertrophic cardiomyopathy", "Otitis"],
        answer: 2,
        explanation: "Ketamine can increase heart rate and contractility, which may be risky in HCM cats."
    }
],
"Diagnostic Imaging": [
    {
        question: "Which imaging modality is best for evaluating a cranial cruciate ligament rupture in dogs?",
        options: ["Ultrasound", "Radiography", "MRI", "CT scan"],
        answer: 2,
        explanation: "MRI provides detailed images of soft tissue structures like ligaments."
    },
    {
        question: "Barium contrast studies are most useful for diagnosing issues in which body system?",
        options: ["Respiratory", "Urinary", "Gastrointestinal", "Endocrine"],
        answer: 2,
        explanation: "Barium contrast enhances radiographic evaluation of the gastrointestinal tract."
    },
    {
        question: "Ultrasound-guided fine needle aspirate is commonly used to sample which organ in cats?",
        options: ["Pancreas", "Brain", "Thyroid", "Urinary bladder"],
        answer: 3,
        explanation: "The urinary bladder is often sampled via ultrasound guidance for cytology or culture."
    },
    {
        question: "What is the primary safety concern when performing radiography?",
        options: ["Equipment cost", "Radiation exposure", "Time consumption", "Anesthesia"],
        answer: 1,
        explanation: "Proper precautions are needed to minimize radiation exposure to staff and patients."
    }
],
"Surgery": [
    {
        question: "What is a common complication following canine spay surgery?",
        options: ["Pyometra", "Incisional infection", "Prostatitis", "Mammary tumors"],
        answer: 1,
        explanation: "Incisional infections can occur post-operatively if the site is not kept clean."
    },
    {
        question: "Which suture pattern is often used to close the linea alba in dogs?",
        options: ["Horizontal mattress", "Simple interrupted", "Cruciate", "Ford interlocking"],
        answer: 1,
        explanation: "Simple interrupted sutures provide secure closure for the linea alba."
    },
    {
        question: "What pre-surgical fasting period is generally recommended for adult dogs?",
        options: ["No fasting", "2 hours", "8-12 hours", "24 hours"],
        answer: 2,
        explanation: "Fasting 8-12 hours reduces the risk of regurgitation during anesthesia."
    },
    {
        question: "Which instrument is used to clamp small vessels during surgery?",
        options: ["Allis forceps", "Doyen forceps", "Mosquito hemostats", "Babcock forceps"],
        answer: 2,
        explanation: "Mosquito hemostats are designed to clamp small blood vessels."
    }
],
"Dentistry": [
    {
        question: "What is a common cause of feline odontoclastic resorptive lesions (FORLs)?",
        options: ["High-carbohydrate diets", "Excess fluoride", "Unknown etiology", "Viral infection"],
        answer: 2,
        explanation: "The exact cause of FORLs is not fully understood, making prevention challenging."
    },
    {
        question: "Which dental instrument removes calculus from tooth surfaces above the gumline?",
        options: ["Scaler", "Curette", "Elevator", "Luxator"],
        answer: 0,
        explanation: "A scaler is used to remove tartar from the crown of the tooth."
    },
    {
        question: "Retained deciduous teeth are most commonly seen in which breed type?",
        options: ["Giant breeds", "Toy breeds", "Sporting breeds", "Sighthounds"],
        answer: 1,
        explanation: "Toy breeds frequently retain baby teeth which may require extraction."
    },
    {
        question: "What is the purpose of dental radiographs during tooth extraction?",
        options: ["Monitor anesthesia depth", "Visualize tooth roots", "Measure blood pressure", "Check body temperature"],
        answer: 1,
        explanation: "Radiographs confirm root removal and detect complications."
    }
]

};

const categoryContainer = document.getElementById('categories');
const quizContainer = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const explanationEl = document.getElementById('explanation');
const nextBtn = document.getElementById('next');
const resultEl = document.getElementById('result');

let currentQuestions = [];
let currentIndex = 0;
let score = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadCategories() {
    Object.keys(categories).forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat;
        btn.addEventListener('click', () => startQuiz(cat));
        categoryContainer.appendChild(btn);
    });
}

function startQuiz(category) {
    categoryContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    currentQuestions = shuffle([...categories[category]]).slice(0, 10);
    currentIndex = 0;
    score = 0;
    nextBtn.textContent = 'Next Question';
    nextBtn.classList.add('hidden');
    explanationEl.classList.add('hidden');
    resultEl.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    const q = currentQuestions[currentIndex];
    questionEl.textContent = `Question ${currentIndex + 1}: ${q.question}`;
    optionsEl.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.addEventListener('click', () => selectAnswer(idx));
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(selected) {
    const q = currentQuestions[currentIndex];
    Array.from(optionsEl.children).forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.answer) {
            btn.style.borderColor = '#2e7d32';
        }
        if (idx === selected && idx !== q.answer) {
            btn.style.borderColor = 'red';
        }
    });
    if (selected === q.answer) {
        score++;
        explanationEl.textContent = 'Correct! ' + q.explanation;
    } else {
        explanationEl.textContent = `Incorrect. The correct answer was "${q.options[q.answer]}". ` + q.explanation;
    }
    explanationEl.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    if (currentIndex === currentQuestions.length - 1) {
        nextBtn.textContent = 'See Results';
    }
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        explanationEl.classList.add('hidden');
        nextBtn.classList.add('hidden');
        showQuestion();
    } else {
        quizContainer.classList.add('hidden');
        resultEl.classList.remove('hidden');
        resultEl.textContent = `You scored ${score} out of ${currentQuestions.length}.`;
        categoryContainer.classList.remove('hidden');
    }
});

loadCategories();
