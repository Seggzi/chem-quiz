// script.js (complete with UI features)

const topics = {
  
    

      determination_of_structures_of_organic_compounds: {
    easy: [
      {
        question: "Which technique helps determine molecular mass?",
        options: ["NMR", "Mass spectrometry", "IR spectroscopy", "UV spectroscopy"],
        answer: 1
      },
      {
        question: "What is the full form of NMR?",
        options: ["Nucleic Magnetic Resonance", "Nuclear Magnetic Resonance", "Neutral Mass Record", "None"],
        answer: 1
      },
      {
        question: "Which technique gives information about functional groups?",
        options: ["NMR", "UV", "Mass spec", "IR"],
        answer: 3
      },
      {
        question: "Which spectrum shows absorption due to bonds vibrating?",
        options: ["IR", "NMR", "Mass", "X-ray"],
        answer: 0
      },
      {
        question: "In IR, what unit is used for frequency?",
        options: ["Hz", "cm⁻¹", "nm", "J/mol"],
        answer: 1
      },
      {
        question: "Which technique uses magnetic fields?",
        options: ["UV", "Mass Spec", "NMR", "Chromatography"],
        answer: 2
      },
      {
        question: "What is used to separate compounds by boiling point?",
        options: ["Filtration", "Distillation", "Chromatography", "Evaporation"],
        answer: 1
      },
      {
        question: "Chromatography is based on:",
        options: ["Size of molecule", "Magnetic behavior", "Solubility difference", "Fluorescence"],
        answer: 2
      },
      {
        question: "Mass spectrometry gives:",
        options: ["Boiling point", "Molecular weight", "Bond angles", "Chemical formula"],
        answer: 1
      },
      {
        question: "Which instrument separates ions by mass/charge ratio?",
        options: ["NMR", "IR", "Mass spectrometer", "Chromatograph"],
        answer: 2
      }
      // Add 40 more...
    ],
    medium: [
      {
        question: "Which atoms in a molecule respond in proton NMR?",
        options: ["C", "H", "O", "N"],
        answer: 1
      },
      {
        question: "The M+ peak in mass spectrometry indicates:",
        options: ["Fragment ion", "Base peak", "Molecular ion", "Parent ion"],
        answer: 2
      },
      {
        question: "Which of these appears downfield in NMR?",
        options: ["Alkyl H", "Aromatic H", "Alcohol H", "Aldehyde H"],
        answer: 3
      },
      {
        question: "The number of NMR signals tells you:",
        options: ["How many H atoms", "Chemical environments", "Weight", "Shape"],
        answer: 1
      },
      {
        question: "Which technique shows splitting due to nearby H atoms?",
        options: ["Mass", "IR", "NMR", "UV"],
        answer: 2
      },
      {
        question: "IR absorption near 1700 cm⁻¹ indicates:",
        options: ["Alcohol", "Carboxylic acid", "Ketone", "Amine"],
        answer: 2
      },
      {
        question: "In IR, broad peak near 3300 cm⁻¹ indicates:",
        options: ["C-H stretch", "O-H stretch", "C=O", "C≡C"],
        answer: 1
      },
      {
        question: "Mass fragmentation often leads to:",
        options: ["Crystals", "Color change", "Smaller ions", "Electrons"],
        answer: 2
      },
      {
        question: "The TMS standard in NMR is used because:",
        options: ["It's reactive", "Soluble in water", "Inert and gives sharp peak", "Absorbs IR"],
        answer: 2
      },
      {
        question: "Which spectrum gives chemical shift values?",
        options: ["IR", "NMR", "Mass", "UV"],
        answer: 1
      }
      // Add 40 more...
    ],
    hard: [
      {
        question: "Which isotope is commonly used in carbon NMR?",
        options: ["C-14", "C-13", "C-12", "C-11"],
        answer: 1
      },
      {
        question: "A base peak in mass spectrometry is:",
        options: ["Heaviest ion", "Most intense peak", "Smallest ion", "Last peak"],
        answer: 1
      },
      {
        question: "Spin-spin splitting occurs when:",
        options: ["No neighbors", "Identical H", "Non-equivalent adjacent protons", "All protons resonate"],
        answer: 2
      },
      {
        question: "UV spectroscopy is mainly used for:",
        options: ["Alkanes", "Conjugated systems", "Amines", "Acids"],
        answer: 1
      },
      {
        question: "The N+1 rule in NMR helps predict:",
        options: ["Chemical shifts", "Number of signals", "Spin multiplicity", "Magnetic field"],
        answer: 2
      },
      {
        question: "Fragmentation in mass spec can involve:",
        options: ["Beta-cleavage", "Alpha-cleavage", "McLafferty rearrangement", "All of these"],
        answer: 3
      },
      {
        question: "High-resolution mass spec helps determine:",
        options: ["Functional groups", "Structure", "Molecular formula", "Spin states"],
        answer: 2
      },
      {
        question: "What is DEPT in NMR?",
        options: ["A type of IR", "UV absorption", "A proton decoupling method", "Mass analysis"],
        answer: 2
      },
      {
        question: "In NMR, shielding causes signals to shift:",
        options: ["Downfield", "Upfield", "No change", "Split"],
        answer: 1
      },
      {
        question: "The molecular ion peak corresponds to:",
        options: ["Neutral fragment", "Radical", "Unfragmented molecule", "Base ion"],
        answer: 2
      }
      // Add 40 more...
    ]
  },


      nomenclature_and_functional_groups_classes_of_organic_compounds: {
    easy: [
      {
        question: "What is the suffix for alcohols in IUPAC names?",
        options: ["-one", "-ene", "-ol", "-al"],
        answer: 2
      },
      {
        question: "Which group is represented by –COOH?",
        options: ["Alcohol", "Ester", "Carboxylic acid", "Amide"],
        answer: 2
      },
      {
        question: "What is the name of CH₄?",
        options: ["Ethane", "Methane", "Propane", "Butane"],
        answer: 1
      },
      {
        question: "Which functional group is –OH?",
        options: ["Aldehyde", "Alcohol", "Ketone", "Amine"],
        answer: 1
      },
      {
        question: "The IUPAC name of CH₃CH₂OH is:",
        options: ["Methanol", "Ethanol", "Propanol", "Butanol"],
        answer: 1
      },
      {
        question: "What does –NH₂ represent?",
        options: ["Nitrate", "Amine", "Amide", "Amino acid"],
        answer: 1
      },
      {
        question: "The suffix '-al' is used for:",
        options: ["Ketones", "Alcohols", "Aldehydes", "Carboxylic acids"],
        answer: 2
      },
      {
        question: "How many carbon atoms are in butane?",
        options: ["2", "3", "4", "5"],
        answer: 2
      },
      {
        question: "Which compound has a carbon–carbon double bond?",
        options: ["Alkyne", "Alkene", "Alkane", "Alcohol"],
        answer: 1
      },
      {
        question: "Which of the following is a ketone?",
        options: ["CH₃CH₂OH", "CH₃COCH₃", "CH₃CHO", "HCOOH"],
        answer: 1
      }
      // Add 40 more...
    ],
    medium: [
      {
        question: "Which of the following is a secondary alcohol?",
        options: ["Propan-2-ol", "Methanol", "Ethanol", "Tert-butanol"],
        answer: 0
      },
      {
        question: "What is the IUPAC name of CH₃COOH?",
        options: ["Ethanal", "Methanoic acid", "Ethanoic acid", "Acetic acid"],
        answer: 2
      },
      {
        question: "Which suffix is used for ketones?",
        options: ["-one", "-ol", "-al", "-oic acid"],
        answer: 0
      },
      {
        question: "An ester group is represented as:",
        options: ["R-OH", "R-COOR'", "R-NH₂", "R-CHO"],
        answer: 1
      },
      {
        question: "What is the IUPAC name of CH₃CH₂CH₂CH₃?",
        options: ["Methane", "Butane", "Pentane", "Propane"],
        answer: 1
      },
      {
        question: "The root name 'pent-' indicates:",
        options: ["3 C atoms", "4 C atoms", "5 C atoms", "6 C atoms"],
        answer: 2
      },
      {
        question: "A compound with both –NH₂ and –COOH groups is called:",
        options: ["Alcohol", "Ester", "Amine", "Amino acid"],
        answer: 3
      },
      {
        question: "Which is a tertiary alcohol?",
        options: ["2-methylpropan-2-ol", "Ethanol", "Propan-1-ol", "Methanol"],
        answer: 0
      },
      {
        question: "Which prefix is used when a compound has two identical groups?",
        options: ["Mono", "Di", "Tri", "Tetra"],
        answer: 1
      },
      {
        question: "Which compound is a primary amine?",
        options: ["CH₃NH₂", "(CH₃)₂NH", "(CH₃)₃N", "CH₃CONH₂"],
        answer: 0
      }
      // Add 40 more...
    ],
    hard: [
      {
        question: "Which compound is named as but-2-en-1-ol?",
        options: [
          "A 4-carbon alcohol with a double bond at C-2",
          "A 3-carbon alcohol with a triple bond",
          "A ketone with OH on C-1",
          "An ester with 2 carbon atoms"
        ],
        answer: 0
      },
      {
        question: "What is the IUPAC name of CH₃CH=CHCOOH?",
        options: ["Butenoic acid", "But-2-enoic acid", "But-3-enoic acid", "Propanoic acid"],
        answer: 1
      },
      {
        question: "An amide functional group contains:",
        options: ["C=O and NH₂", "COOH and NH₂", "C=NH", "CH=NH"],
        answer: 0
      },
      {
        question: "Which of these has the highest priority in naming?",
        options: ["Alcohol", "Amine", "Carboxylic acid", "Ketone"],
        answer: 2
      },
      {
        question: "Which is the correct name for CH₃CH₂CH₂CHO?",
        options: ["Butanol", "Butanoic acid", "Butanal", "Propanal"],
        answer: 2
      },
      {
        question: "Identify a molecule with both ketone and amine groups.",
        options: ["CH₃COCH₂NH₂", "CH₃CH₂OH", "CH₃CH=CH₂", "CH₃NHCH₃"],
        answer: 0
      },
      {
        question: "Which suffix is used for naming esters?",
        options: ["-oate", "-ol", "-al", "-one"],
        answer: 0
      },
      {
        question: "In IUPAC naming, which comes first?",
        options: ["Functional group", "Longest chain", "Position of substituents", "Alphabetical order"],
        answer: 1
      },
      {
        question: "Which has both alkene and carboxylic acid groups?",
        options: ["Butanoic acid", "Pentene", "Pent-2-enoic acid", "Propanoic acid"],
        answer: 2
      },
      {
        question: "The correct name for CH₃CH(NH₂)COOH is:",
        options: ["Alanine", "Aminoacetic acid", "2-Aminopropanoic acid", "Glycine"],
        answer: 2
      }
      // Add 40 more...
    ]
  },


      stereochemistry: {
    easy: [
      {
        question: "What is stereochemistry?",
        options: ["Study of heat", "Study of light", "Study of 3D arrangement of atoms", "Study of isotopes"],
        answer: 2
      },
      {
        question: "Which of these shows cis-trans isomerism?",
        options: ["Alkanes", "Alkenes", "Alkynes", "Alcohols"],
        answer: 1
      },
      {
        question: "What is a chiral center?",
        options: ["A double bond", "A carbon with 4 different groups", "A triple bond", "An OH group"],
        answer: 1
      },
      {
        question: "Which of the following is an example of stereoisomerism?",
        options: ["Chain isomerism", "Positional isomerism", "Geometrical isomerism", "Functional group isomerism"],
        answer: 2
      },
      {
        question: "What is the mirror image of a chiral molecule called?",
        options: ["Isomer", "Diastereomer", "Enantiomer", "Tautomer"],
        answer: 2
      },
      {
        question: "Which of the following compounds is chiral?",
        options: ["CH₄", "CH₃CH₃", "CHBrClF", "CO₂"],
        answer: 2
      },
      {
        question: "Cis-but-2-ene and trans-but-2-ene are:",
        options: ["Enantiomers", "Geometrical isomers", "Chain isomers", "Conformers"],
        answer: 1
      },
      {
        question: "Stereoisomers differ in:",
        options: ["Molecular formula", "Molar mass", "3D spatial arrangement", "Number of atoms"],
        answer: 2
      },
      {
        question: "Which of these is not a type of stereoisomerism?",
        options: ["Geometrical", "Optical", "Chain", "Conformational"],
        answer: 2
      },
      {
        question: "Which is true of enantiomers?",
        options: ["Same boiling point", "Same physical properties", "Rotate plane-polarized light oppositely", "Same taste"],
        answer: 2
      }
      // Add 40 more...
    ],
    medium: [
      {
        question: "How many stereoisomers are possible for a molecule with 2 chiral centers?",
        options: ["2", "3", "4", "5"],
        answer: 2
      },
      {
        question: "Which of these pairs are enantiomers?",
        options: ["Same structure", "Non-superimposable mirror images", "Superimposable mirror images", "Same rotation"],
        answer: 1
      },
      {
        question: "Which notation is used for absolute configuration?",
        options: ["E/Z", "R/S", "cis/trans", "A/B"],
        answer: 1
      },
      {
        question: "What is the specific rotation of a racemic mixture?",
        options: ["Positive", "Negative", "Zero", "Varies"],
        answer: 2
      },
      {
        question: "A compound with two chiral centers that is superimposable is called:",
        options: ["Enantiomer", "Meso compound", "Diastereomer", "Optical isomer"],
        answer: 1
      },
      {
        question: "Which pair are not mirror images?",
        options: ["R and S forms", "Enantiomers", "Diastereomers", "Optical isomers"],
        answer: 2
      },
      {
        question: "The E/Z system applies to:",
        options: ["Chiral centers", "Cyclic compounds", "Double bonds", "Triple bonds"],
        answer: 2
      },
      {
        question: "How many enantiomers does a molecule with one chiral center have?",
        options: ["1", "2", "3", "4"],
        answer: 1
      },
      {
        question: "Which group has highest priority in Cahn–Ingold–Prelog rules?",
        options: ["H", "Br", "Cl", "OH"],
        answer: 1
      },
      {
        question: "The configuration with higher priority groups on opposite sides is called:",
        options: ["cis", "trans", "E", "Z"],
        answer: 2
      }
      // Add 40 more...
    ],
    hard: [
      {
        question: "What is the formula to calculate max stereoisomers (no symmetry)?",
        options: ["2n", "n²", "n!", "2ⁿ"],
        answer: 3
      },
      {
        question: "Which of the following is true for diastereomers?",
        options: ["Mirror images", "Same physical properties", "Different optical rotation", "Not mirror images"],
        answer: 3
      },
      {
        question: "Which property do enantiomers not share?",
        options: ["Boiling point", "Density", "Specific rotation", "Molecular weight"],
        answer: 2
      },
      {
        question: "Assign R/S: CH₃CH(Cl)CH₂CH₃",
        options: ["R", "S", "Can't determine", "Chiral"],
        answer: 0
      },
      {
        question: "A compound with 3 chiral centers (no symmetry) has how many stereoisomers?",
        options: ["4", "6", "8", "10"],
        answer: 2
      },
      {
        question: "Plane-polarized light is rotated by:",
        options: ["Achiral compounds", "Only enantiomers", "All organic molecules", "Ionic compounds"],
        answer: 1
      },
      {
        question: "Which conformer of butane is most stable?",
        options: ["Eclipsed", "Gauche", "Anti", "Skew"],
        answer: 2
      },
      {
        question: "Which pair is optically inactive?",
        options: ["R and S", "Racemic mixture", "Single enantiomer", "Diastereomers"],
        answer: 1
      },
      {
        question: "The relationship between R,R and R,S configurations is:",
        options: ["Same compound", "Enantiomers", "Diastereomers", "Conformers"],
        answer: 2
      },
      {
        question: "How many stereoisomers exist for tartaric acid?",
        options: ["2", "3", "4", "5"],
        answer: 1
      }
      // Add 40 more...
    ]
  },


      chemistry_of_alkanes_alkenes_alkynes_alkanol_carboxylic_acid_ketones_amines_ethals: {
    easy: [
      {
        question: "What is the general formula for alkanes?",
        options: ["CnH2n", "CnH2n+2", "CnH2n–2", "CnH2nO"],
        answer: 1
      },
      {
        question: "Which hydrocarbon contains a triple bond?",
        options: ["Alkane", "Alkene", "Alkyne", "Alcohol"],
        answer: 2
      },
      {
        question: "Which class of compounds contains –OH group?",
        options: ["Alkene", "Alkyne", "Alcohol", "Ketone"],
        answer: 2
      },
      {
        question: "Which acid is found in vinegar?",
        options: ["Formic acid", "Citric acid", "Acetic acid", "Benzoic acid"],
        answer: 2
      },
      {
        question: "Which of these is a saturated hydrocarbon?",
        options: ["Alkyne", "Alkene", "Alkane", "Aromatic"],
        answer: 2
      },
      {
        question: "Ethanol belongs to which functional group?",
        options: ["Ether", "Alcohol", "Aldehyde", "Acid"],
        answer: 1
      },
      {
        question: "What is the suffix for ketones?",
        options: ["-one", "-al", "-ol", "-ic"],
        answer: 0
      },
      {
        question: "Which of these is a primary amine?",
        options: ["CH₃NH₂", "CH₃CH₂NHCH₃", "(CH₃)₃N", "CH₃NHCH₂CH₃"],
        answer: 0
      },
      {
        question: "Which compound has a carbonyl group?",
        options: ["Ketone", "Alkane", "Alkyne", "Amine"],
        answer: 0
      },
      {
        question: "Which of these compounds reacts with sodium metal?",
        options: ["Alkane", "Alkyne", "Alcohol", "Ketone"],
        answer: 2
      }
      // Add 40 more...
    ],
    medium: [
      {
        question: "Hydrogenation of alkenes produces:",
        options: ["Alkanes", "Alkynes", "Alcohols", "Ketones"],
        answer: 0
      },
      {
        question: "Oxidation of a primary alcohol gives:",
        options: ["Ketone", "Aldehyde", "Alkane", "Ether"],
        answer: 1
      },
      {
        question: "Markovnikov's rule applies to addition of:",
        options: ["Halogens", "Water", "HBr to alkenes", "Ozone"],
        answer: 2
      },
      {
        question: "Tollens’ reagent is used to test:",
        options: ["Alcohols", "Ketones", "Aldehydes", "Carboxylic acids"],
        answer: 2
      },
      {
        question: "The product of esterification is:",
        options: ["Acid + Alcohol", "Ketone + Water", "Ester + Water", "Ether + Acid"],
        answer: 2
      },
      {
        question: "Which group is present in both aldehydes and ketones?",
        options: ["Hydroxyl", "Amino", "Carbonyl", "Carboxyl"],
        answer: 2
      },
      {
        question: "Ethanoic acid + ethanol gives:",
        options: ["Ethanal", "Ethyl acetate", "Methanol", "Glycine"],
        answer: 1
      },
      {
        question: "What is the result of adding Br₂ to an alkene?",
        options: ["Colorless product", "White precipitate", "Brown gas", "Alcohol"],
        answer: 0
      },
      {
        question: "Alkynes undergo addition reactions because:",
        options: ["They are saturated", "They are aromatic", "They have triple bonds", "They are acids"],
        answer: 2
      },
      {
        question: "Ketones cannot be further oxidized easily because:",
        options: ["They are stable", "They lack hydrogen on the carbonyl carbon", "They are saturated", "They are basic"],
        answer: 1
      }
      // Add 40 more...
    ],
    hard: [
      {
        question: "Which reagent converts alkenes to diols?",
        options: ["KMnO₄ (cold)", "HBr", "H₂SO₄", "NaOH"],
        answer: 0
      },
      {
        question: "Which of these is most acidic?",
        options: ["Ethanol", "Acetic acid", "Phenol", "Water"],
        answer: 1
      },
      {
        question: "Hydration of alkynes in acidic medium yields:",
        options: ["Alkanes", "Aldehydes", "Ketones", "Esters"],
        answer: 2
      },
      {
        question: "Which compound can form hydrogen bonds?",
        options: ["Alkane", "Ketone", "Ester", "Alcohol"],
        answer: 3
      },
      {
        question: "The major product of propane with Br₂ in light is:",
        options: ["1-Bromopropane", "2-Bromopropane", "Propene", "Bromomethane"],
        answer: 1
      },
      {
        question: "Which test is positive for carbonyl compounds?",
        options: ["Fehling’s test", "Lucas test", "Bromine water", "Iodoform"],
        answer: 0
      },
      {
        question: "Iodoform test gives yellow ppt with:",
        options: ["CH₃CHO", "CH₃COCH₃", "CH₃CH₂OH", "All of these"],
        answer: 3
      },
      {
        question: "What hybridization is present in ethyne?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        answer: 0
      },
      {
        question: "Amides are formed by reaction of:",
        options: ["Amine + Carboxylic acid", "Alcohol + Acid", "Aldehyde + Amine", "Ketone + Amine"],
        answer: 0
      },
      {
        question: "Which of these is an α-amino acid?",
        options: ["Glycine", "Acetic acid", "Phenol", "Propanol"],
        answer: 0
      }
      // Add 40 more...
    ]
  },


      chemistry_of_group_1a_2a_3a_elements: {
    easy: [
      {
        question: "Which group contains alkali metals?",
        options: ["1A", "2A", "3A", "4A"],
        answer: 0
      },
      {
        question: "What is the first element in Group 1A?",
        options: ["Lithium", "Sodium", "Hydrogen", "Potassium"],
        answer: 2
      },
      {
        question: "What is the valency of Group 1A elements?",
        options: ["2", "1", "3", "0"],
        answer: 1
      },
      {
        question: "Which of the following is an alkaline earth metal?",
        options: ["Na", "K", "Ca", "Al"],
        answer: 2
      },
      {
        question: "Which group has elements that react vigorously with water?",
        options: ["1A", "2A", "3A", "7A"],
        answer: 0
      },
      {
        question: "Which group forms +2 ions commonly?",
        options: ["1A", "2A", "3A", "4A"],
        answer: 1
      },
      {
        question: "Which is the lightest alkali metal?",
        options: ["Na", "Li", "K", "Rb"],
        answer: 1
      },
      {
        question: "Which 2A element is essential for bones?",
        options: ["Mg", "Ca", "Sr", "Ba"],
        answer: 1
      },
      {
        question: "Which group does boron belong to?",
        options: ["1A", "2A", "3A", "4A"],
        answer: 2
      },
      {
        question: "What is the common oxidation state of Group 3A elements?",
        options: ["+1", "+2", "+3", "–1"],
        answer: 2
      }
      // Add 40 more...
    ],
    medium: [
      {
        question: "What is the trend of reactivity down Group 1A?",
        options: ["Decreases", "Increases", "Remains same", "Fluctuates"],
        answer: 1
      },
      {
        question: "Which 2A element is used in fireworks?",
        options: ["Be", "Mg", "Ca", "Sr"],
        answer: 3
      },
      {
        question: "Which group 3A element is a metalloid?",
        options: ["Al", "B", "Ga", "In"],
        answer: 1
      },
      {
        question: "Which compound is used to neutralize acids?",
        options: ["NaOH", "HCl", "NaCl", "CO₂"],
        answer: 0
      },
      {
        question: "What gas is released when Na reacts with water?",
        options: ["O₂", "CO₂", "H₂", "N₂"],
        answer: 2
      },
      {
        question: "What is the flame color of potassium?",
        options: ["Yellow", "Green", "Lilac", "Red"],
        answer: 2
      },
      {
        question: "Which element has the smallest atomic radius in Group 1A?",
        options: ["Li", "Na", "K", "Rb"],
        answer: 0
      },
      {
        question: "Which 2A element is used to make cement?",
        options: ["Be", "Mg", "Ca", "Sr"],
        answer: 2
      },
      {
        question: "Boron trichloride is an example of a:",
        options: ["Basic oxide", "Neutral compound", "Lewis acid", "Ionic salt"],
        answer: 2
      },
      {
        question: "What is amphoteric among 3A elements?",
        options: ["B", "Al", "Ga", "In"],
        answer: 1
      }
      // Add 40 more...
    ],
    hard: [
      {
        question: "Which group 1A element forms the most soluble hydroxide?",
        options: ["Li", "Na", "K", "Cs"],
        answer: 3
      },
      {
        question: "Which 2A metal forms insoluble sulfate?",
        options: ["Be", "Mg", "Ca", "Ba"],
        answer: 3
      },
      {
        question: "Which element is used as a reducing agent in metallurgy?",
        options: ["Ca", "K", "Na", "Al"],
        answer: 0
      },
      {
        question: "What type of bonding is found in boron compounds?",
        options: ["Ionic", "Metallic", "Covalent", "Hydrogen"],
        answer: 2
      },
      {
        question: "Which 3A element expands its octet in bonding?",
        options: ["B", "Al", "Ga", "Tl"],
        answer: 3
      },
      {
        question: "Which oxide is amphoteric?",
        options: ["Na₂O", "MgO", "Al₂O₃", "CaO"],
        answer: 2
      },
      {
        question: "Group 2A hydroxides become more:",
        options: ["Insoluble down the group", "Acidic", "Soluble down the group", "Unreactive"],
        answer: 2
      },
      {
        question: "Which 2A element has the highest ionization energy?",
        options: ["Be", "Mg", "Ca", "Ba"],
        answer: 0
      },
      {
        question: "Which is not a typical property of Group 1A metals?",
        options: ["Softness", "Low density", "High melting point", "High reactivity"],
        answer: 2
      },
      {
        question: "Aluminum chloride in anhydrous form is:",
        options: ["Ionic solid", "Covalent and volatile", "Basic oxide", "None"],
        answer: 1
      }
      // Add 40 more...
    ]
  },


      transition_metal_chemistry: {
    easy: [
      {
        question: "Where are transition metals found in the periodic table?",
        options: ["Group 1", "Group 2", "Groups 3–12", "Group 18"],
        answer: 2
      },
      {
        question: "Which of the following is a transition metal?",
        options: ["Calcium", "Zinc", "Iron", "Aluminum"],
        answer: 2
      },
      {
        question: "Which property is common in transition metals?",
        options: ["Colorless ions", "No variable oxidation states", "Formation of colored compounds", "Non-metallic behavior"],
        answer: 2
      },
      {
        question: "Which metal is used to make stainless steel?",
        options: ["Copper", "Chromium", "Zinc", "Silver"],
        answer: 1
      },
      {
        question: "Transition metals often act as:",
        options: ["Insulators", "Catalysts", "Acids", "Bases"],
        answer: 1
      },
      {
        question: "Which transition metal is magnetic?",
        options: ["Copper", "Silver", "Iron", "Gold"],
        answer: 2
      },
      {
        question: "What is the typical oxidation state of iron in FeCl₃?",
        options: ["+1", "+2", "+3", "0"],
        answer: 2
      },
      {
        question: "Which of these metals forms a green ion?",
        options: ["Fe²⁺", "Cu⁺", "Cr³⁺", "Fe³⁺"],
        answer: 0
      },
      {
        question: "The ability to form complex ions is a property of:",
        options: ["Noble gases", "Transition metals", "Alkali metals", "Halogens"],
        answer: 1
      },
      {
        question: "Which of these is a d-block element?",
        options: ["Na", "Cl", "Ni", "Mg"],
        answer: 2
      }
      // Add 40 more...
    ],
    medium: [
      {
        question: "Which transition metal forms a blue aqueous ion?",
        options: ["Zn²⁺", "Fe²⁺", "Cu²⁺", "Co²⁺"],
        answer: 2
      },
      {
        question: "What is the coordination number of [Fe(CN)₆]³⁻?",
        options: ["4", "6", "2", "3"],
        answer: 1
      },
      {
        question: "Ligands donate how many electrons to the central atom?",
        options: ["1", "2", "0", "4"],
        answer: 1
      },
      {
        question: "Which ion causes a deep blue color in solution?",
        options: ["[Cu(NH₃)₄]²⁺", "[Fe(H₂O)₆]³⁺", "[Cr(H₂O)₆]³⁺", "[Co(H₂O)₆]²⁺"],
        answer: 0
      },
      {
        question: "Which of the following is a bidentate ligand?",
        options: ["Cl⁻", "H₂O", "NH₃", "ethane-1,2-diamine (en)"],
        answer: 3
      },
      {
        question: "Transition metals form colored compounds because:",
        options: ["High melting points", "Delocalized electrons", "d-d transitions", "Radioactivity"],
        answer: 2
      },
      {
        question: "What is the oxidation state of Mn in KMnO₄?",
        options: ["+2", "+4", "+5", "+7"],
        answer: 3
      },
      {
        question: "Which ion is responsible for the green color in Cr³⁺ solution?",
        options: ["d⁵", "d³", "d⁶", "d⁸"],
        answer: 1
      },
      {
        question: "Which of these shows variable oxidation states?",
        options: ["Na", "Mg", "Fe", "Al"],
        answer: 2
      },
      {
        question: "Which property is not typical of transition metals?",
        options: ["High melting points", "Colored ions", "Inertness", "Catalytic behavior"],
        answer: 2
      }
      // Add 40 more...
    ],
    hard: [
      {
        question: "Which complex has square planar geometry?",
        options: ["[Ni(CN)₄]²⁻", "[Fe(CN)₆]³⁻", "[Cr(NH₃)₆]³⁺", "[Cu(H₂O)₆]²⁺"],
        answer: 0
      },
      {
        question: "The splitting of d-orbitals in ligand field theory is due to:",
        options: ["Heat", "Color", "Electrostatic interactions", "Ionization"],
        answer: 2
      },
      {
        question: "What is the magnetic moment of d⁵ high-spin complex?",
        options: ["1.73 BM", "3.87 BM", "5.92 BM", "0 BM"],
        answer: 2
      },
      {
        question: "Which element has a partially filled d-subshell in ground state?",
        options: ["Zn", "Cu", "Fe", "Mg"],
        answer: 2
      },
      {
        question: "Which ligand causes maximum crystal field splitting?",
        options: ["I⁻", "Cl⁻", "NH₃", "CN⁻"],
        answer: 3
      },
      {
        question: "In [Cr(NH₃)₆]³⁺, the oxidation number of Cr is:",
        options: ["+2", "+3", "+4", "0"],
        answer: 1
      },
      {
        question: "Which transition metal ion is colorless in solution?",
        options: ["Cu²⁺", "Fe³⁺", "Zn²⁺", "Cr³⁺"],
        answer: 2
      },
      {
        question: "Which of the following is paramagnetic?",
        options: ["Zn²⁺", "Cu⁺", "Fe²⁺", "Sc³⁺"],
        answer: 2
      },
      {
        question: "Which complex shows optical isomerism?",
        options: ["[Cr(en)₃]³⁺", "[Cu(NH₃)₄]²⁺", "[Fe(CN)₆]⁴⁻", "[Ni(CO)₄]"],
        answer: 0
      },
      {
        question: "Which metal is used in the contact process catalyst?",
        options: ["Pt", "V₂O₅", "Fe", "Ni"],
        answer: 1
      }
      // Add 40 more...
    ]
  },


};

let currentTopic = null;
let currentDifficulty = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timerInterval;
let seconds = 0;
let reviewAnswers = [];

const questionText = document.getElementById('question');
const optionsList = document.getElementById('options');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const resultPage = document.getElementById('result-page');
const resultText = document.getElementById('result');
const quizPage = document.getElementById('quiz-page');
const startPage = document.getElementById('start-page');
const scoreTracker = document.getElementById('score-tracker');
const timer = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');
const categoryTag = document.getElementById('category-tag');
const reviewSection = document.getElementById('review-section');

function populateTopics() {
  const topicSelect = document.getElementById('topic');
  const difficultySelect = document.getElementById('difficulty');
  for (let topic in topics) {
    const opt = document.createElement('option');
    opt.value = topic;
    opt.textContent = topic.replace(/_/g, ' ').toUpperCase();
    topicSelect.appendChild(opt);
  }
  ['easy', 'medium', 'hard'].forEach(d => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d.toUpperCase();
    difficultySelect.appendChild(opt);
  });
}

function loadQuestion(index) {
  const q = currentQuestions[index];
  questionText.style.opacity = 0;
  setTimeout(() => {
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionText.style.opacity = 1;
  }, 200);

  categoryTag.textContent = currentTopic.replace(/_/g, ' ').toUpperCase();
  optionsList.innerHTML = '';
  q.options.forEach((opt, i) => {
    const li = document.createElement('li');
    li.textContent = opt;
    li.onclick = () => selectOption(li, i);
    optionsList.appendChild(li);
  });

  prevBtn.style.display = index > 0 ? 'inline-block' : 'none';
  nextBtn.textContent = index === currentQuestions.length - 1 ? 'Finish' : 'Next';
  nextBtn.disabled = true;
  updateProgressBar();
}

function selectOption(el, i) {
  const q = currentQuestions[currentIndex];
  const options = optionsList.children;
  [...options].forEach((li, idx) => {
    li.className = '';
    if (idx === q.answer) li.classList.add('correct');
    if (idx === i && idx !== q.answer) li.classList.add('wrong');
  });
  reviewAnswers[currentIndex] = { ...q, selected: i };
  if (i === q.answer) score++;
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

function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    timer.textContent = `Time: ${mins}:${secs}`;
  }, 1000);
}

function updateProgressBar() {
  const progress = ((currentIndex + 1) / currentQuestions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function endQuiz() {
  clearInterval(timerInterval);
  quizPage.style.display = 'none';
  resultPage.style.display = 'block';
  resultText.textContent = `You scored ${score} out of ${currentQuestions.length}`;
  generateChart();
  generateReview();
}

function generateChart() {
  const ctx = document.getElementById('result-chart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Incorrect'],
      datasets: [{
        data: [score, currentQuestions.length - score],
        backgroundColor: ['#28a745', '#dc3545']
      }]
    }
  });
}

function generateReview() {
  reviewSection.innerHTML = '<h3>Review Questions:</h3>';
  reviewAnswers.forEach((qa, idx) => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>Q${idx + 1}:</strong> ${qa.question}<br>
      <span style="color:${qa.selected === qa.answer ? 'green' : 'red'}">
        Your answer: ${qa.options[qa.selected] || 'No Answer'}
      </span><br>
      Correct answer: ${qa.options[qa.answer]}
      <hr>`;
    reviewSection.appendChild(div);
  });
}

function startQuiz() {
  const topic = document.getElementById('topic').value;
  const difficulty = document.getElementById('difficulty').value;
  if (!topic || !difficulty) return alert('Select topic and difficulty');

  currentTopic = topic;
  currentDifficulty = difficulty;
  currentQuestions = topics[topic][difficulty];
  currentIndex = 0;
  score = 0;
  seconds = 0;
  reviewAnswers = [];

  startPage.style.display = 'none';
  quizPage.style.display = 'block';
  resultPage.style.display = 'none';
  scoreTracker.textContent = 'Score: 0';
  loadQuestion(currentIndex);
  startTimer();
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

window.onload = () => {
  populateTopics();
  document.getElementById('start-btn').onclick = startQuiz;
  nextBtn.onclick = nextQuestion;
  prevBtn.onclick = prevQuestion;
};
