// script.js (complete with UI features)

const topics = {
  determination_of_structures_of_organic_compounds: {
    easy: [
      {
        question: "Which technique helps determine molecular mass?",
        options: [
          "NMR",
          "Mass spectrometry",
          "IR spectroscopy",
          "UV spectroscopy",
        ],
        answer: 1,
      },
      {
        question: "What is the full form of NMR?",
        options: [
          "Nucleic Magnetic Resonance",
          "Nuclear Magnetic Resonance",
          "Neutral Mass Record",
          "None",
        ],
        answer: 1,
      },
      {
        question: "Which technique gives information about functional groups?",
        options: ["NMR", "UV", "Mass spec", "IR"],
        answer: 3,
      },
      {
        question: "Which spectrum shows absorption due to bonds vibrating?",
        options: ["IR", "NMR", "Mass", "X-ray"],
        answer: 0,
      },
      {
        question: "In IR, what unit is used for frequency?",
        options: ["Hz", "cm⁻¹", "nm", "J/mol"],
        answer: 1,
      },
      {
        question: "Which technique uses magnetic fields?",
        options: ["UV", "Mass Spec", "NMR", "Chromatography"],
        answer: 2,
      },
      {
        question: "What is used to separate compounds by boiling point?",
        options: [
          "Filtration",
          "Distillation",
          "Chromatography",
          "Evaporation",
        ],
        answer: 1,
      },
      {
        question: "Chromatography is based on:",
        options: [
          "Size of molecule",
          "Magnetic behavior",
          "Solubility difference",
          "Fluorescence",
        ],
        answer: 2,
      },
      {
        question: "Mass spectrometry gives:",
        options: [
          "Boiling point",
          "Molecular weight",
          "Bond angles",
          "Chemical formula",
        ],
        answer: 1,
      },
      {
        question: "Which instrument separates ions by mass/charge ratio?",
        options: ["NMR", "IR", "Mass spectrometer", "Chromatograph"],
        answer: 2,
      },
      {
        question:
          "Which transition metal is commonly used in electrical wiring?",
        options: ["Iron", "Zinc", "Copper", "Aluminum"],
        answer: 2,
      },
      {
        question: "What color is typically associated with Cu²⁺ ions?",
        options: ["Blue", "Green", "Yellow", "Red"],
        answer: 0,
      },
      {
        question: "Which transition metal is found in vitamin B12?",
        options: ["Iron", "Cobalt", "Nickel", "Zinc"],
        answer: 1,
      },
      {
        question:
          "Transition metals are located in which block of the periodic table?",
        options: ["s-block", "p-block", "d-block", "f-block"],
        answer: 2,
      },
      {
        question: "Which element is not a transition metal?",
        options: ["Nickel", "Scandium", "Titanium", "Calcium"],
        answer: 3,
      },
      {
        question:
          "Which transition metal is used in making light bulb filaments?",
        options: ["Copper", "Iron", "Tungsten", "Zinc"],
        answer: 2,
      },
      {
        question: "Which metal can show an oxidation state of +7?",
        options: ["Chromium", "Manganese", "Iron", "Copper"],
        answer: 1,
      },
      {
        question: "Which of the following metals forms colored compounds?",
        options: ["Potassium", "Zinc", "Sodium", "Copper"],
        answer: 3,
      },
      {
        question: "Which of these is a common catalyst in the Haber process?",
        options: ["Iron", "Nickel", "Platinum", "Zinc"],
        answer: 0,
      },
      {
        question: "Which transition metal is liquid at room temperature?",
        options: ["Mercury", "Iron", "Gold", "Silver"],
        answer: 0,
      },
      {
        question: "Which transition metal is used in galvanization?",
        options: ["Zinc", "Iron", "Copper", "Nickel"],
        answer: 0,
      },
      {
        question:
          "Which of the following transition metals is part of stainless steel?",
        options: ["Lead", "Chromium", "Mercury", "Zinc"],
        answer: 1,
      },
      {
        question: "Which of these elements has variable oxidation states?",
        options: ["Neon", "Oxygen", "Iron", "Helium"],
        answer: 2,
      },
      {
        question: "Which transition metal is used in car catalytic converters?",
        options: ["Iron", "Lead", "Platinum", "Zinc"],
        answer: 2,
      },
      {
        question: "Which ion is commonly green in color?",
        options: ["Fe²⁺", "Cr³⁺", "Cu²⁺", "Zn²⁺"],
        answer: 0,
      },
      {
        question: "Which of the following is a property of transition metals?",
        options: [
          "Low melting point",
          "Form ionic compounds only",
          "Form colored compounds",
          "No electrical conductivity",
        ],
        answer: 2,
      },
      {
        question: "What is the oxidation state of Mn in KMnO₄?",
        options: ["+2", "+4", "+6", "+7"],
        answer: 3,
      },
      {
        question:
          "Which transition metal is essential in blood for oxygen transport?",
        options: ["Cobalt", "Copper", "Iron", "Zinc"],
        answer: 2,
      },
      {
        question: "Which of these metals is not magnetic?",
        options: ["Iron", "Nickel", "Cobalt", "Copper"],
        answer: 3,
      },
      {
        question:
          "What type of bonds do transition metals often form in complex ions?",
        options: ["Ionic", "Covalent", "Dative covalent", "Metallic"],
        answer: 2,
      },
      {
        question: "Which transition metal ion is blue in solution?",
        options: ["Fe²⁺", "Cu²⁺", "Cr³⁺", "Zn²⁺"],
        answer: 1,
      },
      {
        question: "Which of the following is a use of titanium?",
        options: ["Jewelry", "Batteries", "Aerospace parts", "Light bulbs"],
        answer: 2,
      },
      {
        question: "What color is a solution of Fe³⁺?",
        options: ["Green", "Yellow-brown", "Blue", "Colorless"],
        answer: 1,
      },
      {
        question: "Which transition metal is used in electroplating?",
        options: ["Iron", "Nickel", "Sodium", "Potassium"],
        answer: 1,
      },
      {
        question:
          "Which of these has a filled d-subshell but is still considered a transition metal?",
        options: ["Scandium", "Zinc", "Titanium", "Copper"],
        answer: 3,
      },
      {
        question:
          "Which transition metal is part of the cytochrome enzyme group?",
        options: ["Iron", "Zinc", "Chromium", "Nickel"],
        answer: 0,
      },
      {
        question:
          "Which of the following has an oxidation state of +2 and +3 commonly?",
        options: ["Iron", "Sodium", "Zinc", "Calcium"],
        answer: 0,
      },
      {
        question: "Which metal is commonly used in coins?",
        options: ["Lead", "Zinc", "Nickel", "Tin"],
        answer: 2,
      },
      {
        question: "Which transition metal is most resistant to corrosion?",
        options: ["Copper", "Zinc", "Gold", "Iron"],
        answer: 2,
      },
      {
        question:
          "Which of these elements is shiny and conducts electricity well?",
        options: ["Carbon", "Sulfur", "Iron", "Phosphorus"],
        answer: 2,
      },
      {
        question: "What type of element is copper?",
        options: ["Alkali metal", "Transition metal", "Non-metal", "Noble gas"],
        answer: 1,
      },
      {
        question: "Which transition metal forms a purple ion in solution?",
        options: ["Chromium(VI)", "Manganese(VII)", "Iron(II)", "Cobalt(II)"],
        answer: 1,
      },
      {
        question: "Which of the following metals is used in making batteries?",
        options: ["Copper", "Cobalt", "Gold", "Aluminum"],
        answer: 1,
      },
      {
        question: "Which is a property of many transition metal compounds?",
        options: [
          "They are all white solids",
          "They form acidic oxides",
          "They are colored",
          "They are all gases",
        ],
        answer: 2,
      },
      {
        question: "Which metal is often used as a catalyst in hydrogenation?",
        options: ["Zinc", "Nickel", "Aluminum", "Iron"],
        answer: 1,
      },
      {
        question: "Which of these elements is in Group 11?",
        options: ["Iron", "Copper", "Titanium", "Zinc"],
        answer: 1,
      },
      {
        question:
          "Which of the following is not a characteristic of transition metals?",
        options: [
          "Form complex ions",
          "Show variable oxidation states",
          "Low melting points",
          "Conduct electricity",
        ],
        answer: 2,
      },
      {
        question: "What is the typical charge of a zinc ion?",
        options: ["+1", "+2", "+3", "0"],
        answer: 1,
      },
      {
        question: "What type of orbital is being filled in transition metals?",
        options: ["s", "p", "d", "f"],
        answer: 2,
      },
      {
        question:
          "Which transition metal is most often associated with photographic film?",
        options: ["Gold", "Silver", "Copper", "Iron"],
        answer: 1,
      },
      {
        question:
          "Which element is considered a transition metal but often behaves differently?",
        options: ["Zinc", "Iron", "Nickel", "Copper"],
        answer: 0,
      },
    ],
    medium: [
      {
        question: "Which atoms in a molecule respond in proton NMR?",
        options: ["C", "H", "O", "N"],
        answer: 1,
      },
      {
        question: "The M+ peak in mass spectrometry indicates:",
        options: ["Fragment ion", "Base peak", "Molecular ion", "Parent ion"],
        answer: 2,
      },
      {
        question: "Which of these appears downfield in NMR?",
        options: ["Alkyl H", "Aromatic H", "Alcohol H", "Aldehyde H"],
        answer: 3,
      },
      {
        question: "The number of NMR signals tells you:",
        options: [
          "How many H atoms",
          "Chemical environments",
          "Weight",
          "Shape",
        ],
        answer: 1,
      },
      {
        question: "Which technique shows splitting due to nearby H atoms?",
        options: ["Mass", "IR", "NMR", "UV"],
        answer: 2,
      },
      {
        question: "IR absorption near 1700 cm⁻¹ indicates:",
        options: ["Alcohol", "Carboxylic acid", "Ketone", "Amine"],
        answer: 2,
      },
      {
        question: "In IR, broad peak near 3300 cm⁻¹ indicates:",
        options: ["C-H stretch", "O-H stretch", "C=O", "C≡C"],
        answer: 1,
      },
      {
        question: "Mass fragmentation often leads to:",
        options: ["Crystals", "Color change", "Smaller ions", "Electrons"],
        answer: 2,
      },
      {
        question: "The TMS standard in NMR is used because:",
        options: [
          "It's reactive",
          "Soluble in water",
          "Inert and gives sharp peak",
          "Absorbs IR",
        ],
        answer: 2,
      },
      {
        question: "Which spectrum gives chemical shift values?",
        options: ["IR", "NMR", "Mass", "UV"],
        answer: 1,
      },
      {
        question: "What is the oxidation state of chromium in Cr₂O₇²⁻?",
        options: ["+6", "+3", "+2", "+4"],
        answer: 0,
      },
      {
        question: "Which transition metal forms a pale green solution as Fe²⁺?",
        options: ["Iron", "Nickel", "Cobalt", "Chromium"],
        answer: 0,
      },
      {
        question: "Which of the following complexes is square planar?",
        options: ["[NiCl₄]²⁻", "[PtCl₄]²⁻", "[Fe(CN)₆]³⁻", "[Cr(NH₃)₆]³⁺"],
        answer: 1,
      },
      {
        question: "What is the geometry of [Fe(CN)₆]³⁻?",
        options: ["Octahedral", "Tetrahedral", "Square planar", "Linear"],
        answer: 0,
      },
      {
        question:
          "Which d-orbital transition causes color in transition metal ions?",
        options: ["s to p", "d to s", "d to d", "p to d"],
        answer: 2,
      },
      {
        question: "Which ligand can form a chelate complex?",
        options: ["H₂O", "Cl⁻", "NH₃", "en (ethane-1,2-diamine)"],
        answer: 3,
      },
      {
        question: "Which oxidation state is most stable for Fe?",
        options: ["+1", "+2", "+3", "+6"],
        answer: 2,
      },
      {
        question: "Which color is typical of Ni²⁺ in aqueous solution?",
        options: ["Pink", "Green", "Yellow", "Blue"],
        answer: 1,
      },
      {
        question: "What is the role of transition metals in catalysis?",
        options: [
          "Reducing agents",
          "Forming new elements",
          "Providing active sites",
          "Breaking bonds permanently",
        ],
        answer: 2,
      },
      {
        question: "Which transition metal ion is diamagnetic?",
        options: ["Fe³⁺", "Zn²⁺", "Cu²⁺", "Co²⁺"],
        answer: 1,
      },
      {
        question:
          "Which feature of transition metals allows them to form complex ions?",
        options: [
          "High ionization energy",
          "Empty d orbitals",
          "Non-metallic nature",
          "Low reactivity",
        ],
        answer: 1,
      },
      {
        question: "Which of these ligands is monodentate?",
        options: ["Oxalate", "EDTA", "H₂O", "en"],
        answer: 2,
      },
      {
        question:
          "Which of these has the highest crystal field splitting energy?",
        options: ["[Fe(H₂O)₆]²⁺", "[Fe(CN)₆]³⁻", "[Cu(H₂O)₄]²⁺", "[NiCl₄]²⁻"],
        answer: 1,
      },
      {
        question:
          "Which factor affects the color of a transition metal complex?",
        options: [
          "Number of neutrons",
          "Ligand field strength",
          "Atomic mass",
          "Melting point",
        ],
        answer: 1,
      },
      {
        question: "Why is Zn²⁺ colorless?",
        options: [
          "Filled d-orbitals",
          "Empty d-orbitals",
          "d-d transitions",
          "Unpaired electrons",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is a polydentate ligand?",
        options: ["H₂O", "NH₃", "EDTA", "Cl⁻"],
        answer: 2,
      },
      {
        question: "What is the shape of [Ni(CN)₄]²⁻?",
        options: [
          "Octahedral",
          "Square planar",
          "Tetrahedral",
          "Trigonal planar",
        ],
        answer: 1,
      },
      {
        question: "Which ion shows a yellow color in solution?",
        options: ["Fe²⁺", "Fe³⁺", "Cu⁺", "Co²⁺"],
        answer: 1,
      },
      {
        question: "Which transition metal ion has a d⁶ configuration?",
        options: ["Fe²⁺", "Mn²⁺", "Cr³⁺", "Ni²⁺"],
        answer: 0,
      },
      {
        question: "Which is a feature of first-row transition metals?",
        options: [
          "Only one oxidation state",
          "High reactivity",
          "Similar atomic sizes",
          "No catalytic properties",
        ],
        answer: 2,
      },
      {
        question: "Which of the following is a strong field ligand?",
        options: ["H₂O", "NH₃", "CN⁻", "F⁻"],
        answer: 2,
      },
      {
        question: "What color is Co²⁺ in aqueous solution?",
        options: ["Pink", "Green", "Blue", "Yellow"],
        answer: 0,
      },
      {
        question:
          "Which of these has a d⁵ electron configuration in its +3 state?",
        options: ["Mn", "Fe", "Cr", "Co"],
        answer: 2,
      },
      {
        question:
          "Which metal can form both +2 and +3 oxidation states commonly?",
        options: ["Zn", "Fe", "Na", "Mg"],
        answer: 1,
      },
      {
        question: "What type of magnetism does Cu²⁺ show?",
        options: [
          "Ferromagnetic",
          "Paramagnetic",
          "Diamagnetic",
          "Antimagnetic",
        ],
        answer: 1,
      },
      {
        question: "Which orbital is split in a transition metal complex?",
        options: ["s", "p", "d", "f"],
        answer: 2,
      },
      {
        question: "What causes ligand field splitting?",
        options: [
          "Electric current",
          "Covalent bonding",
          "Ligand approach",
          "Size of the metal",
        ],
        answer: 2,
      },
      {
        question: "What is the oxidation state of Co in [Co(NH₃)₆]³⁺?",
        options: ["+2", "+3", "+1", "0"],
        answer: 1,
      },
      {
        question: "Which transition metal is found in chlorophyll?",
        options: ["Iron", "Copper", "Magnesium", "Manganese"],
        answer: 2,
      },
      {
        question: "What is the geometry of [Cr(H₂O)₆]³⁺?",
        options: [
          "Octahedral",
          "Tetrahedral",
          "Square planar",
          "Trigonal bipyramidal",
        ],
        answer: 0,
      },
      {
        question: "Which ion has no unpaired electrons?",
        options: ["Mn²⁺", "Zn²⁺", "Fe²⁺", "Ni²⁺"],
        answer: 1,
      },
      {
        question:
          "Which ligand would cause the greatest splitting of d-orbitals?",
        options: ["I⁻", "Br⁻", "NH₃", "CN⁻"],
        answer: 3,
      },
      {
        question:
          "Which transition metal ion is yellow in acidic solution as chromate?",
        options: ["Cr³⁺", "CrO₄²⁻", "Cr₂O₇²⁻", "Cr⁶⁺"],
        answer: 1,
      },
      {
        question:
          "Which oxidation state of copper is more stable in aqueous solution?",
        options: ["+1", "+2", "+3", "0"],
        answer: 1,
      },
      {
        question: "What is a coordination compound?",
        options: [
          "Ionic salt",
          "Compound with ligands around a central atom",
          "Non-metallic element",
          "Redox pair",
        ],
        answer: 1,
      },
      {
        question: "Which transition element is part of vitamin B12?",
        options: ["Cobalt", "Nickel", "Zinc", "Iron"],
        answer: 0,
      },
      {
        question: "What is the oxidation number of Fe in Fe₂O₃?",
        options: ["+2", "+3", "+4", "+6"],
        answer: 1,
      },
      {
        question: "Which of the following ions is colorless in solution?",
        options: ["Zn²⁺", "Fe³⁺", "Cr³⁺", "Mn²⁺"],
        answer: 0,
      },
      {
        question: "Which transition element is used in rechargeable batteries?",
        options: ["Zn", "Mn", "Cr", "Co"],
        answer: 3,
      },
      {
        question:
          "Which transition metal forms a violet solution as [Cr(H₂O)₆]³⁺?",
        options: ["Manganese", "Chromium", "Cobalt", "Nickel"],
        answer: 1,
      },
      {
        question: "What type of hybridization is shown in [Ni(CN)₄]²⁻?",
        options: ["sp³", "sp²", "dsp²", "sp³d"],
        answer: 2,
      },
    ],
    hard: [
      {
        question: "Which isotope is commonly used in carbon NMR?",
        options: ["C-14", "C-13", "C-12", "C-11"],
        answer: 1,
      },
      {
        question: "A base peak in mass spectrometry is:",
        options: [
          "Heaviest ion",
          "Most intense peak",
          "Smallest ion",
          "Last peak",
        ],
        answer: 1,
      },
      {
        question: "Spin-spin splitting occurs when:",
        options: [
          "No neighbors",
          "Identical H",
          "Non-equivalent adjacent protons",
          "All protons resonate",
        ],
        answer: 2,
      },
      {
        question: "UV spectroscopy is mainly used for:",
        options: ["Alkanes", "Conjugated systems", "Amines", "Acids"],
        answer: 1,
      },
      {
        question: "The N+1 rule in NMR helps predict:",
        options: [
          "Chemical shifts",
          "Number of signals",
          "Spin multiplicity",
          "Magnetic field",
        ],
        answer: 2,
      },
      {
        question: "Fragmentation in mass spec can involve:",
        options: [
          "Beta-cleavage",
          "Alpha-cleavage",
          "McLafferty rearrangement",
          "All of these",
        ],
        answer: 3,
      },
      {
        question: "High-resolution mass spec helps determine:",
        options: [
          "Functional groups",
          "Structure",
          "Molecular formula",
          "Spin states",
        ],
        answer: 2,
      },
      {
        question: "What is DEPT in NMR?",
        options: [
          "A type of IR",
          "UV absorption",
          "A proton decoupling method",
          "Mass analysis",
        ],
        answer: 2,
      },
      {
        question: "In NMR, shielding causes signals to shift:",
        options: ["Downfield", "Upfield", "No change", "Split"],
        answer: 1,
      },
      {
        question: "The molecular ion peak corresponds to:",
        options: [
          "Neutral fragment",
          "Radical",
          "Unfragmented molecule",
          "Base ion",
        ],
        answer: 2,
      },
      {
        question: "In IR spectroscopy, the C=O stretch typically appears near:",
        options: ["2200 cm⁻¹", "1700 cm⁻¹", "1500 cm⁻¹", "3000 cm⁻¹"],
        answer: 1,
      },
      {
        question: "Which nuclei are NMR-active?",
        options: [
          "Even protons and neutrons",
          "Even-even nuclei",
          "Nuclei with odd mass or atomic numbers",
          "All isotopes",
        ],
        answer: 2,
      },
      {
        question: "In mass spectrometry, what causes M+2 peaks?",
        options: ["Isotopes", "Contamination", "Fragmentation", "Dimerization"],
        answer: 0,
      },
      {
        question: "Which transition metal ion is EPR active?",
        options: ["Zn²⁺", "Ni²⁺", "Fe³⁺", "Cu⁺"],
        answer: 2,
      },
      {
        question: "Which solvent is typically used in proton NMR?",
        options: ["H₂O", "CDCl₃", "D₂O", "CCl₄"],
        answer: 1,
      },
      {
        question:
          "Which splitting pattern arises from 2 equivalent adjacent protons in NMR?",
        options: ["Doublet", "Triplet", "Quartet", "Singlet"],
        answer: 1,
      },
      {
        question: "A singlet in a ¹H NMR spectrum indicates:",
        options: [
          "Two neighbors",
          "No neighboring hydrogens",
          "Three neighbors",
          "One neighbor",
        ],
        answer: 1,
      },
      {
        question: "The 'g' value in EPR indicates:",
        options: [
          "Magnetic moment",
          "Spin multiplicity",
          "Magnetic field strength",
          "Electron environment",
        ],
        answer: 3,
      },
      {
        question: "In UV-Vis, π→π* transitions occur in:",
        options: ["Alkanes", "Alkenes", "Alkynes", "Aromatic rings"],
        answer: 3,
      },
      {
        question: "Which element causes hyperfine splitting in EPR?",
        options: ["Hydrogen", "Helium", "Fluorine", "Oxygen"],
        answer: 0,
      },
      {
        question: "The McLafferty rearrangement involves:",
        options: [
          "Loss of methyl group",
          "γ-Hydrogen transfer",
          "Charge migration",
          "Ring opening",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is not a fingerprint region in IR?",
        options: [
          "1000–1300 cm⁻¹",
          "600–900 cm⁻¹",
          "1500–2000 cm⁻¹",
          "400–1500 cm⁻¹",
        ],
        answer: 2,
      },
      {
        question: "Which isotope is commonly used in phosphorus NMR?",
        options: ["³¹P", "³²P", "³⁰P", "³³P"],
        answer: 0,
      },
      {
        question: "In EPR spectroscopy, what is detected?",
        options: [
          "Electrons in bonding orbitals",
          "Unpaired electrons",
          "Nuclear spins",
          "Photon energy",
        ],
        answer: 1,
      },
      {
        question:
          "The splitting of d-orbitals in an octahedral field results in:",
        options: ["eg and t2g", "px and py", "sp and sp³", "t and e"],
        answer: 0,
      },
      {
        question: "Which transition metal complex is low spin?",
        options: ["[Fe(H₂O)₆]²⁺", "[CoF₆]³⁻", "[Fe(CN)₆]³⁻", "[CrCl₄]⁻"],
        answer: 2,
      },
      {
        question: "In ¹³C NMR, the number of signals corresponds to:",
        options: [
          "Number of carbon atoms",
          "Number of unique carbon environments",
          "Mass of carbon",
          "Number of protons",
        ],
        answer: 1,
      },
      {
        question: "Which of the following ligands causes high field splitting?",
        options: ["H₂O", "Cl⁻", "NH₃", "CN⁻"],
        answer: 3,
      },
      {
        question: "Which is a triplet of doublets in ¹H NMR likely caused by?",
        options: [
          "Two sets of equivalent protons",
          "Three neighboring protons",
          "Two non-equivalent proton groups",
          "Exchange with solvent",
        ],
        answer: 2,
      },
      {
        question: "In DEPT-135, which carbon types appear inverted?",
        options: ["CH", "CH₂", "CH₃", "C (quaternary)"],
        answer: 1,
      },
      {
        question: "The most intense peak in a mass spectrum is called:",
        options: ["Parent peak", "Molecular ion", "Base peak", "Fragment peak"],
        answer: 2,
      },
      {
        question: "Which of the following is not observed in ¹H NMR?",
        options: [
          "Exchangeable protons",
          "Shielded protons",
          "Coupled protons",
          "Neutron interactions",
        ],
        answer: 3,
      },
      {
        question:
          "What type of transition occurs in UV-Vis for conjugated systems?",
        options: ["σ→σ*", "π→π*", "n→σ*", "d→d"],
        answer: 1,
      },
      {
        question: "In IR, a broad peak around 3300 cm⁻¹ is due to:",
        options: ["CH", "NH", "OH", "CO"],
        answer: 2,
      },
      {
        question: "Transition metals show color due to:",
        options: ["π→π*", "Charge transfer", "d-d transitions", "IR activity"],
        answer: 2,
      },
      {
        question:
          "Which isotope is commonly used in proton decoupling for ¹³C NMR?",
        options: ["¹H", "²H", "¹³C", "¹⁴N"],
        answer: 0,
      },
      {
        question: "What is the origin of splitting in NMR spectra?",
        options: [
          "Instrument resolution",
          "External field",
          "Spin-spin coupling",
          "Shielding effects",
        ],
        answer: 2,
      },
      {
        question:
          "Which functional group shows strong IR absorption near 2250 cm⁻¹?",
        options: ["Carboxylic acid", "Nitrile", "Ketone", "Alkene"],
        answer: 1,
      },
      {
        question: "Which species will show EPR spectrum?",
        options: ["Zn²⁺", "Fe²⁺", "Cr³⁺", "Cu²⁺"],
        answer: 3,
      },
      {
        question:
          "Which region in the IR spectrum is known as the fingerprint region?",
        options: [
          "<1500 cm⁻¹",
          "1500–2000 cm⁻¹",
          "2000–2500 cm⁻¹",
          ">3000 cm⁻¹",
        ],
        answer: 0,
      },
      {
        question: "TMS is used as a reference in NMR because it is:",
        options: [
          "Acidic",
          "Paramagnetic",
          "Inert and volatile",
          "Highly polar",
        ],
        answer: 2,
      },
      {
        question: "Which of the following shows satellite peaks in ¹H NMR?",
        options: [
          "¹H-¹H coupling",
          "¹³C coupling",
          "Spin echo",
          "Exchangeable protons",
        ],
        answer: 1,
      },
      {
        question:
          "Which compound will have the highest chemical shift in ¹H NMR?",
        options: ["Alkane", "Alkyne", "Aldehyde", "Ether"],
        answer: 2,
      },
      {
        question: "What is the principle of EPR spectroscopy?",
        options: [
          "Nuclear spin transitions",
          "Magnetic field gradient",
          "Unpaired electron spin transitions",
          "Absorption of visible light",
        ],
        answer: 2,
      },
      {
        question:
          "Which ion has a d⁷ configuration in octahedral field (low spin)?",
        options: ["Co³⁺", "Fe²⁺", "Ni²⁺", "Mn²⁺"],
        answer: 0,
      },
      {
        question:
          "Which of these is not an allowed electronic transition in UV-Vis?",
        options: ["π→π*", "σ→σ*", "d→s", "n→π*"],
        answer: 2,
      },
      {
        question: "Why is CDCl₃ used instead of CHCl₃ in ¹H NMR?",
        options: [
          "It's cheaper",
          "It is more volatile",
          "Does not interfere with proton signals",
          "Provides better resolution",
        ],
        answer: 2,
      },
      {
        question: "Which rule explains the splitting of NMR signals?",
        options: [
          "Nernst equation",
          "Pascal's triangle",
          "Beer-Lambert law",
          "Heisenberg rule",
        ],
        answer: 1,
      },
      {
        question: "Which IR band is indicative of a nitro group?",
        options: ["~1700 cm⁻¹", "~1600 cm⁻¹", "1300–1550 cm⁻¹", "~2200 cm⁻¹"],
        answer: 2,
      },
      {
        question: "Which technique distinguishes CH, CH₂, and CH₃ groups?",
        options: ["¹³C NMR", "DEPT NMR", "UV-Vis", "Mass Spectrometry"],
        answer: 1,
      },
    ],
  },

  nomenclature_and_functional_groups_classes_of_organic_compounds: {
    easy: [
      {
        question: "What is the suffix for alcohols in IUPAC names?",
        options: ["-one", "-ene", "-ol", "-al"],
        answer: 2,
      },
      {
        question: "Which group is represented by –COOH?",
        options: ["Alcohol", "Ester", "Carboxylic acid", "Amide"],
        answer: 2,
      },
      {
        question: "What is the name of CH₄?",
        options: ["Ethane", "Methane", "Propane", "Butane"],
        answer: 1,
      },
      {
        question: "Which functional group is –OH?",
        options: ["Aldehyde", "Alcohol", "Ketone", "Amine"],
        answer: 1,
      },
      {
        question: "The IUPAC name of CH₃CH₂OH is:",
        options: ["Methanol", "Ethanol", "Propanol", "Butanol"],
        answer: 1,
      },
      {
        question: "What does –NH₂ represent?",
        options: ["Nitrate", "Amine", "Amide", "Amino acid"],
        answer: 1,
      },
      {
        question: "The suffix '-al' is used for:",
        options: ["Ketones", "Alcohols", "Aldehydes", "Carboxylic acids"],
        answer: 2,
      },
      {
        question: "How many carbon atoms are in butane?",
        options: ["2", "3", "4", "5"],
        answer: 2,
      },
      {
        question: "Which compound has a carbon–carbon double bond?",
        options: ["Alkyne", "Alkene", "Alkane", "Alcohol"],
        answer: 1,
      },
      {
        question: "Which of the following is a ketone?",
        options: ["CH₃CH₂OH", "CH₃COCH₃", "CH₃CHO", "HCOOH"],
        answer: 1,
      },
      {
        question: "What is the name of CH₃CH₃?",
        options: ["Methane", "Ethane", "Propane", "Butane"],
        answer: 1,
      },
      {
        question: "The prefix 'meth-' indicates how many carbon atoms?",
        options: ["1", "2", "3", "4"],
        answer: 0,
      },
      {
        question: "What type of compound is CH₃CH₂CH₂CH₃?",
        options: ["Alkane", "Alkene", "Alkyne", "Alcohol"],
        answer: 0,
      },
      {
        question: "Which functional group is found in all alcohols?",
        options: ["–COOH", "–OH", "–NH₂", "–CO–"],
        answer: 1,
      },
      {
        question: "What is the name of CH₃OH?",
        options: ["Methanol", "Ethanol", "Propanol", "Butanol"],
        answer: 0,
      },
      {
        question: "The IUPAC name of HCHO is:",
        options: ["Methanol", "Formaldehyde", "Methanal", "Methanoic acid"],
        answer: 2,
      },
      {
        question: "Which of these is an alkene?",
        options: ["CH₄", "CH₃CH₃", "CH₂=CH₂", "CH≡CH"],
        answer: 2,
      },
      {
        question: "Which of the following is a hydrocarbon?",
        options: ["CH₄", "H₂O", "CO₂", "NH₃"],
        answer: 0,
      },
      {
        question: "Which element is always present in organic compounds?",
        options: ["Oxygen", "Carbon", "Nitrogen", "Sulfur"],
        answer: 1,
      },
      {
        question: "The compound CH₃COOH is classified as:",
        options: ["Alcohol", "Ester", "Carboxylic acid", "Amide"],
        answer: 2,
      },
      {
        question: "Which gas is a saturated hydrocarbon?",
        options: ["Ethene", "Methane", "Propyne", "Benzene"],
        answer: 1,
      },
      {
        question: "The functional group of aldehydes is:",
        options: ["–CHO", "–OH", "–CO–", "–COOH"],
        answer: 0,
      },
      {
        question: "How many bonds does carbon typically form?",
        options: ["1", "2", "3", "4"],
        answer: 3,
      },
      {
        question: "What is the simplest alkene?",
        options: ["Methane", "Ethene", "Propene", "Butene"],
        answer: 1,
      },
      {
        question: "Which name represents CH₃CH₂CH₃?",
        options: ["Methane", "Ethane", "Propane", "Butane"],
        answer: 2,
      },
      {
        question: "Which of the following is a carboxylic acid?",
        options: ["CH₃CH₂OH", "CH₃COOH", "CH₄", "CH₃CHO"],
        answer: 1,
      },
      {
        question: "Which compound contains a triple bond?",
        options: ["CH₄", "CH₂=CH₂", "CH≡CH", "CH₃CH₃"],
        answer: 2,
      },
      {
        question: "The name ending '-one' indicates a:",
        options: ["Carboxylic acid", "Alcohol", "Ketone", "Ester"],
        answer: 2,
      },
      {
        question: "What is the name for CH₃CH=CH₂?",
        options: ["Propene", "Propane", "Propyne", "Methene"],
        answer: 0,
      },
      {
        question: "Which is the correct name for CH₃CH₂CHO?",
        options: ["Ethanol", "Propanoic acid", "Propanone", "Propanal"],
        answer: 3,
      },
      {
        question: "What is the IUPAC name of vinegar's active ingredient?",
        options: [
          "Formic acid",
          "Methanoic acid",
          "Ethanoic acid",
          "Acetic acid",
        ],
        answer: 2,
      },
      {
        question: "Which compound is a simple ether?",
        options: ["CH₃OCH₃", "CH₃OH", "CH₄", "CH₃CH₂OH"],
        answer: 0,
      },
      {
        question: "The prefix 'prop-' means how many carbons?",
        options: ["2", "3", "4", "5"],
        answer: 1,
      },
      {
        question: "Which functional group is in CH₃CH₂NH₂?",
        options: ["Alcohol", "Amine", "Amide", "Aldehyde"],
        answer: 1,
      },
      {
        question: "Which of the following is NOT a functional group?",
        options: ["Alkane", "Ketone", "Alcohol", "Aldehyde"],
        answer: 0,
      },
      {
        question: "What is the name of a four-carbon straight-chain alkane?",
        options: ["Butane", "Propane", "Ethane", "Methane"],
        answer: 0,
      },
      {
        question: "The general formula for alkanes is:",
        options: ["CnH₂n", "CnH₂n+1OH", "CnH₂n+2", "CnH₂n−2"],
        answer: 2,
      },
      {
        question: "Which of these is a saturated hydrocarbon?",
        options: ["Ethene", "Ethane", "Ethyne", "Propene"],
        answer: 1,
      },
      {
        question: "Which compound has the formula C₂H₂?",
        options: ["Ethene", "Ethyne", "Ethane", "Ethanol"],
        answer: 1,
      },
      {
        question: "The functional group of ketones is:",
        options: ["–COOH", "–CO–", "–OH", "–CHO"],
        answer: 1,
      },
      {
        question: "Which of these is an alcohol?",
        options: ["CH₄", "CH₃OH", "CH₃CH₃", "CH₃COOH"],
        answer: 1,
      },
      {
        question: "The compound CH₃CHO is an example of:",
        options: ["Aldehyde", "Alcohol", "Amine", "Ester"],
        answer: 0,
      },
      {
        question: "Which element forms the backbone of organic molecules?",
        options: ["Hydrogen", "Carbon", "Oxygen", "Nitrogen"],
        answer: 1,
      },
      {
        question: "Which compound is a hydrocarbon with one double bond?",
        options: ["Ethene", "Methane", "Ethane", "Butane"],
        answer: 0,
      },
      {
        question: "Which of the following is the correct IUPAC name?",
        options: [
          "Ethanoic acid",
          "Acetic acid",
          "Formic acid",
          "Ethanol acid",
        ],
        answer: 0,
      },
      {
        question: "The –COOH group is found in:",
        options: ["Carboxylic acids", "Alcohols", "Aldehydes", "Ethers"],
        answer: 0,
      },
      {
        question: "Which compound contains only single bonds?",
        options: ["CH₂=CH₂", "CH₃CH₃", "CH≡CH", "CH₃CH=CH₂"],
        answer: 1,
      },
      {
        question: "The IUPAC name of CH₃CH₂CH₂OH is:",
        options: ["Propanol", "Butanol", "Methanol", "Ethanol"],
        answer: 0,
      },
      {
        question: "What is the name of the compound CH₃CH₂CH=CH₂?",
        options: ["Butane", "Butene", "Butyne", "Propene"],
        answer: 1,
      },
      {
        question: "Which of the following has an –NH₂ group?",
        options: ["Methanol", "Methanoic acid", "Methylamine", "Acetone"],
        answer: 2,
      },
    ],
    medium: [
      {
        question: "Which of the following is a secondary alcohol?",
        options: ["Propan-2-ol", "Methanol", "Ethanol", "Tert-butanol"],
        answer: 0,
      },
      {
        question: "What is the IUPAC name of CH₃COOH?",
        options: ["Ethanal", "Methanoic acid", "Ethanoic acid", "Acetic acid"],
        answer: 2,
      },
      {
        question: "Which suffix is used for ketones?",
        options: ["-one", "-ol", "-al", "-oic acid"],
        answer: 0,
      },
      {
        question: "An ester group is represented as:",
        options: ["R-OH", "R-COOR'", "R-NH₂", "R-CHO"],
        answer: 1,
      },
      {
        question: "What is the IUPAC name of CH₃CH₂CH₂CH₃?",
        options: ["Methane", "Butane", "Pentane", "Propane"],
        answer: 1,
      },
      {
        question: "The root name 'pent-' indicates:",
        options: ["3 C atoms", "4 C atoms", "5 C atoms", "6 C atoms"],
        answer: 2,
      },
      {
        question: "A compound with both –NH₂ and –COOH groups is called:",
        options: ["Alcohol", "Ester", "Amine", "Amino acid"],
        answer: 3,
      },
      {
        question: "Which is a tertiary alcohol?",
        options: ["2-methylpropan-2-ol", "Ethanol", "Propan-1-ol", "Methanol"],
        answer: 0,
      },
      {
        question:
          "Which prefix is used when a compound has two identical groups?",
        options: ["Mono", "Di", "Tri", "Tetra"],
        answer: 1,
      },
      {
        question: "Which compound is a primary amine?",
        options: ["CH₃NH₂", "(CH₃)₂NH", "(CH₃)₃N", "CH₃CONH₂"],
        answer: 0,
      },

      {
        question: "Which of the following is a primary alcohol?",
        options: [
          "Propan-2-ol",
          "Ethanol",
          "Tert-butanol",
          "2-methylpropan-2-ol",
        ],
        answer: 1,
      },
      {
        question: "The general formula for alkenes is:",
        options: ["CnH₂n+2", "CnH₂n", "CnH₂n−2", "CnH₂n+1OH"],
        answer: 1,
      },
      {
        question: "Which of these represents an aldehyde functional group?",
        options: ["–CHO", "–COOH", "–CO–", "–NH₂"],
        answer: 0,
      },
      {
        question: "What is the IUPAC name of HCOOH?",
        options: ["Methanoic acid", "Formic acid", "Formaldehyde", "Methanal"],
        answer: 0,
      },
      {
        question: "Which compound is an isomer of butanol?",
        options: ["CH₃CH₂CH₂OH", "CH₃CH₂CH₂CH₃", "CH₃CH(OH)CH₃", "CH₃COOH"],
        answer: 2,
      },
      {
        question: "Which of the following contains a carboxyl group?",
        options: ["CH₃COOH", "CH₃CHO", "CH₃CH₂OH", "CH₃CH₂NH₂"],
        answer: 0,
      },
      {
        question: "What is the functional group in propanal?",
        options: ["Alcohol", "Ketone", "Aldehyde", "Carboxylic acid"],
        answer: 2,
      },
      {
        question: "The compound CH₃COCH₃ belongs to which class?",
        options: ["Aldehyde", "Alcohol", "Ketone", "Amide"],
        answer: 2,
      },
      {
        question: "Which compound has a triple bond?",
        options: ["Butene", "Butyne", "Butane", "Propanol"],
        answer: 1,
      },
      {
        question: "Which of the following is a functional group of ethers?",
        options: ["–O–", "–OH", "–COOH", "–NH₂"],
        answer: 0,
      },
      {
        question: "What is the IUPAC name of CH₃CH₂CHO?",
        options: ["Propanoic acid", "Propanol", "Propanal", "Propanone"],
        answer: 2,
      },
      {
        question: "Which of these is a saturated hydrocarbon?",
        options: ["Ethene", "Ethyne", "Ethane", "Benzene"],
        answer: 2,
      },
      {
        question: "Which functional group does an amide contain?",
        options: ["–COOH", "–NH₂", "–CO–NH₂", "–O–"],
        answer: 2,
      },
      {
        question: "What is the IUPAC name for CH₃OCH₂CH₃?",
        options: [
          "Methoxyethane",
          "Ethyl methyl ether",
          "Propoxyethane",
          "Ethanol",
        ],
        answer: 0,
      },
      {
        question: "Which is the correct IUPAC name for isobutane?",
        options: [
          "Butane",
          "2-methylpropane",
          "Methylpropane",
          "Isopropylmethane",
        ],
        answer: 1,
      },
      {
        question: "Which type of compound is CH₃NH₂?",
        options: ["Amine", "Amide", "Alcohol", "Aldehyde"],
        answer: 0,
      },
      {
        question: "The functional group –CO– is found in:",
        options: ["Alcohols", "Ketones", "Aldehydes", "Esters"],
        answer: 1,
      },
      {
        question: "Which of the following contains a phenol group?",
        options: ["Benzene", "Phenol", "Toluene", "Aniline"],
        answer: 1,
      },
      {
        question: "Which molecule is a secondary amine?",
        options: ["CH₃NH₂", "(CH₃)₂NH", "CH₃CH₂NH₂", "(CH₃)₃N"],
        answer: 1,
      },
      {
        question: "Which of these compounds is an ester?",
        options: ["CH₃COOH", "CH₃COOCH₃", "CH₃CH₂OH", "CH₃CHO"],
        answer: 1,
      },
      {
        question: "Which functional group defines carboxylic acids?",
        options: ["–COOH", "–CHO", "–CO–", "–OH"],
        answer: 0,
      },
      {
        question: "What is the IUPAC name of CH₃CH₂CH₂OH?",
        options: ["Ethanol", "Propan-1-ol", "Methanol", "Propan-2-ol"],
        answer: 1,
      },
      {
        question: "Which of the following is an alkene?",
        options: ["CH₄", "CH₃CH=CH₂", "CH₃CH₃", "CH₃C≡CH"],
        answer: 1,
      },
      {
        question: "Which compound contains a benzene ring?",
        options: ["Aniline", "Propanol", "Acetone", "Butane"],
        answer: 0,
      },
      {
        question: "Which functional group is present in CH₃CH₂COOH?",
        options: ["Ketone", "Alcohol", "Aldehyde", "Carboxylic acid"],
        answer: 3,
      },
      {
        question: "What is the correct name for CH₃CH₂COOCH₃?",
        options: [
          "Methyl propanoate",
          "Ethyl propanoate",
          "Methyl ethanoate",
          "Propyl methanoate",
        ],
        answer: 0,
      },
      {
        question: "Which of these compounds is an alkyne?",
        options: ["CH₄", "CH₃CH=CH₂", "CH₃C≡CH", "CH₃CH₂CH₃"],
        answer: 2,
      },
      {
        question: "What is the name for CH₂=CH–CH₃?",
        options: ["Propane", "Propyne", "Propene", "Butene"],
        answer: 2,
      },
      {
        question: "Which compound has an –OH group on a benzene ring?",
        options: ["Aniline", "Phenol", "Toluene", "Benzaldehyde"],
        answer: 1,
      },
      {
        question: "Which is an example of a dicarboxylic acid?",
        options: ["Malonic acid", "Acetic acid", "Benzoic acid", "Lactic acid"],
        answer: 0,
      },
      {
        question: "The general formula for carboxylic acids is:",
        options: ["R–OH", "R–COOH", "R–CHO", "R–COOR"],
        answer: 1,
      },
      {
        question: "The compound CH₃CH(NH₂)COOH is an example of:",
        options: ["Amino acid", "Amine", "Alcohol", "Amide"],
        answer: 0,
      },
      {
        question: "Which name corresponds to CH₃CH(OH)CH₃?",
        options: ["Propan-1-ol", "Propan-2-ol", "Butan-2-ol", "Methanol"],
        answer: 1,
      },
      {
        question: "Which group makes a compound an amide?",
        options: ["–CO–", "–COOH", "–CO–NH₂", "–NH₂"],
        answer: 2,
      },
      {
        question: "Which of these is a carboxylic acid derivative?",
        options: ["Amide", "Amine", "Alcohol", "Ketone"],
        answer: 0,
      },
      {
        question: "Which compound is a structural isomer of CH₃CH₂OH?",
        options: ["CH₃OCH₃", "CH₄", "CH₃CH₃", "CH₃CH₂CH₃"],
        answer: 0,
      },
      {
        question: "Which class of compounds is characterized by –COOR?",
        options: ["Amide", "Ester", "Alcohol", "Ketone"],
        answer: 1,
      },
      {
        question: "What is the IUPAC name of CH₃CH₂OCH₂CH₃?",
        options: ["Ethoxyethane", "Diethyl ether", "Ethanol", "Butanol"],
        answer: 0,
      },
      {
        question: "Which functional group gives aldehydes their properties?",
        options: ["–COOH", "–CHO", "–OH", "–CO–"],
        answer: 1,
      },
    ],
    hard: [
      {
        question: "Which compound is named as but-2-en-1-ol?",
        options: [
          "A 4-carbon alcohol with a double bond at C-2",
          "A 3-carbon alcohol with a triple bond",
          "A ketone with OH on C-1",
          "An ester with 2 carbon atoms",
        ],
        answer: 0,
      },
      {
        question: "What is the IUPAC name of CH₃CH=CHCOOH?",
        options: [
          "Butenoic acid",
          "But-2-enoic acid",
          "But-3-enoic acid",
          "Propanoic acid",
        ],
        answer: 1,
      },
      {
        question: "An amide functional group contains:",
        options: ["C=O and NH₂", "COOH and NH₂", "C=NH", "CH=NH"],
        answer: 0,
      },
      {
        question: "Which of these has the highest priority in naming?",
        options: ["Alcohol", "Amine", "Carboxylic acid", "Ketone"],
        answer: 2,
      },
      {
        question: "Which is the correct name for CH₃CH₂CH₂CHO?",
        options: ["Butanol", "Butanoic acid", "Butanal", "Propanal"],
        answer: 2,
      },
      {
        question: "Identify a molecule with both ketone and amine groups.",
        options: ["CH₃COCH₂NH₂", "CH₃CH₂OH", "CH₃CH=CH₂", "CH₃NHCH₃"],
        answer: 0,
      },
      {
        question: "Which suffix is used for naming esters?",
        options: ["-oate", "-ol", "-al", "-one"],
        answer: 0,
      },
      {
        question: "In IUPAC naming, which comes first?",
        options: [
          "Functional group",
          "Longest chain",
          "Position of substituents",
          "Alphabetical order",
        ],
        answer: 1,
      },
      {
        question: "Which has both alkene and carboxylic acid groups?",
        options: [
          "Butanoic acid",
          "Pentene",
          "Pent-2-enoic acid",
          "Propanoic acid",
        ],
        answer: 2,
      },
      {
        question: "The correct name for CH₃CH(NH₂)COOH is:",
        options: [
          "Alanine",
          "Aminoacetic acid",
          "2-Aminopropanoic acid",
          "Glycine",
        ],
        answer: 2,
      },
      {
        question: "Which functional group is present in aniline?",
        options: ["Aromatic amine", "Aliphatic amine", "Ketone", "Aldehyde"],
        answer: 0,
      },
      {
        question: "What is the IUPAC name of CH≡CCH₂CH₃?",
        options: ["Butyne", "But-1-yne", "But-2-yne", "Propyne"],
        answer: 1,
      },
      {
        question: "Which compound is a nitrile?",
        options: ["CH₃CH₂OH", "CH₃CN", "CH₃COOH", "CH₃NH₂"],
        answer: 1,
      },
      {
        question: "What is the IUPAC name of CH₃CH₂COCH₃?",
        options: ["Propanone", "Butanone", "Ethanone", "Propanal"],
        answer: 1,
      },
      {
        question: "Which of the following is a secondary amide?",
        options: ["CH₃CONH₂", "CH₃CONHCH₃", "CH₃CH₂NH₂", "CH₃NHCH₃"],
        answer: 1,
      },
      {
        question: "Which name corresponds to CH₂=CHCOOH?",
        options: [
          "Ethanoic acid",
          "Propanoic acid",
          "Propenoic acid",
          "Butenoic acid",
        ],
        answer: 2,
      },
      {
        question: "In naming branched alkanes, which rule is applied first?",
        options: [
          "Alphabetical order",
          "Shortest chain",
          "Lowest locant",
          "Most substituents",
        ],
        answer: 2,
      },
      {
        question: "Which of the following has an ether functional group?",
        options: ["CH₃CH₂OCH₃", "CH₃COOH", "CH₃CHO", "CH₃NH₂"],
        answer: 0,
      },
      {
        question: "The compound CH₃CH=CHCH₂CH₃ is called:",
        options: ["Pentane", "Pent-2-ene", "Butene", "Propenyl"],
        answer: 1,
      },
      {
        question: "Which is an IUPAC name for isopropanol?",
        options: ["Propan-2-ol", "2-methylpropanol", "Propan-1-ol", "Methanol"],
        answer: 0,
      },
      {
        question: "What is the correct IUPAC name of CH₃CH(NH₂)CH₃?",
        options: [
          "2-Aminopropane",
          "Aminomethane",
          "Propan-2-amine",
          "Isopropylamine",
        ],
        answer: 2,
      },
      {
        question: "A compound with –COOCH₃ is classified as:",
        options: ["Ester", "Ether", "Carboxylic acid", "Ketone"],
        answer: 0,
      },
      {
        question: "Which group takes priority in IUPAC naming?",
        options: ["Alcohol", "Aldehyde", "Ketone", "Ester"],
        answer: 3,
      },
      {
        question: "Which of the following is a diacid?",
        options: ["CH₃COOH", "HOOC–CH₂–COOH", "CH₃CH₂OH", "HCOOH"],
        answer: 1,
      },
      {
        question: "The name of (CH₃)₂CHCH₂COOH is:",
        options: [
          "2-Methylbutanoic acid",
          "3-Methylbutanoic acid",
          "Pentanoic acid",
          "Propanoic acid",
        ],
        answer: 1,
      },
      {
        question: "Which of these contains both alkene and alcohol groups?",
        options: ["CH₂=CHCH₂OH", "CH₃CH₂OH", "CH₃COOH", "CH₂=CH₂"],
        answer: 0,
      },
      {
        question: "What is the IUPAC name of CH₃CONH₂?",
        options: ["Methanamide", "Ethanamide", "Acetamide", "Propanamide"],
        answer: 1,
      },
      {
        question: "What type of isomerism is shown by CH₃OCH₃ and CH₃CH₂OH?",
        options: ["Chain", "Position", "Functional group", "Geometric"],
        answer: 2,
      },
      {
        question: "Which has a quaternary carbon atom?",
        options: ["CH₃C(CH₃)₂CH₃", "CH₃CH₂CH₂CH₃", "CH₃CH₂OH", "CH₃CH(NH₂)CH₃"],
        answer: 0,
      },
      {
        question: "Which compound has the formula C₃H₆O and is a ketone?",
        options: ["Propanal", "Propanone", "Acetone", "Methanal"],
        answer: 1,
      },
      {
        question: "Which of the following is an IUPAC name for formic acid?",
        options: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propenoic acid",
          "Acetic acid",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is not a functional group isomer?",
        options: [
          "Alcohol and ether",
          "Aldehyde and ketone",
          "Acid and ester",
          "Alkane and alkyne",
        ],
        answer: 3,
      },
      {
        question: "What is the IUPAC name of CH₃CH₂CH₂NH₂?",
        options: [
          "Propylamine",
          "Propan-1-amine",
          "Aminopropane",
          "Ethylamine",
        ],
        answer: 1,
      },
      {
        question: "How many isomers does C₄H₁₀ have?",
        options: ["1", "2", "3", "4"],
        answer: 1,
      },
      {
        question: "Which compound has a tertiary carbon center?",
        options: ["CH₃CH₂CH₂CH₃", "(CH₃)₃C–OH", "CH₃CH₂CH₂OH", "CH₃CH(OH)CH₃"],
        answer: 1,
      },
      {
        question: "The compound CH₃CH(NH₂)CH₃ is classified as:",
        options: [
          "Primary amine",
          "Secondary amine",
          "Tertiary amine",
          "Primary alcohol",
        ],
        answer: 0,
      },
      {
        question: "Which compound is an alpha-hydroxy acid?",
        options: [
          "Lactic acid",
          "Acetic acid",
          "Butanoic acid",
          "Acrylic acid",
        ],
        answer: 0,
      },
      {
        question: "Which class does acetamide belong to?",
        options: ["Ester", "Amide", "Acid", "Aldehyde"],
        answer: 1,
      },
      {
        question: "The IUPAC name for HCOOCH₃ is:",
        options: [
          "Methyl formate",
          "Methyl methanoate",
          "Formic ester",
          "Methanoic ester",
        ],
        answer: 1,
      },
      {
        question: "What is the structure of 2-methylpropan-2-ol?",
        options: [
          "Tert-butanol",
          "Isopropanol",
          "Propan-2-ol",
          "Ethyl alcohol",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is an aromatic acid?",
        options: [
          "Formic acid",
          "Benzoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is the correct name for CH₃CH₂COOH?",
        options: [
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
          "Methanoic acid",
        ],
        answer: 1,
      },
      {
        question: "Which compound has the IUPAC name ethyl ethanoate?",
        options: ["CH₃COOCH₂CH₃", "CH₃CH₂COOH", "CH₃CH₂CH₂OH", "CH₃COCH₃"],
        answer: 0,
      },
      {
        question: "Which of these compounds contains a carboxamide group?",
        options: ["CH₃CONH₂", "CH₃NH₂", "CH₃CH₂OH", "CH₃COOH"],
        answer: 0,
      },
      {
        question: "What is the functional group in propanone?",
        options: ["Ketone", "Aldehyde", "Alcohol", "Carboxylic acid"],
        answer: 0,
      },
      {
        question: "Which is a structural isomer of butan-2-ol?",
        options: [
          "2-methylpropan-2-ol",
          "Butan-1-ol",
          "Butanoic acid",
          "Pentanol",
        ],
        answer: 1,
      },
      {
        question: "Which of these contains a primary carbon atom?",
        options: ["CH₃CH₂CH₃", "CH₃C(CH₃)₃", "CH₃CH₂OH", "CH₃COCH₃"],
        answer: 2,
      },
      {
        question: "Which compound has the formula CH₃CH=CHCH₂OH?",
        options: ["But-2-en-1-ol", "Butan-1-ol", "Butanal", "Butanoic acid"],
        answer: 0,
      },
      {
        question: "Which functional group is lowest in IUPAC priority?",
        options: ["Alcohol", "Ester", "Carboxylic acid", "Amide"],
        answer: 0,
      },
      {
        question: "Which of the following is not an organic acid derivative?",
        options: ["Ester", "Amide", "Anhydride", "Ether"],
        answer: 3,
      },
    ],
  },

  stereochemistry: {
    easy: [
      {
        question: "What is stereochemistry?",
        options: [
          "Study of heat",
          "Study of light",
          "Study of 3D arrangement of atoms",
          "Study of isotopes",
        ],
        answer: 2,
      },
      {
        question: "Which of these shows cis-trans isomerism?",
        options: ["Alkanes", "Alkenes", "Alkynes", "Alcohols"],
        answer: 1,
      },
      {
        question: "What is a chiral center?",
        options: [
          "A double bond",
          "A carbon with 4 different groups",
          "A triple bond",
          "An OH group",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is an example of stereoisomerism?",
        options: [
          "Chain isomerism",
          "Positional isomerism",
          "Geometrical isomerism",
          "Functional group isomerism",
        ],
        answer: 2,
      },
      {
        question: "What is the mirror image of a chiral molecule called?",
        options: ["Isomer", "Diastereomer", "Enantiomer", "Tautomer"],
        answer: 2,
      },
      {
        question: "Which of the following compounds is chiral?",
        options: ["CH₄", "CH₃CH₃", "CHBrClF", "CO₂"],
        answer: 2,
      },
      {
        question: "Cis-but-2-ene and trans-but-2-ene are:",
        options: [
          "Enantiomers",
          "Geometrical isomers",
          "Chain isomers",
          "Conformers",
        ],
        answer: 1,
      },
      {
        question: "Stereoisomers differ in:",
        options: [
          "Molecular formula",
          "Molar mass",
          "3D spatial arrangement",
          "Number of atoms",
        ],
        answer: 2,
      },
      {
        question: "Which of these is not a type of stereoisomerism?",
        options: ["Geometrical", "Optical", "Chain", "Conformational"],
        answer: 2,
      },
      {
        question: "Which is true of enantiomers?",
        options: [
          "Same boiling point",
          "Same physical properties",
          "Rotate plane-polarized light oppositely",
          "Same taste",
        ],
        answer: 2,
      },
      {
        question: "Which of these molecules is NOT chiral?",
        options: ["CHBrClF", "2-butanol", "CH₄", "Lactic acid"],
        answer: 2,
      },
      {
        question: "A compound is chiral if it has:",
        options: [
          "Double bonds",
          "Plane of symmetry",
          "Four different groups on a carbon",
          "Only carbon and hydrogen",
        ],
        answer: 2,
      },
      {
        question: "Which of the following is true for geometrical isomers?",
        options: [
          "Different molecular formulas",
          "Mirror images",
          "Different position across double bond",
          "Always chiral",
        ],
        answer: 2,
      },
      {
        question: "What is an enantiomer?",
        options: [
          "Same structure",
          "Superimposable image",
          "Mirror image not superimposable",
          "Opposite boiling point",
        ],
        answer: 2,
      },
      {
        question: "Which of these is a conformational isomer?",
        options: [
          "Butane eclipsed and anti",
          "cis-trans isomers",
          "Chain isomers",
          "Geometrical isomers",
        ],
        answer: 0,
      },
      {
        question: "Chiral molecules are also called:",
        options: ["Superimposable", "Achiral", "Asymmetric", "Linear"],
        answer: 2,
      },
      {
        question: "Which structure cannot be chiral?",
        options: [
          "Carbon with 4 different groups",
          "Tetrahedral carbon",
          "Carbon with two same groups",
          "All of the above",
        ],
        answer: 2,
      },
      {
        question: "Which of the following is a feature of enantiomers?",
        options: [
          "Different melting points",
          "Same density",
          "Different molecular weights",
          "Different number of atoms",
        ],
        answer: 1,
      },
      {
        question:
          "Which of the following types of isomers are always non-superimposable?",
        options: ["Geometrical", "Optical", "Conformational", "Chain"],
        answer: 1,
      },
      {
        question: "Which is required for geometrical isomerism?",
        options: ["Free rotation", "Triple bond", "Double bond", "Ionic bond"],
        answer: 2,
      },
      {
        question: "Which of the following is NOT a stereoisomer?",
        options: ["Enantiomer", "Diastereomer", "Conformer", "Chain isomer"],
        answer: 3,
      },
      {
        question: "Which structure shows a plane of symmetry?",
        options: [
          "Meso compound",
          "Enantiomer",
          "Racemic mixture",
          "Chiral compound",
        ],
        answer: 0,
      },
      {
        question: "What makes a carbon chiral?",
        options: [
          "Four identical atoms",
          "Three bonds",
          "Four different groups",
          "Double bond",
        ],
        answer: 2,
      },
      {
        question: "What does racemic mean?",
        options: [
          "Only one isomer present",
          "50/50 mixture of enantiomers",
          "Only cis isomer present",
          "No stereoisomers",
        ],
        answer: 1,
      },
      {
        question: "Which of these rotates plane-polarized light?",
        options: [
          "Chiral molecule",
          "Achiral compound",
          "Symmetrical molecule",
          "All of these",
        ],
        answer: 0,
      },
      {
        question: "Which is a feature of chiral molecules?",
        options: [
          "Superimposable",
          "Symmetrical",
          "Have enantiomers",
          "No 3D structure",
        ],
        answer: 2,
      },
      {
        question: "Which of the following is NOT optically active?",
        options: [
          "Single enantiomer",
          "Meso compound",
          "Chiral compound",
          "Lactic acid",
        ],
        answer: 1,
      },
      {
        question: "Which of these is a geometric isomerism condition?",
        options: [
          "Triple bond",
          "Free rotation",
          "Restricted rotation",
          "Chiral carbon",
        ],
        answer: 2,
      },
      {
        question: "What type of isomerism occurs in alkenes?",
        options: ["Optical", "Geometrical", "Chain", "Positional"],
        answer: 1,
      },
      {
        question: "Which term relates to mirror-image isomers?",
        options: [
          "Chain isomers",
          "Functional isomers",
          "Enantiomers",
          "Geometrical isomers",
        ],
        answer: 2,
      },
      {
        question:
          "A molecule with one chiral center can have how many enantiomers?",
        options: ["None", "1", "2", "4"],
        answer: 2,
      },
      {
        question: "Geometrical isomerism occurs due to:",
        options: [
          "Free rotation",
          "Rotation restriction",
          "Ionic bond",
          "Aromatic ring",
        ],
        answer: 1,
      },
      {
        question:
          "Which of the following molecules has an internal plane of symmetry?",
        options: [
          "Meso compound",
          "Chiral alcohol",
          "Enantiomer",
          "Diastereomer",
        ],
        answer: 0,
      },
      {
        question:
          "What is the minimum number of chiral centers needed for stereoisomerism?",
        options: ["0", "1", "2", "3"],
        answer: 1,
      },
      {
        question: "Which is the best example of a chiral molecule?",
        options: ["CO₂", "CH₄", "CHBrClF", "CH₃CH₃"],
        answer: 2,
      },
      {
        question: "Which compound has no stereoisomers?",
        options: ["CHBrClF", "But-2-ene", "CH₃CH₃", "2-butanol"],
        answer: 2,
      },
      {
        question: "Which stereoisomerism is found in 2-butene?",
        options: ["Optical", "Chain", "Geometrical", "Functional"],
        answer: 2,
      },
      {
        question: "Which compound rotates plane-polarized light?",
        options: [
          "Meso compound",
          "Chiral compound",
          "Achiral compound",
          "Alkene",
        ],
        answer: 1,
      },
      {
        question:
          "The mirror image of a molecule is not superimposable. The molecule is:",
        options: ["Achiral", "Chiral", "Aliphatic", "Conformer"],
        answer: 1,
      },
      {
        question: "Which is an example of a meso compound?",
        options: [
          "CHBrClF",
          "cis-1,2-dichlorocyclopropane",
          "Lactic acid",
          "Glucose",
        ],
        answer: 1,
      },
    ],
   medium: [
  {
    question: "How many stereoisomers are possible for a molecule with 2 chiral centers?",
    options: ["2", "3", "4", "5"],
    answer: 2,
  },
  {
    question: "Which of these pairs are enantiomers?",
    options: ["Same structure", "Non-superimposable mirror images", "Superimposable mirror images", "Same rotation"],
    answer: 1,
  },
  {
    question: "Which notation is used for absolute configuration?",
    options: ["E/Z", "R/S", "cis/trans", "A/B"],
    answer: 1,
  },
  {
    question: "What is the specific rotation of a racemic mixture?",
    options: ["Positive", "Negative", "Zero", "Varies"],
    answer: 2,
  },
  {
    question: "A compound with two chiral centers that is superimposable is called:",
    options: ["Enantiomer", "Meso compound", "Diastereomer", "Optical isomer"],
    answer: 1,
  },
  {
    question: "Which pair are not mirror images?",
    options: ["R and S forms", "Enantiomers", "Diastereomers", "Optical isomers"],
    answer: 2,
  },
  {
    question: "The E/Z system applies to:",
    options: ["Chiral centers", "Cyclic compounds", "Double bonds", "Triple bonds"],
    answer: 2,
  },
  {
    question: "How many enantiomers does a molecule with one chiral center have?",
    options: ["1", "2", "3", "4"],
    answer: 1,
  },
  {
    question: "Which group has highest priority in Cahn–Ingold–Prelog rules?",
    options: ["H", "Br", "Cl", "OH"],
    answer: 1,
  },
  {
    question: "The configuration with higher priority groups on opposite sides is called:",
    options: ["cis", "trans", "E", "Z"],
    answer: 2,
  },
  {
    question: "How many optical isomers are possible with 3 chiral centers?",
    options: ["4", "6", "8", "10"],
    answer: 2,
  },
  {
    question: "Which of these compounds has a meso form?",
    options: ["2,3-dibromobutane", "2-chlorobutane", "2-butanol", "1,2-dibromoethane"],
    answer: 0,
  },
  {
    question: "Which of the following shows optical activity?",
    options: ["Meso compound", "Achiral molecule", "Enantiomer", "Symmetrical compound"],
    answer: 2,
  },
  {
    question: "Which stereoisomers are not mirror images?",
    options: ["Enantiomers", "Diastereomers", "Racemic mixtures", "Conformers"],
    answer: 1,
  },
  {
    question: "What causes optical activity in molecules?",
    options: ["Symmetry", "Polarity", "Chirality", "Ionic bonds"],
    answer: 2,
  },
  {
    question: "Which of the following has E/Z isomerism?",
    options: ["Ethene", "2-butene", "Methane", "Cyclohexane"],
    answer: 1,
  },
  {
    question: "Which isomer is more stable in alkenes?",
    options: ["cis", "trans", "E", "Z"],
    answer: 1,
  },
  {
    question: "What type of isomerism is shown by 1,2-dichloroethene?",
    options: ["Optical", "Geometrical", "Conformational", "Chain"],
    answer: 1,
  },
  {
    question: "Which is true for diastereomers?",
    options: ["Have identical melting points", "Non-superimposable mirror images", "Not mirror images", "Same optical rotation"],
    answer: 2,
  },
  {
    question: "How many stereoisomers exist for a compound with 2 chiral centers and no symmetry?",
    options: ["2", "3", "4", "5"],
    answer: 2,
  },
  {
    question: "Which type of stereoisomerism is shown by glucose and galactose?",
    options: ["Enantiomerism", "Diastereomerism", "Chain isomerism", "Conformational isomerism"],
    answer: 1,
  },
  {
    question: "What kind of isomers are R,R and S,R configurations?",
    options: ["Enantiomers", "Diastereomers", "Identical", "Meso forms"],
    answer: 1,
  },
  {
    question: "Which type of compound does not show stereoisomerism?",
    options: ["Alkene", "Alkyne", "Cycloalkane", "Chiral alcohol"],
    answer: 1,
  },
  {
    question: "Which feature is unique to optical isomers?",
    options: ["Double bonds", "Rotating plane-polarized light", "Hydrogen bonding", "High melting point"],
    answer: 1,
  },
  {
    question: "Which of the following is optically inactive?",
    options: ["Chiral compound", "Racemic mixture", "Enantiomer", "Asymmetric carbon compound"],
    answer: 1,
  },
  {
    question: "The ability to rotate light is called:",
    options: ["Polarization", "Optical activity", "Isomerism", "Electronegativity"],
    answer: 1,
  },
  {
    question: "What causes restricted rotation in E/Z isomers?",
    options: ["Single bonds", "Ionic bonds", "Pi bonds in double bonds", "Hydrogen bonding"],
    answer: 2,
  },
  {
    question: "Which molecule shows both E/Z and optical isomerism?",
    options: ["But-2-ene", "2-chlorobutane", "2,3-dihydroxybutanoic acid", "Pentane"],
    answer: 2,
  },
  {
    question: "Which compound is optically inactive despite chiral centers?",
    options: ["Enantiomer", "Meso compound", "Racemic mixture", "Diastereomer"],
    answer: 1,
  },
  {
    question: "Which is not a requirement for chirality?",
    options: ["4 different groups", "Asymmetry", "Plane of symmetry", "Sp³ hybrid carbon"],
    answer: 2,
  },
  {
    question: "Which carbon hybridization is common in chiral centers?",
    options: ["sp", "sp²", "sp³", "sp³d"],
    answer: 2,
  },
  {
    question: "Which molecule has a stereogenic center?",
    options: ["CH₄", "CH₃CH₂OH", "CH₃CH(OH)COOH", "CH₂=CH₂"],
    answer: 2,
  },
  {
    question: "Which molecule cannot be chiral?",
    options: ["CH₃CH₂Cl", "CHBrClF", "Lactic acid", "2-butanol"],
    answer: 0,
  },
  {
    question: "Which molecules show enantiomerism?",
    options: ["Alkenes", "Symmetrical alkanes", "Chiral alcohols", "Ionic salts"],
    answer: 2,
  },
  {
    question: "What type of isomerism exists in 2-chlorobutane?",
    options: ["Geometrical", "Optical", "Chain", "Positional"],
    answer: 1,
  },
  {
    question: "Which of the following cannot be optically active?",
    options: ["Enantiomer", "Meso compound", "Chiral amine", "Lactic acid"],
    answer: 1,
  },
  {
    question: "Which of the following has no chiral center?",
    options: ["CHBrClF", "CCl₄", "CH₃CH(NH₂)COOH", "Lactic acid"],
    answer: 1,
  },
  {
    question: "Why is a racemic mixture optically inactive?",
    options: ["Contains impurities", "Opposing rotations cancel", "No chiral centers", "Poor resolution"],
    answer: 1,
  },
  {
    question: "Which of these cannot exhibit E/Z isomerism?",
    options: ["But-2-ene", "1-butene", "Cyclohexene", "Pent-2-ene"],
    answer: 1,
  }
],
    hard: [
  {
    question: "What is the formula to calculate max stereoisomers (no symmetry)?",
    options: ["2n", "n²", "n!", "2ⁿ"],
    answer: 3,
  },
  {
    question: "Which of the following is true for diastereomers?",
    options: ["Mirror images", "Same physical properties", "Different optical rotation", "Not mirror images"],
    answer: 3,
  },
  {
    question: "Which property do enantiomers not share?",
    options: ["Boiling point", "Density", "Specific rotation", "Molecular weight"],
    answer: 2,
  },
  {
    question: "Assign R/S: CH₃CH(Cl)CH₂CH₃",
    options: ["R", "S", "Can't determine", "Chiral"],
    answer: 0,
  },
  {
    question: "A compound with 3 chiral centers (no symmetry) has how many stereoisomers?",
    options: ["4", "6", "8", "10"],
    answer: 2,
  },
  {
    question: "Plane-polarized light is rotated by:",
    options: ["Achiral compounds", "Only enantiomers", "All organic molecules", "Ionic compounds"],
    answer: 1,
  },
  {
    question: "Which conformer of butane is most stable?",
    options: ["Eclipsed", "Gauche", "Anti", "Skew"],
    answer: 2,
  },
  {
    question: "Which pair is optically inactive?",
    options: ["R and S", "Racemic mixture", "Single enantiomer", "Diastereomers"],
    answer: 1,
  },
  {
    question: "The relationship between R,R and R,S configurations is:",
    options: ["Same compound", "Enantiomers", "Diastereomers", "Conformers"],
    answer: 2,
  },
  {
    question: "How many stereoisomers exist for tartaric acid?",
    options: ["2", "3", "4", "5"],
    answer: 1,
  },
  {
    question: "Which of the following has a plane of symmetry?",
    options: ["Chiral center", "Meso compound", "Diastereomer", "Racemic mixture"],
    answer: 1,
  },
  {
    question: "How many chiral centers are in glucose?",
    options: ["2", "4", "5", "6"],
    answer: 2,
  },
  {
    question: "Which type of isomerism is shown by 2,3-dihydroxybutanoic acid?",
    options: ["Geometrical", "Optical", "Chain", "Positional"],
    answer: 1,
  },
  {
    question: "Which conformation of ethane has highest energy?",
    options: ["Anti", "Eclipsed", "Staggered", "Gauche"],
    answer: 1,
  },
  {
    question: "A molecule has 4 chiral centers but only 6 stereoisomers. Why?",
    options: ["It’s linear", "Meso forms reduce total", "It’s achiral", "It contains double bonds"],
    answer: 1,
  },
  {
    question: "Which group has lowest priority in R/S configuration?",
    options: ["Br", "OH", "H", "CH₃"],
    answer: 2,
  },
  {
    question: "What is the hybridization of a carbon in a chiral center?",
    options: ["sp", "sp²", "sp³", "sp³d"],
    answer: 2,
  },
  {
    question: "How many stereoisomers does 2,3-dichlorobutane have?",
    options: ["2", "3", "4", "5"],
    answer: 2,
  },
  {
    question: "Which stereoisomer of tartaric acid is optically inactive?",
    options: ["(+)", "(-)", "meso", "racemic"],
    answer: 2,
  },
  {
    question: "Racemic mixtures are often separated by:",
    options: ["Filtration", "Crystallization", "Chiral chromatography", "Distillation"],
    answer: 2,
  },
  {
    question: "Which stereoisomer does not rotate plane-polarized light?",
    options: ["(+)", "(-)", "meso", "R"],
    answer: 2,
  },
  {
    question: "Which compound would not exhibit optical activity?",
    options: ["CH₃CH(OH)CH₃", "CH₃CH(NH₂)COOH", "CHBrClF", "Lactic acid"],
    answer: 0,
  },
  {
    question: "What is the difference between enantiomers and diastereomers?",
    options: ["Same structure", "Different physical properties", "Mirror images vs not", "No difference"],
    answer: 2,
  },
  {
    question: "Which of the following is a meso compound?",
    options: ["2-butanol", "2,3-dibromobutane", "2-chlorobutane", "Glucose"],
    answer: 1,
  },
  {
    question: "Which system classifies geometrical isomers?",
    options: ["R/S", "Z/E", "N/O", "A/B"],
    answer: 1,
  },
  {
    question: "What is the chirality of 2-butanol?",
    options: ["Achiral", "Chiral", "Meso", "Racemic"],
    answer: 1,
  },
  {
    question: "Which is true about diastereomers?",
    options: ["Same rotation", "Same melting point", "Not mirror images", "Same solubility"],
    answer: 2,
  },
  {
    question: "Which interaction is key for NMR chiral discrimination?",
    options: ["Chemical shift", "Coupling", "Chiral solvent interaction", "Shielding"],
    answer: 2,
  },
  {
    question: "Which type of isomerism is shown in conformers?",
    options: ["Optical", "Geometrical", "Configurational", "Conformational"],
    answer: 3,
  },
  {
    question: "The R/S configuration refers to:",
    options: ["Geometric isomers", "Absolute configuration", "Bond angles", "Functional groups"],
    answer: 1,
  },
  {
    question: "Which configuration is most stable for substituted cyclohexane?",
    options: ["Axial", "Equatorial", "Planar", "Boat"],
    answer: 1,
  },
  {
    question: "Which of the following molecules has stereocenters but is achiral?",
    options: ["Meso compound", "Racemic mixture", "Chiral compound", "Cis-isomer"],
    answer: 0,
  },
  {
    question: "Which reaction does not affect stereochemistry?",
    options: ["SN1", "SN2", "E2", "Free radical substitution"],
    answer: 3,
  },
  {
    question: "Which factor affects optical rotation?",
    options: ["Concentration", "Path length", "Temperature", "All of these"],
    answer: 3,
  },
  {
    question: "Which carbon arrangement makes a molecule achiral?",
    options: ["Tetrahedral with 4 different groups", "Plane of symmetry", "No symmetry", "Single bond"],
    answer: 1,
  },
  {
    question: "How can enantiomers be differentiated experimentally?",
    options: ["Boiling point", "NMR", "Optical rotation", "Mass"],
    answer: 2,
  },
  {
    question: "Which compound cannot have stereoisomers?",
    options: ["Cyclohexane", "Butane", "CH₄", "CHBrClF"],
    answer: 2,
  },
  {
    question: "Which compound shows only conformational isomerism?",
    options: ["Ethane", "2-butanol", "Lactic acid", "CHBrClF"],
    answer: 0,
  },
  {
    question: "Assign R/S: CH₃CH(OH)CH₂CH₃ (R or S?)",
    options: ["R", "S", "Chiral only", "Cannot determine"],
    answer: 1,
  },
  {
    question: "Which statement is true about conformers?",
    options: ["They are mirror images", "They differ by rotation", "They are positional isomers", "They are meso forms"],
    answer: 1,
  }
],
  },

  chemistry_of_alkanes_alkenes_alkynes_alkanol_carboxylic_acid_ketones_amines_ethals:
    {
      easy: [
        {
          question: "What is the general formula for alkanes?",
          options: ["CnH2n", "CnH2n+2", "CnH2n–2", "CnH2nO"],
          answer: 1,
        },
        {
          question: "Which hydrocarbon contains a triple bond?",
          options: ["Alkane", "Alkene", "Alkyne", "Alcohol"],
          answer: 2,
        },
        {
          question: "Which class of compounds contains –OH group?",
          options: ["Alkene", "Alkyne", "Alcohol", "Ketone"],
          answer: 2,
        },
        {
          question: "Which acid is found in vinegar?",
          options: [
            "Formic acid",
            "Citric acid",
            "Acetic acid",
            "Benzoic acid",
          ],
          answer: 2,
        },
        {
          question: "Which of these is a saturated hydrocarbon?",
          options: ["Alkyne", "Alkene", "Alkane", "Aromatic"],
          answer: 2,
        },
        {
          question: "Ethanol belongs to which functional group?",
          options: ["Ether", "Alcohol", "Aldehyde", "Acid"],
          answer: 1,
        },
        {
          question: "What is the suffix for ketones?",
          options: ["-one", "-al", "-ol", "-ic"],
          answer: 0,
        },
        {
          question: "Which of these is a primary amine?",
          options: ["CH₃NH₂", "CH₃CH₂NHCH₃", "(CH₃)₃N", "CH₃NHCH₂CH₃"],
          answer: 0,
        },
        {
          question: "Which compound has a carbonyl group?",
          options: ["Ketone", "Alkane", "Alkyne", "Amine"],
          answer: 0,
        },
        {
          question: "Which of these compounds reacts with sodium metal?",
          options: ["Alkane", "Alkyne", "Alcohol", "Ketone"],
          answer: 2,
        },
        // Add 40 more...
      ],
      medium: [
        {
          question: "Hydrogenation of alkenes produces:",
          options: ["Alkanes", "Alkynes", "Alcohols", "Ketones"],
          answer: 0,
        },
        {
          question: "Oxidation of a primary alcohol gives:",
          options: ["Ketone", "Aldehyde", "Alkane", "Ether"],
          answer: 1,
        },
        {
          question: "Markovnikov's rule applies to addition of:",
          options: ["Halogens", "Water", "HBr to alkenes", "Ozone"],
          answer: 2,
        },
        {
          question: "Tollens’ reagent is used to test:",
          options: ["Alcohols", "Ketones", "Aldehydes", "Carboxylic acids"],
          answer: 2,
        },
        {
          question: "The product of esterification is:",
          options: [
            "Acid + Alcohol",
            "Ketone + Water",
            "Ester + Water",
            "Ether + Acid",
          ],
          answer: 2,
        },
        {
          question: "Which group is present in both aldehydes and ketones?",
          options: ["Hydroxyl", "Amino", "Carbonyl", "Carboxyl"],
          answer: 2,
        },
        {
          question: "Ethanoic acid + ethanol gives:",
          options: ["Ethanal", "Ethyl acetate", "Methanol", "Glycine"],
          answer: 1,
        },
        {
          question: "What is the result of adding Br₂ to an alkene?",
          options: [
            "Colorless product",
            "White precipitate",
            "Brown gas",
            "Alcohol",
          ],
          answer: 0,
        },
        {
          question: "Alkynes undergo addition reactions because:",
          options: [
            "They are saturated",
            "They are aromatic",
            "They have triple bonds",
            "They are acids",
          ],
          answer: 2,
        },
        {
          question: "Ketones cannot be further oxidized easily because:",
          options: [
            "They are stable",
            "They lack hydrogen on the carbonyl carbon",
            "They are saturated",
            "They are basic",
          ],
          answer: 1,
        },
        // Add 40 more...
      ],
      hard: [
        {
          question: "Which reagent converts alkenes to diols?",
          options: ["KMnO₄ (cold)", "HBr", "H₂SO₄", "NaOH"],
          answer: 0,
        },
        {
          question: "Which of these is most acidic?",
          options: ["Ethanol", "Acetic acid", "Phenol", "Water"],
          answer: 1,
        },
        {
          question: "Hydration of alkynes in acidic medium yields:",
          options: ["Alkanes", "Aldehydes", "Ketones", "Esters"],
          answer: 2,
        },
        {
          question: "Which compound can form hydrogen bonds?",
          options: ["Alkane", "Ketone", "Ester", "Alcohol"],
          answer: 3,
        },
        {
          question: "The major product of propane with Br₂ in light is:",
          options: [
            "1-Bromopropane",
            "2-Bromopropane",
            "Propene",
            "Bromomethane",
          ],
          answer: 1,
        },
        {
          question: "Which test is positive for carbonyl compounds?",
          options: [
            "Fehling’s test",
            "Lucas test",
            "Bromine water",
            "Iodoform",
          ],
          answer: 0,
        },
        {
          question: "Iodoform test gives yellow ppt with:",
          options: ["CH₃CHO", "CH₃COCH₃", "CH₃CH₂OH", "All of these"],
          answer: 3,
        },
        {
          question: "What hybridization is present in ethyne?",
          options: ["sp", "sp2", "sp3", "sp3d"],
          answer: 0,
        },
        {
          question: "Amides are formed by reaction of:",
          options: [
            "Amine + Carboxylic acid",
            "Alcohol + Acid",
            "Aldehyde + Amine",
            "Ketone + Amine",
          ],
          answer: 0,
        },
        {
          question: "Which of these is an α-amino acid?",
          options: ["Glycine", "Acetic acid", "Phenol", "Propanol"],
          answer: 0,
        },
        // Add 40 more...
      ],
    },

  chemistry_of_group_1a_2a_3a_elements: {
    easy: [
      {
        question: "Which group contains alkali metals?",
        options: ["1A", "2A", "3A", "4A"],
        answer: 0,
      },
      {
        question: "What is the first element in Group 1A?",
        options: ["Lithium", "Sodium", "Hydrogen", "Potassium"],
        answer: 2,
      },
      {
        question: "What is the valency of Group 1A elements?",
        options: ["2", "1", "3", "0"],
        answer: 1,
      },
      {
        question: "Which of the following is an alkaline earth metal?",
        options: ["Na", "K", "Ca", "Al"],
        answer: 2,
      },
      {
        question: "Which group has elements that react vigorously with water?",
        options: ["1A", "2A", "3A", "7A"],
        answer: 0,
      },
      {
        question: "Which group forms +2 ions commonly?",
        options: ["1A", "2A", "3A", "4A"],
        answer: 1,
      },
      {
        question: "Which is the lightest alkali metal?",
        options: ["Na", "Li", "K", "Rb"],
        answer: 1,
      },
      {
        question: "Which 2A element is essential for bones?",
        options: ["Mg", "Ca", "Sr", "Ba"],
        answer: 1,
      },
      {
        question: "Which group does boron belong to?",
        options: ["1A", "2A", "3A", "4A"],
        answer: 2,
      },
      {
        question: "What is the common oxidation state of Group 3A elements?",
        options: ["+1", "+2", "+3", "–1"],
        answer: 2,
      },
      // Add 40 more...
    ],
    medium: [
      {
        question: "What is the trend of reactivity down Group 1A?",
        options: ["Decreases", "Increases", "Remains same", "Fluctuates"],
        answer: 1,
      },
      {
        question: "Which 2A element is used in fireworks?",
        options: ["Be", "Mg", "Ca", "Sr"],
        answer: 3,
      },
      {
        question: "Which group 3A element is a metalloid?",
        options: ["Al", "B", "Ga", "In"],
        answer: 1,
      },
      {
        question: "Which compound is used to neutralize acids?",
        options: ["NaOH", "HCl", "NaCl", "CO₂"],
        answer: 0,
      },
      {
        question: "What gas is released when Na reacts with water?",
        options: ["O₂", "CO₂", "H₂", "N₂"],
        answer: 2,
      },
      {
        question: "What is the flame color of potassium?",
        options: ["Yellow", "Green", "Lilac", "Red"],
        answer: 2,
      },
      {
        question: "Which element has the smallest atomic radius in Group 1A?",
        options: ["Li", "Na", "K", "Rb"],
        answer: 0,
      },
      {
        question: "Which 2A element is used to make cement?",
        options: ["Be", "Mg", "Ca", "Sr"],
        answer: 2,
      },
      {
        question: "Boron trichloride is an example of a:",
        options: [
          "Basic oxide",
          "Neutral compound",
          "Lewis acid",
          "Ionic salt",
        ],
        answer: 2,
      },
      {
        question: "What is amphoteric among 3A elements?",
        options: ["B", "Al", "Ga", "In"],
        answer: 1,
      },
      // Add 40 more...
    ],
    hard: [
      {
        question: "Which group 1A element forms the most soluble hydroxide?",
        options: ["Li", "Na", "K", "Cs"],
        answer: 3,
      },
      {
        question: "Which 2A metal forms insoluble sulfate?",
        options: ["Be", "Mg", "Ca", "Ba"],
        answer: 3,
      },
      {
        question: "Which element is used as a reducing agent in metallurgy?",
        options: ["Ca", "K", "Na", "Al"],
        answer: 0,
      },
      {
        question: "What type of bonding is found in boron compounds?",
        options: ["Ionic", "Metallic", "Covalent", "Hydrogen"],
        answer: 2,
      },
      {
        question: "Which 3A element expands its octet in bonding?",
        options: ["B", "Al", "Ga", "Tl"],
        answer: 3,
      },
      {
        question: "Which oxide is amphoteric?",
        options: ["Na₂O", "MgO", "Al₂O₃", "CaO"],
        answer: 2,
      },
      {
        question: "Group 2A hydroxides become more:",
        options: [
          "Insoluble down the group",
          "Acidic",
          "Soluble down the group",
          "Unreactive",
        ],
        answer: 2,
      },
      {
        question: "Which 2A element has the highest ionization energy?",
        options: ["Be", "Mg", "Ca", "Ba"],
        answer: 0,
      },
      {
        question: "Which is not a typical property of Group 1A metals?",
        options: [
          "Softness",
          "Low density",
          "High melting point",
          "High reactivity",
        ],
        answer: 2,
      },
      {
        question: "Aluminum chloride in anhydrous form is:",
        options: [
          "Ionic solid",
          "Covalent and volatile",
          "Basic oxide",
          "None",
        ],
        answer: 1,
      },
      // Add 40 more...
    ],
  },

  transition_metal_chemistry: {
    easy: [
      {
        question: "Where are transition metals found in the periodic table?",
        options: ["Group 1", "Group 2", "Groups 3–12", "Group 18"],
        answer: 2,
      },
      {
        question: "Which of the following is a transition metal?",
        options: ["Calcium", "Zinc", "Iron", "Aluminum"],
        answer: 2,
      },
      {
        question: "Which property is common in transition metals?",
        options: [
          "Colorless ions",
          "No variable oxidation states",
          "Formation of colored compounds",
          "Non-metallic behavior",
        ],
        answer: 2,
      },
      {
        question: "Which metal is used to make stainless steel?",
        options: ["Copper", "Chromium", "Zinc", "Silver"],
        answer: 1,
      },
      {
        question: "Transition metals often act as:",
        options: ["Insulators", "Catalysts", "Acids", "Bases"],
        answer: 1,
      },
      {
        question: "Which transition metal is magnetic?",
        options: ["Copper", "Silver", "Iron", "Gold"],
        answer: 2,
      },
      {
        question: "What is the typical oxidation state of iron in FeCl₃?",
        options: ["+1", "+2", "+3", "0"],
        answer: 2,
      },
      {
        question: "Which of these metals forms a green ion?",
        options: ["Fe²⁺", "Cu⁺", "Cr³⁺", "Fe³⁺"],
        answer: 0,
      },
      {
        question: "The ability to form complex ions is a property of:",
        options: [
          "Noble gases",
          "Transition metals",
          "Alkali metals",
          "Halogens",
        ],
        answer: 1,
      },
      {
        question: "Which of these is a d-block element?",
        options: ["Na", "Cl", "Ni", "Mg"],
        answer: 2,
      },
      // Add 40 more...
    ],
    medium: [
      {
        question: "Which transition metal forms a blue aqueous ion?",
        options: ["Zn²⁺", "Fe²⁺", "Cu²⁺", "Co²⁺"],
        answer: 2,
      },
      {
        question: "What is the coordination number of [Fe(CN)₆]³⁻?",
        options: ["4", "6", "2", "3"],
        answer: 1,
      },
      {
        question: "Ligands donate how many electrons to the central atom?",
        options: ["1", "2", "0", "4"],
        answer: 1,
      },
      {
        question: "Which ion causes a deep blue color in solution?",
        options: [
          "[Cu(NH₃)₄]²⁺",
          "[Fe(H₂O)₆]³⁺",
          "[Cr(H₂O)₆]³⁺",
          "[Co(H₂O)₆]²⁺",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is a bidentate ligand?",
        options: ["Cl⁻", "H₂O", "NH₃", "ethane-1,2-diamine (en)"],
        answer: 3,
      },
      {
        question: "Transition metals form colored compounds because:",
        options: [
          "High melting points",
          "Delocalized electrons",
          "d-d transitions",
          "Radioactivity",
        ],
        answer: 2,
      },
      {
        question: "What is the oxidation state of Mn in KMnO₄?",
        options: ["+2", "+4", "+5", "+7"],
        answer: 3,
      },
      {
        question:
          "Which ion is responsible for the green color in Cr³⁺ solution?",
        options: ["d⁵", "d³", "d⁶", "d⁸"],
        answer: 1,
      },
      {
        question: "Which of these shows variable oxidation states?",
        options: ["Na", "Mg", "Fe", "Al"],
        answer: 2,
      },
      {
        question: "Which property is not typical of transition metals?",
        options: [
          "High melting points",
          "Colored ions",
          "Inertness",
          "Catalytic behavior",
        ],
        answer: 2,
      },
      // Add 40 more...
    ],
    hard: [
      {
        question: "Which complex has square planar geometry?",
        options: ["[Ni(CN)₄]²⁻", "[Fe(CN)₆]³⁻", "[Cr(NH₃)₆]³⁺", "[Cu(H₂O)₆]²⁺"],
        answer: 0,
      },
      {
        question:
          "The splitting of d-orbitals in ligand field theory is due to:",
        options: ["Heat", "Color", "Electrostatic interactions", "Ionization"],
        answer: 2,
      },
      {
        question: "What is the magnetic moment of d⁵ high-spin complex?",
        options: ["1.73 BM", "3.87 BM", "5.92 BM", "0 BM"],
        answer: 2,
      },
      {
        question:
          "Which element has a partially filled d-subshell in ground state?",
        options: ["Zn", "Cu", "Fe", "Mg"],
        answer: 2,
      },
      {
        question: "Which ligand causes maximum crystal field splitting?",
        options: ["I⁻", "Cl⁻", "NH₃", "CN⁻"],
        answer: 3,
      },
      {
        question: "In [Cr(NH₃)₆]³⁺, the oxidation number of Cr is:",
        options: ["+2", "+3", "+4", "0"],
        answer: 1,
      },
      {
        question: "Which transition metal ion is colorless in solution?",
        options: ["Cu²⁺", "Fe³⁺", "Zn²⁺", "Cr³⁺"],
        answer: 2,
      },
      {
        question: "Which of the following is paramagnetic?",
        options: ["Zn²⁺", "Cu⁺", "Fe²⁺", "Sc³⁺"],
        answer: 2,
      },
      {
        question: "Which complex shows optical isomerism?",
        options: ["[Cr(en)₃]³⁺", "[Cu(NH₃)₄]²⁺", "[Fe(CN)₆]⁴⁻", "[Ni(CO)₄]"],
        answer: 0,
      },
      {
        question: "Which metal is used in the contact process catalyst?",
        options: ["Pt", "V₂O₅", "Fe", "Ni"],
        answer: 1,
      },
      // Add 40 more...
    ],
  },
};

let currentTopic = null;
let currentDifficulty = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timerInterval;
let seconds = 0;
let maxTime = 0;
let reviewAnswers = [];

const questionText = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const resultPage = document.getElementById("result-page");
const resultText = document.getElementById("result");
const quizPage = document.getElementById("quiz-page");
const startPage = document.getElementById("start-page");
const landingPage = document.getElementById("landing-page");
const scoreTracker = document.getElementById("score-tracker");
const timer = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const categoryTag = document.getElementById("category-tag");
const reviewSection = document.getElementById("review-section");
const questionCountSection = document.getElementById("question-count-section");
const questionCountSelect = document.getElementById("question-count");

// 🔊 Sound effects
const soundCorrect = document.getElementById("sound-correct");
const soundWrong = document.getElementById("sound-wrong");
const soundFinish = document.getElementById("sound-finish");

function populateTopics() {
  const topicSelect = document.getElementById("topic");
  const difficultySelect = document.getElementById("difficulty");
  for (let topic in topics) {
    if (topic !== "random_quiz") {
      const opt = document.createElement("option");
      opt.value = topic;
      opt.textContent = topic.replace(/_/g, " ").toUpperCase();
      topicSelect.appendChild(opt);
    }
  }
  ["easy", "medium", "hard"].forEach((d) => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d.toUpperCase();
    difficultySelect.appendChild(opt);
  });

  topicSelect.addEventListener("change", () => {
    if (topicSelect.value === "random_quiz") {
      difficultySelect.style.display = "none";
      questionCountSection.style.display = "block";
    } else {
      difficultySelect.style.display = "block";
      questionCountSection.style.display = "none";
    }
  });
}

function loadQuestion(index) {
  const q = currentQuestions[index];
  questionText.style.opacity = 0;
  setTimeout(() => {
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionText.style.opacity = 1;
  }, 200);

  categoryTag.textContent = currentTopic.replace(/_/g, " ").toUpperCase();
  optionsList.innerHTML = "";
  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => selectOption(li, i);
    optionsList.appendChild(li);
  });

  prevBtn.style.display = index > 0 ? "inline-block" : "none";
  nextBtn.textContent =
    index === currentQuestions.length - 1 ? "Finish" : "Next";
  nextBtn.disabled = true;
  updateProgressBar();
}

function selectOption(el, i) {
  const q = currentQuestions[currentIndex];
  const options = optionsList.children;
  [...options].forEach((li, idx) => {
    li.className = "";
    if (idx === q.answer) li.classList.add("correct");
    if (idx === i && idx !== q.answer) li.classList.add("wrong");
  });
  reviewAnswers[currentIndex] = { ...q, selected: i };
  if (i === q.answer) {
    score++;
    soundCorrect.play();
  } else {
    soundWrong.play();
  }
  scoreTracker.textContent = `Score: ${score}`;
  nextBtn.disabled = false;
}

function nextQuestion() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    loadQuestion(currentIndex);
  } else {
    endQuiz();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion(currentIndex);
  }
}

function startTimer(duration) {
  maxTime = duration;
  timerInterval = setInterval(() => {
    seconds++;
    const mins = String(Math.floor((duration - seconds) / 60)).padStart(2, "0");
    const secs = String((duration - seconds) % 60).padStart(2, "0");
    timer.textContent = `Time: ${mins}:${secs}`;
    if (seconds >= duration) {
      clearInterval(timerInterval);
      alert("Time is up!");
      endQuiz();
    }
  }, 1000);
}

function updateProgressBar() {
  const progress = ((currentIndex + 1) / currentQuestions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function endQuiz() {
  clearInterval(timerInterval);
  quizPage.style.display = "none";
  resultPage.style.display = "block";
  resultText.textContent = `You scored ${score} out of ${currentQuestions.length}`;
  soundFinish.play();
  generateChart();
  generateReview();
}

function generateChart() {
  const ctx = document.getElementById("result-chart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Correct", "Incorrect"],
      datasets: [
        {
          data: [score, currentQuestions.length - score],
          backgroundColor: ["#28a745", "#dc3545"],
        },
      ],
    },
  });
}

function generateReview() {
  reviewSection.innerHTML = "<h3>Review Questions:</h3>";
  reviewAnswers.forEach((qa, idx) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>Q${idx + 1}:</strong> ${qa.question}<br>
      <span style="color:${qa.selected === qa.answer ? "green" : "red"}">
        Your answer: ${qa.options[qa.selected] || "No Answer"}
      </span><br>
      Correct answer: ${qa.options[qa.answer]}
      <hr>`;
    reviewSection.appendChild(div);
  });
}

function startQuiz() {
  const topic = document.getElementById("topic").value;
  const difficulty = document.getElementById("difficulty").value;
  const count = parseInt(document.getElementById("question-count").value);

  if (!topic) return alert("Select a topic");

  if (topic === "random_quiz") {
    const allQuestions = [];
    for (let key in topics) {
      ["easy", "medium", "hard"].forEach((diff) => {
        if (topics[key][diff]) allQuestions.push(...topics[key][diff]);
      });
    }
    currentQuestions = allQuestions
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
    maxTime = count * 60;
  } else {
    if (!difficulty) return alert("Select difficulty");
    currentQuestions = topics[topic][difficulty];
    maxTime = currentQuestions.length * 60;
  }

  currentTopic = topic;
  currentDifficulty = difficulty;
  currentIndex = 0;
  score = 0;
  seconds = 0;
  reviewAnswers = [];

  startPage.style.display = "none";
  quizPage.style.display = "block";
  resultPage.style.display = "none";
  scoreTracker.textContent = "Score: 0";
  loadQuestion(currentIndex);
  startTimer(maxTime);
}

// 🎬 Landing intro start button
const enterBtn = document.getElementById("enter-btn");
enterBtn.onclick = () => {
  landingPage.style.display = "none";
  startPage.style.display = "block";
};

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

window.onload = () => {
  populateTopics();
  document.getElementById("start-btn").onclick = startQuiz;
  nextBtn.onclick = nextQuestion;
  prevBtn.onclick = prevQuestion;
};
