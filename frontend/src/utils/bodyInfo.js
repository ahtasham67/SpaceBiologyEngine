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
        "effect": "Lipid dysregulation observed in mouse liver after multiple space missions.",
        "source": "https://doi.org/10.1038/s41598-019-55869-2"
      },
        {
        "effect": "Upregulation in transcriptomic pathways: lipid metabolism, fatty acid metabolism, lipid and fatty acid processing, lipid catabolism, and lipid localization.",
        "source": "Beheshti et al. 2019, Sci Rep"  
      },
      {
        "effect": "Changes in proteomic profiles: a number of lipid-related proteins altered during spaceflight (consistent with transcriptional changes).",
        "source": "Beheshti et al. 2019, Sci Rep"  
      },
      {
        "effect": "Predicted upstream regulators altered: e.g. Insulin (INS) activation, Glucagon (GCG) regulation (common across flight conditions).",
        "source": "Beheshti et al. 2019, Sci Rep"  
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
      }
    ]
  },
  {
    part: "Kidneys",
    "data": [
      {
        effect: "Increased risks of urinary calcium and kidney stones.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
    ]
  },
  {
    part: "Muscles",
    "data": [
      {
        effect: "Muscle mass, strength, and endurance decrease because less effort is needed to move in space, leading to muscle weakening or atrophy.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Weakened muscles can increase risk of fall-related injuries upon return to Earth or make activities on Mars more difficult.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
    ]
  },
  {
    part: "Brain",
    "data": [
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
    "data": [
      {
        effect: "Astronauts may develop globe flattening, optic disc edema, and vision changes during long-duration space missions.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Space-Associated Neuro-ocular Syndrome (SANS) causes swelling at the back of the eye, raising concerns for deep-space missions.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
    ]
  },
  {
    part: "Heart",
    "data": [
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
        "effect": "Space radiation (protons and heavy ions) triggers oxidative stress in cardiomyocytes and endothelial cells, activating the FYN signaling pathway as a protective mechanism against ROS.",
        "source": "https://doi.org/10.3390/ijms20030661"
      },
      {
        "effect": "Proton radiation effects overlap strongly with spaceflight samples, while heavy ion (56Fe) exposure showed distinct gene regulation patterns; both linked to long-term cardiovascular risk.",
        "source": "https://doi.org/10.3390/ijms20030661"
      },
      {
        "effect": "Radiation exposure led to altered DNA methylation, endothelial dysfunction, myocardial fibrosis, and vascular damage, all increasing cardiovascular disease risk.",
        "source": "https://doi.org/10.3390/ijms20030661"
      }
    ]
  },
  {
    part: "Psychological",
    "data": [
      {
        effect: "Confined space, disrupted circadian rhythm, stress, and high workload can reduce cognitive performance and teamwork.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
    ]
  },
  {
    part: "Intestines",
    "data": [
      {
        effect: "Microgravity reduces intestinal motility, altering digestion and waste disposal.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
    ]
  },
  {
    part : "Ears",
    "data": [
      {
        effect: "Noise during launch and re-entry can contribute to hearing loss.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
    ]
  },
  {
    part: "Legs",
    "data": [
      ,
      {
        effect: "Feet lose callouses from lack of standing pressure but may develop callouses on the tops from footholds in the ISS.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
    ]
  },
  {
    part: "Space Radiation",
    "data": [
      {
        effect: "Astronauts outside Earth's protective atmosphere are exposed to 100 times more radiation, raising risks of cancer, radiation sickness, and nervous system damage.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      },
      {
        effect: "Reduced immune response and microbial growth can cause skin irritation.",
        source: "https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space"
      }
    ]
  },
  {
    part: "Skin",
    "data": [
      {
        effect: "Increased sensitivity, delayed wound healing, and potential radiation dermatitis from space exposure.",
        source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4303863/"
      }
    ]
  },
  {
    part : "Reproductive System",
    "data": [
      
      {
        "effect": "Microgravity and radiation may impair gonadal function, estrous cycles, and fertility; animal studies show impaired blastocyst formation, DNA damage, and epigenetic abnormalities in embryos developed in space.",
        "source": "https://doi.org/10.3390/ijms23137465"
      },
      {
        "effect": "Pregnant rodents flown in space exhibited fetal neurobiological abnormalities and impaired bone development, although most offspring reached adulthood and reproduced.",
        "source": "https://doi.org/10.3390/ijms23137465"
      },
      {
        "effect": "Radiation sensitivity of ovaries may lead to temporary or permanent infertility; thresholds reported as 1250–1700 mGy for temporary effects and up to 20,000 mGy for permanent sterility.",
        "source": "https://doi.org/10.3390/ijms23137465"
      }
    ]
  }


]