const themeToggle = document.getElementById('themeToggle');
const homeBtn = document.getElementById('homeBtn');
const doctorScreen = document.getElementById('doctorScreen');
const doctorText = document.getElementById('doctorText');
const doctorOptions = document.getElementById('doctorOptions');
const doctorNext = document.getElementById('doctorNext');
const doctorQuit = document.getElementById('doctorQuit');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
}

if (homeBtn) {
    homeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
if (doctorQuit) {
    doctorQuit.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

function maybePoorOutcome(correct) {
    if (!correct && Math.random() < 0.4) {
        const outcomes = [
            'the owner becomes upset',
            'the pet experiences complications',
            'a bad online review appears'
        ];
        doctorText.textContent += ' Unfortunately, ' + outcomes[Math.floor(Math.random() * outcomes.length)] + '.';
    }
}

const caseDatabase = [
    {
        name: 'Rex',
        species: 'dog',
        breed: 'Poodle mix',
        age: 4,
        sex: 'neutered male',
        presenting: 'collapse and vomiting',
        history: 'Owner reports two days of vomiting and diarrhea with progressive lethargy.',
        exam: 'weak pulses, bradycardia and tacky mucous membranes',
        initialQuestion: {
            q: 'Which initial diagnostic is most important?',
            options: ['CBC/chem/electrolytes', 'Thoracic radiographs', 'Tick serology', 'Brain MRI'],
            answer: 0
        },
        labs: 'Hyponatremia and hyperkalemia with Na/K ratio <20.',
        confirmQuestion: {
            q: 'Which test confirms Addison\'s disease?',
            options: ['ACTH stimulation', 'Low-dose dex suppression', 'Bile acids test', 'T4 level'],
            answer: 0
        },
        treatmentQuestion: {
            q: 'What immediate therapy is indicated?',
            options: ['IV fluids and dexamethasone', 'Oral antibiotics', 'Insulin and dextrose', 'Diuretics only'],
            answer: 0
        },
        followUp: {
            q: 'When should electrolytes be rechecked after starting DOCP?',
            options: ['In 2 weeks', 'In 6 months', 'Never', 'Tomorrow'],
            answer: 0
        }
    },
    {
        name: 'Whiskers',
        species: 'cat',
        breed: 'Domestic Shorthair',
        age: 13,
        sex: 'spayed female',
        presenting: 'weight loss and increased thirst',
        history: 'Indoor cat with progressive polyuria and polydipsia on dry food only.',
        exam: 'poor body condition and small irregular kidneys',
        initialQuestion: {
            q: 'Which diagnostic should be performed first?',
            options: ['CBC/chem/urinalysis', 'Chest radiographs', 'FeLV/FIV test', 'Coagulation profile'],
            answer: 0
        },
        labs: 'Creatinine 4.2 mg/dL, BUN 70 mg/dL, urine specific gravity 1.015.',
        confirmQuestion: {
            q: 'Which therapy helps slow progression of chronic kidney disease?',
            options: ['Renal diet', 'High protein diet', 'Ketoconazole', 'High-dose steroids'],
            answer: 0
        },
        treatmentQuestion: {
            q: 'Which drug is used to treat hypertension in CKD cats?',
            options: ['Amlodipine', 'Enalapril', 'Furosemide', 'Prednisolone'],
            answer: 0
        },
        followUp: {
            q: 'When should renal values be rechecked after starting therapy?',
            options: ['In 2-3 weeks', 'Next year', 'Never', 'Every day'],
            answer: 0
        }
    },
    {
        name: 'Bella',
        species: 'dog',
        breed: 'Doberman Pinscher',
        age: 10,
        sex: 'spayed female',
        presenting: 'coughing and exercise intolerance',
        history: 'Gradual onset over a month. Not on medication.',
        exam: 'irregular rhythm, soft systolic murmur and crackles in lungs',
        initialQuestion: {
            q: 'Which diagnostic will best assess cardiac function?',
            options: ['Echocardiogram', 'Abdominal ultrasound', 'CBC', 'Joint taps'],
            answer: 0
        },
        labs: 'Echo shows dilated ventricles and poor systolic function.',
        confirmQuestion: {
            q: 'Which medication improves contractility in dogs with DCM?',
            options: ['Pimobendan', 'Prednisone', 'Insulin', 'Amlodipine'],
            answer: 0
        },
        treatmentQuestion: {
            q: 'Which drug helps control pulmonary edema?',
            options: ['Furosemide', 'Metronidazole', 'Meloxicam', 'Ketamine'],
            answer: 0
        },
        followUp: {
            q: 'When should you recheck an echocardiogram?',
            options: ['In 3 months', 'Tomorrow', 'Never', 'In 5 years'],
            answer: 0
        }
    }
];

function complexCaseEvent() {
    const patient = caseDatabase[Math.floor(Math.random() * caseDatabase.length)];
    let step = 0;
    function run() {
        doctorOptions.innerHTML = '';
        doctorNext.classList.add('hidden');
        if (step === 0) {
            doctorText.textContent = `Technician presents ${patient.name}, a ${patient.age}-year-old ${patient.sex} ${patient.breed} ${patient.species} for ${patient.presenting}.`;
            const btn = document.createElement('button');
            btn.textContent = 'Take History';
            btn.onclick = () => { step++; run(); };
            doctorOptions.appendChild(btn);
        } else if (step === 1) {
            doctorText.textContent = `History: ${patient.history}`;
            const btn = document.createElement('button');
            btn.textContent = 'Perform Physical Exam';
            btn.onclick = () => { step++; run(); };
            doctorOptions.appendChild(btn);
        } else if (step === 2) {
            doctorText.textContent = `Exam findings: ${patient.exam}`;
            const btn = document.createElement('button');
            btn.textContent = 'Select Diagnostics';
            btn.onclick = () => { step++; run(); };
            doctorOptions.appendChild(btn);
        } else if (step === 3) {
            doctorText.textContent = patient.initialQuestion.q;
            patient.initialQuestion.options.forEach((opt, idx) => {
                const b = document.createElement('button');
                b.textContent = opt;
                b.onclick = () => {
                    const correct = idx === patient.initialQuestion.answer;
                    doctorText.textContent = correct ? 'Good plan.' : 'Maybe not ideal.';
                    maybePoorOutcome(correct);
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(b);
            });
        } else if (step === 4) {
            doctorText.textContent = `Results: ${patient.labs}`;
            const btn = document.createElement('button');
            btn.textContent = 'Continue';
            btn.onclick = () => { step++; run(); };
            doctorOptions.appendChild(btn);
        } else if (step === 5) {
            doctorText.textContent = patient.confirmQuestion.q;
            patient.confirmQuestion.options.forEach((opt, idx) => {
                const b = document.createElement('button');
                b.textContent = opt;
                b.onclick = () => {
                    const correct = idx === patient.confirmQuestion.answer;
                    doctorText.textContent = correct ? 'Correct.' : 'Consider another test.';
                    maybePoorOutcome(correct);
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(b);
            });
        } else if (step === 6) {
            doctorText.textContent = patient.treatmentQuestion.q;
            patient.treatmentQuestion.options.forEach((opt, idx) => {
                const b = document.createElement('button');
                b.textContent = opt;
                b.onclick = () => {
                    const correct = idx === patient.treatmentQuestion.answer;
                    doctorText.textContent = correct ? 'Treatment started.' : 'That may not help.';
                    maybePoorOutcome(correct);
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(b);
            });
        } else if (step === 7) {
            doctorText.textContent = patient.followUp.q;
            patient.followUp.options.forEach((opt, idx) => {
                const b = document.createElement('button');
                b.textContent = opt;
                b.onclick = () => {
                    const correct = idx === patient.followUp.answer;
                    doctorText.textContent = correct ? 'Great choice.' : 'That may not be ideal.';
                    maybePoorOutcome(correct);
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(b);
            });
        } else {
            const feedback = [
                'Thanks for the thorough explanation!',
                'Owner seems relieved with the plan.',
                'Great job managing a tough case.'
            ];
            doctorText.textContent = `Feedback card from client: "${feedback[Math.floor(Math.random() * feedback.length)]}"`;
            doctorNext.classList.remove('hidden');
        }
    }
    return run;
}

function messageEvent() {
    const pet = caseDatabase[Math.floor(Math.random() * caseDatabase.length)];
    const templates = [
        {
            q: () => `Message from nurse: "${pet.name}'s owner requests a medication refill."`,
            options: ['Approve refill', 'Need exam first', 'Decline', 'Ask for more info']
        },
        {
            q: () => `Message from nurse: "${pet.name} seems lethargic today. Any advice?"`,
            options: ['Schedule exam', 'Increase medication', 'Wait and monitor', 'Go to emergency clinic']
        },
        {
            q: () => `Message from nurse: "Lab results for ${pet.name} are back. Review?"`,
            options: ['Everything looks good', 'Need appointment to discuss', 'Adjust medication', 'Repeat labs']
        },
        {
            q: () => `Message from nurse: "When should ${pet.name} return for recheck?"`,
            options: ['In 1 month', 'In 6 months', 'Only if symptoms recur', 'Next week']
        }
    ];
    const msg = templates[Math.floor(Math.random() * templates.length)];
    return function() {
        doctorText.textContent = msg.q();
        doctorOptions.innerHTML = '';
        msg.options.forEach(opt => {
            const b = document.createElement('button');
            b.textContent = opt;
            b.onclick = () => {
                doctorText.textContent = `You chose: ${opt}.`;
                doctorOptions.innerHTML = '';
                maybePoorOutcome(false);
                doctorNext.classList.remove('hidden');
            };
            doctorOptions.appendChild(b);
        });
        doctorNext.classList.add('hidden');
    };
}

function staffEvent() {
    return function() {
        doctorText.textContent = 'The support staff invite you to relax for a moment.';
        doctorOptions.innerHTML = '';
        ['Play a quick game', 'Doodle a cat on the whiteboard', 'Tell a joke', 'Get back to work'].forEach(opt => {
            const b = document.createElement('button');
            b.textContent = opt;
            b.onclick = () => {
                doctorText.textContent = `You choose to ${opt.toLowerCase()}. Everyone enjoys the break.`;
                doctorOptions.innerHTML = '';
                maybePoorOutcome(false);
                doctorNext.classList.remove('hidden');
            };
            doctorOptions.appendChild(b);
        });
        doctorNext.classList.add('hidden');
    };
}

function showDoctorEvent() {
    doctorNext.onclick = showDoctorEvent;
    doctorNext.textContent = 'Next Event';
    const events = [complexCaseEvent, messageEvent, staffEvent];
    const handler = events[Math.floor(Math.random() * events.length)]();
    handler();
}

document.addEventListener('DOMContentLoaded', () => {
    showDoctorEvent();
    doctorQuit.classList.remove('hidden');
});
