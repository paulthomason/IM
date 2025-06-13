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
