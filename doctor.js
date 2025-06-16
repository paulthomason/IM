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

const petDatabase = [
    {
        name: 'Buddy',
        species: 'dog',
        breed: 'Golden Retriever',
        age: 8,
        sex: 'neutered male',
        disease: 'hip dysplasia',
        medication: 'carprofen',
        examFindings: 'decreased range of motion and pain on hip extension',
        doseQuestion: {
            q: 'What is a typical carprofen dose for dogs?',
            options: ['2 mg/kg BID', '5 mg/kg BID', '0.5 mg/kg SID', '20 mg/kg SID'],
            answer: 0
        },
        labQuestion: {
            q: 'Which radiograph view best evaluates the hips?',
            options: ['Ventrodorsal extended', 'Lateral thorax', 'Abdominal DV', 'Skull VD'],
            answer: 0
        },
        question: {
            q: 'Which medication is commonly used to control hip dysplasia pain?',
            options: ['Carprofen', 'Enrofloxacin', 'Furosemide', 'Methimazole'],
            answer: 0
        },
        conversation: {
            q: 'Owner asks about long term pain control. What do you recommend?',
            options: ['Weight management', 'High-dose steroids', 'No exercise restrictions', 'Ignore the pain'],
            answer: 0
        }
    },
    {
        name: 'Luna',
        species: 'cat',
        breed: 'Siamese',
        age: 4,
        sex: 'spayed female',
        disease: 'asthma',
        medication: 'fluticasone inhaler',
        examFindings: 'increased expiratory effort with wheezes on auscultation',
        doseQuestion: {
            q: 'How many puffs per dose should be given with the fluticasone inhaler?',
            options: ['1-2 puffs', '5 puffs', '10 puffs', 'As many as needed'],
            answer: 0
        },
        labQuestion: {
            q: 'Which drug can be used as a rescue inhaler for asthma flare ups?',
            options: ['Albuterol', 'Prednisone', 'Amlodipine', 'Cyclosporine'],
            answer: 0
        },
        question: {
            q: 'Which inhaled steroid is often prescribed for feline asthma?',
            options: ['Fluticasone', 'Prednisone', 'Albuterol', 'Amlodipine'],
            answer: 0
        },
        conversation: {
            q: 'Owner wonders how often to use the inhaler. What do you advise?',
            options: ['Daily as prescribed', 'Only when coughing', 'Whenever convenient', 'Never use it'],
            answer: 0
        }
    },
    {
        name: 'Max',
        species: 'dog',
        breed: 'Miniature Schnauzer',
        age: 6,
        sex: 'neutered male',
        disease: 'diabetes mellitus',
        medication: 'NPH insulin',
        examFindings: 'cataracts noted and mildly underweight',
        doseQuestion: {
            q: 'What is a typical starting dose of NPH insulin in dogs?',
            options: ['0.5 U/kg BID', '5 U/kg BID', '10 U/kg SID', '0.1 U/kg SID'],
            answer: 0
        },
        labQuestion: {
            q: 'Which test best monitors long term glycemic control?',
            options: ['Fructosamine', 'Blood urea nitrogen', 'PCV', 'Urine culture'],
            answer: 0
        },
        question: {
            q: 'Which insulin type is commonly used in diabetic dogs?',
            options: ['NPH', 'Regular', 'Glargine', 'Glipizide'],
            answer: 0
        },
        conversation: {
            q: 'Owner asks when to recheck blood glucose.',
            options: ['In two weeks', 'Only if signs worsen', 'Every year', 'Never'],
            answer: 0
        }
    },
    {
        name: 'Molly',
        species: 'cat',
        breed: 'Persian',
        age: 5,
        sex: 'spayed female',
        disease: 'polycystic kidney disease',
        medication: 'renal diet',
        examFindings: 'kidneys enlarged and irregular on palpation',
        doseQuestion: {
            q: 'Approximate daily fluid requirement for stable CKD cats?',
            options: ['40-60 ml/kg/day', '5-10 ml/kg/day', '100-120 ml/kg/day', 'No fluids needed'],
            answer: 0
        },
        labQuestion: {
            q: 'Which value is most useful to monitor kidney function?',
            options: ['Creatinine', 'ALT', 'Amylase', 'Glucose'],
            answer: 0
        },
        question: {
            q: 'Which test best monitors progression of polycystic kidney disease?',
            options: ['Abdominal ultrasound', 'Thoracic radiographs', 'Urinalysis', 'Blood pressure'],
            answer: 0
        },
        conversation: {
            q: 'Owner asks when to repeat kidney values.',
            options: ['In three months', 'In five years', 'Never', 'Every week'],
            answer: 0
        }
    },
    {
        name: 'Daisy',
        species: 'dog',
        breed: 'Dachshund',
        age: 5,
        sex: 'spayed female',
        disease: 'intervertebral disc disease',
        medication: 'gabapentin',
        examFindings: 'pain on palpation of the thoracolumbar spine',
        doseQuestion: {
            q: 'What gabapentin dose is commonly used for IVDD pain?',
            options: ['10 mg/kg TID', '1 mg/kg BID', '50 mg/kg QID', '0.1 mg/kg SID'],
            answer: 0
        },
        labQuestion: {
            q: 'Which imaging modality most accurately confirms disc herniation?',
            options: ['MRI', 'CT', 'Ultrasound', 'Plain radiographs'],
            answer: 0
        },
        question: {
            q: 'Which medication provides neuropathic pain relief for IVDD?',
            options: ['Gabapentin', 'Furosemide', 'Prednisone', 'Amoxicillin'],
            answer: 0
        },
        conversation: {
            q: 'Owner wonders if Daisy should rest. What is best?',
            options: ['Strict cage rest', 'Normal activity', 'Intense exercise', 'Immediate surgery no matter what'],
            answer: 0
        }
    },
    {
        name: 'Oliver',
        species: 'cat',
        breed: 'Maine Coon',
        age: 3,
        sex: 'neutered male',
        disease: 'hypertrophic cardiomyopathy',
        medication: 'atenolol',
        examFindings: 'grade 3/6 systolic murmur with gallop rhythm',
        doseQuestion: {
            q: 'What atenolol dose is typically used in cats with HCM?',
            options: ['6.25 mg BID', '50 mg once', '0.5 mg/kg TID', '100 mg SID'],
            answer: 0
        },
        labQuestion: {
            q: 'Which diagnostic test helps assess cardiac muscle thickness?',
            options: ['Echocardiogram', 'Abdominal ultrasound', 'Thoracic CT', 'Electrocardiogram'],
            answer: 0
        },
        question: {
            q: 'Which drug is commonly used to slow heart rate in cats with HCM?',
            options: ['Atenolol', 'Furosemide', 'Lidocaine', 'Enalapril'],
            answer: 0
        },
        conversation: {
            q: 'Owner asks about follow-up echocardiogram timing.',
            options: ['6 months', '5 years', 'Never', 'Every week'],
            answer: 0
        }
    },
    {
        name: 'Charlie',
        species: 'cat',
        breed: 'Domestic Shorthair',
        age: 12,
        sex: 'neutered male',
        disease: 'hyperthyroidism',
        medication: 'methimazole',
        examFindings: 'palpable thyroid nodule and weight loss',
        doseQuestion: {
            q: 'What starting dose of methimazole is typical for cats?',
            options: ['2.5 mg BID', '10 mg BID', '0.5 mg BID', '20 mg SID'],
            answer: 0
        },
        labQuestion: {
            q: 'Which blood test should be rechecked to monitor therapy?',
            options: ['Total T4', 'BUN', 'Glucose', 'Sodium'],
            answer: 0
        },
        question: {
            q: 'Which medication is used to control feline hyperthyroidism?',
            options: ['Methimazole', 'Insulin', 'Enalapril', 'Itraconazole'],
            answer: 0
        },
        conversation: {
            q: 'Owner wonders when to repeat thyroid testing.',
            options: ['In one month', 'In five years', 'Never', 'Every week'],
            answer: 0
        }
    }
];

function appointmentEvent() {
    const pet = petDatabase[Math.floor(Math.random() * petDatabase.length)];
    const consult = Math.random() < 0.5 ? 'new consult' : 'recheck';
    const vitals = {
        temp: (Math.random() * 2 + 100.5).toFixed(1),
        hr: pet.species === 'dog' ? Math.floor(Math.random() * 40 + 80) : Math.floor(Math.random() * 60 + 140),
        rr: Math.floor(Math.random() * 20 + 20)
    };
    const techReports = ['not eating well', 'vomiting', 'acting normal', 'seems painful', 'coughing a bit'];
    const complaint = techReports[Math.floor(Math.random() * techReports.length)];
    let step = 0;
    function run() {
        doctorOptions.innerHTML = '';
        doctorNext.classList.add('hidden');
        if (step === 0) {
            doctorText.textContent = `Technician brings ${pet.name}, a ${pet.age}-year-old ${pet.sex} ${pet.breed} ${pet.species} for a ${consult} regarding ${pet.disease}. They report the patient is ${complaint}. Current medication: ${pet.medication}. Vitals: T ${vitals.temp}\u00B0F, HR ${vitals.hr}, RR ${vitals.rr}.`;
            const btn = document.createElement('button');
            btn.textContent = 'Perform Physical Exam';
            btn.onclick = () => { step++; run(); };
            doctorOptions.appendChild(btn);
        } else if (step === 1) {
            doctorText.textContent = `Physical exam findings: ${pet.examFindings}.`;
            const btn = document.createElement('button');
            btn.textContent = 'Dictate findings';
            btn.onclick = () => { step++; run(); };
            doctorOptions.appendChild(btn);
        } else if (step === 2) {
            doctorText.textContent = 'You record your findings into the medical software.';
            const btn = document.createElement('button');
            btn.textContent = 'Talk to owner';
            btn.onclick = () => { step++; run(); };
            doctorOptions.appendChild(btn);
        } else if (step === 3) {
            doctorText.textContent = pet.conversation.q;
            pet.conversation.options.forEach((opt, idx) => {
                const b = document.createElement('button');
                b.textContent = opt;
                b.onclick = () => {
                    const correct = idx === pet.conversation.answer;
                    doctorText.textContent = correct ? 'Owner is pleased with your answer.' : 'Owner seems unsure about that.';
                    maybePoorOutcome(correct);
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(b);
            });
        } else if (step === 4) {
            doctorText.textContent = pet.question.q;
            pet.question.options.forEach((opt, idx) => {
                const b = document.createElement('button');
                b.textContent = opt;
                b.onclick = () => {
                    const correct = idx === pet.question.answer;
                    doctorText.textContent = correct ? 'Correct!' : 'Not quite the best choice.';
                    maybePoorOutcome(correct);
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(b);
            });
        } else if (step === 5) {
            doctorText.textContent = pet.doseQuestion.q;
            pet.doseQuestion.options.forEach((opt, idx) => {
                const b = document.createElement('button');
                b.textContent = opt;
                b.onclick = () => {
                    const correct = idx === pet.doseQuestion.answer;
                    doctorText.textContent = correct ? 'Correct!' : 'Not quite the best choice.';
                    maybePoorOutcome(correct);
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(b);
            });
        } else if (step === 6) {
            doctorText.textContent = pet.labQuestion.q;
            pet.labQuestion.options.forEach((opt, idx) => {
                const b = document.createElement('button');
                b.textContent = opt;
                b.onclick = () => {
                    const correct = idx === pet.labQuestion.answer;
                    doctorText.textContent = correct ? 'Correct!' : 'Not quite the best choice.';
                    maybePoorOutcome(correct);
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(b);
            });
        } else if (step === 7) {
            doctorText.textContent = 'What do you recommend to the owner?';
            ['Run blood work', 'Adjust medication', 'Schedule recheck', 'Finish appointment'].forEach(opt => {
                const b = document.createElement('button');
                b.textContent = opt;
                b.onclick = () => {
                    doctorText.textContent = `You decide to ${opt.toLowerCase()}.`;
                    maybePoorOutcome(false);
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(b);
            });
        } else {
            const feedback = ['Thanks for taking care of my pet!', 'Great explanation today!', 'I appreciate your patience.', 'Helpful visit overall!'];
            doctorText.textContent = `Feedback card from client: "${feedback[Math.floor(Math.random() * feedback.length)]}"`;
            doctorNext.classList.remove('hidden');
        }
    }
    return run;
}

function messageEvent() {
    const pet = petDatabase[Math.floor(Math.random() * petDatabase.length)];
    const templates = [
        {
            q: () => `Message from Gorgina: "${pet.name}'s owner is requesting a refill of ${pet.medication}."`,
            options: ['Approve refill', 'Need exam first', 'Decline', 'Ask for more info']
        },
        {
            q: () => `Message from Gorgina: "${pet.name} seemed lethargic today. Any advice for the owner?"`,
            options: ['Schedule exam', 'Increase medication', 'Wait and monitor', 'Go to emergency clinic']
        },
        {
            q: () => `Message from Gorgina: "${pet.name}'s lab results are back. Owner wants to know if values look okay."`,
            options: ['Everything looks good', 'Need to discuss in appointment', 'Adjust medication', 'Repeat labs']
        },
        {
            q: () => `Message from Gorgina: "When should ${pet.name} come in for the next recheck?"`,
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
    const events = [appointmentEvent, messageEvent, staffEvent];
    const handler = events[Math.floor(Math.random() * events.length)]();
    handler();
}

document.addEventListener('DOMContentLoaded', () => {
    showDoctorEvent();
    doctorQuit.classList.remove('hidden');
});
