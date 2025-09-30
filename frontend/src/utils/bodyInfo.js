export const bodyParts = {
    "Brain": "Experiences fluid shifts, radiation exposure, and altered sleep cycles in microgravity.",
    "Lungs": "Reduced lung capacity and altered breathing patterns due to fluid redistribution.",
    "Heart": "Cardiovascular deconditioning and reduced blood volume in space environment.",
    "Liver": "Metabolic changes and altered drug processing in microgravity conditions.",
    "Kidneys": "Increased risk of kidney stones and altered fluid regulation in space.",
    "Stomach": "Digestive issues and altered nutrient absorption in microgravity.",
    "Left Arm": "Muscle atrophy and bone density loss due to lack of gravity resistance.",
    "Right Arm": "Muscle atrophy and bone density loss due to lack of gravity resistance.",
    "Reproductive System": "Hormonal changes and potential fertility effects from radiation exposure.",
    "Left Leg": "Significant muscle and bone mass loss, especially in weight-bearing bones.",
    "Right Leg": "Significant muscle and bone mass loss, especially in weight-bearing bones.",
    "Eyes": "Vision changes and increased intracranial pressure affecting eyesight in space.",
    "DNA": "Genetic mutations and chromosomal damage from cosmic radiation exposure during long-duration spaceflight.",
    "Immune System": "Weakened immune response and increased susceptibility to infections in microgravity environment.",
    "Skin": "Increased sensitivity, delayed wound healing, and potential radiation dermatitis from space exposure.",
    "Intestines": "Altered gut microbiome and digestive function due to microgravity and stress.",
    "Pelvis": "Bone density loss and muscle atrophy affecting pelvic stability and function."

  };


export const effects =[
    
    {
      part: "Lungs",
      data : [{
        effect: "Reduced lung capacity and altered breathing patterns due to fluid redistribution.",
        source: "https://www.nasa.gov/mission_pages/station/research/benefits/lungs.html"
      },
      
      {
        effect: "Microgravity can lead to a decrease in lung volume and changes in the way air is distributed in the lungs.",
        source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2923421/"
      }]
    },

    {
      part : "Liver",
      data: [
        {
        effect: "Lipid dysregulation observed in mouse liver after multiple space missions.",
        source: "https://doi.org/10.1038/s41598-019-55869-2"
      },
        {
        effect: "Upregulation in transcriptomic pathways: lipid metabolism, fatty acid metabolism, lipid and fatty acid processing, lipid catabolism, and lipid localization.",
        source: "Beheshti et al. 2019, Sci Rep"  
      },
      {
        effect: "Changes in proteomic profiles: a number of lipid-related proteins altered during spaceflight (consistent with transcriptional changes).",
        source: "Beheshti et al. 2019, Sci Rep"  
      },
      {
        effect: "Predicted upstream regulators altered: e.g. Insulin (INS) activation, Glucagon (GCG) regulation (common across flight conditions).",
        source: "Beheshti et al. 2019, Sci Rep"  
      } ,
      {
        effect: "Dysregulated lipid metabolism and abnormal lipid accumulation during spaceflight, resembling non-alcoholic fatty liver disease (NAFLD).",
        source: "https://doi.org/10.1016/j.isci.2022.105213"
      },
      {
        effect: "Insulin resistance and diabetogenic changes linked to liver dysfunction in space.",
        source: "https://doi.org/10.1016/j.isci.2022.105213"
      },
      {
        effect: "Starvation-like phenotype with energy-saving mode, altering systemic metabolism.",
        source: "https://doi.org/10.1016/j.isci.2022.105213"
      }
      ]
    }
    ,
  {
    part: "Bones",
    data: [
      {
        effect: "Lower body bones (legs, hips, spine) lose density in microgravity due to reduced load bearing.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "The microscopic structure of the bone can become disorganized and weaker.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "The process of depositing calcium into the bone matrix is significantly reduced.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      }
    ]
  },
  {
    part: "Kidneys",
    data: [
      {
        effect: "Increased risks of urinary calcium and urolithiasis.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
      ,
      {
        effect: "The risk of developing kidney stones increases due to bone demineralization and dehydration.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      }
    ]
  },
  {
    part: "Muscles",
    data: [
      {
        effect: "Muscle mass, strength, and endurance decrease because less effort is needed to move in space, leading to muscle weakening or atrophy.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Weakened muscles can increase risk of fall-related injuries upon return to Earth or make activities on Mars more difficult.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Muscle atrophy due to microgravity and disuse, leading to reduced mass and strength.",
        source: "https://doi.org/10.1016/j.isci.2022.105213"
      },
      {
        effect: "Decreased glucose import and disrupted insulin signaling, impairing energy supply.",
        source: "https://doi.org/10.1016/j.isci.2022.105213"
      },
      {
        effect: "Muscle fibers shrink in microgravity, with a shift from endurance-oriented fibers to faster, weaker ones. Mitochondria show reduced efficiency, contributing to muscle loss.",
        source: "https://doi.org/10.1016/j.celrep.2023.113432"
      },
      {
        effect: "Shift from oxidative slow fibers (Type I) to fast glycolytic fibers (Type II), reducing endurance.",
        source: "https://doi.org/10.1016/j.isci.2022.105213"
      },
      {
        effect: "Increased oxidative stress and mitochondrial dysfunction linked to muscle degradation.",
        source: "https://doi.org/10.1016/j.isci.2022.105213"
      }
    ]
  },
  {
    part: "Brain",
    data: [
      {
        effect: "Microgravity disrupts sensory input from eyes, vestibular system, and muscles, causing disorientation, motion sickness, and loss of direction.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Returning to Earth can lead to balance issues, difficulty walking, and gaze stabilization problems.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
    ]
  },
  {
    part: "Eyes",
    data: [
      {
        effect: "Astronauts may develop globe flattening, optic disc edema, and vision changes during long-duration space missions.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Space-Associated Neuro-ocular Syndrome (SANS) causes swelling at the back of the eye, raising concerns for deep-space missions.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Differential DNA methylation after space exposure affecting extracellular matrix and apoptosis pathways.",
        source: "https://doi.org/10.1038/s41598-024-51756-7"
      },
      {
        effect: "The retina undergoes DNA methylation changes during spaceflight, which may contribute to vision problems such as space-associated neuro-ocular syndrome (SANS).",
        source: "https://doi.org/10.1016/j.celrep.2023.113432"
      },

      {
        effect: "Swelling of the optic nerve occurs due to intracranial pressure changes.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "The back of the eyeball can become slightly flattened due to fluid shifts.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "Folds or wrinkles can appear in the tissue layers at the back of the eye.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      }
    ]
  },
  {
    part: "Heart",
    data: [
      {
        effect: "Blood volume, aerobic capacity, and orthostatic tolerance decrease in microgravity, while arrhythmias may increase.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Heart muscle size may shrink, weakening cardiovascular performance and increasing risks upon return to Earth.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Space radiation could damage endothelial cells in blood vessels, potentially accelerating heart disease.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Space radiation (protons and heavy ions) triggers oxidative stress in cardiomyocytes and endothelial cells, activating the FYN signaling pathway as a protective mechanism against ROS.",
        source: "https://doi.org/10.3390/ijms20030661"
      },
      {
        effect: "Proton radiation effects overlap strongly with spaceflight samples, while heavy ion (56Fe) exposure showed distinct gene regulation patterns; both linked to long-term cardiovascular risk.",
        source: "https://doi.org/10.3390/ijms20030661"
      },
      {
        effect: "Radiation exposure led to altered DNA methylation, endothelial dysfunction, myocardial fibrosis, and vascular damage, all increasing cardiovascular disease risk.",
        source: "https://doi.org/10.3390/ijms20030661"
      },
      {
        effect: "Radiation exposure (56Fe, protons) alters gene expression in cardiac tissue.",
        source: "https://doi.org/10.1038/s41598-024-51756-7"
      },
      {
        effect: "Potential cardiovascular dysregulation from persistent radiation-induced changes.",
        source: "https://doi.org/10.1038/s41598-024-51756-7"
      },
      {
        effect: "The body reduces the amount of fluid and red blood cells in circulation.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "Astronauts experience difficulty maintaining blood pressure when standing up after returning to Earth.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      }
    ]
  },
  {
    part: "Psychological",
    data: [
      {
        effect: "Confined space, disrupted circadian rhythm, stress, and high workload can reduce cognitive performance and teamwork.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Astronauts may experience slight changes in functions like spatial awareness and concentration.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      }
    ]
  },
  {
    part: "Intestines",
    data: [
      {
        effect: "Microgravity reduces intestinal motility, altering digestion and waste disposal.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
    ]
  },
  {
    part: "Ears",
    data: [
      {
        effect: "Noise during launch and re-entry can contribute to hearing loss.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Body fluids shift towards the head, causing congestion and pressure and imbalance.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "The brain struggles with conflicting signals from the eyes and inner ear, causing disorientation.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      }
    ]
  },
  {
    part: "Legs",
    data: [
      ,
      {
        effect: "Feet lose callouses from lack of standing pressure but may develop callouses on the tops from footholds in the ISS.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Lower body bones (legs, hips, spine) lose density in microgravity due to reduced load bearing.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
    ]
  },
  {
    part: "Immune System",
    data: [
      {
        effect: "Astronauts outside Earth's protective atmosphere are exposed to 100 times more radiation, raising risks of cancer, radiation sickness, and nervous system damage.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Immune responses are weakened in space, with reduced activity of defense-related genes and increased vulnerability to infection.",
        source: "https://doi.org/10.1016/j.celrep.2023.113432"
      },
      {
        effect: "For reduced immune response, microbial growth can cause skin irritation.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Circadian rhythm disruption, immune dysfunction, and increased cancer risk during long missions.",
        source: "https://doi.org/10.1016/j.isci.2022.105213"
      },
      {
        effect: "Key immune cells become less effective at fighting infections and diseases.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "Certain white blood cells become less efficient at destroying pathogens.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "The ability of white blood cells to multiply in response to threats is impaired.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "Monocytes, a type of immune cell, show a decreased ability to fight microbes.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      }
    ]
  },
  {
    part: "Skin",
    data: [
      {
        effect: "Increased sensitivity, delayed wound healing, and potential radiation dermatitis from space exposure.",
        source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4303863/"
      }
    ]
  },
  {
    part : "Reproductive System",
    data: [
      
      {
        effect: "Microgravity and radiation may impair gonadal function, estrous cycles, and fertility; animal studies show impaired blastocyst formation, DNA damage, and epigenetic abnormalities in embryos developed in space.",
        source: "https://doi.org/10.3390/ijms23137465"
      },
      {
        effect: "Pregnant rodents flown in space exhibited fetal neurobiological abnormalities and impaired bone development, although most offspring reached adulthood and reproduced.",
        source: "https://doi.org/10.3390/ijms23137465"
      },
      {
        effect: "Radiation sensitivity of ovaries may lead to temporary or permanent infertility; thresholds reported as 1250-1700 mGy for temporary effects and up to 20,000 mGy for permanent sterility.",
        source: "https://doi.org/10.3390/ijms23137465"
      }
    ]
  },
  {
    part: "Blood",
    data: [
      {
        effect: "Persistent epigenetic changes observed in astronauts' blood post-mission.",
        source: "https://doi.org/10.1038/s41598-024-51756-7"
      },
      {
        effect: "Blood cells show altered DNA methylation patterns and gene regulation after space exposure, reflecting stress from cosmic radiation and microgravity.",
        source: "https://doi.org/10.1016/j.celrep.2023.113432"
      }
    ]
  },
  {
    part: "Molecular",
    data: [
      {
        effect: "Cells experience an imbalance between damaging free radicals and protective antioxidants.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "Increased space radiation exposure can cause damage to the genetic material within cells.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "The function of mitochondria, the powerhouses of the cell, is impaired.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "Spaceflight can alter how genes are expressed without changing the DNA sequence itself.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "Protective caps on chromosomes (telomeres) can change in length, affecting cell aging.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      },
      {
        effect: "The population and balance of microbes living in and on the body are altered.",
        source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11166946"
      }
    ]
  }


]