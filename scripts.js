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
        },
        {question: "Which antibiotic is recommended for treating Bordetella bronchiseptica infection in dogs?", options: ["Doxycycline", "Amoxicillin-clavulanate", "Metronidazole", "Enrofloxacin"], answer: 0, explanation: "Doxycycline is considered effective against Bordetella."},
        {question: "The SNAP test for canine parvovirus detects what?", options: ["Antibodies", "Viral antigen", "Viral RNA", "Immune complexes"], answer: 1, explanation: "The SNAP test identifies parvoviral antigen in feces."},
        {question: "Which feline virus is associated with oral ulceration and lameness?", options: ["Feline herpesvirus", "Feline calicivirus", "Feline immunodeficiency virus", "Feline leukemia virus"], answer: 1, explanation: "Feline calicivirus causes oral ulcers and limping syndrome."},
        {question: "What is the recommended isolation period for a dog diagnosed with distemper?", options: ["1 week", "2 weeks", "4 weeks", "6 weeks"], answer: 2, explanation: "Dogs can shed distemper virus for around four weeks."},
        {question: "Which tick-borne disease is transmitted by Rhipicephalus sanguineus?", options: ["Ehrlichia canis", "Borrelia burgdorferi", "Anaplasma phagocytophilum", "Babesia canis"], answer: 0, explanation: "The brown dog tick spreads Ehrlichia canis."},
        {question: "Cats infected with FIV typically test positive on ELISA due to detection of?", options: ["Viral antigen", "Viral DNA", "Antibodies", "Viral RNA"], answer: 2, explanation: "ELISA detects antibodies to FIV."},
        {question: "Which zoonotic parasite commonly found in puppies can cause visceral larva migrans in humans?", options: ["Dipylidium caninum", "Toxocara canis", "Ancylostoma braziliense", "Trichuris vulpis"], answer: 1, explanation: "Toxocara canis larvae can migrate in humans."},
        {question: "In dogs, which vector transmits Leishmania infantum?", options: ["Tick", "Flea", "Sandfly", "Mosquito"], answer: 2, explanation: "Sandflies transmit Leishmania infantum."},
        {question: "What is the best sample type to confirm dermatophytosis in cats?", options: ["Skin scrape", "Fungal culture", "PCR from blood", "Serology"], answer: 1, explanation: "Fungal culture remains the gold standard."},
        {question: "Which vaccine is considered core for all cats?", options: ["Feline leukemia virus", "Feline immunodeficiency virus", "Feline panleukopenia", "Chlamydia felis"], answer: 2, explanation: "Feline panleukopenia vaccination is core."},
        {question: "What is the recommended treatment for toxoplasmosis in cats?", options: ["Doxycycline", "Clindamycin", "Metronidazole", "Ivermectin"], answer: 1, explanation: "Clindamycin is effective against Toxoplasma."},
        {question: "Which canine parasite causes cutaneous larva migrans in humans?", options: ["Trichuris vulpis", "Ancylostoma braziliense", "Dipylidium caninum", "Toxocara canis"], answer: 1, explanation: "Ancylostoma braziliense larvae migrate in human skin."},
        {question: "Which organism is the primary cause of infectious tracheobronchitis in dogs?", options: ["Canine adenovirus type 2", "Bordetella bronchiseptica", "Canine influenza", "Mycoplasma cynos"], answer: 1, explanation: "Bordetella bronchiseptica is a main agent of kennel cough."},
        {question: "Rabies virus belongs to which viral family?", options: ["Paramyxoviridae", "Rhabdoviridae", "Coronaviridae", "Parvoviridae"], answer: 1, explanation: "Rabies virus is a rhabdovirus."},
        {question: "Which species serves as the reservoir host for feline infectious peritonitis virus?", options: ["Cats", "Dogs", "Bats", "Rodents"], answer: 0, explanation: "FIP virus originates from feline coronavirus within cats."},
        {question: "Brucella canis infection in dogs is most reliably diagnosed using which method?", options: ["Blood culture", "PCR on urine", "Rapid slide agglutination test", "ELISA"], answer: 0, explanation: "Blood culture provides definitive diagnosis."},
        {question: "Which tick-borne disease often presents with thrombocytopenia and polyarthritis in dogs?", options: ["Anaplasma phagocytophilum", "Borrelia burgdorferi", "Babesia gibsoni", "Ehrlichia canis"], answer: 0, explanation: "Anaplasma phagocytophilum commonly causes these signs."},
        {question: "What organism causes 'cat scratch disease' in humans?", options: ["Bartonella henselae", "Pasteurella multocida", "Capnocytophaga canimorsus", "Yersinia pestis"], answer: 0, explanation: "Bartonella henselae is transmitted by cats."},
        {question: "The definitive host for Toxoplasma gondii is which species?", options: ["Dog", "Cat", "Sheep", "Pig"], answer: 1, explanation: "Cats are the definitive host for Toxoplasma."},
        {question: "What is the main route of transmission for canine influenza virus?", options: ["Fecal-oral", "Aerosol respiratory droplets", "Vector-borne", "Venereal"], answer: 1, explanation: "Canine influenza spreads through respiratory droplets."},
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
        },
        {question: "Which lab finding is most suggestive of hyperthyroidism in cats?", options: ["Low T4", "Elevated T4", "High TSH", "Low cortisol"], answer: 1, explanation: "High total T4 is typical of hyperthyroidism."},
        {question: "Which medication is most appropriate for long-term management of feline hyperthyroidism?", options: ["Methimazole", "Levothyroxine", "Trilostane", "Prednisone"], answer: 0, explanation: "Methimazole is commonly used to manage hyperthyroid cats."},
        {question: "Cushing's disease in dogs is commonly caused by a pituitary adenoma secreting which hormone?", options: ["ACTH", "TSH", "Growth hormone", "Prolactin"], answer: 0, explanation: "Pituitary adenomas secrete ACTH leading to cortisol excess."},
        {question: "Which electrolyte pattern is most characteristic of hypoadrenocorticism?", options: ["Low sodium and high potassium", "High sodium and low potassium", "High sodium and high potassium", "Low sodium and low potassium"], answer: 0, explanation: "Addison's disease typically presents with hyponatremia and hyperkalemia."},
        {question: "Which test confirms insulinoma in dogs?", options: ["Fructosamine level", "Fasting insulin:glucose ratio", "ACTH stimulation test", "TSH measurement"], answer: 1, explanation: "A high insulin:glucose ratio supports insulinoma."},
        {question: "Atypical Cushing's disease may involve excess production of which adrenal hormones?", options: ["Aldosterone", "Sex steroids", "Insulin", "Thyroxine"], answer: 1, explanation: "Atypical cases often overproduce sex steroids."},
        {question: "What is the most common cause of hypothyroidism in middle-aged dogs?", options: ["Iodine deficiency", "Immune-mediated thyroiditis", "Pituitary adenoma", "Neoplasia"], answer: 1, explanation: "Lymphocytic thyroiditis causes most canine hypothyroidism."},
        {question: "Diabetic ketoacidosis is characterized by which acid-base disturbance?", options: ["Respiratory alkalosis", "Metabolic acidosis", "Metabolic alkalosis", "Respiratory acidosis"], answer: 1, explanation: "Accumulation of ketones results in metabolic acidosis."},
        {question: "Which hormone increases blood calcium by stimulating bone resorption and renal reabsorption?", options: ["Calcitonin", "Parathyroid hormone", "Thyroxine", "Aldosterone"], answer: 1, explanation: "Parathyroid hormone raises serum calcium."},
        {question: "Cats with acromegaly typically exhibit high serum levels of which hormone?", options: ["Cortisol", "Growth hormone", "Insulin", "Progesterone"], answer: 1, explanation: "Pituitary tumors secrete excess growth hormone."},
        {question: "Failure of cortisol suppression on a low-dose dexamethasone test indicates which disorder in dogs?", options: ["Hypothyroidism", "Hyperadrenocorticism", "Hypoadrenocorticism", "Hyperthyroidism"], answer: 1, explanation: "Lack of suppression suggests Cushing's disease."},
        {question: "Which drug is used to manage insulinoma-induced hypoglycemia when surgery is not an option?", options: ["Methimazole", "Diazoxide", "Mitotane", "Pergolide"], answer: 1, explanation: "Diazoxide suppresses insulin secretion."},
        {question: "Which imaging technique is most useful for evaluating thyroid carcinoma in dogs?", options: ["Abdominal ultrasound", "Thoracic radiographs", "Cervical ultrasound", "Brain MRI"], answer: 2, explanation: "Neck ultrasound helps assess thyroid masses."},
        {question: "What is the most common presenting sign of feline hyperthyroidism?", options: ["Weight gain", "Lethargy", "Weight loss with polyphagia", "Alopecia"], answer: 2, explanation: "Affected cats often lose weight despite a good appetite."},
        {question: "Which test helps differentiate pituitary- from adrenal-dependent hyperadrenocorticism in dogs?", options: ["ACTH stimulation", "Low-dose dexamethasone", "High-dose dexamethasone", "TSH stimulation"], answer: 2, explanation: "The high-dose dexamethasone suppression test aids differentiation."},
        {question: "Elevated fructosamine in a dog indicates what?", options: ["Stress hyperglycemia", "Persistent hyperglycemia over weeks", "Hypoglycemia", "Hyperlipidemia"], answer: 1, explanation: "Fructosamine reflects average blood glucose over 2-3 weeks."},
        {question: "Which breed is predisposed to congenital hypothyroidism?", options: ["Giant Schnauzer", "Beagle", "Basenji", "Chihuahua"], answer: 0, explanation: "Giant Schnauzers can have inherited hypothyroidism."},
        {question: "Which therapy offers a permanent cure for most cats with hyperthyroidism?", options: ["Methimazole", "Iodine-restricted diet", "Radioiodine treatment", "Surgical parathyroidectomy"], answer: 2, explanation: "Radioiodine ablates hyperactive thyroid tissue."},
        {question: "Which medication is used to treat hypoadrenocorticism in dogs by replacing mineralocorticoids?", options: ["DOCP", "Fludrocortisone", "Pergolide", "Desoxycorticosterone"], answer: 0, explanation: "Desoxycorticosterone pivalate (DOCP) provides mineralocorticoid replacement."},
        {question: "Acromegaly in cats typically results in which insulin response?", options: ["Low insulin needs", "Severe insulin resistance", "Normal insulin sensitivity", "No effect on insulin"], answer: 1, explanation: "Excess growth hormone causes marked insulin resistance."}
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
        },
        {question: "Which parasite is a common cause of chronic diarrhea in kennelled dogs?", options: ["Giardia", "Hookworms", "Whipworms", "Tapeworms"], answer: 0, explanation: "Giardia infection can lead to chronic diarrhea."},
        {question: "A cat with vomiting and weight loss is diagnosed with megaesophagus. Which underlying disease should be ruled out?", options: ["Hyperthyroidism", "Diabetes mellitus", "Dysautonomia", "Chronic renal failure"], answer: 2, explanation: "Feline dysautonomia can cause megaesophagus."},
        {question: "Which antibiotic is recommended for small intestinal bacterial overgrowth in dogs?", options: ["Enrofloxacin", "Metronidazole", "Amoxicillin", "Doxycycline"], answer: 1, explanation: "Metronidazole is commonly used."},
        {question: "What is the most common cause of regurgitation in dogs?", options: ["Esophageal disease", "Gastric ulcers", "Pancreatitis", "Liver failure"], answer: 0, explanation: "Megaesophagus and other esophageal disorders lead to regurgitation."},
        {question: "Which breed is predisposed to congenital portosystemic shunts?", options: ["Yorkshire Terrier", "German Shepherd", "Labrador Retriever", "Boxer"], answer: 0, explanation: "Toy breeds such as Yorkshire Terriers commonly have PSS."},
        {question: "Which antiemetic works by blocking NK-1 receptors in dogs?", options: ["Ondansetron", "Metoclopramide", "Maropitant", "Chlorpromazine"], answer: 2, explanation: "Maropitant (Cerenia) blocks NK-1 receptors."},
        {question: "Biopsy of a cat's small intestine reveals eosinophilic infiltration. What is the likely diagnosis?", options: ["Lymphoma", "Eosinophilic enteritis", "Ulcerative colitis", "Pancreatitis"], answer: 1, explanation: "Eosinophilic enteritis features eosinophil-rich infiltrates."},
        {question: "Which lab test is most sensitive for diagnosing pancreatitis in dogs?", options: ["Amylase", "Lipase", "cPLI", "ALT"], answer: 2, explanation: "Canine pancreatic lipase immunoreactivity (cPLI) is sensitive."},
        {question: "Dogs with hepatic encephalopathy typically show which blood abnormality?", options: ["High ammonia", "Low bile acids", "Low bilirubin", "High glucose"], answer: 0, explanation: "Ammonia accumulates due to poor liver detoxification."},
        {question: "What is the mechanism of action of sucralfate for gastric ulcers?", options: ["Proton pump inhibition", "H2 receptor blockade", "Coats ulcer base", "Stimulates motility"], answer: 2, explanation: "Sucralfate forms a protective barrier over ulcers."},
        {question: "Which dietary modification is recommended for dogs with lymphangiectasia?", options: ["High fat", "Low fat", "High fiber", "High protein"], answer: 1, explanation: "A low-fat diet reduces lymph flow."},
        {question: "In cats, triaditis involves inflammation of the liver, pancreas, and which organ?", options: ["Spleen", "Stomach", "Intestine", "Kidney"], answer: 2, explanation: "Triaditis includes inflammatory bowel disease."},
        {question: "Which analgesic is contraindicated in cats with hepatic lipidosis?", options: ["Morphine", "Meloxicam", "Acetaminophen", "Buprenorphine"], answer: 2, explanation: "Acetaminophen is hepatotoxic in cats."},
        {question: "Which probiotic is often recommended for antibiotic-associated diarrhea in dogs?", options: ["Saccharomyces boulardii", "Lactobacillus acidophilus", "Bifidobacterium", "Enterococcus faecium"], answer: 3, explanation: "Enterococcus faecium (e.g., FortiFlora) is commonly used."},
        {question: "Chronic constipation leading to megacolon in cats is surgically treated by which procedure when medical therapy fails?", options: ["Subtotal colectomy", "Gastrotomy", "Ileocolic bypass", "Liver lobectomy"], answer: 0, explanation: "Subtotal colectomy removes the diseased colon."},
        {question: "Which blood test is used to diagnose exocrine pancreatic insufficiency in cats?", options: ["Serum TLI", "Serum lipase", "ALT", "Bile acids"], answer: 0, explanation: "Low trypsin-like immunoreactivity indicates EPI."},
        {question: "What is the preferred imaging modality to diagnose bile duct obstruction in dogs?", options: ["Abdominal radiographs", "Abdominal ultrasound", "CT scan", "MRI"], answer: 1, explanation: "Ultrasound visualizes the biliary tree well."},
        {question: "Tylosin-responsive diarrhea is particularly observed in which breed?", options: ["German Shepherd", "Beagle", "Golden Retriever", "Pug"], answer: 0, explanation: "German Shepherds often respond to tylosin for chronic diarrhea."},
        {question: "Pancreatic nodular hyperplasia in older dogs is usually considered what?", options: ["Malignant", "An incidental finding", "A cause of severe pancreatitis", "Metastatic disease"], answer: 1, explanation: "It is typically an incidental finding."},
        {question: "Which infectious agent causes hemorrhagic colitis in young cats and is diagnosed by PCR of feces?", options: ["Salmonella", "Tritrichomonas foetus", "Campylobacter jejuni", "Clostridium perfringens"], answer: 1, explanation: "Tritrichomonas foetus is a protozoal cause of colitis."}
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
        },
        {question: "Which medication is commonly used to treat pulmonary hypertension in dogs?", options: ["Sildenafil", "Propranolol", "Digoxin", "Amlodipine"], answer: 0, explanation: "Sildenafil acts as a pulmonary vasodilator."},
        {question: "Hypertrophic cardiomyopathy in cats is often associated with mutation in which gene?", options: ["Myosin binding protein C", "Collagen type II", "Ryanodine receptor", "Troponin I"], answer: 0, explanation: "Mutations in the MYBPC3 gene are implicated."},
        {question: "Which clinical sign is most suggestive of left-sided congestive heart failure in dogs?", options: ["Ascites", "Coughing", "Jugular distension", "Hepatomegaly"], answer: 1, explanation: "Pulmonary edema from left-sided failure often causes coughing."},
        {question: "Which diagnostic test is considered the gold standard for quantifying cardiac chamber size?", options: ["Auscultation", "Thoracic radiographs", "Echocardiography", "Electrocardiography"], answer: 2, explanation: "Echocardiography allows direct measurement of chamber dimensions."},
        {question: "A dog with sudden hind limb paralysis and no femoral pulses should be evaluated for what condition?", options: ["Thromboembolic disease", "Hip dysplasia", "Vertebral fracture", "Septic arthritis"], answer: 0, explanation: "Arterial thromboembolism can cause acute limb paralysis."},
        {question: "What arrhythmia is commonly seen with dilated cardiomyopathy in Doberman Pinschers?", options: ["Atrial fibrillation", "Ventricular premature complexes", "Supraventricular tachycardia", "Atrioventricular block"], answer: 1, explanation: "Ventricular arrhythmias are frequent in DCM Dobermans."},
        {question: "Which diuretic is typically used to manage acute pulmonary edema in dogs?", options: ["Spironolactone", "Hydrochlorothiazide", "Furosemide", "Mannitol"], answer: 2, explanation: "Furosemide is the diuretic of choice for pulmonary edema."},
        {question: "A paradoxical split S2 heart sound in a dog suggests which condition?", options: ["Aortic stenosis", "Pulmonic stenosis", "Patent ductus arteriosus", "Atrial septal defect"], answer: 0, explanation: "Delayed aortic valve closure from aortic stenosis can cause a paradoxical split."},
        {question: "Which biomarker is useful in dogs for assessing heart failure severity?", options: ["Troponin I", "NT-proBNP", "Creatine kinase", "C-reactive protein"], answer: 1, explanation: "NT-proBNP correlates with heart failure severity."},
        {question: "Which congenital defect results in a left-to-right shunt causing volume overload of the right ventricle?", options: ["Pulmonic stenosis", "Ventricular septal defect", "Aortic stenosis", "Tricuspid dysplasia"], answer: 1, explanation: "VSD allows blood flow from left to right ventricle."},
        {question: "Heartworm preventatives act primarily against which stage of Dirofilaria immitis?", options: ["Adult worms", "L3 larvae", "Microfilariae", "Eggs"], answer: 1, explanation: "Preventatives kill the L3/L4 larval stages."},
        {question: "What is the recommended treatment for feline arterial thromboembolism?", options: ["Heparin and analgesia", "Corticosteroids only", "Aspirin only", "No treatment"], answer: 0, explanation: "Anticoagulation and pain control are essential."},
        {question: "Mitral valve degeneration is most prevalent in which canine breed group?", options: ["Large breed dogs", "Toy and small breeds", "Sighthounds", "Working breeds"], answer: 1, explanation: "Myxomatous degeneration commonly affects small breeds."},
        {question: "Which imaging technique best identifies pericardial effusion?", options: ["Thoracic radiographs", "Echocardiography", "CT scan", "Fluoroscopy"], answer: 1, explanation: "Echo readily detects pericardial fluid."},
        {question: "Dogs with subaortic stenosis often benefit from which medication to reduce arrhythmias?", options: ["Atenolol", "Enalapril", "Pimobendan", "Furosemide"], answer: 0, explanation: "Beta-blockers like atenolol control tachyarrhythmias."},
        {question: "Which congenital defect is corrected surgically by ligating a vessel near the heart?", options: ["Patent ductus arteriosus", "Atrial septal defect", "Ventricular septal defect", "Tetralogy of Fallot"], answer: 0, explanation: "Surgical ligation closes a PDA."},
        {question: "What is the most sensitive method for detecting arrhythmias in dogs with suspected syncope?", options: ["Standard ECG", "Holter monitoring", "Pulse oximetry", "Blood pressure"], answer: 1, explanation: "Holter monitors record arrhythmias over 24 hours."},
        {question: "Chagas disease in dogs is caused by which parasite?", options: ["Trypanosoma cruzi", "Leishmania infantum", "Toxoplasma gondii", "Babesia canis"], answer: 0, explanation: "T. cruzi infection leads to myocarditis."},
        {question: "Pulmonic stenosis primarily causes hypertrophy of which cardiac chamber?", options: ["Left ventricle", "Right ventricle", "Left atrium", "Right atrium"], answer: 1, explanation: "Right ventricular outflow obstruction results in RV hypertrophy."},
        {question: "Which cardiomyopathy in cats often responds to beta-blocker therapy to slow heart rate?", options: ["Restrictive", "Hypertrophic", "Dilated", "Arrhythmogenic right ventricular"], answer: 1, explanation: "Beta-blockers are used in HCM cats."}
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
        },
        {question: "Which fungal organism most commonly causes nasal disease in cats in North America?", options: ["Cryptococcus neoformans", "Aspergillus fumigatus", "Blastomyces dermatitidis", "Histoplasma capsulatum"], answer: 0, explanation: "Cryptococcus is the leading cause of feline fungal rhinitis."},
        {question: "Bronchoalveolar lavage fluid from a dog with eosinophilic bronchopneumopathy will show predominance of which cell type?", options: ["Neutrophils", "Lymphocytes", "Eosinophils", "Mast cells"], answer: 2, explanation: "Eosinophils predominate in this condition."},
        {question: "Which thoracic radiographic pattern is typical of cardiogenic pulmonary edema?", options: ["Bronchial", "Alveolar", "Interstitial", "Nodular"], answer: 1, explanation: "Pulmonary edema creates an alveolar pattern."},
        {question: "A cat with chronic sneezing and unilateral nasal discharge may have which condition?", options: ["Allergic rhinitis", "Nasal polyp", "Pulmonary edema", "Lungworm infection"], answer: 1, explanation: "Nasal polyps commonly cause unilateral signs."},
        {question: "Which diagnostic test best detects airway collapse in small-breed dogs during respiration?", options: ["Thoracic radiographs", "Bronchoscopy", "CT scan", "Fluoroscopy"], answer: 3, explanation: "Fluoroscopy shows dynamic tracheal collapse."},
        {question: "What is the typical treatment for pulmonary edema secondary to left-sided heart failure?", options: ["Bronchodilators", "Diuretics and oxygen", "Antibiotics", "Thyroxine"], answer: 1, explanation: "Diuretics and oxygen therapy relieve pulmonary edema."},
        {question: "Chronic bronchitis in dogs is defined by cough persisting for at least how long?", options: ["1 week", "1 month", "2 months", "6 months"], answer: 2, explanation: "Coughing for over two months meets the definition."},
        {question: "Which lung lobe is most commonly affected by aspiration pneumonia in dogs?", options: ["Right middle", "Left caudal", "Right cranial", "Accessory"], answer: 0, explanation: "The right middle lung lobe is predisposed due to anatomy."},
        {question: "The Baermann technique is used to diagnose infection with which parasite causing respiratory signs in cats?", options: ["Capillaria aerophila", "Filaroides osleri", "Aelurostrongylus abstrusus", "Oslerus osleri"], answer: 2, explanation: "Aelurostrongylus larvae are recovered using the Baermann method."},
        {question: "Which medication is a methylxanthine bronchodilator used in dogs?", options: ["Theophylline", "Albuterol", "Clenbuterol", "Prednisone"], answer: 0, explanation: "Theophylline is an oral methylxanthine bronchodilator."},
        {question: "Thoracic ultrasound is most useful for diagnosing which respiratory condition in cats?", options: ["Bronchitis", "Pneumonia", "Pleural effusion", "Asthma"], answer: 2, explanation: "Fluid accumulation is easily seen on ultrasound."},
        {question: "Which breathing pattern is most consistent with upper airway obstruction?", options: ["Prolonged inspiratory phase with stridor", "Rapid shallow breathing", "Open mouth breathing with cyanosis", "Expiratory wheeze"], answer: 0, explanation: "Upper airway obstruction causes prolonged inspiratory effort."},
        {question: "Dogs with laryngeal paralysis often benefit from which surgical procedure?", options: ["Tracheal stent", "Lateralization of the arytenoid cartilage", "Tracheostomy", "Palate resection"], answer: 1, explanation: "Arytenoid lateralization (tie-back) relieves obstruction."},
        {question: "Which radiographic sign indicates an alveolar lung pattern?", options: ["Air bronchograms", "Bronchial rings", "Reticular opacity", "Unstructured interstitial opacity"], answer: 0, explanation: "Air bronchograms are classic for alveolar patterns."},
        {question: "What is the most common presenting sign of feline asthma?", options: ["Sneezing", "Coughing and expiratory dyspnea", "Collapsing episodes", "Weight loss"], answer: 1, explanation: "Affected cats often cough and have difficulty breathing out."},
        {question: "In dogs, nasal aspergillosis is typically treated with which therapy?", options: ["Systemic ketoconazole", "Topical clotrimazole infusion", "Oral itraconazole alone", "Radiation therapy"], answer: 1, explanation: "Topical clotrimazole is effective for nasal aspergillosis."},
        {question: "Which imaging technique is best for evaluating masses within the nasal cavity of dogs?", options: ["Radiographs", "CT scan", "Ultrasound", "Endoscopy"], answer: 1, explanation: "CT provides detailed imaging of nasal structures."},
        {question: "Pulmonary hypertension can be estimated on echocardiography by measuring what parameter?", options: ["Aortic velocity", "Tricuspid regurgitation velocity", "Mitral valve area", "Right atrial size"], answer: 1, explanation: "TR velocity helps estimate pulmonary artery pressure."},
        {question: "Which sedative is often used for thoracic radiographs in cats due to minimal respiratory effects?", options: ["Dexmedetomidine", "Acepromazine", "Ketamine", "Midazolam"], answer: 3, explanation: "Midazolam provides mild sedation with minimal respiratory depression."},
        {question: "Which lungworm infects dogs via ingestion of gastropods?", options: ["Filaroides hirthi", "Angiostrongylus vasorum", "Aelurostrongylus abstrusus", "Capillaria aerophila"], answer: 1, explanation: "Dogs acquire Angiostrongylus vasorum from snails and slugs."}
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
        },
        {question: "Which urine specific gravity value in dogs suggests isosthenuria?", options: ["1.002", "1.010", "1.030", "1.050"], answer: 1, explanation: "Isosthenuria occurs around 1.008-1.012."},
        {question: "Which drug is first-line for lowering systemic blood pressure in cats with chronic kidney disease?", options: ["Enalapril", "Amlodipine", "Benazepril", "Hydrochlorothiazide"], answer: 1, explanation: "Amlodipine effectively controls hypertension in cats."},
        {question: "Pyelonephritis is best diagnosed using which combination of tests?", options: ["Urine culture and ultrasound", "BUN/creatinine alone", "Radiographs alone", "CBC alone"], answer: 0, explanation: "Culture and imaging confirm infection of the kidneys."},
        {question: "Which toxin commonly causes acute kidney injury in dogs after ingestion of sweet-tasting substances?", options: ["Lead", "Ethylene glycol", "Ibuprofen", "Aflatoxin"], answer: 1, explanation: "Ethylene glycol antifreeze ingestion is nephrotoxic."},
        {question: "Which procedure is recommended for male cats that repeatedly obstruct their urethra?", options: ["Cystotomy", "Perineal urethrostomy", "Nephrectomy", "Cystocentesis"], answer: 1, explanation: "Perineal urethrostomy creates a wider urethral opening."},
        {question: "Hypokalemia in cats is often treated with which oral supplement?", options: ["Potassium chloride", "Calcium carbonate", "Potassium iodide", "Sodium bicarbonate"], answer: 0, explanation: "Oral potassium chloride replaces deficits."},
        {question: "Which glomerular disease is characterized by immune complex deposition causing proteinuria in dogs?", options: ["Amyloidosis", "Glomerulonephritis", "Pyelonephritis", "Interstitial nephritis"], answer: 1, explanation: "Glomerulonephritis involves immune complex deposition."},
        {question: "Dialysis improves acute renal failure by what mechanism?", options: ["Increasing GFR", "Removing uremic toxins directly from blood", "Stimulating erythropoiesis", "Reducing urine output"], answer: 1, explanation: "Hemodialysis filters toxins from the bloodstream."},
        {question: "Which imaging modality is preferred for detecting ectopic ureters in dogs?", options: ["Plain radiography", "CT urography", "Ultrasound", "MRI"], answer: 1, explanation: "CT urography clearly outlines ureteral anatomy."},
        {question: "Which analgesic should be avoided in cats with kidney disease due to nephrotoxicity?", options: ["Buprenorphine", "Tramadol", "Meloxicam", "Gabapentin"], answer: 2, explanation: "NSAIDs like meloxicam can worsen renal injury."},
        {question: "In dogs with protein-losing nephropathy, which medication reduces proteinuria via RAAS blockade?", options: ["Furosemide", "Enalapril", "Spironolactone", "Amlodipine"], answer: 1, explanation: "ACE inhibitors lower intraglomerular pressure."},
        {question: "An increase in symmetric dimethylarginine (SDMA) indicates what?", options: ["Improving kidney function", "Decreased glomerular filtration rate", "Liver disease", "Anemia"], answer: 1, explanation: "SDMA rises with declining renal filtration."},
        {question: "Which congenital renal disorder is characterized by numerous fluid-filled cysts in kittens?", options: ["Renal dysplasia", "Polycystic kidney disease", "Hydronephrosis", "Renal agenesis"], answer: 1, explanation: "PKD causes multiple renal cysts."},
        {question: "What is the preferred method for monitoring chronic kidney disease progression in dogs?", options: ["Serum calcium", "Urine culture", "Serial creatinine and SDMA measurements", "Coagulation profile"], answer: 2, explanation: "Trending creatinine and SDMA tracks disease progression."},
        {question: "Which electrolyte abnormality is commonly seen with urethral obstruction in cats?", options: ["Hypokalemia", "Hyperkalemia", "Hypernatremia", "Hypocalcemia"], answer: 1, explanation: "Obstruction leads to life-threatening hyperkalemia."},
        {question: "A dog with renal failure is producing large volumes of urine. This represents which phase of acute renal failure?", options: ["Oliguric phase", "Polyuric phase", "Anuric phase", "Recovery phase"], answer: 1, explanation: "Polyuria follows the oliguric stage as nephrons recover."},
        {question: "Which diet change is recommended for dogs with calcium oxalate urolithiasis?", options: ["Increase dietary calcium", "Increase urinary acidity", "Reduce oxalate and maintain neutral pH", "High-protein diet"], answer: 2, explanation: "Reducing dietary oxalate and maintaining neutral pH helps prevent stones."},
        {question: "Which drug is used to stimulate erythropoiesis in anemic cats with chronic kidney disease?", options: ["Erythropoietin stimulating agent", "Prednisone", "Vitamin B12", "Iron dextran"], answer: 0, explanation: "ESAs promote red blood cell production."},
        {question: "Renal secondary hyperparathyroidism leads to which bone disorder?", options: ["Pseudohyperparathyroidism", "Renal osteodystrophy", "Hypercalcemia of malignancy", "Paraneoplastic syndrome"], answer: 1, explanation: "Chronic kidney disease causes renal osteodystrophy."},
        {question: "Which breed of dog is predisposed to familial renal amyloidosis?", options: ["Shar Pei", "Beagle", "Collie", "Pomeranian"], answer: 0, explanation: "Shar Peis can inherit amyloid deposition in the kidneys."},
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
        },
        {question: "Myasthenia gravis in dogs is characterized by antibodies against which receptor?", options: ["Dopamine receptor", "Acetylcholine receptor", "GABA receptor", "Serotonin receptor"], answer: 1, explanation: "Autoantibodies target acetylcholine receptors at the neuromuscular junction."},
        {question: "Seizure initiation in dogs typically arises from which brain region?", options: ["Cerebellum", "Cerebral cortex", "Brainstem", "Hypothalamus"], answer: 1, explanation: "The cerebral cortex is the origin of most seizures."},
        {question: "Which breed is predisposed to Chiari-like malformation causing syringomyelia?", options: ["Cavalier King Charles Spaniel", "Doberman", "Beagle", "Labrador Retriever"], answer: 0, explanation: "Cavalier King Charles Spaniels commonly develop this malformation."},
        {question: "What is the first-line therapy for status epilepticus in cats?", options: ["Phenobarbital", "Diazepam IV", "Potassium bromide", "Levetiracetam"], answer: 1, explanation: "Intravenous diazepam is used for emergency seizure control."},
        {question: "Intervertebral disc disease Hansen type I involves degeneration of which disc component?", options: ["Annulus fibrosus", "Nucleus pulposus", "Endplate cartilage", "Vertebral body"], answer: 1, explanation: "Type I herniation occurs when the nucleus pulposus extrudes."},
        {question: "Which toxin commonly causes ascending flaccid paralysis in dogs after ingestion of carrion?", options: ["Tetanus toxin", "Botulinum toxin", "Strychnine", "Organophosphate"], answer: 1, explanation: "Botulism from Clostridium botulinum leads to paralysis."},
        {question: "What is the hallmark sign of vestibular disease in cats?", options: ["Head tilt", "Blindness", "Seizures", "Hemiparesis"], answer: 0, explanation: "Vestibular dysfunction causes a persistent head tilt."},
        {question: "In dogs, atlantoaxial instability is most common in which breeds?", options: ["Large breed puppies", "Toy breed dogs", "Sighthounds", "Herding breeds"], answer: 1, explanation: "Toy breeds like Chihuahuas often have congenital AA instability."},
        {question: "A Schiff-Sherrington posture is usually associated with lesions in which spinal cord region?", options: ["C1-C5", "C6-T2", "T3-L3", "L4-S3"], answer: 2, explanation: "Thoracolumbar lesions cause rigid forelimbs and flaccid hindlimbs."},
        {question: "Granulomatous meningoencephalomyelitis (GME) in dogs is thought to be caused by what?", options: ["Unknown immune-mediated process", "Distemper virus", "Toxoplasma gondii", "Neospora caninum"], answer: 0, explanation: "GME is considered an immune-mediated inflammatory disease."},
        {question: "Idiopathic facial nerve paralysis in dogs typically results in what clinical sign?", options: ["Severe head tilt", "Trismus", "Inability to blink", "Seizures"], answer: 2, explanation: "Loss of palpebral reflex leads to inability to blink."},
        {question: "Which diagnostic test is used to confirm myasthenia gravis in dogs?", options: ["Electromyography", "Edrophonium (Tensilon) test", "MRI", "CT"], answer: 1, explanation: "The Tensilon test evaluates neuromuscular transmission."},
        {question: "Thiamine deficiency in cats is associated with which neurological sign?", options: ["Cervical ventroflexion", "Blindness", "Head pressing", "Intention tremor"], answer: 0, explanation: "Thiamine deficiency leads to ventroflexion of the neck."},
        {question: "What is the treatment of choice for dogs with idiopathic epilepsy not controlled by phenobarbital alone?", options: ["Add potassium bromide", "Add prednisone", "Add furosemide", "Add amlodipine"], answer: 0, explanation: "Potassium bromide is a common adjunct therapy."},
        {question: "Which breed is overrepresented in degenerative myelopathy?", options: ["German Shepherd", "Yorkshire Terrier", "Poodle", "Maltese"], answer: 0, explanation: "Degenerative myelopathy is prevalent in German Shepherds."},
        {question: "A cat with a history of otitis media develops a head tilt and nystagmus. Which nerve is affected?", options: ["Optic nerve", "Facial nerve", "Vestibulocochlear nerve", "Hypoglossal nerve"], answer: 2, explanation: "The vestibulocochlear nerve controls balance and hearing."},
        {question: "Which reflex is decreased with an L4-S3 spinal cord lesion in dogs?", options: ["Patellar reflex", "Forelimb withdrawal", "Cutaneous trunci", "Hopping"], answer: 0, explanation: "Lesions in this region diminish the patellar reflex."},
        {question: "What is the main treatment for idiopathic vestibular disease in dogs?", options: ["Surgery", "Supportive care and time", "High-dose steroids", "Antibiotics"], answer: 1, explanation: "Most cases resolve with supportive care over several days."},
        {question: "Which drug can be used to treat spasticity associated with spinal cord injury in dogs?", options: ["Baclofen", "Diazepam", "Phenobarbital", "Morphine"], answer: 0, explanation: "Baclofen acts as a muscle relaxant."},
        {question: "A seizure that lasts more than five minutes is classified as what?", options: ["Cluster seizure", "Focal seizure", "Status epilepticus", "Petit mal seizure"], answer: 2, explanation: "Prolonged seizures are termed status epilepticus."}
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
        },
        {question: "Which tumor is the most common malignant skin tumor in dogs?", options: ["Mast cell tumor", "Melanoma", "Squamous cell carcinoma", "Fibrosarcoma"], answer: 0, explanation: "Mast cell tumors are the most frequent malignant skin tumors."},
        {question: "Injection-site sarcomas in cats are most associated with which vaccine component?", options: ["Adjuvanted vaccines", "Live attenuated vaccines", "Intranasal vaccines", "Vector vaccines"], answer: 0, explanation: "Adjuvanted vaccines have been linked to sarcoma formation."},
        {question: "Which agent in the CHOP protocol for canine lymphoma is associated with cumulative cardiotoxicity?", options: ["Vincristine", "Cyclophosphamide", "Doxorubicin", "L-asparaginase"], answer: 2, explanation: "Doxorubicin can cause dose-related cardiomyopathy."},
        {question: "Which paraneoplastic syndrome is commonly associated with anal sac adenocarcinoma in dogs?", options: ["Hyperinsulinemia", "Hypercalcemia", "Polycythemia", "Hypoglycemia"], answer: 1, explanation: "Anal sac tumors often secrete PTHrP leading to hypercalcemia."},
        {question: "Osteosarcoma in dogs typically arises in which location of the limbs?", options: ["Proximal humerus or distal radius", "Distal femur or proximal tibia", "Skull", "Digits"], answer: 0, explanation: "Osteosarcoma favors the metaphyses of long bones."},
        {question: "Which diagnostic test best assesses surgical margins after tumor excision?", options: ["Fine needle aspirate", "Histopathology", "CT scan", "Ultrasound"], answer: 1, explanation: "Histopathology evaluates tissue margins for residual tumor."},
        {question: "What is the primary toxicity concern with vincristine therapy in dogs?", options: ["Renal toxicity", "Neurotoxicity", "Myelosuppression", "Cardiotoxicity"], answer: 1, explanation: "Vincristine commonly causes peripheral neuropathy."},
        {question: "Which tumor is the most common cause of splenic masses in dogs?", options: ["Hemangiosarcoma", "Osteosarcoma", "Fibrosarcoma", "Liposarcoma"], answer: 0, explanation: "Splenic masses are frequently hemangiosarcoma."},
        {question: "What is the recommended treatment for feline nasal lymphoma?", options: ["Radiation therapy", "Surgery alone", "Metronidazole", "NSAIDs"], answer: 0, explanation: "Localized lymphoma responds well to radiation."},
        {question: "Toceranib phosphate (Palladia) treats canine mast cell tumors via which mechanism?", options: ["Alkylates DNA", "Inhibits microtubules", "Blocks KIT signaling", "Intercalates RNA"], answer: 2, explanation: "Palladia inhibits KIT tyrosine kinase."},
        {question: "Functional thyroid adenomas causing hyperthyroidism in cats are an example of which tumor type?", options: ["Carcinoma", "Benign adenoma", "Sarcoma", "Lymphoma"], answer: 1, explanation: "Most hyperthyroid cats have benign adenomas."},
        {question: "Which tumor is most responsive to radiation therapy in dogs?", options: ["Meningioma", "Hemangiosarcoma", "Osteosarcoma", "Mast cell tumor"], answer: 3, explanation: "Mast cell tumors often shrink with radiation."},
        {question: "Bence-Jones proteins in urine are associated with which neoplasm?", options: ["Mast cell tumor", "Multiple myeloma", "Hemangiopericytoma", "Insulinoma"], answer: 1, explanation: "Light chains in urine indicate multiple myeloma."},
        {question: "Which vaccine has been strongly associated with injection-site sarcomas in cats?", options: ["Feline leukemia virus", "Chlamydia", "FIV", "Bordetella"], answer: 0, explanation: "FeLV vaccines carry a higher risk of sarcoma."},
        {question: "Cutaneous epitheliotropic lymphoma in dogs often presents with which lesion?", options: ["Pruritic nodules", "Non-healing ulcers", "Hyperpigmented papules", "Dry, exfoliative dermatitis"], answer: 3, explanation: "This lymphoma appears as exfoliative dermatitis."},
        {question: "Which chemotherapeutic regimen is standard for treating multicentric lymphoma in dogs?", options: ["Prednisone alone", "CHOP protocol", "Radiation only", "Metronomic chlorambucil"], answer: 1, explanation: "CHOP (cyclophosphamide, doxorubicin, vincristine, prednisone) is standard."},
        {question: "Paraneoplastic hypoglycemia is most commonly associated with which tumor in dogs?", options: ["Insulinoma", "Lymphoma", "Osteosarcoma", "Mast cell tumor"], answer: 0, explanation: "Insulinoma secretes insulin causing hypoglycemia."},
        {question: "Which tumor arises from the perianal glands of intact male dogs?", options: ["Perianal adenoma", "Melanoma", "Perianal adenocarcinoma", "Sebaceous adenoma"], answer: 0, explanation: "Hormone-dependent perianal adenomas develop in intact males."},
        {question: "What is the preferred treatment for low-grade mast cell tumors in dogs?", options: ["Wide surgical excision", "Radiation therapy only", "Chemotherapy only", "No treatment"], answer: 0, explanation: "Surgery with wide margins can be curative."},
        {question: "Which cytologic feature is typical of histiocytic sarcoma in dogs?", options: ["Epithelial cell clusters", "Spindle-shaped cells with collagen", "Large pleomorphic histiocytes", "Small lymphocytes"], answer: 2, explanation: "Histiocytic sarcoma shows large pleomorphic macrophage-like cells."}
    ],

    "Dermatology": [
        {question: "Which mite species causes canine scabies?", options: ["Demodex canis", "Sarcoptes scabiei var. canis", "Otodectes cynotis", "Cheyletiella yasguri"], answer: 1, explanation: "Sarcoptes scabiei var. canis burrows into the skin causing intense pruritus."},
        {question: "A common topical treatment for flea allergy dermatitis in dogs is:", options: ["Topical antibiotic", "Corticosteroid spray", "Antifungal shampoo", "Vitamin E oil"], answer: 1, explanation: "Corticosteroid sprays reduce inflammation associated with flea allergy."},
        {question: "Which diagnostic test confirms ringworm in cats?", options: ["Skin cytology", "Wood's lamp", "Fungal culture", "Allergy testing"], answer: 2, explanation: "Fungal culture is considered the gold standard for diagnosing dermatophytosis."},
        {question: "What is the typical first step in managing a dog with atopic dermatitis?", options: ["Start systemic antibiotics", "Begin allergen-specific immunotherapy", "Identify and reduce exposure to allergens", "Administer antifungal medication"], answer: 2, explanation: "Avoiding or minimizing allergen exposure is key in initial management of atopic dermatitis."},
        {question: "Which flea control medication is an oral adulticide given monthly to dogs?", options: ["Fipronil", "Imidacloprid", "Spinosad", "Selamectin"], answer: 2, explanation: "Spinosad is an oral flea adulticide."},
        {question: "Feline acne typically involves which area of the body?", options: ["Dorsal neck", "Ventral abdomen", "Chin", "Flanks"], answer: 2, explanation: "Feline acne commonly affects the chin."},
        {question: "Which yeast organism commonly causes otitis externa in dogs?", options: ["Candida albicans", "Malassezia pachydermatis", "Cryptococcus neoformans", "Blastomyces dermatitidis"], answer: 1, explanation: "Malassezia is a frequent cause of yeast otitis."},
        {question: "Which autoimmune skin disease presents with depigmentation and crusting of the nasal planum in dogs?", options: ["Pemphigus vulgaris", "Discoid lupus erythematosus", "Cutaneous lymphoma", "Dermatophytosis"], answer: 1, explanation: "DLE affects the nose leading to depigmentation."},
        {question: "Alopecia X is most commonly seen in which breed?", options: ["Pomeranian", "German Shepherd", "Beagle", "Bulldog"], answer: 0, explanation: "Pomeranians frequently develop alopecia X."},
        {question: "Dermatophytosis in dogs can be treated topically with which medication?", options: ["Silver sulfadiazine", "Enilconazole rinses", "Hydrocortisone", "Mupirocin"], answer: 1, explanation: "Enilconazole is effective against dermatophytes."},
        {question: "Which insect commonly causes feline miliary dermatitis due to hypersensitivity?", options: ["Mosquito", "Flea", "Tick", "Fly"], answer: 1, explanation: "Flea bites trigger miliary dermatitis."},
        {question: "What is the recommended treatment for deep pyoderma in dogs?", options: ["Topical antiseptics alone", "Systemic antibiotics for 4-6 weeks", "Short course of steroids", "Antihistamines only"], answer: 1, explanation: "Deep infections require prolonged systemic antibiotics."},
        {question: "Which breed is predisposed to color dilution alopecia?", options: ["Dachshund", "Doberman Pinscher", "Golden Retriever", "Lhasa Apso"], answer: 1, explanation: "Dobermans often suffer from color dilution alopecia."},
        {question: "Puppy strangles is another name for which condition?", options: ["Juvenile cellulitis", "Demodicosis", "Scabies", "Dermatomyositis"], answer: 0, explanation: "Juvenile cellulitis is commonly called puppy strangles."},
        {question: "Which skin mite is part of the normal fauna but can cause disease in immunocompromised dogs?", options: ["Sarcoptes scabiei", "Demodex canis", "Cheyletiella", "Otodectes cynotis"], answer: 1, explanation: "Demodex overgrows when immunity is impaired."},
        {question: "Which antibiotic is often used to treat methicillin-resistant Staphylococcus pseudintermedius infections in dogs?", options: ["Amoxicillin", "Cephalexin", "Clindamycin", "Chloramphenicol"], answer: 3, explanation: "Chloramphenicol is reserved for resistant infections."},
        {question: "Which lesion is characteristic of pemphigus foliaceus in cats?", options: ["Vesicles and erosions on ear pinnae", "Nodules on limbs", "Comedones on chin", "Diffuse scaling on flanks"], answer: 0, explanation: "Pustules and crusts form around the ears and face."},
        {question: "What is the best diagnostic method to confirm atopic dermatitis in dogs?", options: ["Skin cytology", "Intradermal allergen testing", "Skin scraping", "Wood's lamp"], answer: 1, explanation: "Intradermal testing identifies specific allergens."},
        {question: "Which systemic antifungal is often used for Malassezia dermatitis when topical therapy fails?", options: ["Itraconazole", "Griseofulvin", "Flucytosine", "Tolnaftate"], answer: 0, explanation: "Itraconazole is effective against Malassezia."},
        {question: "Steroid therapy leading to calcium deposits in the skin of dogs is known as what?", options: ["Calcinosis cutis", "Acral lick dermatitis", "Sebaceous adenitis", "Panniculitis"], answer: 0, explanation: "Steroid use can cause calcinosis cutis."},
        {question: "Which medication is used as an immunomodulator in cats with eosinophilic granuloma complex?", options: ["Cyclosporine", "Doxycycline", "Prednisone", "Azathioprine"], answer: 0, explanation: "Cyclosporine can control allergic inflammation."},
        {question: "Which ear cleaning agent is contraindicated in dogs with a ruptured tympanic membrane?", options: ["Water-based cleanser", "Chlorhexidine", "Sterile saline", "Isopropyl alcohol-based cleanser"], answer: 3, explanation: "Alcohol can damage middle ear structures."},
        {question: "Dermatophytosis typically fluoresces under a Wood's lamp due to which species?", options: ["Microsporum gypseum", "Microsporum canis", "Trichophyton mentagrophytes", "Trichophyton verrucosum"], answer: 1, explanation: "M. canis often fluoresces apple green."},
        {question: "Which nutritional supplement is often recommended to improve skin barrier function in atopic dogs?", options: ["Omega-3 fatty acids", "Vitamin K", "Lysine", "Selenium"], answer: 0, explanation: "Omega-3 fatty acids help reduce inflammation and improve skin."}
    ],
    "Hepatic": [
        {question: "Which diagnostic test is most specific for confirming chronic hepatitis in dogs?", options: ["Liver biopsy", "Serum ALT", "Bile acids", "Abdominal radiographs"], answer: 0, explanation: "Histopathology of a biopsy confirms chronic hepatitis."},
        {question: "Copper storage hepatopathy is most common in which breed?", options: ["Dalmatian", "Bedlington Terrier", "Great Dane", "Poodle"], answer: 1, explanation: "Bedlington Terriers commonly inherit copper-associated hepatitis."},
        {question: "Hepatic lipidosis in cats is often triggered by:", options: ["Rapid weight loss or anorexia", "Excess carbohydrates", "High-protein diet", "Parasite infection"], answer: 0, explanation: "Prolonged anorexia or stress can lead to hepatic lipidosis."},
        {question: "Which enzyme is most liver-specific in dogs?", options: ["ALT", "ALP", "CK", "AST"], answer: 0, explanation: "Alanine aminotransferase is primarily produced in hepatocytes."},
        {question: "Portosystemic shunts in small breed dogs are typically:", options: ["Extrahepatic", "Intrahepatic", "Acquired", "Not surgically correctable"], answer: 0, explanation: "Congenital shunts in small breeds are often extrahepatic."},
        {question: "What is the recommended treatment for gallbladder mucocele in dogs?", options: ["Medical management only", "Cholecystectomy", "Antibiotic therapy", "Percutaneous drainage"], answer: 1, explanation: "Surgical removal of the gallbladder is often required."},
        {question: "Which substance is measured to evaluate hepatic synthetic function?", options: ["Bilirubin", "Albumin", "ALT", "GGT"], answer: 1, explanation: "Albumin production reflects hepatic synthetic capacity."},
        {question: "A common sign of hepatic encephalopathy in dogs is:", options: ["Seizures", "Pruritus", "Tachycardia", "Increased appetite"], answer: 0, explanation: "Toxin accumulation can cause seizures and neurologic signs."},
        {question: "Which drug is used to bind ammonia and treat hepatic encephalopathy?", options: ["Lactulose", "Metronidazole", "Prednisone", "Furosemide"], answer: 0, explanation: "Lactulose acidifies the colon and traps ammonia."},
        {question: "Cholangitis/cholangiohepatitis complex is most commonly seen in which species?", options: ["Dogs", "Cats", "Horses", "Ferrets"], answer: 1, explanation: "Cats frequently develop inflammatory diseases of the biliary system."}
    ],
    "Immune-Mediated": [
        {question: "Which drug is considered first-line therapy for immune-mediated hemolytic anemia in dogs?", options: ["Prednisone", "Cyclosporine", "Azathioprine", "Vincristine"], answer: 0, explanation: "High-dose corticosteroids are the initial treatment."},
        {question: "Immune-mediated thrombocytopenia often presents with:", options: ["Petechiae and ecchymoses", "Polyuria", "Ataxia", "Cough"], answer: 0, explanation: "Severe low platelet counts cause petechial hemorrhages."},
        {question: "Which diagnostic test can confirm autoimmune hemolytic anemia?", options: ["Coombs test", "ANA test", "Bile acids", "ACTH stimulation"], answer: 0, explanation: "The Coombs test detects antibodies on red blood cells."},
        {question: "Lupus erythematosus complex in dogs often requires which medication for management?", options: ["Glucocorticoids", "Antibiotics", "Antifungals", "Anthelmintics"], answer: 0, explanation: "Immunosuppression with steroids is commonly required."},
        {question: "What is a common side effect of long-term corticosteroid therapy?", options: ["PU/PD and polyphagia", "Decreased appetite", "Hypothermia", "Bradycardia"], answer: 0, explanation: "Steroids increase thirst, urination, and appetite."},
        {question: "Immune-mediated polyarthritis is best diagnosed via:", options: ["Joint cytology", "MRI", "Urine culture", "Endoscopy"], answer: 0, explanation: "Arthrocentesis with cytology confirms immune-mediated inflammation."},
        {question: "Which breed has a predisposition for primary immune-mediated polyarthritis?", options: ["Beagle", "German Shepherd", "Shar Pei", "Toy Poodle"], answer: 2, explanation: "Shar Peis commonly develop this condition."},
        {question: "Cyclosporine exerts its immunosuppressive effect by inhibiting:", options: ["T-lymphocyte activation", "Bacterial protein synthesis", "DNA replication", "Collagen formation"], answer: 0, explanation: "Cyclosporine blocks T-cell activation pathways."},
        {question: "Immune-mediated hemolytic anemia typically causes which type of anemia?", options: ["Regenerative anemia", "Non-regenerative anemia", "Iron deficiency anemia", "Aplastic anemia"], answer: 0, explanation: "The destruction of red cells stimulates strong regeneration."},
        {question: "What adjunct therapy can reduce clot risk in dogs with IMHA?", options: ["Low-dose aspirin", "Vitamin K", "Iron supplementation", "Thyroxine"], answer: 0, explanation: "Antithrombotic drugs such as aspirin may decrease thrombosis."}
    ],
};
const categoryContainer = document.getElementById('categories');
const quizContainer = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const explanationEl = document.getElementById('explanation');
const nextBtn = document.getElementById('next');
const resultEl = document.getElementById('result');
const twoPlayerBtn = document.getElementById('twoPlayer');
const scoreboard = document.getElementById('scoreboard');
const p1El = document.getElementById('p1');
const p2El = document.getElementById('p2');
const miniGamesBtn = document.getElementById('miniGames');
const miniMenu = document.getElementById('miniGameMenu');
const startFleaBtn = document.getElementById('startFlea');
const startMemoryBtn = document.getElementById('startMemory');
const startSortBtn = document.getElementById('startSort');
const fleaGame = document.getElementById('fleaGame');
const fleaContainer = fleaGame.querySelector('.flea-container');
const memoryGame = document.getElementById('memoryGame');
const sortGame = document.getElementById('sortGame');
const fleaScoreEl = document.getElementById('fleaScore');
const fleaBack = document.getElementById('fleaBack');
const memoryGrid = document.getElementById('memoryGrid');
const memoryBack = document.getElementById('memoryBack');
const sortItems = document.getElementById('symptomItems');
const catZone = document.getElementById('catZone');
const dogZone = document.getElementById('dogZone');
const sortBack = document.getElementById('sortBack');
const sortResultEl = document.getElementById('sortResult');
const doctorModeBtn = document.getElementById('doctorMode');
const doctorScreen = document.getElementById('doctorScreen');
const doctorText = document.getElementById('doctorText');
const doctorOptions = document.getElementById('doctorOptions');
const doctorNext = document.getElementById('doctorNext');
const doctorQuit = document.getElementById('doctorQuit');

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let twoPlayer = false;
let player1 = 'Player 1';
let player2 = 'Player 2';
let scores = [0, 0];
let wagers = [0, 0];
let activePlayer = null;
let buzzActive = false;
let typingInterval = null;
let currentQuestion = null;
let draggedItem = null;
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
        name: 'Bella',
        species: 'dog',
        breed: 'Yorkshire Terrier',
        age: 7,
        sex: 'spayed female',
        disease: 'tracheal collapse',
        medication: 'cough suppressant',
        examFindings: 'pronounced honking cough when excited',
        labQuestion: {
            q: 'Which medication helps reduce airway inflammation?',
            options: ['Prednisone', 'Furosemide', 'Clindamycin', 'Famotidine'],
            answer: 0
        },
        question: {
            q: 'Which diagnostic test best confirms tracheal collapse?',
            options: ['Fluoroscopy', 'Abdominal ultrasound', 'MRI', 'CT of spine'],
            answer: 0
        },
        conversation: {
            q: 'Owner asks if using a harness is helpful.',
            options: ['Yes, avoid neck collars', 'No, stick with collar', 'Only for large dogs', 'It makes no difference'],
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

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function hideAllGames() {
    miniMenu.classList.add('hidden');
    fleaGame.classList.add('hidden');
    memoryGame.classList.add('hidden');
    sortGame.classList.add('hidden');
}

function showMenu() {
    hideAllGames();
    miniMenu.classList.remove('hidden');
}

function loadCategories() {
    Object.keys(categories).forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat;
        btn.addEventListener('click', () => startQuiz(cat));
        categoryContainer.appendChild(btn);
    });
}

function promptWagers() {
    wagers[0] = parseInt(prompt(`${player1}, you have ${scores[0]} points. How many would you like to wager? (0-${scores[0]})`), 10);
    if (isNaN(wagers[0]) || wagers[0] < 0) wagers[0] = 0;
    if (wagers[0] > scores[0]) wagers[0] = scores[0];
    wagers[1] = parseInt(prompt(`${player2}, you have ${scores[1]} points. How many would you like to wager? (0-${scores[1]})`), 10);
    if (isNaN(wagers[1]) || wagers[1] < 0) wagers[1] = 0;
    if (wagers[1] > scores[1]) wagers[1] = scores[1];
}

twoPlayerBtn.addEventListener('click', () => {
    twoPlayer = true;
    player1 = prompt('Enter name for Player One:') || 'Player 1';
    player2 = prompt('Enter name for Player Two:') || 'Player 2';
    p1El.textContent = `${player1}: 0`;
    p2El.textContent = `${player2}: 0`;
    scoreboard.classList.remove('hidden');
});

document.addEventListener('keydown', (e) => {
    if (!twoPlayer || !buzzActive || activePlayer !== null) return;
    const key = e.key.toLowerCase();
    if (key === 'a') {
        setActivePlayer(0);
    } else if (key === 'l') {
        setActivePlayer(1);
    }
});

function setActivePlayer(num) {
    activePlayer = num;
    buzzActive = false;
    p1El.classList.toggle('active-player', num === 0);
    p2El.classList.toggle('active-player', num === 1);
    if (typingInterval) {
        clearInterval(typingInterval);
        questionEl.textContent = `Question ${currentIndex + 1}: ${currentQuestion.question}`;
        revealOptions();
    }
    Array.from(optionsEl.children).forEach(btn => btn.disabled = false);
}

function startQuiz(category) {
    categoryContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    currentQuestions = shuffle([...categories[category]]).slice(0, 10);
    currentIndex = 0;
    score = 0;
    scores = [0, 0];
    if (twoPlayer) {
        p1El.textContent = `${player1}: 0`;
        p2El.textContent = `${player2}: 0`;
        scoreboard.classList.remove('hidden');
    } else {
        scoreboard.classList.add('hidden');
    }
    nextBtn.textContent = 'Next Question';
    nextBtn.classList.add('hidden');
    explanationEl.classList.add('hidden');
    resultEl.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    currentQuestion = currentQuestions[currentIndex];
    const text = `Question ${currentIndex + 1}: ${currentQuestion.question}`;
    questionEl.textContent = '';
    optionsEl.innerHTML = '';
    activePlayer = null;
    buzzActive = twoPlayer;
    p1El.classList.remove('active-player');
    p2El.classList.remove('active-player');
    let i = 0;
    typingInterval = setInterval(() => {
        questionEl.textContent += text[i++];
        if (i >= text.length) {
            clearInterval(typingInterval);
            revealOptions();
        }
    }, 40);
}

function revealOptions() {
    optionsEl.innerHTML = '';
    currentQuestion.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.disabled = twoPlayer && activePlayer === null;
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
    buzzActive = false;
    if (selected === q.answer) {
        if (twoPlayer && activePlayer !== null) {
            if (currentIndex === currentQuestions.length - 1) {
                scores[activePlayer] += wagers[activePlayer];
            } else {
                scores[activePlayer]++;
            }
            const el = activePlayer === 0 ? p1El : p2El;
            el.textContent = `${activePlayer === 0 ? player1 : player2}: ${scores[activePlayer]}`;
        } else {
            score++;
        }
        explanationEl.textContent = 'Correct! ' + q.explanation;
    } else {
        if (twoPlayer && activePlayer !== null && currentIndex === currentQuestions.length - 1) {
            scores[activePlayer] -= wagers[activePlayer];
            const el = activePlayer === 0 ? p1El : p2El;
            el.textContent = `${activePlayer === 0 ? player1 : player2}: ${scores[activePlayer]}`;
        }
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
        if (twoPlayer && currentIndex === currentQuestions.length - 1) {
            promptWagers();
        }
        showQuestion();
    } else {
        quizContainer.classList.add('hidden');
        resultEl.classList.remove('hidden');
        if (twoPlayer) {
            const winner = scores[0] === scores[1] ? 'It\'s a tie!' :
                (scores[0] > scores[1] ? `${player1} wins!` : `${player2} wins!`);
            resultEl.textContent = `${player1}: ${scores[0]} | ${player2}: ${scores[1]} - ${winner}`;
        } else {
            resultEl.textContent = `You scored ${score} out of ${currentQuestions.length}.`;
        }
        categoryContainer.classList.remove('hidden');
    }
});

loadCategories();

miniGamesBtn.addEventListener('click', () => {
    categoryContainer.classList.add('hidden');
    quizContainer.classList.add('hidden');
    scoreboard.classList.add('hidden');
    resultEl.classList.add('hidden');
    showMenu();
});

fleaBack.addEventListener('click', showMenu);
memoryBack.addEventListener('click', showMenu);
sortBack.addEventListener('click', showMenu);

startFleaBtn.addEventListener('click', startFleaGame);
startMemoryBtn.addEventListener('click', startMemoryGame);
startSortBtn.addEventListener('click', startSortGame);

// Flea Flicker
let fleaScore = 0;
let fleaInterval;
function startFleaGame() {
    hideAllGames();
    fleaGame.classList.remove('hidden');
    fleaScore = 0;
    fleaScoreEl.textContent = 'Score: 0';
    fleaContainer.innerHTML = '';
    spawnFlea();
    fleaInterval = setInterval(spawnFlea, 800);
    setTimeout(endFleaGame, 30000);
}

function spawnFlea() {
    const flea = document.createElement('div');
    flea.className = 'flea';
    flea.style.left = Math.random() * 280 + 'px';
    flea.style.top = Math.random() * 280 + 'px';
    fleaContainer.appendChild(flea);
    flea.addEventListener('click', () => {
        flea.remove();
        fleaScore++;
        fleaScoreEl.textContent = 'Score: ' + fleaScore;
    });
    setTimeout(() => flea.remove(), 1500);
}

function endFleaGame() {
    clearInterval(fleaInterval);
    alert('Game over! You squashed ' + fleaScore + ' fleas.');
    showMenu();
}

// Drug Match
let memorySelection = [];
function startMemoryGame() {
    hideAllGames();
    memoryGame.classList.remove('hidden');
    memoryGrid.innerHTML = '';
    memorySelection = [];
    const pairs = ['Prednisone','Prednisone','Metronidazole','Metronidazole','Glargine','Glargine','Furosemide','Furosemide'];
    shuffle(pairs).forEach(text => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.text = text;
        card.addEventListener('click', () => flipCard(card));
        memoryGrid.appendChild(card);
    });
}

function flipCard(card) {
    if (memorySelection.length === 2 || card.textContent) return;
    card.textContent = card.dataset.text;
    memorySelection.push(card);
    if (memorySelection.length === 2) {
        const [c1, c2] = memorySelection;
        if (c1.dataset.text === c2.dataset.text) {
            memorySelection = [];
            if (!memoryGrid.querySelector('.memory-card:not(:empty)')) {
                setTimeout(() => alert('Great job!'), 200);
            }
        } else {
            setTimeout(() => {
                c1.textContent = '';
                c2.textContent = '';
                memorySelection = [];
            }, 800);
        }
    }
}

// Symptom Sorter
function startSortGame() {
    hideAllGames();
    sortGame.classList.remove('hidden');
    sortResultEl.textContent = '';
    sortItems.innerHTML = '';
    const items = [
        {text:'Hyperthyroidism', type:'cat'},
        {text:'Parvovirus', type:'dog'},
        {text:'FIV', type:'cat'},
        {text:'Heartworm', type:'dog'},
        {text:'Diabetes Mellitus', type:'cat'},
        {text:'Lyme Disease', type:'dog'}
    ];
    shuffle(items).forEach(it => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = it.text;
        div.draggable = true;
        div.dataset.type = it.type;
        div.addEventListener('dragstart', ev => {
            draggedItem = div;
            ev.dataTransfer.setData('text', it.type);
        });
        sortItems.appendChild(div);
    });
}

[catZone, dogZone].forEach(zone => {
    zone.addEventListener('dragover', e => e.preventDefault());
    zone.addEventListener('drop', e => {
        const type = e.dataTransfer.getData('text');
        if (draggedItem) zone.appendChild(draggedItem);
        if (zone.id.startsWith(type)) {
            sortResultEl.textContent = 'Correct!';
        } else {
            sortResultEl.textContent = 'Oops, try again!';
        }
    });
});

doctorModeBtn.addEventListener('click', startDoctorMode);

function startDoctorMode() {
    categoryContainer.classList.add('hidden');
    quizContainer.classList.add('hidden');
    scoreboard.classList.add('hidden');
    resultEl.classList.add('hidden');
    hideAllGames();
    doctorScreen.classList.remove('hidden');
    doctorQuit.classList.remove('hidden');
    doctorQuit.onclick = quitDoctorMode;
    showDoctorEvent();
}

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
            doctorText.textContent = `Technician brings ${pet.name}, a ${pet.age}-year-old ${pet.sex} ${pet.breed} ${pet.species} for a ${consult} regarding ${pet.disease}. They report the patient is ${complaint}. Current medication: ${pet.medication}. Vitals: T ${vitals.temp}°F, HR ${vitals.hr}, RR ${vitals.rr}.`;
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
                const btn = document.createElement('button');
                btn.textContent = opt;
                btn.onclick = () => {
                    doctorText.textContent = idx === pet.conversation.answer ? 'Owner is pleased with your answer.' : 'Owner seems unsure about that.';
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(btn);
            });
        } else if (step === 4) {
            doctorText.textContent = pet.question.q;
            pet.question.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.textContent = opt;
                btn.onclick = () => {
                    doctorText.textContent = idx === pet.question.answer ? 'Correct!' : 'Not quite the best choice.';
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(btn);
            });
        } else if (step === 5) {
            doctorText.textContent = pet.labQuestion.q;
            pet.labQuestion.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.textContent = opt;
                btn.onclick = () => {
                    doctorText.textContent = idx === pet.labQuestion.answer ? 'Correct!' : 'Not quite the best choice.';
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(btn);
            });
        } else if (step === 6) {
            doctorText.textContent = 'What do you recommend to the owner?';
            ['Run blood work', 'Adjust medication', 'Schedule recheck', 'Finish appointment'].forEach(opt => {
                const btn = document.createElement('button');
                btn.textContent = opt;
                btn.onclick = () => {
                    doctorText.textContent = `You decide to ${opt.toLowerCase()}.`;
                    step++;
                    setTimeout(run, 600);
                };
                doctorOptions.appendChild(btn);
            });
        } else {
            const feedback = ['Thanks for taking care of my pet!', 'Great explanation today!', 'I appreciate your patience.', 'Helpful visit overall!'];
            doctorText.textContent = `Feedback card from client: "${feedback[Math.floor(Math.random()*feedback.length)]}"`;
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
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.onclick = () => {
                doctorText.textContent = `You chose: ${opt}.`;
                doctorOptions.innerHTML = '';
                doctorNext.classList.remove('hidden');
            };
            doctorOptions.appendChild(btn);
        });
        doctorNext.classList.add('hidden');
    };
}

function staffEvent() {
    return function() {
        doctorText.textContent = 'The support staff invite you to relax for a moment.';
        doctorOptions.innerHTML = '';
        ['Play a quick game', 'Doodle a cat on the whiteboard', 'Tell a joke', 'Get back to work'].forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.onclick = () => {
                doctorText.textContent = `You choose to ${opt.toLowerCase()}. Everyone enjoys the break.`;
                doctorOptions.innerHTML = '';
                doctorNext.classList.remove('hidden');
            };
            doctorOptions.appendChild(btn);
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

function quitDoctorMode() {
    doctorScreen.classList.add('hidden');
    categoryContainer.classList.remove('hidden');
    doctorNext.classList.add('hidden');
    doctorQuit.classList.add('hidden');
}
