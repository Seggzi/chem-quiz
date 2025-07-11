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
        {
  question: "Which of the following is an alkyne?",
  options: ["CH₄", "CH₂=CH₂", "CH≡CH", "CH₃CH₃"],
  answer: 2
},
{
  question: "Which hydrocarbon is unsaturated?",
  options: ["Ethane", "Butane", "Pentane", "Ethene"],
  answer: 3
},
{
  question: "Which functional group is present in carboxylic acids?",
  options: ["-OH", "-COOH", "-NH₂", "-CHO"],
  answer: 1
},
{
  question: "Which compound is a ketone?",
  options: ["CH₃CHO", "CH₃COCH₃", "CH₃OH", "CH₃CH₂OH"],
  answer: 1
},
{
  question: "What is the molecular formula of methane?",
  options: ["CH₄", "C₂H₆", "C₂H₂", "CH₃OH"],
  answer: 0
},
{
  question: "Which compound contains a carboxyl group?",
  options: ["Methane", "Ethanoic acid", "Ethene", "Ethanol"],
  answer: 1
},
{
  question: "Which compound gives a fruity smell?",
  options: ["Ketone", "Alcohol", "Ester", "Amine"],
  answer: 2
},
{
  question: "What is the first member of the alkyne series?",
  options: ["Ethene", "Ethyne", "Propene", "Methyne"],
  answer: 1
},
{
  question: "Which hydrocarbon has the formula C₂H₂?",
  options: ["Ethene", "Ethyne", "Ethane", "Methane"],
  answer: 1
},
{
  question: "Which functional group is present in ethanol?",
  options: ["Aldehyde", "Alcohol", "Ketone", "Amine"],
  answer: 1
},
{
  question: "What is the simplest alkyne?",
  options: ["Methane", "Ethyne", "Ethane", "Propane"],
  answer: 1
},
{
  question: "Which of these is a functional group in alcohols?",
  options: ["-COOH", "-OH", "-CHO", "-NH₂"],
  answer: 1
},
{
  question: "What is the IUPAC name for CH₃CH₂CH₂OH?",
  options: ["Methanol", "Ethanol", "Propanol", "Butanol"],
  answer: 2
},
{
  question: "Which of the following is a primary alcohol?",
  options: ["CH₃CH₂OH", "CH₃OH", "CH₃CH(OH)CH₃", "CH₃CH₂CH₂OH"],
  answer: 0
},
{
  question: "What is the formula for ethyne?",
  options: ["C₂H₆", "C₂H₄", "C₂H₂", "CH₄"],
  answer: 2
},
{
  question: "Which compound is used in alcoholic beverages?",
  options: ["Methanol", "Ethanol", "Propanol", "Butanol"],
  answer: 1
},
{
  question: "What is the color of bromine water?",
  options: ["Colorless", "Brown", "Blue", "Green"],
  answer: 1
},
{
  question: "Alkenes react with bromine water to form:",
  options: ["Alcohols", "Colorless compounds", "Brown gas", "Esters"],
  answer: 1
},
{
  question: "Which of the following is not an alcohol?",
  options: ["CH₃OH", "CH₃CH₂OH", "CH₃COOH", "CH₃CH₂CH₂OH"],
  answer: 2
},
{
  question: "Which hydrocarbon series is homologous to alkanes?",
  options: ["Alkenes", "Alkynes", "Cycloalkanes", "Aromatics"],
  answer: 2
},
{
  question: "Which group gives acidic properties to ethanoic acid?",
  options: ["-OH", "-CHO", "-COOH", "-COOCH₃"],
  answer: 2
},
{
  question: "What is the main use of ethanoic acid?",
  options: ["Cooking", "Preservative", "Fuel", "Fertilizer"],
  answer: 1
},
{
  question: "Which of the following is a carboxylic acid?",
  options: ["CH₃OH", "CH₃COOH", "CH₃CH₂CH₃", "CH₄"],
  answer: 1
},
{
  question: "Which compound gives a vinegar smell?",
  options: ["Ethanol", "Methanol", "Acetic acid", "Propane"],
  answer: 2
},
{
  question: "What is the general formula for alkenes?",
  options: ["CnH2n", "CnH2n+2", "CnH2n–2", "CnH2nO"],
  answer: 0
},
{
  question: "What is the first member of the alkene series?",
  options: ["Ethene", "Propene", "Methene", "Butene"],
  answer: 0
},
{
  question: "Which of these is an alkene?",
  options: ["CH₄", "CH₂=CH₂", "CH≡CH", "CH₃CH₃"],
  answer: 1
},
{
  question: "Which of the following has the highest boiling point?",
  options: ["Methane", "Methanol", "Ethyne", "Ethene"],
  answer: 1
},
{
  question: "Which class of compounds reacts with bromine water without catalyst?",
  options: ["Alkenes", "Alkanes", "Alcohols", "Acids"],
  answer: 0
},
{
  question: "Which compound is most reactive in combustion?",
  options: ["Alkane", "Alkene", "Alkyne", "All burn similarly"],
  answer: 3
},
{
  question: "What is the result of combustion of alkanes?",
  options: ["CO and water", "CO₂ and water", "Hydrogen and water", "O₂ and water"],
  answer: 1
},
{
  question: "Which of the following is a secondary alcohol?",
  options: ["Propan-2-ol", "Methanol", "Ethanol", "Butan-1-ol"],
  answer: 0
},
{
  question: "The suffix '-yne' refers to:",
  options: ["Alkene", "Alkyne", "Alcohol", "Alkane"],
  answer: 1
},
{
  question: "Which of the following is a base?",
  options: ["CH₃COOH", "CH₄", "CH₃NH₂", "CH₃OH"],
  answer: 2
},
{
  question: "What kind of bond is found in alkynes?",
  options: ["Single", "Double", "Triple", "No bond"],
  answer: 2
},
{
  question: "Which compound has a strong acidic hydrogen?",
  options: ["Methane", "Ethyne", "Ethane", "Butane"],
  answer: 1
},
{
  question: "Which of these is not a hydrocarbon?",
  options: ["Ethane", "Methanol", "Propane", "Ethyne"],
  answer: 1
},
{
  question: "Which of the following is commonly used as an antiseptic?",
  options: ["Formaldehyde", "Ethanol", "Acetic acid", "Glycerol"],
  answer: 1
},
{
  question: "What is the IUPAC name for vinegar acid?",
  options: ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Butanoic acid"],
  answer: 1
},
{
  question: "What is the functional group of an aldehyde?",
  options: ["-CHO", "-OH", "-NH₂", "-COOH"],
  answer: 0
}

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
        {
  question: "Which compound gives a positive iodoform test?",
  options: ["Propanone", "Butanal", "Methanol", "Ethanol"],
  answer: 0
},
{
  question: "What is the major product of oxidation of secondary alcohol?",
  options: ["Aldehyde", "Ketone", "Acid", "Ether"],
  answer: 1
},
{
  question: "What is formed when ethene reacts with bromine water?",
  options: ["Ethanol", "Dibromoethane", "Ethane", "No reaction"],
  answer: 1
},
{
  question: "Which reagent is used for oxidation of alcohols?",
  options: ["NaCl", "H₂SO₄", "K₂Cr₂O₇", "NaOH"],
  answer: 2
},
{
  question: "Which acid has the common name 'formic acid'?",
  options: ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Butanoic acid"],
  answer: 0
},
{
  question: "What is the product of hydrolysis of ester?",
  options: ["Alcohol and alkane", "Alcohol and acid", "Alcohol and ether", "Aldehyde and acid"],
  answer: 1
},
{
  question: "What is the hybridization of carbon in alkenes?",
  options: ["sp", "sp2", "sp3", "sp3d"],
  answer: 1
},
{
  question: "Which of the following is not a property of carboxylic acids?",
  options: ["Sour taste", "High boiling point", "Good reducing agent", "Forms hydrogen bonds"],
  answer: 2
},
{
  question: "The reaction of carboxylic acid with alcohol gives:",
  options: ["Ester", "Ether", "Aldehyde", "Alkene"],
  answer: 0
},
{
  question: "Which class of amines contains only one alkyl group?",
  options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
  answer: 0
},{
  question: "Which of the following undergoes electrophilic addition reactions?",
  options: ["Alkanes", "Alkenes", "Alkanols", "Alkynes"],
  answer: 1
},
{
  question: "Which test is used to distinguish between alkenes and alkanes?",
  options: ["Fehling's test", "Tollens' test", "Bromine water", "Iodoform test"],
  answer: 2
},
{
  question: "Which alcohol is used as fuel in spirit burners?",
  options: ["Methanol", "Propanol", "Ethanol", "Butanol"],
  answer: 2
},
{
  question: "What is the product of complete combustion of ethanol?",
  options: ["CO and H₂O", "CO₂ and H₂O", "H₂ and O₂", "CH₄ and CO₂"],
  answer: 1
},
{
  question: "Which compound does not show isomerism?",
  options: ["Butane", "Butene", "Methane", "Pentene"],
  answer: 2
},
{
  question: "Which of the following compounds can be oxidized to a carboxylic acid?",
  options: ["Tertiary alcohol", "Secondary alcohol", "Primary alcohol", "Ketone"],
  answer: 2
},
{
  question: "What is the major product when an alkyne undergoes hydrogenation?",
  options: ["Alkene", "Aldehyde", "Alcohol", "Alkane"],
  answer: 3
},
{
  question: "Which of the following has the highest boiling point?",
  options: ["Butane", "Butanol", "Butene", "Butyne"],
  answer: 1
},
{
  question: "The iodoform test is positive for compounds with:",
  options: ["CH₃CHOH–", "CH₃CO–", "CH₃CH₂–", "Both A and B"],
  answer: 3
},
{
  question: "Which of these compounds is a ketone?",
  options: ["CH₃COCH₃", "CH₃CH₂OH", "CH₃CH₂CH₂NH₂", "CH₃CHO"],
  answer: 0
},
{
  question: "Which of the following is an α-hydroxy acid?",
  options: ["Glycolic acid", "Acetic acid", "Ethanol", "Acetone"],
  answer: 0
},
{
  question: "Lucas test is used to classify:",
  options: ["Amines", "Acids", "Alcohols", "Alkanes"],
  answer: 2
},
{
  question: "Which reagent converts a carboxylic acid to an ester?",
  options: ["NaOH", "HCl", "Alcohol + H₂SO₄", "Water"],
  answer: 2
},
{
  question: "Which is more reactive in nucleophilic addition?",
  options: ["Ketones", "Aldehydes", "Alkanes", "Alcohols"],
  answer: 1
},
{
  question: "Which reaction is used for preparation of alcohols from alkenes?",
  options: ["Hydrogenation", "Hydration", "Halogenation", "Dehydration"],
  answer: 1
},
{
  question: "What is the byproduct of esterification?",
  options: ["Hydrogen", "Water", "Carbon dioxide", "Methane"],
  answer: 1
},
{
  question: "Which carbon is most acidic in ethyne?",
  options: ["C1", "C2", "All equal", "None are acidic"],
  answer: 2
},
{
  question: "Which compound gives effervescence with sodium carbonate?",
  options: ["Alcohol", "Carboxylic acid", "Amine", "Ketone"],
  answer: 1
},
{
  question: "Which reaction shows the property of unsaturation?",
  options: ["Decolorization of Br₂ water", "Reaction with NaOH", "Esterification", "Fermentation"],
  answer: 0
},
{
  question: "Which product is formed when ethanol is oxidized with acidified KMnO₄?",
  options: ["Methanol", "Ethanal", "Ethanoic acid", "Acetone"],
  answer: 2
},
{
  question: "Which compound is the starting material in soap production (saponification)?",
  options: ["Alcohol", "Ester", "Ketone", "Alkane"],
  answer: 1
},
{
  question: "Which is not an isomer of C₄H₁₀O?",
  options: ["Butan-1-ol", "Butan-2-ol", "Ethoxyethane", "Butanal"],
  answer: 3
},
{
  question: "What is the hybridization of carbon in ethene?",
  options: ["sp", "sp²", "sp³", "None"],
  answer: 1
},
{
  question: "What is the function of concentrated H₂SO₄ in esterification?",
  options: ["Oxidizing agent", "Catalyst and dehydrating agent", "Reactant", "Base"],
  answer: 1
},
{
  question: "Which of the following shows geometrical isomerism?",
  options: ["Alkane", "Alkyne", "Alkene", "Alcohol"],
  answer: 2
},
{
  question: "What happens when ethanoic acid reacts with sodium bicarbonate?",
  options: ["No reaction", "Gas is released", "Salt and acid", "Water only"],
  answer: 1
},
{
  question: "Which acid is a dicarboxylic acid?",
  options: ["Formic acid", "Acetic acid", "Oxalic acid", "Propanoic acid"],
  answer: 2
},
{
  question: "Which of the following is formed when ethanol is heated with concentrated H₂SO₄?",
  options: ["Ethanoic acid", "Ethene", "Ethanal", "Ethyl acetate"],
  answer: 1
},
{
  question: "Which of these reactions is characteristic of amines?",
  options: ["Decolorize bromine water", "Give basic reaction", "Form esters", "Burn with sooty flame"],
  answer: 1
},
{
  question: "Which class of compounds gives a fruity smell?",
  options: ["Alcohols", "Ethers", "Esters", "Ketones"],
  answer: 2
},
{
  question: "Which of the following amines has a fishy odor?",
  options: ["Tertiary amines", "Secondary amines", "Primary amines", "All of them"],
  answer: 3
},
{
  question: "Which is more basic: ethylamine or ammonia?",
  options: ["Ammonia", "Ethylamine", "Both equal", "None"],
  answer: 1
},
{
  question: "What is the product of dehydration of ethanol?",
  options: ["Ethanal", "Ethene", "Ethanoic acid", "Methanol"],
  answer: 1
},
{
  question: "Which carbon atom in propan-2-ol is the functional carbon?",
  options: ["C1", "C2", "C3", "C1 and C3"],
  answer: 1
},
{
  question: "What is the product of hydrolysis of ester?",
  options: ["Alcohol and acid", "Only alcohol", "Only acid", "Salt and acid"],
  answer: 0
},
{
  question: "Which is used to test for unsaturation in hydrocarbons?",
  options: ["NaOH", "Benedict's solution", "Bromine water", "FeCl₃"],
  answer: 2
},
{
  question: "Which functional group is absent in alkanes?",
  options: ["C=C", "C–H", "C–C", "All are present"],
  answer: 0
},
{
  question: "What is the IUPAC name for CH₃CH₂COOH?",
  options: ["Formic acid", "Acetic acid", "Propanoic acid", "Butanoic acid"],
  answer: 2
},
{
  question: "Which acid is stronger: formic acid or acetic acid?",
  options: ["Formic acid", "Acetic acid", "Both equal", "None"],
  answer: 0
}

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
        {
  question: "Which condition favors elimination over substitution?",
  options: ["Low temperature", "Polar solvent", "Strong base & heat", "Weak nucleophile"],
  answer: 2
},
{
  question: "What is the mechanism for bromination of alkanes?",
  options: ["Electrophilic addition", "Free radical substitution", "Nucleophilic substitution", "Condensation"],
  answer: 1
},
{
  question: "Which reagent converts ketone to secondary alcohol?",
  options: ["LiAlH₄", "HCl", "KMnO₄", "O₃"],
  answer: 0
},
{
  question: "Which of the following is a carboxylic acid derivative?",
  options: ["Aldehyde", "Ketone", "Amide", "Alcohol"],
  answer: 2
},
{
  question: "Which condition is best for Markovnikov addition?",
  options: ["Peroxide present", "Cold KMnO₄", "No catalyst", "Acidic medium"],
  answer: 3
},
{
  question: "How is acyl chloride prepared from a carboxylic acid?",
  options: ["Reaction with NaOH", "Reaction with SOCl₂", "Heating with water", "Reduction with H₂"],
  answer: 1
},
{
  question: "Which of the following amines is most basic?",
  options: ["Aniline", "Ammonia", "Trimethylamine", "Ethanolamine"],
  answer: 2
},
{
  question: "What is the product of ozonolysis of ethene?",
  options: ["Ethanoic acid", "Ethanol", "Formaldehyde", "Ethanal"],
  answer: 3
},
{
  question: "Why are carboxylic acids acidic?",
  options: ["Hydrogen bonding", "Resonance stabilization of conjugate base", "High electronegativity", "Presence of double bond"],
  answer: 1
},
{
  question: "Which functional group is present in both esters and acids?",
  options: ["–CO–", "–COOH", "–OH", "Carbonyl"],
  answer: 3
},
{
  question: "What is the IUPAC name of CH₃COCH₂CH₃?",
  options: ["Butanone", "Propanone", "Ethanal", "Butanal"],
  answer: 0
},
{
  question: "Which condition favors elimination over substitution?",
  options: ["Low temperature", "Weak base", "Strong bulky base", "Dilute acid"],
  answer: 2
},
{
  question: "Which intermediate is formed during electrophilic addition to alkenes?",
  options: ["Radical", "Carbocation", "Carbanion", "Enolate"],
  answer: 1
},
{
  question: "Which reagent distinguishes aldehydes from ketones?",
  options: ["Bromine water", "Tollens’ reagent", "NaOH", "Dilute HCl"],
  answer: 1
},
{
  question: "Which carbonyl compound gives a positive iodoform test?",
  options: ["Propanal", "Butanone", "Methanal", "Pentanal"],
  answer: 1
},
{
  question: "Which of the following does not give a positive Fehling's test?",
  options: ["Glucose", "Formaldehyde", "Acetone", "Ethanol"],
  answer: 2
},
{
  question: "How many structural isomers are possible for C₄H₁₀O?",
  options: ["3", "4", "5", "7"],
  answer: 3
},
{
  question: "The acidity of carboxylic acids is due to:",
  options: ["Resonance stabilization of anion", "Presence of carbonyl", "Hydrogen bonding", "Electronegativity"],
  answer: 0
},
{
  question: "Which acid is formed by oxidation of ethanol?",
  options: ["Formic acid", "Ethanoic acid", "Methanoic acid", "Butanoic acid"],
  answer: 1
},
{
  question: "Which of the following shows tautomerism?",
  options: ["Alkanes", "Alcohols", "Aldehydes", "Ketones"],
  answer: 3
},
{
  question: "Why are alkynes more acidic than alkenes?",
  options: ["Higher electronegativity", "sp hybridization", "π bonding", "Larger bond angles"],
  answer: 1
},
{
  question: "Which of these is not formed during ozonolysis of alkenes?",
  options: ["Aldehydes", "Ketones", "Alcohols", "None"],
  answer: 2
},
{
  question: "Which amine shows the strongest basic character in aqueous solution?",
  options: ["Methylamine", "Ammonia", "Aniline", "Trimethylamine"],
  answer: 0
},
{
  question: "Which of the following can show enolization?",
  options: ["Aldehyde", "Ketone", "Both", "Neither"],
  answer: 2
},
{
  question: "Which compound gives positive Schiff’s test?",
  options: ["Ketones", "Aldehydes", "Alcohols", "Carboxylic acids"],
  answer: 1
},
{
  question: "Which of the following compounds undergoes nucleophilic addition most easily?",
  options: ["Aldehyde", "Ketone", "Carboxylic acid", "Alcohol"],
  answer: 0
},
{
  question: "Hydroboration-oxidation of an alkene gives:",
  options: ["Primary alcohol", "Tertiary alcohol", "Secondary alcohol", "Aldehyde"],
  answer: 0
},
{
  question: "Which type of reaction is dehydration of alcohol?",
  options: ["Substitution", "Addition", "Elimination", "Oxidation"],
  answer: 2
},
{
  question: "What is the product of oxidation of a secondary alcohol?",
  options: ["Aldehyde", "Ketone", "Carboxylic acid", "Alkene"],
  answer: 1
},
{
  question: "Which compound has the highest boiling point?",
  options: ["Butanoic acid", "Butanone", "Butanol", "Butane"],
  answer: 0
},
{
  question: "Which reagent is used in the reduction of carboxylic acids to alcohols?",
  options: ["NaBH₄", "LiAlH₄", "KMnO₄", "HCl"],
  answer: 1
},
{
  question: "Which base promotes Hofmann elimination in amines?",
  options: ["NaOH", "AgNO₃", "NaNH₂", "KOH in ethanol"],
  answer: 3
},
{
  question: "What is the hybridization of carbon in carbonyl compounds?",
  options: ["sp", "sp²", "sp³", "sp³d"],
  answer: 1
},
{
  question: "Which is more reactive in nucleophilic substitution: alkyl halide or alcohol?",
  options: ["Alcohol", "Alkyl halide", "Equal", "Ether"],
  answer: 1
},
{
  question: "Which of the following is amphoteric?",
  options: ["Water", "Ethanol", "Ammonia", "Methane"],
  answer: 0
},
{
  question: "Which reaction produces ethyne from calcium carbide?",
  options: ["Addition", "Hydrolysis", "Substitution", "Combustion"],
  answer: 1
},
{
  question: "Which of the following has the lowest pKa?",
  options: ["Ethanol", "Acetic acid", "Phenol", "Water"],
  answer: 1
},
{
  question: "What is the IUPAC name for CH≡C–CH₂CH₃?",
  options: ["Butyne", "But-1-yne", "But-2-yne", "Butene"],
  answer: 1
},
{
  question: "How many π bonds are in but-2-yne?",
  options: ["0", "1", "2", "3"],
  answer: 2
},
{
  question: "The oxidation of isopropanol gives:",
  options: ["Methanal", "Propanone", "Propanal", "Propanoic acid"],
  answer: 1
},
{
  question: "Which alcohol gives a tertiary carbocation on dehydration?",
  options: ["Ethanol", "Propan-2-ol", "2-methylpropan-2-ol", "Methanol"],
  answer: 2
},
{
  question: "Which reagent does NOT oxidize secondary alcohols?",
  options: ["KMnO₄", "NaBH₄", "CrO₃", "H₂SO₄"],
  answer: 1
},
{
  question: "Which amine does not undergo acylation?",
  options: ["Primary", "Secondary", "Tertiary", "Aromatic"],
  answer: 2
},
{
  question: "What is the reducing agent in the Clemmensen reduction?",
  options: ["Zn/HCl", "LiAlH₄", "H₂/Pd", "NaBH₄"],
  answer: 0
},
{
  question: "Ammonolysis of an acid chloride gives:",
  options: ["Amine", "Amide", "Acid", "Ketone"],
  answer: 1
},
{
  question: "What type of compound is formed when two alcohols react with an acid catalyst?",
  options: ["Ether", "Ester", "Aldehyde", "Ketone"],
  answer: 0
},
{
  question: "Which of the following is the correct order of boiling points?",
  options: ["Alkane < Alcohol < Carboxylic acid", "Alcohol < Carboxylic acid < Alkane", "Carboxylic acid < Alcohol < Alkane", "Alcohol < Alkane < Carboxylic acid"],
  answer: 0
},
{
  question: "What is formed when acetylene is passed into ammoniacal AgNO₃?",
  options: ["Silver acetylide", "Ethane", "Ethyne", "Silver nitrate"],
  answer: 0
},
{
  question: "Which of the following is a β-keto acid?",
  options: ["Acetoacetic acid", "Oxalic acid", "Benzoic acid", "Lactic acid"],
  answer: 0
},
{
  question: "Which reagent converts alkenes to alcohols by anti-Markovnikov addition?",
  options: ["HBr", "BH₃·THF + H₂O₂", "H₂SO₄ + H₂O", "HCl"],
  answer: 1
},
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
      {
  question: "What is the atomic number of lithium?",
  options: ["1", "2", "3", "4"],
  answer: 2,
},
{
  question: "Which element is more reactive: Na or K?",
  options: ["Na", "K", "Both same", "None"],
  answer: 1,
},
{
  question: "Which of these is a Group 2A element?",
  options: ["Li", "Mg", "Al", "Na"],
  answer: 1,
},
{
  question: "Which element forms a white precipitate with NaOH?",
  options: ["Boron", "Calcium", "Aluminium", "Sodium"],
  answer: 2,
},
{
  question: "Which Group 1A metal is stored in oil?",
  options: ["Lithium", "Sodium", "Potassium", "All of these"],
  answer: 3,
},
{
  question: "What is a common compound of Group 1A metals?",
  options: ["Hydroxide", "Chloride", "Oxide", "All of these"],
  answer: 3,
},
{
  question: "Which of the following is the least reactive Group 1A element?",
  options: ["Lithium", "Sodium", "Potassium", "Rubidium"],
  answer: 0,
},
{
  question: "What color does sodium impart to flame?",
  options: ["Green", "Yellow", "Red", "Blue"],
  answer: 1,
},
{
  question: "What is the chemical symbol for calcium?",
  options: ["C", "Cl", "Ca", "Cs"],
  answer: 2,
},
{
  question: "Which group contains elements with 2 valence electrons?",
  options: ["1A", "2A", "3A", "4A"],
  answer: 1,
},
{
  question: "Which metal is used in fireworks and flares for red color?",
  options: ["Na", "Mg", "Sr", "K"],
  answer: 2,
},
{
  question: "What is the chemical symbol for magnesium?",
  options: ["Mn", "Mg", "Ma", "Mc"],
  answer: 1,
},
{
  question: "Group 3A elements commonly form which type of compounds?",
  options: ["Basic", "Amphoteric", "Acidic", "Neutral"],
  answer: 1,
},
{
  question: "What is the most abundant Group 2A metal in the earth’s crust?",
  options: ["Calcium", "Magnesium", "Strontium", "Barium"],
  answer: 0,
},
{
  question: "Which of the following is not in Group 1A?",
  options: ["K", "Li", "Mg", "Na"],
  answer: 2,
},
{
  question: "Which of these has the largest atomic radius?",
  options: ["Li", "Na", "K", "Rb"],
  answer: 3,
},
{
  question: "What is the formula of sodium hydroxide?",
  options: ["NaOH", "NaO", "NaH", "Na₂O"],
  answer: 0,
},
{
  question: "Which of the following metals is soft and can be cut with a knife?",
  options: ["Iron", "Calcium", "Sodium", "Aluminium"],
  answer: 2,
},
{
  question: "What is the group number of magnesium?",
  options: ["1A", "2A", "3A", "4A"],
  answer: 1,
},
{
  question: "What is the symbol for boron?",
  options: ["Br", "B", "Bo", "Be"],
  answer: 1,
},
{
  question: "Which element is not a metal in Group 3A?",
  options: ["Aluminium", "Gallium", "Boron", "Indium"],
  answer: 2,
},
{
  question: "Group 2A metals react with water to produce:",
  options: ["Acid", "Salt and hydrogen", "Base and hydrogen", "Only salt"],
  answer: 2,
},
{
  question: "Which Group 1A element has the highest ionization energy?",
  options: ["Li", "Na", "K", "Rb"],
  answer: 0,
},
{
  question: "Which Group 2A metal gives a white flame?",
  options: ["Calcium", "Strontium", "Barium", "Magnesium"],
  answer: 3,
},
{
  question: "Which group forms +1 ions?",
  options: ["1A", "2A", "3A", "4A"],
  answer: 0,
},
{
  question: "Which of these is most electropositive?",
  options: ["Li", "K", "Na", "Cs"],
  answer: 3,
},
{
  question: "Which element is used in flash photography?",
  options: ["Magnesium", "Calcium", "Potassium", "Boron"],
  answer: 0,
},
{
  question: "Which of these is a good conductor of electricity?",
  options: ["Boron", "Aluminium", "Calcium", "None"],
  answer: 1,
},
{
  question: "What is the trend of reactivity in Group 1A?",
  options: ["Decreases down the group", "Increases", "Remains same", "Random"],
  answer: 1,
},
{
  question: "Which Group 3A element is a metalloid?",
  options: ["Al", "Ga", "Tl", "B"],
  answer: 3,
},
{
  question: "Which of these has the lowest density?",
  options: ["Na", "K", "Li", "Rb"],
  answer: 2,
},
{
  question: "Which element is essential for chlorophyll in plants?",
  options: ["Calcium", "Magnesium", "Sodium", "Boron"],
  answer: 1,
},
{
  question: "Which of these elements is amphoteric?",
  options: ["Sodium", "Magnesium", "Aluminium", "Potassium"],
  answer: 2,
},
{
  question: "Group 1A elements are also called:",
  options: ["Halogens", "Alkali metals", "Transition metals", "Inert gases"],
  answer: 1,
},
{
  question: "Which Group 2A element forms insoluble sulfate?",
  options: ["Mg", "Ca", "Ba", "Be"],
  answer: 2,
},
{
  question: "What is the formula for calcium chloride?",
  options: ["CaCl", "CaCl₂", "Ca₂Cl", "Ca₂Cl₂"],
  answer: 1,
},
{
  question: "Which of the following is a compound of boron?",
  options: ["NaCl", "BCl₃", "CaCO₃", "Al₂O₃"],
  answer: 1,
},
{
  question: "What happens when sodium is exposed to air?",
  options: ["Explodes", "Catches fire", "Forms oxide layer", "Nothing"],
  answer: 2,
},
{
  question: "Which of these elements shows diagonal relationship with Al?",
  options: ["Li", "Be", "Mg", "Na"],
  answer: 1,
},
{
  question: "Which group does gallium belong to?",
  options: ["1A", "2A", "3A", "4A"],
  answer: 2,
}
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
      {
  question: "Why are Group 1A elements stored in oil?",
  options: ["They are volatile", "They catch fire in air", "They dissolve in oil", "They evaporate easily"],
  answer: 1,
},
{
  question: "Which element reacts with water to form magnesium hydroxide?",
  options: ["Mg", "Ca", "Na", "Li"],
  answer: 0,
},
{
  question: "The flame color of calcium is:",
  options: ["Crimson", "Brick red", "Yellow", "Green"],
  answer: 1,
},
{
  question: "Which Group 3A element forms amphoteric oxide?",
  options: ["Boron", "Gallium", "Aluminium", "Indium"],
  answer: 2,
},
{
  question: "Alkali metals form which kind of oxides?",
  options: ["Basic", "Acidic", "Neutral", "Amphoteric"],
  answer: 0,
},
{
  question: "The hydration enthalpy of Li⁺ is greater than Na⁺ because:",
  options: ["Li⁺ is more reactive", "Li⁺ is smaller", "Na⁺ is heavier", "Na⁺ has more charge"],
  answer: 1,
},
{
  question: "Which group forms insoluble carbonates in water?",
  options: ["1A", "2A", "3A", "4A"],
  answer: 1,
},
{
  question: "Which of these shows maximum reducing power?",
  options: ["Li", "Na", "K", "Cs"],
  answer: 3,
},
{
  question: "Group 2A oxides react with water to form:",
  options: ["Acids", "Bases", "Salts", "Hydrates"],
  answer: 1,
},
{
  question: "Which element forms a stable hydride: B, Al, Mg, or Ca?",
  options: ["B", "Al", "Mg", "Ca"],
  answer: 2,
},
{
  question: "Which of these reacts with nitrogen to form nitride?",
  options: ["Li", "Na", "K", "Rb"],
  answer: 0,
},
{
  question: "The basicity of Group 2A hydroxides:",
  options: ["Decreases down the group", "Increases", "Remains same", "Is unpredictable"],
  answer: 1,
},
{
  question: "Why is beryllium different from other 2A elements?",
  options: ["Smaller size", "Forms covalent compounds", "Forms amphoteric oxide", "All of the above"],
  answer: 3,
},
{
  question: "The oxide of which element is acidic?",
  options: ["B", "Al", "Ca", "Na"],
  answer: 0,
},
{
  question: "Which group has elements that form M³⁺ ions?",
  options: ["1A", "2A", "3A", "4A"],
  answer: 2,
},
{
  question: "The density of alkali metals down the group:",
  options: ["Increases", "Decreases", "Remains constant", "First decreases then increases"],
  answer: 0,
},
{
  question: "Which of these is used in deoxidizing molten metals?",
  options: ["Na", "Al", "Mg", "B"],
  answer: 2,
},
{
  question: "What is the hybridization of boron in BF₃?",
  options: ["sp", "sp²", "sp³", "dsp²"],
  answer: 1,
},
{
  question: "Which of these Group 3A elements is liquid at room temperature?",
  options: ["B", "Al", "Ga", "Tl"],
  answer: 2,
},
{
  question: "Which Group 2A element forms hard water with sulfate ions?",
  options: ["Mg", "Ca", "Ba", "Be"],
  answer: 1,
},
{
  question: "Reaction of calcium with water produces:",
  options: ["CaO", "CaCO₃", "Ca(OH)₂", "CaCl₂"],
  answer: 2,
},
{
  question: "What is the oxidation state of Al in AlCl₃?",
  options: ["+1", "+2", "+3", "+4"],
  answer: 2,
},
{
  question: "The electrolysis of fused NaCl produces:",
  options: ["Na and H₂", "Na and Cl₂", "NaOH", "Na₂O"],
  answer: 1,
},
{
  question: "What is the structure of BeCl₂ in solid state?",
  options: ["Linear", "Tetrahedral", "Polymeric", "Bent"],
  answer: 2,
},
{
  question: "Which of the following is least reactive with water?",
  options: ["Na", "K", "Li", "Rb"],
  answer: 2,
},
{
  question: "Why is Ga’s melting point low?",
  options: ["Weak metallic bonding", "Small size", "Low ionization energy", "Inert pair effect"],
  answer: 0,
},
{
  question: "Which Group 3A element is used in semiconductors?",
  options: ["Tl", "Al", "B", "Ga"],
  answer: 3,
},
{
  question: "Group 1A elements show which flame test color?",
  options: ["Blue", "Violet", "Red", "Yellow"],
  answer: 3,
},
{
  question: "Which Group 2A element has least solubility of its hydroxide?",
  options: ["Ba", "Sr", "Mg", "Ca"],
  answer: 2,
},
{
  question: "Which element in Group 1A is most reactive?",
  options: ["Li", "Na", "K", "Cs"],
  answer: 3,
},
{
  question: "Which of these forms a protective oxide layer on surface?",
  options: ["Li", "Mg", "Ca", "Al"],
  answer: 3,
},
{
  question: "What happens when BCl₃ is exposed to water?",
  options: ["No reaction", "Explodes", "Hydrolyzes to boric acid", "Burns"],
  answer: 2,
},
{
  question: "Aluminium oxide is:",
  options: ["Acidic", "Basic", "Neutral", "Amphoteric"],
  answer: 3,
},
{
  question: "Which alkali metal is used in atomic clocks?",
  options: ["Na", "K", "Rb", "Cs"],
  answer: 3,
},
{
  question: "Which alkali metal is used in heat exchange in nuclear reactors?",
  options: ["Li", "Na", "K", "Rb"],
  answer: 1,
},
{
  question: "Why does Be show covalent bonding?",
  options: ["High ionization", "Small size", "High charge density", "All"],
  answer: 3,
},
{
  question: "The compound NaH is a:",
  options: ["Salt", "Hydride", "Acid", "Peroxide"],
  answer: 1,
},
{
  question: "Which ion forms the hardest base according to HSAB theory?",
  options: ["Mg²⁺", "Ca²⁺", "Ba²⁺", "Be²⁺"],
  answer: 3,
},
{
  question: "AlCl₃ in molten state conducts electricity because:",
  options: ["Covalent", "Ionic", "Amphoteric", "Insulator"],
  answer: 1,
},
{
  question: "Group 3A metals form which oxides?",
  options: ["M₂O₃", "MO", "MO₂", "M₂O"],
  answer: 0,
}

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
      {
  question: "Why does lithium form a nitride while other alkali metals do not?",
  options: ["Higher reactivity", "Small size and high charge density", "Low ionization energy", "It is a non-metal"],
  answer: 1,
},
{
  question: "What explains the diagonal relationship between Li and Mg?",
  options: ["Same group", "Similar size and charge/radius ratio", "Same reactivity", "Both are metals"],
  answer: 1,
},
{
  question: "Which of the following forms a covalent halide?",
  options: ["NaCl", "KBr", "BeCl₂", "CsF"],
  answer: 2,
},
{
  question: "The amphoteric nature of BeO is due to:",
  options: ["Its ionic nature", "Its small size and high charge", "Being a metal oxide", "Being a non-metal oxide"],
  answer: 1,
},
{
  question: "The inert pair effect is most significant in:",
  options: ["Boron", "Gallium", "Indium", "Thallium"],
  answer: 3,
},
{
  question: "Which is the correct trend in basicity of hydroxides in Group 2A?",
  options: ["Be(OH)₂ > Ba(OH)₂", "Mg(OH)₂ > Ca(OH)₂", "Ba(OH)₂ > Mg(OH)₂", "All are equal"],
  answer: 2,
},
{
  question: "Which Group 1A metal forms the least stable peroxide?",
  options: ["Li", "Na", "K", "Rb"],
  answer: 0,
},
{
  question: "The high melting point of LiF is due to:",
  options: ["Covalent bonding", "Large ions", "High lattice energy", "Low hydration energy"],
  answer: 2,
},
{
  question: "Which element shows anomalous behavior in Group 2A?",
  options: ["Ca", "Ba", "Be", "Sr"],
  answer: 2,
},
{
  question: "Which metal has the highest flame test intensity?",
  options: ["Na", "K", "Rb", "Cs"],
  answer: 0,
},
{
  question: "Aluminium exhibits +1 oxidation state due to:",
  options: ["d-orbitals", "Inert pair effect", "Covalency", "It does not show +1 state"],
  answer: 3,
},
{
  question: "The chlorides of Group 1A are mostly:",
  options: ["Covalent", "Ionic and soluble", "Ionic and insoluble", "Polar covalent"],
  answer: 1,
},
{
  question: "Which Group 3A element exhibits amphoteric hydroxide?",
  options: ["B", "Al", "Ga", "Tl"],
  answer: 1,
},
{
  question: "What happens when Na reacts with CO₂?",
  options: ["Na₂CO₃ forms", "NaHCO₃ forms", "Sodium carbonate forms", "Sodium oxalate forms"],
  answer: 0,
},
{
  question: "What is the product of reaction between Al and NaOH?",
  options: ["NaAlO₂ + H₂", "Al₂O₃", "AlCl₃", "NaAlH₄"],
  answer: 0,
},
{
  question: "Boron halides behave as Lewis acids because:",
  options: ["They donate electrons", "They accept electrons", "They are basic", "They form salts"],
  answer: 1,
},
{
  question: "Why is Tl⁺ more stable than Tl³⁺?",
  options: ["Large size", "Low ionization energy", "Inert pair effect", "High reactivity"],
  answer: 2,
},
{
  question: "Aluminium oxide reacts with HCl to give:",
  options: ["Al(OH)₃", "AlCl₃", "Al₂O₃", "Al₂Cl₆"],
  answer: 1,
},
{
  question: "Which of the following forms a covalent hydride?",
  options: ["LiH", "MgH₂", "BeH₂", "NaH"],
  answer: 2,
},
{
  question: "Which element has the strongest polarizing power?",
  options: ["Li⁺", "Na⁺", "K⁺", "Rb⁺"],
  answer: 0,
},
{
  question: "What is formed when BCl₃ reacts with NH₃?",
  options: ["B(NH₃)₃", "BCl₃·NH₃ complex", "Boron nitride", "No reaction"],
  answer: 1,
},
{
  question: "Which pair forms a complex hydride used in reducing agents?",
  options: ["Na and B", "Li and Al", "Na and H", "Al and H"],
  answer: 1,
},
{
  question: "Solubility of Group 2A sulfates decreases down the group due to:",
  options: ["Decreased hydration energy", "Increased lattice energy", "Decreased lattice energy", "Increased solubility"],
  answer: 0,
},
{
  question: "Which of these shows maximum covalent character in its halide?",
  options: ["LiCl", "NaCl", "KCl", "CsCl"],
  answer: 0,
},
{
  question: "The structure of diborane involves:",
  options: ["4-center 2-electron bonds", "3-center 2-electron bonds", "2-center 2-electron bonds", "Hydrogen bonding"],
  answer: 1,
},
{
  question: "Which group 3A element shows +1 oxidation due to inert pair effect?",
  options: ["Al", "Ga", "In", "Tl"],
  answer: 3,
},
{
  question: "Why is BeF₂ polymeric in nature?",
  options: ["Hydrogen bonding", "Bridging fluorides", "Lone pair on Be", "Large size"],
  answer: 1,
},
{
  question: "Why does Na react explosively with water?",
  options: ["Forms NaOH", "Produces H₂ gas", "Exothermic reaction", "All of these"],
  answer: 3,
},
{
  question: "Which metal forms an amphoteric oxide and hydroxide?",
  options: ["Ca", "Al", "Na", "K"],
  answer: 1,
},
{
  question: "Which alkali metal carbonate is thermally unstable?",
  options: ["Na₂CO₃", "K₂CO₃", "Li₂CO₃", "Rb₂CO₃"],
  answer: 2,
},
{
  question: "Why does AlCl₃ behave as a dimer in solid state?",
  options: ["Octet rule", "Covalency", "Electron deficiency", "Hydrogen bonding"],
  answer: 2,
},
{
  question: "The coordination number of Al in [Al(H₂O)₆]³⁺ is:",
  options: ["4", "6", "2", "3"],
  answer: 1,
},
{
  question: "Which of these hydroxides decomposes upon heating?",
  options: ["Be(OH)₂", "Mg(OH)₂", "Ba(OH)₂", "Ca(OH)₂"],
  answer: 0,
},
{
  question: "Boron is used as a dopant in:",
  options: ["Glass", "Metals", "Semiconductors", "Ceramics"],
  answer: 2,
},
{
  question: "Aluminium acts as a reducing agent in:",
  options: ["Thermite process", "Haber process", "Bayer process", "Hall-Héroult process"],
  answer: 0,
},
{
  question: "Which Group 3A element shows the greatest metallic character?",
  options: ["B", "Al", "Ga", "Tl"],
  answer: 3,
},
{
  question: "Which of these has the largest atomic radius?",
  options: ["Li", "Na", "K", "Rb"],
  answer: 3,
},
{
  question: "Which element forms the most stable oxoanion?",
  options: ["B", "Al", "Ga", "In"],
  answer: 0,
},
{
  question: "Which Group 1A element is used in medicine for bipolar disorder?",
  options: ["Na", "K", "Li", "Rb"],
  answer: 2,
},
{
  question: "Why is Li different from other Group 1A elements?",
  options: ["Small size", "High charge density", "Diagonal relationship", "All of these"],
  answer: 3,
}

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
     {
  question: "Which transition metal is commonly used in electric wiring?",
  options: ["Iron", "Copper", "Silver", "Zinc"],
  answer: 1,
},
{
  question: "What color is typically associated with copper(II) sulfate solution?",
  options: ["Green", "Blue", "Yellow", "Red"],
  answer: 1,
},
{
  question: "Which transition metal is used in galvanizing steel?",
  options: ["Zinc", "Iron", "Nickel", "Copper"],
  answer: 0,
},
{
  question: "Which metal forms a reddish-brown precipitate with sodium hydroxide?",
  options: ["Cu²⁺", "Fe²⁺", "Fe³⁺", "Zn²⁺"],
  answer: 2,
},
{
  question: "Which of the following has variable oxidation states?",
  options: ["K", "Na", "Fe", "Mg"],
  answer: 2,
},
{
  question: "Which transition metal ion is typically yellow in solution?",
  options: ["Cu²⁺", "Fe³⁺", "Ni²⁺", "Mn²⁺"],
  answer: 1,
},
{
  question: "Which of these is NOT a typical property of transition metals?",
  options: ["High melting points", "Forming colored compounds", "Poor conductivity", "Variable oxidation states"],
  answer: 2,
},
{
  question: "What is the charge on chromium in Cr³⁺?",
  options: ["+1", "+2", "+3", "+4"],
  answer: 2,
},
{
  question: "Which metal is commonly used as a catalyst in the Haber process?",
  options: ["Platinum", "Iron", "Zinc", "Copper"],
  answer: 1,
},
{
  question: "Which of the following is a typical use of transition metals?",
  options: ["Salt production", "Fertilizer", "Catalysis", "Electrolysis"],
  answer: 2,
},
{
  question: "Which of the following is a typical oxidation state for manganese?",
  options: ["+1", "+2", "+3", "+4"],
  answer: 1,
},
{
  question: "Transition metals are often good:",
  options: ["Insulators", "Nonmetals", "Conductors", "Noble gases"],
  answer: 2,
},
{
  question: "Which of the following elements is NOT a transition metal?",
  options: ["Titanium", "Scandium", "Zinc", "Sodium"],
  answer: 3,
},
{
  question: "What is the electron configuration of Fe²⁺?",
  options: ["[Ar] 4s² 3d⁴", "[Ar] 3d⁶", "[Ar] 4s² 3d⁶", "[Ar] 4s¹ 3d⁷"],
  answer: 1,
},
{
  question: "Which of these transition metals is the softest?",
  options: ["Iron", "Zinc", "Copper", "Silver"],
  answer: 1,
},
{
  question: "Which transition metal is known for its resistance to corrosion?",
  options: ["Copper", "Iron", "Chromium", "Zinc"],
  answer: 2,
},
{
  question: "The rusting of iron involves formation of:",
  options: ["Fe²⁺", "Fe³⁺", "Fe⁰", "Fe⁴⁺"],
  answer: 1,
},
{
  question: "Which transition element is a liquid at room temperature?",
  options: ["Mercury", "Zinc", "Iron", "Cobalt"],
  answer: 0,
},
{
  question: "Which of these elements is used in coinage?",
  options: ["Iron", "Cobalt", "Copper", "Titanium"],
  answer: 2,
},
{
  question: "Which element shows catalytic activity in hydrogenation?",
  options: ["Silver", "Gold", "Nickel", "Lead"],
  answer: 2,
},
{
  question: "Which transition metal is used in batteries?",
  options: ["Lead", "Lithium", "Cobalt", "Neon"],
  answer: 2,
},
{
  question: "Which of the following transition metals is radioactive?",
  options: ["Scandium", "Uranium", "Zinc", "Titanium"],
  answer: 1,
},
{
  question: "Which ion gives a blue solution in water?",
  options: ["Cu²⁺", "Fe³⁺", "Zn²⁺", "Cr³⁺"],
  answer: 0,
},
{
  question: "What color is typical of Fe²⁺ compounds in solution?",
  options: ["Yellow", "Green", "Blue", "Orange"],
  answer: 1,
},
{
  question: "Which of these forms a +1 oxidation state commonly?",
  options: ["Cu", "Fe", "Zn", "Co"],
  answer: 0,
},
{
  question: "Which of these is a magnetic transition metal?",
  options: ["Ni", "Cu", "Zn", "Ag"],
  answer: 0,
},
{
  question: "Which of these forms white precipitate with NaOH that dissolves in excess?",
  options: ["Fe²⁺", "Zn²⁺", "Fe³⁺", "Cu²⁺"],
  answer: 1,
},
{
  question: "Which is used in the contact process for sulfuric acid?",
  options: ["V₂O₅", "MnO₂", "FeCl₃", "Pt"],
  answer: 0,
},
{
  question: "Which metal is used in light bulb filaments?",
  options: ["Iron", "Copper", "Tungsten", "Nickel"],
  answer: 2,
},
{
  question: "Which transition metal forms a purple solution in its +7 state?",
  options: ["Mn", "Cr", "Fe", "Cu"],
  answer: 0,
},
{
  question: "Which of these has the electronic configuration [Ar] 3d⁵ 4s¹?",
  options: ["Fe", "Cr", "Mn", "Ni"],
  answer: 1,
},
{
  question: "Which element can exhibit oxidation states from +2 to +7?",
  options: ["Cu", "Mn", "Zn", "Co"],
  answer: 1,
},
{
  question: "Which metal is commonly used in electroplating?",
  options: ["Iron", "Zinc", "Nickel", "Sodium"],
  answer: 2,
},
{
  question: "Which of the following forms a brown precipitate with NaOH?",
  options: ["Fe²⁺", "Fe³⁺", "Cu²⁺", "Zn²⁺"],
  answer: 1,
},
{
  question: "Which transition metal has the symbol 'Ag'?",
  options: ["Gold", "Silver", "Sodium", "Argon"],
  answer: 1,
},
{
  question: "What color is nickel(II) ion in solution?",
  options: ["Green", "Blue", "Pink", "Yellow"],
  answer: 0,
},
{
  question: "Which element is added to steel to make it stainless?",
  options: ["Zinc", "Aluminum", "Chromium", "Nickel"],
  answer: 2,
},
{
  question: "Which metal forms a blue precipitate with NaOH?",
  options: ["Fe³⁺", "Fe²⁺", "Cu²⁺", "Zn²⁺"],
  answer: 2,
},
{
  question: "Which of these is not a transition metal?",
  options: ["Zn", "Cu", "Fe", "Cr"],
  answer: 0,
},
{
  question: "Which transition metal ion forms pale green solutions?",
  options: ["Cu²⁺", "Fe³⁺", "Fe²⁺", "Mn²⁺"],
  answer: 2,
}

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
     {
  question: "What is the electron configuration of Fe³⁺?",
  options: ["[Ar] 3d⁵", "[Ar] 3d⁶", "[Ar] 4s² 3d⁵", "[Ar] 3d³"],
  answer: 0,
},
{
  question: "Which transition metal forms a complex ion with ammonia to give a deep blue color?",
  options: ["Iron", "Copper", "Zinc", "Cobalt"],
  answer: 1,
},
{
  question: "The splitting of d-orbitals in a transition metal complex leads to:",
  options: ["Ionization", "Lone pairs", "Color", "Radioactivity"],
  answer: 2,
},
{
  question: "Which ligand causes the greatest splitting in crystal field theory?",
  options: ["Cl⁻", "H₂O", "NH₃", "CN⁻"],
  answer: 3,
},
{
  question: "What is the geometry of a transition metal complex with coordination number 6?",
  options: ["Tetrahedral", "Octahedral", "Square planar", "Trigonal bipyramidal"],
  answer: 1,
},
{
  question: "Which ion does NOT show color in aqueous solution?",
  options: ["Cu²⁺", "Zn²⁺", "Fe²⁺", "Ni²⁺"],
  answer: 1,
},
{
  question: "Which transition metal is essential in hemoglobin?",
  options: ["Copper", "Iron", "Zinc", "Magnesium"],
  answer: 1,
},
{
  question: "Which of these transition metals is most commonly used in making magnets?",
  options: ["Nickel", "Zinc", "Silver", "Vanadium"],
  answer: 0,
},
{
  question: "In which process is platinum used as a catalyst?",
  options: ["Haber", "Contact", "Ostwald", "Hydrogenation"],
  answer: 3,
},
{
  question: "Which of these shows the highest number of oxidation states?",
  options: ["Iron", "Manganese", "Zinc", "Copper"],
  answer: 1,
},
{
  question: "Which complex is square planar in shape?",
  options: ["[Ni(CN)₄]²⁻", "[Fe(H₂O)₆]²⁺", "[Cu(NH₃)₄]²⁺", "[CrCl₃(H₂O)₃]"],
  answer: 0,
},
{
  question: "What is the oxidation state of Mn in KMnO₄?",
  options: ["+4", "+5", "+6", "+7"],
  answer: 3,
},
{
  question: "Which of the following is paramagnetic?",
  options: ["Zn²⁺", "Fe²⁺", "Cu⁺", "Sc³⁺"],
  answer: 1,
},
{
  question: "Which reagent is used to distinguish between Fe²⁺ and Fe³⁺?",
  options: ["Benedict's solution", "NaOH", "Ammonia", "Potassium hexacyanoferrate(III)"],
  answer: 3,
},
{
  question: "Which of these is NOT an inner transition element?",
  options: ["Uranium", "Thorium", "Lanthanum", "Cobalt"],
  answer: 3,
},
{
  question: "Which property decreases across the transition series?",
  options: ["Atomic radius", "Density", "Melting point", "Magnetic moment"],
  answer: 0,
},
{
  question: "Which ion gives a purple color in solution?",
  options: ["Cr³⁺", "Mn²⁺", "MnO₄⁻", "Fe³⁺"],
  answer: 2,
},
{
  question: "What color is the complex [Cu(NH₃)₄]²⁺?",
  options: ["Green", "Blue", "Violet", "Orange"],
  answer: 1,
},
{
  question: "Which element has the configuration [Ar] 4s¹ 3d⁵?",
  options: ["Mn", "Fe", "Cr", "Co"],
  answer: 2,
},
{
  question: "What is the hybridization of Ni in [Ni(CN)₄]²⁻?",
  options: ["sp³", "dsp²", "sp²", "sp"],
  answer: 1,
},
{
  question: "Which of these complexes exhibits chelation?",
  options: ["[Cu(NH₃)₄]²⁺", "[Fe(CN)₆]³⁻", "[Cu(EDTA)]²⁻", "[CoCl₄]²⁻"],
  answer: 2,
},
{
  question: "Which transition metal ion is responsible for the red color of blood?",
  options: ["Fe²⁺", "Cu²⁺", "Cr³⁺", "Zn²⁺"],
  answer: 0,
},
{
  question: "The magnetic moment is directly related to:",
  options: ["Ion size", "Number of unpaired electrons", "Atomic radius", "Ionization energy"],
  answer: 1,
},
{
  question: "Which of the following complexes is diamagnetic?",
  options: ["[Fe(CN)₆]⁴⁻", "[Fe(H₂O)₆]²⁺", "[Mn(H₂O)₆]²⁺", "[CoCl₄]²⁻"],
  answer: 0,
},
{
  question: "Which of the following elements does not follow typical transition metal properties?",
  options: ["Sc", "Zn", "Cu", "Cr"],
  answer: 1,
},
{
  question: "Which transition metal has the lowest melting point?",
  options: ["Hg", "Ag", "Cu", "Zn"],
  answer: 0,
},
{
  question: "What is the common oxidation state of cobalt in complexes?",
  options: ["+1", "+2", "+3", "+4"],
  answer: 2,
},
{
  question: "Which element is used in aircraft engines due to its high strength?",
  options: ["Aluminum", "Titanium", "Zinc", "Iron"],
  answer: 1,
},
{
  question: "The ion [Fe(CN)₆]³⁻ is:",
  options: ["Green", "Yellow", "Colorless", "Blue"],
  answer: 1,
},
{
  question: "Which ligand is bidentate?",
  options: ["H₂O", "NH₃", "CO", "en (ethylenediamine)"],
  answer: 3,
},
{
  question: "Which of the following is NOT a common ligand?",
  options: ["H₂O", "NH₃", "NO₃⁻", "CN⁻"],
  answer: 2,
},
{
  question: "Which ion gives a white precipitate with NaOH that is amphoteric?",
  options: ["Fe³⁺", "Zn²⁺", "Cu²⁺", "Ni²⁺"],
  answer: 1,
},
{
  question: "Which is the correct order of increasing field strength of ligands?",
  options: ["Cl⁻ < H₂O < NH₃ < CN⁻", "NH₃ < Cl⁻ < H₂O < CN⁻", "CN⁻ < Cl⁻ < H₂O < NH₃", "Cl⁻ < CN⁻ < NH₃ < H₂O"],
  answer: 0,
},
{
  question: "Which transition metal is found in vitamin B12?",
  options: ["Cobalt", "Iron", "Nickel", "Zinc"],
  answer: 0,
},
{
  question: "Which element is commonly used in rechargeable batteries?",
  options: ["Zn", "Ni", "Cr", "Mn"],
  answer: 1,
},
{
  question: "Which ion forms green-colored solution in water?",
  options: ["Cu²⁺", "Fe³⁺", "Cr³⁺", "Fe²⁺"],
  answer: 2,
},
{
  question: "Which of these metals can exhibit +8 oxidation state?",
  options: ["Os", "Fe", "Mn", "Cr"],
  answer: 0,
},
{
  question: "Which metal complex is used in cancer treatment?",
  options: ["Cisplatin", "Ferrocene", "Zinc oxide", "Potassium dichromate"],
  answer: 0,
},
{
  question: "Which property explains the catalytic activity of transition metals?",
  options: ["High atomic weight", "Unpaired d electrons", "Colorful ions", "Shiny surfaces"],
  answer: 1,
},
{
  question: "Which complex shows linkage isomerism?",
  options: ["[Fe(CN)₆]³⁻", "[Co(NH₃)₅(NO₂)]²⁺", "[Ni(H₂O)₆]²⁺", "[Cu(NH₃)₄]²⁺"],
  answer: 1,
},
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
      {
  question: "What is the maximum oxidation state shown by manganese?",
  options: ["+4", "+5", "+6", "+7"],
  answer: 3,
},
{
  question: "Which of the following ions is colorless?",
  options: ["Ti³⁺", "Sc³⁺", "V³⁺", "Cr³⁺"],
  answer: 1,
},
{
  question: "What is the coordination number in [Cr(NH₃)₄Cl₂]⁺?",
  options: ["4", "5", "6", "2"],
  answer: 2,
},
{
  question: "Which element shows highest number of oxidation states?",
  options: ["Fe", "Mn", "Cr", "Cu"],
  answer: 1,
},
{
  question: "The geometry of [Cu(NH₃)₄]²⁺ is:",
  options: ["Tetrahedral", "Square planar", "Octahedral", "Trigonal planar"],
  answer: 1,
},
{
  question: "Which of the following is an example of a low-spin complex?",
  options: ["[FeF₆]³⁻", "[Fe(CN)₆]³⁻", "[Fe(H₂O)₆]³⁺", "[FeCl₆]³⁻"],
  answer: 1,
},
{
  question: "The ligand ethylenediamine is classified as:",
  options: ["Monodentate", "Bidentate", "Tridentate", "Polydentate"],
  answer: 1,
},
{
  question: "Which of the following exhibits Jahn-Teller distortion?",
  options: ["Cr³⁺", "Ni²⁺", "Cu²⁺", "Zn²⁺"],
  answer: 2,
},
{
  question: "Which of these is NOT a property of transition metals?",
  options: ["High melting point", "Variable oxidation states", "Form ionic bonds only", "Colored compounds"],
  answer: 2,
},
{
  question: "Which complex exhibits optical isomerism?",
  options: ["[Cr(NH₃)₆]³⁺", "[Fe(CN)₆]³⁻", "[Co(en)₃]³⁺", "[Cu(H₂O)₄]²⁺"],
  answer: 2,
},
{
  question: "Which element shows +1 oxidation state in its most stable ion?",
  options: ["Fe", "Cu", "Ni", "Cr"],
  answer: 1,
},
{
  question: "Which of the following forms a brown complex with thiocyanate?",
  options: ["Cu²⁺", "Zn²⁺", "Fe³⁺", "Co²⁺"],
  answer: 2,
},
{
  question: "Which compound is used in breathalyzer tests?",
  options: ["K₂Cr₂O₇", "CuSO₄", "FeCl₃", "KMnO₄"],
  answer: 0,
},
{
  question: "Which transition element forms ferrocene?",
  options: ["Fe", "Co", "Ni", "Cu"],
  answer: 0,
},
{
  question: "Which element has the electron configuration [Ar] 4s¹ 3d¹⁰?",
  options: ["Ni", "Zn", "Cu", "Cr"],
  answer: 2,
},
{
  question: "Which of the following is NOT a characteristic of d-block elements?",
  options: ["Catalysis", "Colored ions", "Complete d-subshell", "Variable valency"],
  answer: 2,
},
{
  question: "Which of these ions has a d⁵ configuration?",
  options: ["Mn²⁺", "Fe³⁺", "Cr²⁺", "V²⁺"],
  answer: 0,
},
{
  question: "Which transition metal is part of chlorophyll?",
  options: ["Fe", "Mg", "Zn", "Cu"],
  answer: 1,
},
{
  question: "What is the oxidation state of chromium in Cr₂O₇²⁻?",
  options: ["+3", "+6", "+2", "+7"],
  answer: 1,
},
{
  question: "Which transition element is liquid at room temperature?",
  options: ["Hg", "Zn", "Cd", "Sn"],
  answer: 0,
},
{
  question: "Which of these d-block elements is NOT considered a transition metal by IUPAC definition?",
  options: ["Zn", "Fe", "Cr", "Ti"],
  answer: 0,
},
{
  question: "The effective nuclear charge across a transition series:",
  options: ["Increases", "Decreases", "Remains same", "Fluctuates"],
  answer: 0,
},
{
  question: "Why are transition metals often paramagnetic?",
  options: ["Full s-orbitals", "Presence of unpaired d-electrons", "Low ionization energy", "Hybridization"],
  answer: 1,
},
{
  question: "Which of these transition metals is the most reactive?",
  options: ["Fe", "Cu", "Zn", "Hg"],
  answer: 2,
},
{
  question: "Which complex shows ionization isomerism?",
  options: ["[Co(NH₃)₅Br]SO₄", "[Fe(CN)₆]⁴⁻", "[Cu(NH₃)₄]²⁺", "[Cr(H₂O)₆]³⁺"],
  answer: 0,
},
{
  question: "What is the oxidation number of Mo in MoO₄²⁻?",
  options: ["+4", "+5", "+6", "+7"],
  answer: 2,
},
{
  question: "Which metal is used as a catalyst in the contact process?",
  options: ["Pt", "V₂O₅", "Fe", "Ni"],
  answer: 1,
},
{
  question: "What is the oxidation state of iron in Fe(CN)₆⁴⁻?",
  options: ["+3", "+4", "+2", +1],
  answer: 2,
},
{
  question: "Which of these does NOT exhibit variable oxidation states?",
  options: ["Cu", "Zn", "Fe", "Mn"],
  answer: 1,
},
{
  question: "Which of these transition metals can form square planar complexes?",
  options: ["Fe", "Co", "Ni", "Zn"],
  answer: 2,
},
{
  question: "Which property of ligands affects the splitting energy in crystal field theory?",
  options: ["Size", "Charge", "Field strength", "Color"],
  answer: 2,
},
{
  question: "What is the oxidation number of Os in OsO₄?",
  options: ["+4", "+6", "+8", "+2"],
  answer: 2,
},
{
  question: "Which d-block element is commonly used in light bulb filaments?",
  options: ["Tungsten", "Molybdenum", "Zinc", "Iron"],
  answer: 0,
},
{
  question: "Which of the following complexes shows geometrical isomerism?",
  options: ["[Pt(NH₃)₂Cl₂]", "[Cu(NH₃)₄]²⁺", "[Fe(CN)₆]³⁻", "[Ni(CO)₄]"],
  answer: 0,
},
{
  question: "Which of the following transition metals forms the strongest metallic bonds?",
  options: ["Fe", "Ni", "W", "Ag"],
  answer: 2,
},
{
  question: "Which metal complex is diamagnetic and square planar?",
  options: ["[Ni(CN)₄]²⁻", "[NiCl₄]²⁻", "[Cu(NH₃)₄]²⁺", "[CoCl₄]²⁻"],
  answer: 0,
},
{
  question: "Which element has the electron configuration [Xe] 4f¹⁴ 5d⁶ 6s²?",
  options: ["Os", "Re", "Ir", "Pt"],
  answer: 3,
},
{
  question: "Which of the following is not a chelating ligand?",
  options: ["EDTA", "en", "H₂O", "oxalate"],
  answer: 2,
},
{
  question: "The brown ring test is used to detect:",
  options: ["Chloride", "Nitrate", "Sulfate", "Carbonate"],
  answer: 1,
},
{
  question: "Which of the following shows color due to d-d transitions?",
  options: ["Sc³⁺", "Zn²⁺", "Fe²⁺", "Cu⁺"],
  answer: 2,
}

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
    const mins = String(Math.floor((duration - seconds) / 30)).padStart(2, "0");
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
