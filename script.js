const elements = [
  { AtomicNumber: 1, symbol: "H", name: "Hydrogen", group: 1, period: 1, block: "s", Protons: 1, Electrons: 1, Neutrons: 0, Classification: "Non-metal", RAM: 1.008, GEC: "1s¹", COS: "+1, -1", FIE: "1312 kJ/mol", SIE: "N/A", TIE: "N/A", atomicRadius: "53 pm", EA: "72.8 kJ/mol", EN: "2.2", MP: "14.01 K", BP: "20.3 K", Density: "0.00008988 g/cm³ ", Entropy: "130.68 J/(mol·K)", Cp: "14.304 J/g·K       ", Abundance: "0.15%", Appearance: "Colourless gas", YOD: 1766.0 },
  { AtomicNumber: 2, symbol: "He", name: "Helium", group: 18, period: 1, block: "s", Protons: 2, Electrons: 2, Neutrons: 2, Classification: "Nobel gas", RAM: 4.0026, GEC: "1s2", COS: "0", FIE: "2372.3kJ/mol", SIE: "N/A", TIE: "N/A", atomicRadius: "31pm", EA: "~0 kJ/mol", EN: "N/A", MP: "N/A", BP: "4.22 K", Density: "0.0001786 g/cm³", Entropy: "126.15 J/(mol·K)", Cp: " 5.193 J/g·K        ", Abundance: "very low (trace)", Appearance: "Colourless gas", YOD: 1868.0 },
  { AtomicNumber: 3, symbol: "Li", name: "Lithium", group: 1, period: 2, block: "s", Protons: 3, Electrons: 3, Neutrons: 4, Classification: "Alkali Metal", RAM: 6.94, GEC: "1s²2s¹", COS: "1", FIE: "520.2kJ/mol", SIE: "7298.1kJ/mol", TIE: "N/A", atomicRadius: "167pm", EA: "59.6kJ/mol", EN: "0.98", MP: "453.69K", BP: "1603K", Density: "0.534 g/cm³      ", Entropy: "29.10 J/(mol·K)", Cp: " 3.582 J/g·K        ", Abundance: "0.00%", Appearance: "silvery white metal ", YOD: 1817.0 },
  { AtomicNumber: 4, symbol: "Br", name: "Beryllium", group: 2, period: 2, block: "s", Protons: 4, Electrons: 4, Neutrons: 5, Classification: "Alkaline Earth Metal", RAM: 9.0122, GEC: "1s²2s²", COS: "2", FIE: "899.5kJ/mol", SIE: "1757.1kJ/mol", TIE: "14848.7kJ/mol", atomicRadius: "112pm", EA: "~0 kJ/mol", EN: "1.57", MP: "1560 K", BP: "2742K", Density: "1.85 g/cm³       ", Entropy: "9.50 J/(mol·K)", Cp: "1.825 J/g·K        ", Abundance: "0.00%", Appearance: "grayish - white metal", YOD: 1798.0 },
  { AtomicNumber: 5, symbol: "B", name: "Boron", group: 13, period: 2, block: "p", Protons: 5, Electrons: 5, Neutrons: 6, Classification: "Metalloid", RAM: 10.81, GEC: "1s²2s²2p¹", COS: "3", FIE: "800.6kJ/mol", SIE: "2427.1kJ/mol", TIE: "N/A", atomicRadius: "87pm", EA: "26.7kJ/mol", EN: "2.04", MP: "2349K", BP: "4200K", Density: "2.34 g/cm³       ", Entropy: "5.90 J/(mol·K)", Cp: "1.026 J/g·K        ", Abundance: "0.00%", Appearance: "black brown metalloid ", YOD: 1808.0 },
  { AtomicNumber: 6, symbol: "C", name: "Carbon", group: 14, period: 2, block: "p", Protons: 6, Electrons: 6, Neutrons: 6, Classification: "Non-metal", RAM: 12.011, GEC: "1s²2s²2p²", COS: "N/A", FIE: "1086.5kJ/mol", SIE: "2352.6kJ/mol", TIE: "N/A", atomicRadius: "77pm", EA: "153.9 kJ/mol", EN: "2.55", MP: "3823K", BP: "4300K", Density: " 2.267 g/cm³      ", Entropy: "5.74 J/(mol·K)", Cp: " 0.709 J/g·K        ", Abundance: "0.02%", Appearance: "black(graphite), transparent (diamond)", YOD: 1789.0 },
  { AtomicNumber: 7, symbol: "N", name: "Nitrogen", group: 15, period: 2, block: "p", Protons: 7, Electrons: 7, Neutrons: 7, Classification: "Non-metal", RAM: 14.007, GEC: "1s²2s²2p³", COS: "N/A", FIE: "1402.3kJ/mol", SIE: "2856kJ/mol", TIE: "N/A", atomicRadius: "56pm", EA: "-6.8 kJ/mol", EN: "3.04", MP: "63.15k", BP: "77.4K", Density: "0.0012506 g/cm³  ", Entropy: "191.50 J/(mol·K)", Cp: " 1.040 J/g·K        ", Abundance: "0.00%", Appearance: "Colorless gas.", YOD: 1772.0 },
  { AtomicNumber: 8, symbol: "O", name: "Oxygen ", group: 16, period: 2, block: "p", Protons: 8, Electrons: 8, Neutrons: 8, Classification: "Non-metal", RAM: 15.999, GEC: "1s²2s²2p⁴", COS: "-2", FIE: "1313.9kJ/mol", SIE: "3388.3kJ/mol", TIE: "N/A", atomicRadius: "60pm", EA: "141kJ/mol", EN: "3.44", MP: "54.36K", BP: "90.2K", Density: "0.001429 g/cm³   ", Entropy: "205.03 J/(mol·K)", Cp: " 0.918 J/g·K        ", Abundance: "46.60%", Appearance: "Colorless gas; pale blue liquid.", YOD: 1774.0 },
  { AtomicNumber: 9, symbol: "F", name: "Fluorine", group: 17, period: 2, block: "p", Protons: 9, Electrons: 9, Neutrons: 10, Classification: "Halogen", RAM: 18.998, GEC: "1s²2s²2p⁵", COS: "-1", FIE: "1681kJ/mol", SIE: "3374kJ/mol", TIE: "N/A", atomicRadius: "50pm", EA: "328kJ/mol", EN: "3.98", MP: "53.48K", BP: "85K", Density: " 0.001696 g/cm³   ", Entropy: "158.57 J/(mol·K)", Cp: "0.824 J/g·K        ", Abundance: "0.05%", Appearance: "Pale yellow gas.", YOD: 1886.0 },
  { AtomicNumber: 10, symbol: "Ne", name: "Neon", group: 18, period: 2, block: "p", Protons: 10, Electrons: 10, Neutrons: 10, Classification: "Nobel gas", RAM: 20.18, GEC: "1s²2s²2p⁶", COS: "0", FIE: "2080.7kJ/mol", SIE: "3952.3 kJ)mol", TIE: "N/A", atomicRadius: "38pm", EA: "0kJ/mol", EN: "N/A", MP: "24.56K", BP: "27.1K", Density: "0.0008999 g/cm³  ", Entropy: "146.32 J/(mol·K)", Cp: " 1.030 J/g·K", Abundance: "0.00%", Appearance: " Colorless gas;", YOD: 1898.0 },
  { AtomicNumber: 11, symbol: "Na", name: "Sodium", group: 1, period: 3, block: "s", Protons: 11, Electrons: 11, Neutrons: 12, Classification: "Alkali Metal", RAM: 22.99, GEC: "1s²2s²2p⁶3s¹", COS: "1", FIE: "495.8kJ/mol", SIE: "4562kJ/mol", TIE: "N/A", atomicRadius: "186pm", EA: "52.8kJ/mol", EN: "0.93", MP: "370.87K", BP: "1156K", Density: "0.971 g/cm³      ", Entropy: "51.45 J/(mol·K)", Cp: "1.228 J/g·K        ", Abundance: "2.27%", Appearance: "Soft, silvery-white metal.", YOD: 1807.0 },
  { AtomicNumber: 12, symbol: "Mg", name: "Magnesium ", group: 2, period: 3, block: "s", Protons: 12, Electrons: 12, Neutrons: 12, Classification: "Alkaline Earth Metal", RAM: 24.305, GEC: "1s²2s²2p⁶3s²", COS: "2", FIE: "737.7kJ/mol", SIE: "1450.7kJ/mol", TIE: "N/A", atomicRadius: "160pm", EA: "0kJ/mol", EN: "1.31", MP: "923K", BP: "1380K", Density: "1.738 g/cm³      ", Entropy: "32.68 J/(mol·K)", Cp: "1.023 J/g·K        ", Abundance: "2.33%", Appearance: "Shiny, silvery-white metal.", YOD: 1755.0 },
  { AtomicNumber: 13, symbol: "Al", name: "Aluminum", group: 13, period: 3, block: "p", Protons: 13, Electrons: 13, Neutrons: 14, Classification: "Post transition ", RAM: 26.982, GEC: "1s²2s²2p⁶3s²3p¹", COS: "3", FIE: "577.5 kh/mol", SIE: "1816.7kJ/mol", TIE: "N/A", atomicRadius: "143pm", EA: "42.5kJ/mol ", EN: "1.61", MP: "933.47K", BP: "2792K", Density: " 2.70 g/cm³       ", Entropy: "28.30 J/(mol·K)", Cp: "|0.897 J/g·K        ", Abundance: "8.23%", Appearance: "Silvery-white, lightweight metal.", YOD: 1825.0 },
  { AtomicNumber: 14, symbol: "Si", name: "Silicon", group: 14, period: 3, block: "p", Protons: 14, Electrons: 14, Neutrons: 14, Classification: "Metalloid", RAM: 28.085, GEC: "1s²2s²2p⁶3s²3p²", COS: "(+4,-4)", FIE: "786.5kJ/mol", SIE: "1577.1kJ/mol", TIE: "N/A", atomicRadius: "118pm", EA: "134kJ/mol", EN: "1.9", MP: "1687K", BP: "3538K", Density: "2.33 g/cm³       ", Entropy: "18.81 J/(mol·K)", Cp: "0.705 J/g·K        ", Abundance: "27.20%", Appearance: " Shiny, dark gray with a bluish tint.", YOD: 1824.0 },
  { AtomicNumber: 15, symbol: "P", name: "Phosphorus ", group: 15, period: 3, block: "p", Protons: 15, Electrons: 15, Neutrons: 16, Classification: "Non-metal", RAM: 30.974, GEC: "1s²2s²2p⁶3s²3p³", COS: "(+5,+3,+1,-3)", FIE: "1011.8kJ/mol", SIE: "1903.2kJ/mol", TIE: "N/A", atomicRadius: "110pm", EA: "72kJ/mol", EN: "2.19", MP: "317.3K", BP: "553K", Density: "1.82 g/cm³       ", Entropy: "41.09 J/(mol·K)", Cp: "0.769 J/g·K        ", Abundance: "0.10%", Appearance: "White, red, or black; white is waxy and highly reactive.", YOD: 1669.0 },
  { AtomicNumber: 16, symbol: "S", name: "Sulfur", group: 16, period: 3, block: "p", Protons: 16, Electrons: 16, Neutrons: 16, Classification: "Non-metal", RAM: 32.06, GEC: "1s²2s²2p⁶3s²3p⁴", COS: "(+6,+4,+2,-2)", FIE: "999.6kJ/mol", SIE: "2252.5kJ/mol", TIE: "N/A", atomicRadius: "104pm", EA: "200.4kJ/mol", EN: "2.58", MP: "388.36K", BP: "717.8K", Density: "2.07 g/cm³       ", Entropy: "31.88 J/(mol·K)", Cp: "0.710 J/g·K        ", Abundance: "0.04%", Appearance: "Yellow, brittle solid.", YOD: "N/A" },
  { AtomicNumber: 17, symbol: "Cl", name: "Chlorine", group: 17, period: 3, block: "p", Protons: 17, Electrons: 17, Neutrons: 17, Classification: "Non-metal", RAM: 35.45, GEC: "1s²2s²2p⁶3s²3p⁵", COS: "(+7,+5,+3,+1,-1)", FIE: "1251.1kJ/mol", SIE: "2299.9kJ/mol", TIE: "N/A", atomicRadius: "99pm", EA: "349 kJ/mol", EN: "3.16", MP: "171.6K", BP: "239.1K", Density: "0.003214 g/cm³   ", Entropy: "223.08 J/(mol·K)", Cp: "0.479 J/g·K        ", Abundance: "0.01%", Appearance: " Yellow-green gas.", YOD: 1774.0 },
  { AtomicNumber: 18, symbol: "Ar", name: "Argon", group: 18, period: 3, block: "p", Protons: 18, Electrons: 18, Neutrons: 18, Classification: "Nobel gas", RAM: 39.948, GEC: "1s²2s²2p⁶3s²3p⁶", COS: "0", FIE: "1520.6kJ/mol", SIE: "2660kJ/mol", TIE: "N/A", atomicRadius: "71pm", EA: "0 kJ/mol", EN: "N/A", MP: "83.81K", BP: "87.3K", Density: "0.0017837 g/cm³  ", Entropy: "154.84 J/(mol·K)", Cp: " 0.520 J/g·K        ", Abundance: "0.00%", Appearance: "Colorless gas; glows violet in a discharge.", YOD: 1894.0 },
  { AtomicNumber: 19, symbol: "K", name: "Potassium", group: 1, period: 4, block: "s", Protons: 19, Electrons: 19, Neutrons: 20, Classification: "Alkali Metal", RAM: 39.098, GEC: "1s²2s²2p⁶3s²3p⁶6d¹", COS: "1", FIE: "418.8kJ/mol", SIE: "3052kJ/mol", TIE: "N/A", atomicRadius: "227pm", EA: "48 kJ/mol", EN: "0.82", MP: "336.53K", BP: "1032K", Density: " 0.862 g/cm³      ", Entropy: "64.70 J/(mol·K)", Cp: "0.757 J/g·K        ", Abundance: "2.59%", Appearance: "Soft, silvery white metal .", YOD: 1807.0 },
  { AtomicNumber: 20, symbol: "Ca", name: "Calcium", group: 2, period: 4, block: "s", Protons: 20, Electrons: 20, Neutrons: 20, Classification: "Alkaline Earth Metal", RAM: 40.078, GEC: "1s²2s²2p⁶3s²3p⁶6d²", COS: "2", FIE: "589.8kJ/mol", SIE: "1145kJ/mol", TIE: "4912kJ/mol ", atomicRadius: "197pm ", EA: "2.37 kJ/mol ", EN: "1", MP: "1115K", BP: "1757K", Density: "1.54 g/cm³       ", Entropy: "41.60 J/(mol·K)", Cp: " 0.647 J/g·K", Abundance: "3.63%", Appearance: "Soft, silvery-gray metal.", YOD: 1808.0 },
  { AtomicNumber: 21, symbol: "Sc", name: "Scandium", group: 3, period: 4, block: "d", Protons: 21, Electrons: 21, Neutrons: 24, Classification: "Transition Metal", RAM: 44.956, GEC: "[Ar] 3d² 4s²", COS: "3", FIE: "633.1kJ/mol", SIE: "1236kJ/mol", TIE: "2480kJ/mol", atomicRadius: " 160pm ", EA: "18 kJ/mol", EN: "1.36", MP: "1814K", BP: "3109K", Density: "2.985 g/cm³      ", Entropy: "33.10 J/(mol·K)", Cp: "0.568 J/g·K        ", Abundance: "0.00%", Appearance: "Silvery-white metal.", YOD: 1879.0 },
  { AtomicNumber: 22, symbol: "Ti", name: "Titanium", group: 4, period: 4, block: "d", Protons: 22, Electrons: 22, Neutrons: 26, Classification: "Transition Metal", RAM: 47.867, GEC: "[Ar] 3d² 4s²", COS: "(+4,+3)", FIE: "658.8kJ/mol", SIE: "1340kJ/mol", TIE: "2872kJ/mol", atomicRadius: "147pm ", EA: "7.1 kJ/mol", EN: "1.54", MP: "1941K", BP: "3560K", Density: "4.506 g/cm³      ", Entropy: "30.60 J/(mol·K)", Cp: "0.523 J/g·K        ", Abundance: "0.63%", Appearance: "Lustrous, silvery metal.", YOD: 1791.0 },
  { AtomicNumber: 23, symbol: "V", name: "Vanadium", group: 5, period: 4, block: "d", Protons: 23, Electrons: 23, Neutrons: 28, Classification: "Transition Metal", RAM: 50.941, GEC: "[Ar] 3d³ 4s²", COS: "(+5,+4,+3,+2)", FIE: "650.0kJ/mol", SIE: "1414kJ/mol", TIE: "2455kJ/mol", atomicRadius: "140pm ", EA: "50.6 kJ/mol", EN: "1.63", MP: "2183K", BP: "3680K", Density: " 6.11 g/cm³       ", Entropy: "24.89 J/(mol·K)", Cp: "0.489 J/g·K        ", Abundance: "0.02%", Appearance: " Hard, silvery-gray metal.", YOD: 1830.0 },
  { AtomicNumber: 24, symbol: "Cr", name: "Chromium", group: 6, period: 4, block: "d", Protons: 24, Electrons: 24, Neutrons: 28, Classification: "Transition Metal", RAM: 51.996, GEC: "[Ar] 3d⁵ 4s¹", COS: "(+6,+3,+2)", FIE: "652.9kJ/mol", SIE: "1590kJ/mol", TIE: "2924kJ/mol", atomicRadius: "140pm ", EA: "64.0 kJ/mol", EN: "1.66", MP: "2180K", BP: "2944K", Density: " 7.15 g/cm³       ", Entropy: "23.60 J/(mol·K)", Cp: " 0.448 J/g·K        ", Abundance: "0.01%", Appearance: " Hard, shiny metal.", YOD: 1797.0 },
  { AtomicNumber: 25, symbol: "Mn", name: "Manganese", group: 7, period: 4, block: "d", Protons: 25, Electrons: 25, Neutrons: 30, Classification: "Transition Metal", RAM: 54.938, GEC: "[Ar] 3d⁵ 4s²", COS: "(+7,+4,+2)", FIE: "717.2kJ/mol", SIE: "1509kJ/mol", TIE: "3240kJ/mol", atomicRadius: "139pm ", EA: "0.4 kJ/mol", EN: "1.55", MP: "1519K", BP: "2334K", Density: " 7.44 g/cm³       ", Entropy: "32.35 J/(mol·K)", Cp: " 0.479 J/g·K        ", Abundance: "0.10%", Appearance: " Grayish-white, brittle metal.", YOD: 1774.0 },
  { AtomicNumber: 26, symbol: "Fe", name: "Iron", group: 8, period: 4, block: "d", Protons: 26, Electrons: 26, Neutrons: 30, Classification: "Transition Metal", RAM: 55.845, GEC: "[Ar] 3d⁶ 4s²", COS: "(+3,+2)", FIE: "762.5kJ/mol", SIE: "1560.6kJ/mol", TIE: "2924kJ/mol", atomicRadius: "126pm ", EA: "15.7 kJ/mol", EN: "1.83", MP: "1811K", BP: "3134K", Density: " 7.874 g/cm³      ", Entropy: "27.28 J/(mol·K)", Cp: " 0.450 J/g·K        ", Abundance: "5%", Appearance: " Silvery-gray metal.", YOD: "N/A" },
  { AtomicNumber: 27, symbol: "Co", name: "Cobalt", group: 9, period: 4, block: "d", Protons: 27, Electrons: 27, Neutrons: 32, Classification: "Transition Metal", RAM: 58.933, GEC: "[Ar] 3d⁷ 4s²", COS: "(+3,+2)", FIE: "760.4kJ/mol", SIE: "1727kJ/mol", TIE: "3249kJ/mol", atomicRadius: "125pm ", EA: "62.2 kJ/mol", EN: "1.88", MP: "1768K", BP: "3200K", Density: " 8.86 g/cm³       ", Entropy: "29.07 J/(mol·K)", Cp: " 0.421 J/g·K        ", Abundance: "0.00%", Appearance: " Hard, lustrous metal", YOD: 1735.0 },
  { AtomicNumber: 28, symbol: "Ni", name: "Nickel", group: 10, period: 4, block: "d", Protons: 28, Electrons: 28, Neutrons: 31, Classification: "Transition Metal", RAM: 58.693, GEC: "[Ar] 3d⁸ 4s²", COS: "(+2,+3)", FIE: "737.1kJ/mol", SIE: "1753kJ/mol", TIE: "3259kJ/mol", atomicRadius: "124pm ", EA: "111 kJ/mol", EN: "1.91", MP: "1728K", BP: "3186K", Density: "8.912 g/cm³      ", Entropy: "29.87 J/(mol·K)", Cp: " 0.444 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery - white metal.", YOD: 1751.0 },
  { AtomicNumber: 29, symbol: "Cu", name: "Copper", group: 11, period: 4, block: "d", Protons: 29, Electrons: 29, Neutrons: 35, Classification: "Transition Metal", RAM: 63.546, GEC: "[Ar] 3d¹⁰ 4s¹", COS: "(+2,+1)", FIE: "745.5kJ/mol", SIE: "1957kJ/mol", TIE: "3180kJ/mol", atomicRadius: "128pm ", EA: "119.0 kJ/mol", EN: "1.9", MP: "1357.77K", BP: "2835K", Density: " 8.96 g/cm³       ", Entropy: "33.15 J/(mol·K)", Cp: " 0.385 J/g·K        ", Abundance: "0.00%", Appearance: " Reddish-brown, metallic color.", YOD: "N/A" },
  { AtomicNumber: 30, symbol: "Zn", name: "Zinc", group: 12, period: 4, block: "d", Protons: 30, Electrons: 30, Neutrons: 35, Classification: "Transition Metal", RAM: 65.38, GEC: "[Ar] 3d¹⁰ 4s²", COS: "2", FIE: "906.4kJ/mol", SIE: "1733kJ/mol", TIE: "N/A", atomicRadius: "140pm ", EA: "0 kJ/mol", EN: "1.65", MP: "692.68K", BP: "1180K", Density: " g/cm³      ", Entropy: "41.63 J/(mol·K)", Cp: "0.388 J/g·K        ", Abundance: "0.00%", Appearance: " Bluish-white metal.", YOD: "N/A" },
  { AtomicNumber: 31, symbol: "Ga", name: "Gallium", group: 13, period: 4, block: "p", Protons: 31, Electrons: 31, Neutrons: 39, Classification: "Metal ", RAM: 69.723, GEC: "[Ar] 3d¹⁰ 4s² 4p¹", COS: "(+3,+1)", FIE: "578.8kJ/mol", SIE: "1979kJ/mol", TIE: "2870kJ/mol", atomicRadius: "135pm ", EA: "41.8 kJ/mol", EN: "1.81", MP: "302.91K", BP: "2673K", Density: " 5.907 g/cm³      ", Entropy: "29.76 J/(mol·K)", Cp: " 0.371 J/g·K        ", Abundance: "0.00%", Appearance: " Soft, silvery metal.", YOD: 1875.0 },
  { AtomicNumber: 32, symbol: "Ge", name: "Germanium", group: 14, period: 4, block: "p", Protons: 32, Electrons: 32, Neutrons: 41, Classification: "Metalloid", RAM: 72.63, GEC: "[Ar] 3d¹⁰ 4s² 4p²", COS: "(+4,+2)", FIE: "762.0kJ/mol", SIE: "1531kJ/mol", TIE: "3234kJ/mol", atomicRadius: "125pm ", EA: "118.9 kJ/mol", EN: "2.01", MP: "1211.4K", BP: "3106K", Density: "5.323 g/cm³      ", Entropy: "31.10 J/(mol·K)", Cp: " 0.320 J/g·K        ", Abundance: "0.00%", Appearance: " Grayish-white.", YOD: 1886.0 },
  { AtomicNumber: 33, symbol: "As", name: "Arsenic", group: 15, period: 4, block: "p", Protons: 33, Electrons: 33, Neutrons: 42, Classification: "Metalloid", RAM: 74.922, GEC: "[Ar] 3d¹⁰ 4s² 4p³", COS: "(+5,+3,-3)", FIE: "947kJ/mol", SIE: "1875kJ/mol", TIE: "2771kJ/mol", atomicRadius: "114pm ", EA: "78 kJ/mol", EN: "2.18", MP: "1090K", BP: "887K", Density: " 5.776 g/cm³      ", Entropy: "31.12 J/(mol·K)", Cp: " 0.328 J/g·K        ", Abundance: "0.00%", Appearance: " Gray or yellow non metal.", YOD: "N/A" },
  { AtomicNumber: 34, symbol: "Se", name: "Selenium", group: 16, period: 4, block: "p", Protons: 34, Electrons: 34, Neutrons: 45, Classification: "Non-metal", RAM: 78.971, GEC: "[Ar] 3d¹⁰ 4s² 4p⁴", COS: "(+6,+4,+2,-2)", FIE: "941.0kJ/mol", SIE: "2040kJ/mol", TIE: "2984kJ/mol ", atomicRadius: "116pm ", EA: "194.9 kJ/mol", EN: "2.55", MP: "494K", BP: "958K", Density: " 4.809 g/cm³      ", Entropy: "42.12 J/(mol·K)", Cp: " 0.321 J/g·K        ", Abundance: "0.00%", Appearance: "Gray non metal.", YOD: 1817.0 },
  { AtomicNumber: 35, symbol: "Br", name: "Bromine", group: 17, period: 4, block: "p", Protons: 35, Electrons: 35, Neutrons: 45, Classification: "Halogen", RAM: 79.904, GEC: "[Ar] 3d¹⁰ 4s² 4p⁵", COS: "(+1,+5,+7,-1)", FIE: "1139kJ/mol", SIE: "2490kJ/mol", TIE: "3674kJ/mol", atomicRadius: "114pm ", EA: "324.6 kJ/mol", EN: "2.96", MP: "265.8K", BP: "332K", Density: " 3.122 g/cm³      ", Entropy: "152.23 J/(mol·K)", Cp: "0.474 J/g·K        ", Abundance: "0.00%", Appearance: " Reddish-brown liquid.", YOD: 1826.0 },
  { AtomicNumber: 36, symbol: "Kr", name: "Krypton", group: 18, period: 4, block: "p", Protons: 36, Electrons: 36, Neutrons: 48, Classification: "Nobel gas", RAM: 83.798, GEC: "[Ar] 3d¹⁰ 4s² 4p⁶", COS: "0", FIE: "1350.8kJ/mol", SIE: "2350kJ/mol ", TIE: "3550kJ/mol", atomicRadius: "216pm ", EA: "-96 kJ/mol", EN: "3", MP: "115.79K", BP: "120K", Density: "0.003733 g/cm³   ", Entropy: "164.10 J/(mol·K)", Cp: "0.248 J/g·K        ", Abundance: "0.00%", Appearance: " Colorless gas; ", YOD: 1898.0 },
  { AtomicNumber: 37, symbol: "Rb", name: "Rubidium", group: 1, period: 5, block: "s", Protons: 37, Electrons: 37, Neutrons: 48, Classification: "Alkali Metal", RAM: 85.4678, GEC: "[Kr] 5s¹", COS: "1", FIE: "403.0kJ/mol", SIE: "2630kJ/mol", TIE: "3700kJ/mol", atomicRadius: "303pm ", EA: "46.3 kJ/mol", EN: "0.82", MP: "312.45K", BP: "961K", Density: " g/cm³      ", Entropy: "69.48 J/(mol·K)", Cp: " 0.363 J/g·K        ", Abundance: "0.00%", Appearance: "Soft, silvery metal.", YOD: 1861.0 },
  { AtomicNumber: 38, symbol: "Sr", name: "Strontium", group: 2, period: 5, block: "s", Protons: 38, Electrons: 38, Neutrons: 50, Classification: "Alkaline Earth Metal", RAM: 87.62, GEC: "[Kr] 5s²", COS: "2", FIE: "549.5kJ/mol", SIE: "1064kJ/mol", TIE: "4130kJ/mol", atomicRadius: "247pm ", EA: "5.03 kJ/mol", EN: "0.95", MP: "1050K", BP: "1650K", Density: " 2.64 g/cm³       ", Entropy: "54.91 J/(mol·K)", Cp: " 0.301 J/g·K        ", Abundance: "0.03%", Appearance: "Silvary white metal", YOD: 1790.0 },
  { AtomicNumber: 39, symbol: "Y", name: "Yttrium", group: 3, period: 5, block: "d", Protons: 39, Electrons: 39, Neutrons: 50, Classification: "Transition Metal", RAM: 88.905, GEC: "[Kr] 4d¹ 5s²", COS: "3", FIE: "600kJ/mol", SIE: "1230kJ/mol", TIE: "2380kJ/mol", atomicRadius: "180pm ", EA: "29.6 kJ/mol", EN: "1.22", MP: "1799K", BP: "3203K", Density: "4.472 g/cm³      ", Entropy: "41.60 J/(mol·K)", Cp: "0.298 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-metallic.", YOD: 1794.0 },
  { AtomicNumber: 40, symbol: "Zr", name: "Zirconium", group: 4, period: 5, block: "d", Protons: 40, Electrons: 40, Neutrons: 51, Classification: "Transition Metal", RAM: 91.224, GEC: "[Kr] 4d² 5s²", COS: "(+4,+2)", FIE: "640kJ/mol ", SIE: "1315kJ/mol", TIE: "2170kJ/mol", atomicRadius: "160pm ", EA: "41.1 kJ/mol", EN: "1.33", MP: "2128K", BP: "4682K", Density: " 6.52 g/cm³      ", Entropy: "46.30 J/(mol·K)", Cp: "0.278 J/g·K        ", Abundance: "0.01%", Appearance: " Grayish metal.", YOD: 1789.0 },
  { AtomicNumber: 41, symbol: "Nb", name: "Niobium", group: 5, period: 5, block: "d", Protons: 41, Electrons: 41, Neutrons: 52, Classification: "Transition Metal", RAM: 92.906, GEC: "[Kr] 4d⁴ 5s¹", COS: "(+5,+4,+3)", FIE: "651kJ/mol ", SIE: "1355kJ/mol", TIE: "2400kJ/mol", atomicRadius: "146pm ", EA: "86.1 kJ/mol", EN: "1.6", MP: "2750K", BP: "5017K", Density: "8.57 g/cm³       ", Entropy: "46.10 J/(mol·K)", Cp: "0.265 J/g·K        ", Abundance: "0.00%", Appearance: "Gray, metallic.", YOD: 1801.0 },
  { AtomicNumber: 42, symbol: "Mo", name: "Molybdenum", group: 6, period: 5, block: "d", Protons: 42, Electrons: 42, Neutrons: 54, Classification: "Transition Metal", RAM: 95.95, GEC: "[Kr] 4d⁵ 5s¹", COS: "(6,+5,+4,+3,+2)", FIE: "684kJ/mol", SIE: "1450kJ/mol", TIE: "2500kJ/mol ", atomicRadius: "139pm ", EA: "71 kJ/mol", EN: "2.16", MP: "2896K", BP: "4912K", Density: "10.28 g/cm³      ", Entropy: "45.80 J/(mol·K)", Cp: " 0.251 J/g·K        ", Abundance: "0.00%", Appearance: " Gray, metallic.", YOD: 1778.0 },
  { AtomicNumber: 43, symbol: "Tc", name: "Technetium", group: 7, period: 5, block: "d", Protons: 43, Electrons: 43, Neutrons: 55, Classification: "Transition Metal", RAM: 98.0, GEC: "[Kr] 4d⁵ 5s²", COS: "(+7,+6,+5,+4,+3)", FIE: "702kJ/mol", SIE: "1470kJ/mol", TIE: "2430kJ/mol", atomicRadius: "140pm ", EA: "53 kJ/mol", EN: "1.9", MP: "2430K", BP: "4538K", Density: "11.5 g/cm³       ", Entropy: "43.00 J/(mol·K)", Cp: "0.243 J/g·K        ", Abundance: "trace", Appearance: " Silvery-gray metal, radioactive.", YOD: 1937.0 },
  { AtomicNumber: 44, symbol: "Ru", name: "Ruthenium", group: 8, period: 5, block: "d", Protons: 44, Electrons: 44, Neutrons: 57, Classification: "Transition Metal", RAM: 101.07, GEC: "[Kr] 4d⁷ 5s¹ ", COS: "(+8,+4,+3,+2)", FIE: "710kJ/mol", SIE: "1610kJ/mol", TIE: "2570kJ/mol", atomicRadius: "137pm ", EA: "101.2 kJ/mol", EN: "2.2", MP: "2607K", BP: "4423K", Density: " 12.37 g/cm³      ", Entropy: "41.00 J/(mol·K)", Cp: "0.238 J/g·K        ", Abundance: "0.00%", Appearance: "Hard, silver-gray metal.", YOD: 1844.0 },
  { AtomicNumber: 45, symbol: "Rh", name: "Rhodium", group: 9, period: 5, block: "d", Protons: 45, Electrons: 45, Neutrons: 58, Classification: "Transition Metal", RAM: 102.905, GEC: "[Kr] 4d⁸ 5s¹", COS: "(+3,+1)", FIE: "719kJ/mol", SIE: "1620kJ/mol", TIE: "2470kJ/mol ", atomicRadius: "135pm ", EA: "110 kJ/mol", EN: "2.28", MP: "2237K", BP: "3968K", Density: " 12.41 g/cm³      ", Entropy: "38.90 J/(mol·K)", Cp: "0.243 J/g·K        ", Abundance: "0.00%", Appearance: "Silvery-white metal.", YOD: 1803.0 },
  { AtomicNumber: 46, symbol: "Pd", name: "Palladium", group: 10, period: 5, block: "d", Protons: 46, Electrons: 46, Neutrons: 60, Classification: "Transition Metal", RAM: 106.42, GEC: "[Kr] 4d¹⁰", COS: "(+4,+2)", FIE: "804kJ/mol", SIE: "1710kJ/mol", TIE: "2470kJ/mol", atomicRadius: "137pm ", EA: "54.4 kJ/mol", EN: "2.2", MP: "1828.05K", BP: "3236K", Density: " 12.02 g/cm³      ", Entropy: "37.80 J/(mol·K)", Cp: "0.244 J/g·K", Abundance: "0.00%", Appearance: "Silvery-white metal.", YOD: 1803.0 },
  { AtomicNumber: 47, symbol: "Ag", name: "Silver", group: 11, period: 5, block: "d", Protons: 47, Electrons: 47, Neutrons: 61, Classification: "Transition Metal", RAM: 107.868, GEC: "[Kr] 4d¹⁰ 5s¹", COS: "1", FIE: "731kJ/mol", SIE: "2070kJ/mol", TIE: "3360kJ/mol ", atomicRadius: "165pm ", EA: "125 kJ/mol", EN: "1.93", MP: "1234.93K", BP: "2435K", Density: "10.49 g/cm³      ", Entropy: "42.55 J/(mol·K)", Cp: "0.235 J/g·K        ", Abundance: "0.07%", Appearance: " Lustrous, white metal.", YOD: "N/A" },
  { AtomicNumber: 48, symbol: "Cd", name: "Cadmium", group: 12, period: 5, block: "d", Protons: 48, Electrons: 48, Neutrons: 64, Classification: "Transition Metal", RAM: 112.414, GEC: "[Kr] 4d¹⁰ 5s²", COS: "2", FIE: "867kJ/mol", SIE: "1610kJ/mol", TIE: "2640kJ/mol", atomicRadius: "151pm ", EA: "-1.1 kJ/mol", EN: "1.69", MP: "594.22K", BP: "1040K", Density: " 8.65 g/cm³       ", Entropy: "51.96 J/(mol·K)", Cp: "0.230 J/g·K        ", Abundance: "0.00%", Appearance: " Soft, bluish-white metal.", YOD: 1817.0 },
  { AtomicNumber: 49, symbol: "In", name: "Indium", group: 13, period: 5, block: "p", Protons: 49, Electrons: 49, Neutrons: 66, Classification: "Metal ", RAM: 114.818, GEC: "[Kr] 4d¹⁰ 5s² 5p¹", COS: "(+3,+1)", FIE: "556kJ/mol", SIE: "1820kJ/mol", TIE: "2470kJ/mol", atomicRadius: "170pm ", EA: "0.40 kJ/mol", EN: "1.78", MP: "429.75K", BP: "2345K", Density: "7.31 g/cm³       ", Entropy: "50.24 J/(mol·K)", Cp: "0.233 J/g·K        ", Abundance: "0.00%", Appearance: " Silvary white metal", YOD: 1863.0 },
  { AtomicNumber: 50, symbol: "Sn", name: "Tin", group: 14, period: 5, block: "p", Protons: 50, Electrons: 50, Neutrons: 69, Classification: "Metal ", RAM: 118.71, GEC: "[Kr] 4d¹⁰ 5s² 5p²", COS: "(+4,+2)", FIE: "708kJ/mol ", SIE: "1450kJ/mol", TIE: "2900kJ/mol", atomicRadius: "140pm ", EA: "107 kJ/mol", EN: "1.96", MP: "505.08K", BP: "2875K", Density: " 7.287 g/cm³      ", Entropy: "51.49 J/(mol·K)", Cp: "0.228 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-white metal, relatively soft.", YOD: "N/A" },
  { AtomicNumber: 51, symbol: "Sb", name: "Antimony", group: 15, period: 5, block: "p", Protons: 51, Electrons: 51, Neutrons: 71, Classification: "Metalloid", RAM: 121.76, GEC: "[Kr] 4d¹⁰ 5s² 5p³", COS: "(+5,+3,-3)", FIE: "834kJ/mol", SIE: "1590kJ/mol", TIE: "2440kJ/mol", atomicRadius: "207pm ", EA: "103 kJ/mol", EN: "2.05", MP: "903.78K", BP: "1860K", Density: "6.685 g/cm³      ", Entropy: "54.80 J/(mol·K)", Cp: "0.207 J/g·K        ", Abundance: "0.00%", Appearance: " Silvary metallic luster.", YOD: "N/A" },
  { AtomicNumber: 52, symbol: "Te", name: "Tellurium ", group: 16, period: 5, block: "p", Protons: 52, Electrons: 52, Neutrons: 76, Classification: "Metalloid", RAM: 127.6, GEC: "[Kr] 4d¹⁰ 5s² 5p⁴", COS: "(+6,+4,+2,-2)", FIE: "869kJ/mol", SIE: "1610kJ/mol", TIE: "2470kJ/mol", atomicRadius: "206pm ", EA: "190 kJ/mol", EN: "2.1", MP: "722.66K", BP: "1261K", Density: " 6.232 g/cm³      ", Entropy: "49.50 J/(mol·K)", Cp: "0.202 J/g·K        ", Abundance: "0.00%", Appearance: " Silver-white metal.", YOD: 1782.0 },
  { AtomicNumber: 53, symbol: "I", name: "Iodine", group: 17, period: 5, block: "p", Protons: 53, Electrons: 53, Neutrons: 74, Classification: "Halogen", RAM: 126.904, GEC: "[Kr] 4d¹⁰ 5s² 5p⁵", COS: "(+7,+5,+1,-1)", FIE: "1008kJ/mol", SIE: "1845kJ/mol", TIE: "2850kJ/mol", atomicRadius: "198pm ", EA: "295.2 kJ/mol", EN: "2.66", MP: "386.85K", BP: "457K", Density: "4.93 g/cm³       ", Entropy: "116.10 J/(mol·K)", Cp: "0.214 J/g·K        ", Abundance: "0.00%", Appearance: " Dark purple - black solid ", YOD: 1811.0 },
  { AtomicNumber: 54, symbol: "Xe", name: "Xenon", group: 18, period: 5, block: "p", Protons: 54, Electrons: 54, Neutrons: 77, Classification: "Nobel gas", RAM: 131.293, GEC: "[Kr] 4d¹⁰ 5s² 5p⁶", COS: "(+2,+4,+6)", FIE: "1170kJ/mol ", SIE: "2046kJ/mol ", TIE: "3096kJ/mol ", atomicRadius: "216pm ", EA: "0 kJ/mol", EN: "2.6", MP: "161.4K", BP: "165K", Density: "0.005887 g/cm³   ", Entropy: "169.84 J/(mol·K)", Cp: "0.158 J/g·K        ", Abundance: "0.00%", Appearance: "Colorless gas.", YOD: 1898.0 },
  { AtomicNumber: 55, symbol: "Cs", name: "Cesium", group: 1, period: 6, block: "s", Protons: 55, Electrons: 55, Neutrons: 78, Classification: "Alkali Metal", RAM: 132.905, GEC: "[Xe] 6s¹", COS: "1", FIE: "375.7kJ/mol ", SIE: "2470kJ/mol ", TIE: "3660kJ/mol ", atomicRadius: "262pm ", EA: "45.5 kJ/mol", EN: "0.79", MP: "301.59K", BP: "944K", Density: " 1.873 g/cm³      ", Entropy: "85.30 J/(mol·K)", Cp: " 0.242 J/g·K        ", Abundance: "0.00%", Appearance: "Soft, golden-silvery metal, ", YOD: 1860.0 },
  { AtomicNumber: 56, symbol: "Ba", name: "Barium", group: 2, period: 6, block: "s", Protons: 56, Electrons: 56, Neutrons: 81, Classification: "Alkaline Earth Metal", RAM: 137.327, GEC: "[Xe] 6s²", COS: "2", FIE: "503kJ/mol ", SIE: "965kJ/mol ", TIE: "1400kJ/mol ", atomicRadius: "222pm ", EA: "13 kJ/mol", EN: "0.89", MP: "1000K", BP: "2170K", Density: "3.62 g/cm³       ", Entropy: "62.80 J/(mol·K)", Cp: "0.204 J/g·K        ", Abundance: "0.04%", Appearance: "Silvary white metal", YOD: 1808.0 },
  { AtomicNumber: 57, symbol: "La", name: "Lanthanum", group: 3, period: 6, block: "f", Protons: 57, Electrons: 57, Neutrons: 82, Classification: "Lanthanide", RAM: 138.904, GEC: "[Xe] 5d¹ 6s²", COS: "3", FIE: "538kJ/mol ", SIE: "1061kJ/mol ", TIE: "2050kJ/mol ", atomicRadius: "195pm ", EA: "53 kJ/mol", EN: "1.1", MP: "1193K", BP: "3737K", Density: " 6.145 g/cm³      ", Entropy: "50.92 J/(mol·K)", Cp: " 0.195 J/g·K        ", Abundance: "0.00%", Appearance: "Silvery-white metal.", YOD: 1839.0 },
  { AtomicNumber: 58, symbol: "Ce", name: "Cerium", group: 3, period: 6, block: "f", Protons: 58, Electrons: 58, Neutrons: 82, Classification: "Lanthanide", RAM: 140.116, GEC: "[Xe] 4f¹ 5d¹ 6s²", COS: "(+4,+3)", FIE: "540kJ/mol ", SIE: "1060kJ/mol ", TIE: "1890kJ/mol ", atomicRadius: "183pm ", EA: "55 kJ/mol", EN: "1.12", MP: "1068K", BP: "3716K", Density: " 6.77 g/cm³       ", Entropy: "46.50 J/(mol·K)", Cp: " 0.192 J/g·K        ", Abundance: "0.00%", Appearance: "Silvery-gray metal.", YOD: 1803.0 },
  { AtomicNumber: 59, symbol: "Pr", name: "Praseodymium", group: 3, period: 6, block: "f", Protons: 59, Electrons: 59, Neutrons: 82, Classification: "Lanthanide", RAM: 140.907, GEC: "[Xe] 4f³ 6s²", COS: "(+4,+3)", FIE: "527kJ/mol ", SIE: "1070kJ/mol ", TIE: "2170kJ/mol ", atomicRadius: "183pm ", EA: "50 kJ/mol", EN: "1.13", MP: "1208K", BP: "3793K", Density: " 6.77 g/cm³    ", Entropy: "50.50 J/(mol·K)", Cp: "0.193 J/g·K        ", Abundance: "0.00%", Appearance: " silvery-white metal.", YOD: 1885.0 },
  { AtomicNumber: 60, symbol: "Nd", name: "Neodymium", group: 3, period: 6, block: "f", Protons: 60, Electrons: 60, Neutrons: 84, Classification: "Lanthanide", RAM: 144.242, GEC: "[Xe] 4f⁴ 6s²", COS: "(+3,+2)", FIE: "553kJ/mol ", SIE: "1072kJ/mol ", TIE: "2273kJ/mol ", atomicRadius: "182pm ", EA: "50 kJ/mol", EN: "1.14", MP: "1297K", BP: "3347K", Density: " 7.007 g/cm³     ", Entropy: "50.42 J/(mol·K)", Cp: "0.190 J/g·K        ", Abundance: "0.00%", Appearance: "Silvery metal", YOD: 1885.0 },
  { AtomicNumber: 61, symbol: "Pm", name: "Promethium", group: 3, period: 6, block: "f", Protons: 61, Electrons: 61, Neutrons: 84, Classification: "Lanthanide", RAM: 145.0, GEC: "[Xe] 4f⁵ 6s²", COS: "3", FIE: "540kJ/mol ", SIE: "1090kJ/mol ", TIE: "2400kJ/mol ", atomicRadius: "181pm ", EA: "N/A", EN: "1.13", MP: "1315K", BP: "3273K", Density: "7.26 g/cm³      ", Entropy: "46.10 J/(mol·K)", Cp: " 0.179 J/g·K        ", Abundance: "N/A", Appearance: "Silvery metal.", YOD: 1945.0 },
  { AtomicNumber: 62, symbol: "Sm", name: "Samarium", group: 3, period: 6, block: "f", Protons: 62, Electrons: 62, Neutrons: 88, Classification: "Lanthanide", RAM: 150.36, GEC: "[Xe] 4f⁶ 6s²", COS: "3", FIE: "593kJ/mol ", SIE: "1151kJ/mol ", TIE: "2450kJ/mol ", atomicRadius: "180pm ", EA: "50 kJ/mol", EN: "1.17", MP: "1345K", BP: "2076K", Density: " 7.52 g/cm³       ", Entropy: "54.00 J/(mol·K)", Cp: " 0.197 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-white metal.", YOD: 1879.0 },
  { AtomicNumber: 63, symbol: "Eu", name: "Europium", group: 3, period: 6, block: "f", Protons: 63, Electrons: 63, Neutrons: 89, Classification: "Lanthanide", RAM: 151.964, GEC: "[Xe] 4f⁷ 6s²", COS: "(+3,+2)", FIE: "547kJ/mol ", SIE: "1084kJ/mol ", TIE: "2260kJ/mol ", atomicRadius: "179pm ", EA: "11.2 kJ/mol", EN: "1", MP: "1099K", BP: "1802K", Density: "5.243 g/cm³      ", Entropy: "65.30 J/(mol·K)", Cp: "0.182 J/g·K        ", Abundance: "0.00%", Appearance: " Soft, silvery metal.", YOD: 1901.0 },
  { AtomicNumber: 64, symbol: "Gd", name: "Gadolinium", group: 3, period: 6, block: "f", Protons: 64, Electrons: 64, Neutrons: 93, Classification: "Lanthanide", RAM: 157.25, GEC: "[Xe] 4f⁷ 5d¹ 6s²", COS: "3", FIE: "593kJ/mol ", SIE: "1151kJ/mol ", TIE: "2450kJ/mol ", atomicRadius: "178pm ", EA: "0 kJ/mol", EN: "1.2", MP: "1585K", BP: "3546K", Density: "7.895 g/cm³     ", Entropy: "59.60 J/(mol·K)", Cp: "0.236 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-white metal.", YOD: 1880.0 },
  { AtomicNumber: 65, symbol: "Tb", name: "Terbium", group: 3, period: 6, block: "f", Protons: 65, Electrons: 65, Neutrons: 94, Classification: "Lanthanide", RAM: 158.925, GEC: "[Xe] 4f⁹ 6s²", COS: "3", FIE: "572kJ/mol ", SIE: "1080kJ/mol ", TIE: "2340kJ/mol ", atomicRadius: "179pm ", EA: "0 kJ/mol", EN: "1.1", MP: "1629K", BP: "3503K", Density: "8.229 g/cm³      ", Entropy: "56.10 J/(mol·K)", Cp: " 0.182 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-gray metal.", YOD: 1843.0 },
  { AtomicNumber: 66, symbol: "Dy", name: "Dysprosium", group: 3, period: 6, block: "f", Protons: 66, Electrons: 66, Neutrons: 97, Classification: "Lanthanide", RAM: 162.5, GEC: "[Xe] 4f¹⁰ 6s²", COS: "3", FIE: "573kJ/mol ", SIE: "1157kJ/mol ", TIE: "2359kJ/mol ", atomicRadius: "178pm ", EA: "33.96 kJ/mol", EN: "1.22", MP: "1680K", BP: "2840K", Density: "  8.55 g/cm³      ", Entropy: "54.80 J/(mol·K)", Cp: "0.170 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-white metal.", YOD: 1886.0 },
  { AtomicNumber: 67, symbol: "Ho", name: "Holmium", group: 3, period: 6, block: "f", Protons: 67, Electrons: 67, Neutrons: 98, Classification: "Lanthanide", RAM: 164.93, GEC: "[Xe] 4f¹¹ 6s²", COS: "3", FIE: "588kJ/mol ", SIE: "1160kJ/mol ", TIE: "2450kJ/mol ", atomicRadius: "177pm ", EA: "0 kJ/mol", EN: "1.23", MP: "1734K", BP: "2973K", Density: "8.795 g/cm³      ", Entropy: "56.00 J/(mol·K)", Cp: "0.165 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-white metal.", YOD: 1878.0 },
  { AtomicNumber: 68, symbol: "Er", name: "Erbium", group: 3, period: 6, block: "f", Protons: 68, Electrons: 68, Neutrons: 99, Classification: "Lanthanide", RAM: 167.259, GEC: "[Xe] 4f¹² 6s²", COS: "3", FIE: "581kJ/mol ", SIE: "1131kJ/mol ", TIE: "2485kJ/mol ", atomicRadius: "176pm ", EA: "30.1 kJ/mol", EN: "1.24", MP: "1802K", BP: "3141K", Density: "   9.066 g/cm³      ", Entropy: "56.40 J/(mol·K)", Cp: "0.168 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-white metal.", YOD: 1842.0 },
  { AtomicNumber: 69, symbol: "Tm", name: "Thulium", group: 3, period: 6, block: "f", Protons: 69, Electrons: 69, Neutrons: 100, Classification: "Lanthanide", RAM: 168.934, GEC: "[Xe] 4f¹³ 6s²", COS: "3", FIE: "579kJ/mol ", SIE: "1125kJ/mol ", TIE: "2476kJ/mol ", atomicRadius: "175pm ", EA: "0 kJ/mol", EN: "Jan-00", MP: "1818K", BP: "2223K", Density: " 9.321 g/cm³      ", Entropy: "54.50 J/(mol·K)", Cp: " 0.160 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery- metal.", YOD: 1879.0 },
  { AtomicNumber: 70, symbol: "Yb", name: "Ytterbium", group: 3, period: 6, block: "f", Protons: 70, Electrons: 70, Neutrons: 103, Classification: "Lanthanide", RAM: 173.04, GEC: "[Xe] 4f¹⁴ 6s²", COS: "3", FIE: "664kJ/mol ", SIE: "1371kJ/mol ", TIE: "2600kJ/mol ", atomicRadius: "173pm ", EA: "1.93 kJ/mol", EN: "1.1", MP: "1097K", BP: "1469K", Density: " 6.965 g/cm³      ", Entropy: "50.40 J/(mol·K)", Cp: " 0.155 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-white metal.", YOD: 1878.0 },
  { AtomicNumber: 71, symbol: "Lu", name: "Lutetium ", group: 3, period: 6, block: "f", Protons: 71, Electrons: 71, Neutrons: 104, Classification: "Lanthanide", RAM: 174.966, GEC: "[Xe] 4f¹⁴ 5d¹ 6s²", COS: "3", FIE: "523kJ/mol ", SIE: "1072kJ/mol ", TIE: "2490kJ/mol ", atomicRadius: "172pm ", EA: "33.4 kJ/mol", EN: "1.27", MP: "1925K", BP: "3675K", Density: "9.841 g/cm³      ", Entropy: "41.20 J/(mol·K)", Cp: "0.154 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-white metal.", YOD: 1907.0 },
  { AtomicNumber: 72, symbol: "Hf", name: "Hafnium", group: 4, period: 6, block: "d", Protons: 72, Electrons: 72, Neutrons: 106, Classification: "Transition Metal", RAM: 178.49, GEC: "[Xe] 4f¹⁴ 5d² 6s²", COS: "4", FIE: "659kJ/mol ", SIE: "1390kJ/mol ", TIE: "2800kJ/mol ", atomicRadius: "159pm ", EA: "0 kJ/mol", EN: "1.3", MP: "2506K", BP: "4876K", Density: "13.31 g/cm³      ", Entropy: "35.10 J/(mol·K)", Cp: "0.144 J/g·K        ", Abundance: "0.00%", Appearance: "Silvery- metal.", YOD: 1923.0 },
  { AtomicNumber: 73, symbol: "Ta", name: "Tantalum", group: 5, period: 6, block: "d", Protons: 73, Electrons: 73, Neutrons: 108, Classification: "Transition Metal", RAM: 180.947, GEC: "[Xe] 4f¹⁴ 5d³ 6s²", COS: "(+5,+4)", FIE: "745kJ/mol ", SIE: "1500kJ/mol ", TIE: "3050kJ/mol", atomicRadius: "146pm ", EA: "31 kJ/mol", EN: "1.5", MP: "3290K", BP: "5731K", Density: " 16.69 g/cm³      ", Entropy: "30.60 J/(mol·K)", Cp: " 0.140 J/g·K        ", Abundance: "0.00%", Appearance: "Blue gray metallic luster", YOD: 1802.0 },
  { AtomicNumber: 74, symbol: "W", name: "Tungsten", group: 6, period: 6, block: "d", Protons: 74, Electrons: 74, Neutrons: 110, Classification: "Transition Metal", RAM: 183.84, GEC: "[Xe] 4f¹⁴ 5d⁴ 6s²", COS: "(+6,+5,+4)", FIE: "770kJ/mol ", SIE: "1500kJ/mol ", TIE: "2450kJ/mol ", atomicRadius: "139pm ", EA: "78.6 kJ/mol", EN: "2.36", MP: "3695K", BP: "5828K", Density: "19.25 g/cm³      ", Entropy: "31.00 J/(mol·K)", Cp: "0.132 J/g·K        ", Abundance: "0.00%", Appearance: "Stell - gray metal.", YOD: 1783.0 },
  { AtomicNumber: 75, symbol: "Re", name: "Rhenium", group: 7, period: 6, block: "d", Protons: 75, Electrons: 75, Neutrons: 111, Classification: "Transition Metal", RAM: 186.207, GEC: "[Xe] 4f¹⁴ 5d⁵ 6s²", COS: "(+7,+6,+4)", FIE: "760kJ/mol ", SIE: "1600kJ/mol ", TIE: "3200kJ/mol ", atomicRadius: "137pm ", EA: "15 kJ/mol", EN: "1.9", MP: "3459K", BP: "5869K", Density: "21.02 g/cm³      ", Entropy: "32.80 J/(mol·K)", Cp: "0.137 J/g·K        ", Abundance: "0.00%", Appearance: "Silvery-gray metal.", YOD: 1925.0 },
  { AtomicNumber: 76, symbol: "Os", name: "Osmium", group: 8, period: 6, block: "d", Protons: 76, Electrons: 76, Neutrons: 114, Classification: "Transition Metal", RAM: 190.23, GEC: "[Xe] 4f¹⁴ 5d⁶ 6s²", COS: "(+4,+6)", FIE: "840kJ/mol ", SIE: "1640kJ/mol ", TIE: "3300kJ/mol ", atomicRadius: "130pm ", EA: "106.1 kJ/mol", EN: "2.2", MP: "3306K", BP: "5285K", Density: " 22.59 g/cm³      ", Entropy: "37.10 J/(mol·K)", Cp: "0.130 J/g·K        ", Abundance: "0.00%", Appearance: " Blue -gray metal.", YOD: 1803.0 },
  { AtomicNumber: 77, symbol: "Ir", name: "Iridium", group: 9, period: 6, block: "d", Protons: 77, Electrons: 77, Neutrons: 115, Classification: "Transition Metal", RAM: 192.217, GEC: "[Xe] 4f¹⁴ 5d⁷ 6s²", COS: "(+3,+4,+6)", FIE: "880kJ/mol ", SIE: "1890kJ/mol ", TIE: "3800kJ/mol ", atomicRadius: "136pm ", EA: "151 kJ/mol", EN: "2.2", MP: "2719K", BP: "4701K", Density: " 22.56 g/cm³      ", Entropy: "37.30 J/(mol·K)", Cp: "0.131 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-white metal.", YOD: 1803.0 },
  { AtomicNumber: 78, symbol: "Pt", name: "Platinum", group: 10, period: 6, block: "d", Protons: 78, Electrons: 78, Neutrons: 117, Classification: "Transition Metal", RAM: 195.084, GEC: "[Xe] 4f¹⁴ 5d⁹ 6s¹", COS: "(+2,+4)", FIE: "864kJ/mol ", SIE: "1740kJ/mol ", TIE: "3460kJ/mol ", atomicRadius: "139pm ", EA: "205.3 kJ/mol", EN: "2.28", MP: "2041.4K", BP: "4098K", Density: "21.45 g/cm³      ", Entropy: "32.60 J/(mol·K)", Cp: "0.133 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery-white metal.", YOD: "N/A" },
  { AtomicNumber: 79, symbol: "Au", name: "Gold", group: 11, period: 6, block: "d", Protons: 79, Electrons: 79, Neutrons: 118, Classification: "Transition Metal", RAM: 196.966, GEC: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", COS: "(+1,+3)", FIE: "890kJ/mol ", SIE: "1980kJ/mol ", TIE: "3350kJ/mol ", atomicRadius: "144pm", EA: "222.8 kJ/mol", EN: "2.54", MP: "1337.33K", BP: "3129K", Density: "19.32 g/cm³      ", Entropy: "42.55 J/(mol·K)", Cp: "0.129 J/g·K        ", Abundance: "0.00%", Appearance: " yellow metallic luster.", YOD: "N/A" },
  { AtomicNumber: 80, symbol: "Hg", name: "Mercury", group: 12, period: 6, block: "d", Protons: 80, Electrons: 80, Neutrons: 121, Classification: "Transition Metal", RAM: 200.592, GEC: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", COS: "(+1,+2)", FIE: "1007kJ/mol ", SIE: "1810kJ/mol ", TIE: "3500kJ/mol ", atomicRadius: "156pm ", EA: "0 kJ/mol", EN: "2", MP: "234.32K", BP: "630K", Density: " 13.534 g/cm³     ", Entropy: "76.02 J/(mol·K)", Cp: "0.140 J/g·K        ", Abundance: "0.00%", Appearance: " Silvery liquid .", YOD: "N/A" },
  { AtomicNumber: 81, symbol: "Tl", name: "Thallium", group: 13, period: 6, block: "p", Protons: 81, Electrons: 81, Neutrons: 123, Classification: "Metal", RAM: 204.38, GEC: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", COS: "(+1,+3)", FIE: "589kJ/mol ", SIE: "1230kJ/mol ", TIE: "1990kJ/mol ", atomicRadius: "156pm ", EA: "19.2 kJ/mol", EN: "1.62", MP: "577K", BP: "1746K", Density: "11.85 g/cm³      ", Entropy: "77.10 J/(mol·K)", Cp: " 0.129 J/g·K        ", Abundance: "0.00%", Appearance: "Silvery-graymetal.", YOD: 1861.0 },
  { AtomicNumber: 82, symbol: "Pb", name: "Lead", group: 14, period: 6, block: "p", Protons: 82, Electrons: 82, Neutrons: 125, Classification: "Metal", RAM: 207.2, GEC: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", COS: "(+2,+4)", FIE: "715kJ/mol ", SIE: "1450kJ/mol ", TIE: "2900kJ/mol ", atomicRadius: "175pm ", EA: "35 kJ/mol", EN: "2.33", MP: "600.61K", BP: "2022K", Density: " 11.34 g/cm³      ", Entropy: "64.80 J/(mol·K)", Cp: "0.129 J/g·K        ", Abundance: "0.00%", Appearance: "Bluish-white metal.", YOD: "N/A" },
  { AtomicNumber: 83, symbol: "Bi", name: "Bismuth", group: 15, period: 6, block: "p", Protons: 83, Electrons: 83, Neutrons: 126, Classification: "Metal", RAM: 208.98, GEC: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", COS: "(+3,+5)", FIE: "703kJ/mol ", SIE: "1640kJ/mol ", TIE: "2500kJ/mol ", atomicRadius: "167pm ", EA: "91.2 kJ/mol", EN: "2.02", MP: "544.7K", BP: "1837K", Density: " 9.78 g/cm³       ", Entropy: "57.30 J/(mol·K)", Cp: "0.122 J/g·K        ", Abundance: "0.00%", Appearance: "Lustrous silvery-pink metal.", YOD: "N/A" },
  { AtomicNumber: 84, symbol: "Po", name: "Polonium", group: 16, period: 6, block: "p", Protons: 84, Electrons: 84, Neutrons: 125, Classification: "Metalloid", RAM: 209.0, GEC: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", COS: "(+4,+2)", FIE: "812kJ/mol ", SIE: "1632kJ/mol ", TIE: "2530kJ/mol ", atomicRadius: "140pm ", EA: "183 kJ/mol", EN: "2", MP: "527K", BP: "1235K", Density: "9.196 g/cm³      ", Entropy: "54.20 J/(mol·K)", Cp: "0.125 J/g·K", Abundance: "0.00%", Appearance: " Silvery metalic.", YOD: 1898.0 },
  { AtomicNumber: 85, symbol: "At", name: "Astatine", group: 17, period: 6, block: "p", Protons: 85, Electrons: 85, Neutrons: 125, Classification: "Metalloid", RAM: 210.0, GEC: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", COS: "(-1,+1,+3,+5,+7)", FIE: "920kJ/mol ", SIE: "2000kJ/mol ", TIE: "4000kJ/mol ", atomicRadius: "202pm ", EA: "270 kJ/mol", EN: "2.2", MP: "575K", BP: "610K", Density: "7 g/cm³          ", Entropy: "N/A", Cp: "N/A", Abundance: "0.00%", Appearance: "Dark or metallic.", YOD: 1940.0 },
  { AtomicNumber: 86, symbol: "Rn", name: "Radon", group: 18, period: 6, block: "p", Protons: 86, Electrons: 86, Neutrons: 136, Classification: "Nobel gas", RAM: 222.0, GEC: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", COS: "0", FIE: "1037kJ/mol ", SIE: "N/A", TIE: "N/A", atomicRadius: "215pm ", EA: "N/A", EN: "N/A", MP: "202K", BP: "211.3K", Density: " 0.00973 g/cm³    ", Entropy: "63.24 J/(mol·K)", Cp: "N/A", Abundance: "0.00%", Appearance: "Colorless gas.", YOD: 1900.0 },
  { AtomicNumber: 87, symbol: "Fr", name: "Francium", group: 1, period: 7, block: "s", Protons: 87, Electrons: 87, Neutrons: 136, Classification: "Alkali Metal", RAM: 223.0, GEC: "[Rn] 7s¹", COS: "1", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "270pm ", EA: "45 kJ/mol", EN: "N/A", MP: "~300K", BP: "950K", Density: "~1.87 g/cm³      ", Entropy: "N/A", Cp: "N/A", Abundance: "0.00%", Appearance: " Highly radioactive metal.", YOD: 1939.0 },
  { AtomicNumber: 88, symbol: "Ra", name: "Radium", group: 2, period: 7, block: "s", Protons: 88, Electrons: 88, Neutrons: 138, Classification: "Alkaline Earth Metal", RAM: 226.0, GEC: "[Rn] 7s²", COS: "2", FIE: "509kJ/mol ", SIE: "1037kJ/mol", TIE: "N/A", atomicRadius: "215pm ", EA: "N/A", EN: "N/A", MP: "973K", BP: "2010K", Density: " 5.5 g/cm³        ", Entropy: "68.10 J/(mol·K)", Cp: "N/A", Abundance: "0.00%", Appearance: " Silvery-white metal.", YOD: 1898.0 },
  { AtomicNumber: 89, symbol: "Ac", name: "Actinium", group: 3, period: 7, block: "f", Protons: 89, Electrons: 89, Neutrons: 138, Classification: "Actinide", RAM: 227.0, GEC: "[Rn] 6d¹ 7s² ", COS: "3", FIE: "499kJ/mol ", SIE: "1030kJ/mol ", TIE: "1440kJ/mol ", atomicRadius: "228pm ", EA: "33.8 kJ/mol", EN: "N/A", MP: "1323K", BP: "3471K", Density: " 10.07 g/cm³      ", Entropy: "56.20 J/(mol·K)", Cp: "N/A", Abundance: "0.00%", Appearance: " Silvery metal, radioactive.", YOD: 1899.0 },
  { AtomicNumber: 90, symbol: "Th", name: "Thorium", group: 3, period: 7, block: "f", Protons: 90, Electrons: 90, Neutrons: 142, Classification: "Actinide", RAM: 232.038, GEC: "[Rn] 6d² 7s² ", COS: "4", FIE: "587kJ/mol ", SIE: "1220kJ/mol ", TIE: "2460kJ/mol ", atomicRadius: "175pm ", EA: "112 kJ/mol", EN: "N/A", MP: "2023K", BP: "5061K", Density: " 11.72 g/cm³      ", Entropy: "52.39 J/(mol·K", Cp: "0.113 J/g·K", Abundance: "0.00%", Appearance: " Silvery - white metal.", YOD: 1829.0 },
  { AtomicNumber: 91, symbol: "Pa", name: "Protactinium ", group: 3, period: 7, block: "f", Protons: 91, Electrons: 91, Neutrons: 140, Classification: "Actinide", RAM: 231.03588, GEC: "[Rn] 5f² 6d¹ 7s²", COS: "(+4,+5)", FIE: "568kJ/mol ", SIE: "1370kJ/mol ", TIE: "3000kJ/mol ", atomicRadius: "180pm ", EA: "N/A", EN: "N/A", MP: "1845K", BP: "4300K", Density: " 15.37 g/cm³   ", Entropy: "50.60 J/(mol·K)", Cp: "N/A", Abundance: "0.00%", Appearance: "Silvery-white metal.", YOD: 1913.0 },
  { AtomicNumber: 92, symbol: "U", name: "Uranium", group: 3, period: 7, block: "f", Protons: 92, Electrons: 92, Neutrons: 146, Classification: "Actinide", RAM: 238.02891, GEC: "[Rn] 5f³ 6d¹ 7s²", COS: "(+3,+4,+5,+6)", FIE: "587kJ/mol ", SIE: "1420kJ/mol ", TIE: "2870kJ/mol ", atomicRadius: "175pm ", EA: "50.9 kJ/mol", EN: "N/A", MP: "1405.3k", BP: "4404K", Density: " 18.95 g/cm³      ", Entropy: "50.21 J/(mol·K)", Cp: "0.116 J/g·K", Abundance: "0.00%", Appearance: " Silvery-gray metal.", YOD: 1789.0 },
  { AtomicNumber: 93, symbol: "Np", name: "Neptunium", group: 3, period: 7, block: "f", Protons: 93, Electrons: 93, Neutrons: 144, Classification: "Actinide", RAM: 237.048, GEC: "[Rn] 5f⁴ 6d¹ 7s²", COS: "(+3,+4,+5,+6)", FIE: "602kJ/mol ", SIE: "1400kJ/mol ", TIE: "2800kJ/mol ", atomicRadius: "200pm ", EA: "45 kJ/mol", EN: "N/A", MP: "917K", BP: "4273K", Density: "20.45 g/cm³      ", Entropy: "57.20 J/(mol·K)", Cp: "0.113 J/g·K", Abundance: "0.00%", Appearance: " Silvery metallic.", YOD: 1940.0 },
  { AtomicNumber: 94, symbol: "Pu", name: "Plutonium", group: 3, period: 7, block: "f", Protons: 94, Electrons: 94, Neutrons: 150, Classification: "Actinide", RAM: 244.0, GEC: "[Rn] 5f⁶ 7s²", COS: "(+3,+4,+5,+6)", FIE: "584kJ/mol ", SIE: "1200kJ/mol ", TIE: "2900kJ/mol ", atomicRadius: "197pm ", EA: "41.1 kJ/mol", EN: "N/A", MP: "912.5K", BP: "3505K", Density: "19.816 g/cm³     ", Entropy: "50.80 J/(mol·K)", Cp: "0.130 J/g·K", Abundance: "0.00%", Appearance: " Silvery-white metal.", YOD: 1940.0 },
  { AtomicNumber: 95, symbol: "Am", name: "Americium", group: 3, period: 7, block: "f", Protons: 95, Electrons: 95, Neutrons: 148, Classification: "Actinide", RAM: 243.0, GEC: "[Rn] 5f⁷ 7s²", COS: "(+3,+4)", FIE: "577kJ/mol ", SIE: "1500kJ/mol ", TIE: "3100kJ/mol ", atomicRadius: "180pm ", EA: "9.93 kJ/mol", EN: "N/A", MP: "1449K", BP: "2880K", Density: " 13.69 g/cm³      ", Entropy: "65.00 J/(mol·K)", Cp: "N/A", Abundance: "0.00%", Appearance: " Silvery-metal.", YOD: 1944.0 },
  { AtomicNumber: 96, symbol: "Cm", name: "Curium", group: 3, period: 7, block: "f", Protons: 96, Electrons: 96, Neutrons: 151, Classification: "Actinide", RAM: 247.0, GEC: "[Rn] 5f⁷ 6d¹ 7s²", COS: "(+3,+4)", FIE: "581kJ/mol ", SIE: "1310kJ/mol ", TIE: "2760kJ/mol ", atomicRadius: "180pm ", EA: "27.17 kJ/mol", EN: "N/A", MP: "1613K", BP: "3383K", Density: " 13.51 g/cm³      ", Entropy: "65.20 J/(mol·K)", Cp: "N/A", Abundance: "0.00%", Appearance: " Silvery- metal.", YOD: 1944.0 },
  { AtomicNumber: 97, symbol: "Bk", name: "Berkelium", group: 3, period: 7, block: "f", Protons: 97, Electrons: 97, Neutrons: 150, Classification: "Actinide", RAM: 247.0, GEC: "[Rn] 5f⁹ 7s²", COS: "3", FIE: "605kJ/mol ", SIE: "1340kJ/mol ", TIE: "2920kJ/mol ", atomicRadius: "175pm ", EA: "N/A", EN: "N/A", MP: "1259K", BP: "2900K", Density: "14.78 g/cm³      ", Entropy: "N/A", Cp: "N/A", Abundance: "0.00%", Appearance: " Silvery- metal.", YOD: 1949.0 },
  { AtomicNumber: 98, symbol: "Cf", name: "Californium", group: 3, period: 7, block: "f", Protons: 98, Electrons: 98, Neutrons: 153, Classification: "Actinide", RAM: 251.0, GEC: "[Rn] 5f¹⁰ 7s²", COS: "(+3,+4)", FIE: "608kJ/mol ", SIE: "1280kJ/mol ", TIE: "2900kJ/mol ", atomicRadius: "178pm ", EA: "N/A", EN: "N/A", MP: "1173K", BP: "1743K", Density: "15.1 g/cm³     ", Entropy: "N/A", Cp: "N/A", Abundance: "0.00%", Appearance: " Silvery- metal.", YOD: 1950.0 },
  { AtomicNumber: 99, symbol: "Es", name: "Einsteinium", group: 3, period: 7, block: "f", Protons: 99, Electrons: 99, Neutrons: 153, Classification: "Actinide", RAM: 252.0, GEC: "[Rn] 5f¹¹ 7s²", COS: "3", FIE: "1080kJ/mol ", SIE: "1320kJ/mol ", TIE: "N/A", atomicRadius: "175pm ", EA: "N/A", EN: "N/A", MP: "1133K", BP: "1269K", Density: " 8.84 g/cm³   ", Entropy: "N/A", Cp: "N/A", Abundance: "0.00%", Appearance: "Silvery metal", YOD: 1952.0 },
  { AtomicNumber: 100, symbol: "Fm", name: "Fermium", group: 3, period: 7, block: "f", Protons: 100, Electrons: 100, Neutrons: 157, Classification: "Actinide", RAM: 257.0, GEC: "[Rn] 5f¹² 7s²", COS: "(+2,+3)", FIE: "1080kJ/mol ", SIE: "1320kJ/mol ", TIE: "N/A", atomicRadius: "174pm ", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Silvery- metal.", YOD: 1952.0 },
  { AtomicNumber: 101, symbol: "Md", name: "Mendelevium ", group: 3, period: 7, block: "f", Protons: 101, Electrons: 101, Neutrons: 157, Classification: "Actinide", RAM: 258.0, GEC: "[Rn] 5f¹³ 7s²", COS: "(+2,+3)", FIE: "1030kJ/mol ", SIE: "1370kJ/mol ", TIE: "N/A", atomicRadius: "170pm ", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Silvery- metal.", YOD: 1955.0 },
  { AtomicNumber: 102, symbol: "No", name: "Nobelium ", group: 3, period: 7, block: "f", Protons: 102, Electrons: 102, Neutrons: 157, Classification: "Actinide", RAM: 259.0, GEC: "[Rn] 5f¹⁴ 7s²", COS: "(+2,+3,+4)", FIE: "1020kJ/mol ", SIE: "N/A", TIE: "N/A", atomicRadius: "170pm ", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Silvery- metal.", YOD: 1958.0 },
  { AtomicNumber: 103, symbol: "Lr", name: "Lawrencium", group: 3, period: 7, block: "f", Protons: 103, Electrons: 103, Neutrons: 159, Classification: "Actinide", RAM: 266.0, GEC: "[Rn] 5f¹⁴ 7s² 7p¹", COS: "3", FIE: "1030kJ/mol ", SIE: "N/A", TIE: "N/A", atomicRadius: "160pm ", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Silvery- metal.", YOD: 1961.0 },
  { AtomicNumber: 104, symbol: "Rf", name: "Rutherfordium", group: 4, period: 7, block: "d", Protons: 104, Electrons: 104, Neutrons: 157, Classification: "Transition Metal", RAM: 267.0, GEC: "[Rn] 5f¹⁴ 6d² 7s²", COS: "4", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 1969.0 },
  { AtomicNumber: 105, symbol: "Db", name: "Dubnium", group: 5, period: 7, block: "d", Protons: 105, Electrons: 105, Neutrons: 157, Classification: "Transition Metal", RAM: 268.0, GEC: "[Rn] 5f¹⁴ 6d³ 7s²", COS: "(+3,+5)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 1967.0 },
  { AtomicNumber: 106, symbol: "Sg", name: "Seaborgium", group: 6, period: 7, block: "d", Protons: 106, Electrons: 106, Neutrons: 160, Classification: "Transition Metal", RAM: 271.0, GEC: "[Rn] 5f¹⁴ 6d⁴ 7s²", COS: "6", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 1974.0 },
  { AtomicNumber: 107, symbol: "Bh", name: "Bohrium", group: 7, period: 7, block: "d", Protons: 107, Electrons: 107, Neutrons: 157, Classification: "Transition Metal", RAM: 270.0, GEC: "[Rn] 5f¹⁴ 6d⁵ 7s²", COS: "(+3,+5)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 1981.0 },
  { AtomicNumber: 108, symbol: "Hs", name: "Hassium", group: 8, period: 7, block: "d", Protons: 108, Electrons: 108, Neutrons: 159, Classification: "Transition Metal", RAM: 277.0, GEC: "[Rn] 5f¹⁴ 6d⁶ 7s²", COS: "(+1,+4,+6)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 1984.0 },
  { AtomicNumber: 109, symbol: "Mt", name: "Meitnerium", group: 9, period: 7, block: "d", Protons: 109, Electrons: 109, Neutrons: 159, Classification: "Transition Metal", RAM: 278.0, GEC: "[Rn] 5f¹⁴ 6d⁷ 7s²", COS: "(+1,+3)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 1982.0 },
  { AtomicNumber: 110, symbol: "Ds", name: "Darmstadtium", group: 10, period: 7, block: "d", Protons: 110, Electrons: 110, Neutrons: 161, Classification: "Transition Metal", RAM: 281.0, GEC: "[Rn] 5f¹⁴ 6d⁸ 7s²", COS: "(+2,+3,+5)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 1994.0 },
  { AtomicNumber: 111, symbol: "Rg", name: "Roentgenium", group: 11, period: 7, block: "d", Protons: 111, Electrons: 111, Neutrons: 161, Classification: "Transition Metal", RAM: 280.0, GEC: "[Rn] 5f¹⁴ 6d⁹ 7s²", COS: "(+1,+3)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 1994.0 },
  { AtomicNumber: 112, symbol: "Cn", name: "Copernicium", group: 12, period: 7, block: "d", Protons: 112, Electrons: 112, Neutrons: 165, Classification: "Transition Metal", RAM: 285.0, GEC: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", COS: "(+2,+4)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 1996.0 },
  { AtomicNumber: 113, symbol: "Nh", name: "Nihonium", group: 13, period: 7, block: "p", Protons: 113, Electrons: 113, Neutrons: 165, Classification: "Metal", RAM: 286.0, GEC: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", COS: "(+1,+3)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 2004.0 },
  { AtomicNumber: 114, symbol: "Fl", name: "Flerovium", group: 14, period: 7, block: "p", Protons: 114, Electrons: 114, Neutrons: 175, Classification: "Metal", RAM: 289.0, GEC: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", COS: "(+2,+4)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 1999.0 },
  { AtomicNumber: 115, symbol: "Mc", name: "Moscovium", group: 15, period: 7, block: "p", Protons: 115, Electrons: 115, Neutrons: 173, Classification: "Metal", RAM: 288.0, GEC: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", COS: "(+1,+3)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 2003.0 },
  { AtomicNumber: 116, symbol: "Lv", name: "Livermorium", group: 16, period: 7, block: "p", Protons: 116, Electrons: 116, Neutrons: 177, Classification: "Metal", RAM: 293.0, GEC: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", COS: "(+2,+4)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "Unknown ", YOD: 2000.0 },
  { AtomicNumber: 117, symbol: "Ts", name: "Tennessine", group: 17, period: 7, block: "p", Protons: 117, Electrons: 117, Neutrons: 177, Classification: "Halogen", RAM: 294.0, GEC: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", COS: "(+1,+3,+5,+7)", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "N/A", YOD: 2010.0 },
  { AtomicNumber: 118, symbol: "Og", name: "Oganesson", group: 18, period: 7, block: "p", Protons: 118, Electrons: 118, Neutrons: 176, Classification: "Nobel gas", RAM: 294.0, GEC: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", COS: "0", FIE: "N/A", SIE: "N/A", TIE: "N/A", atomicRadius: "N/A", EA: "N/A", EN: "N/A", MP: "N/A", BP: "N/A", Density: "N/A", Entropy: "N/A", Cp: "N/A", Abundance: "N/A", Appearance: "N/A", YOD: 2002.0 },
    { AtomicNumber: "", symbol: "57-71", name: "Lanthanoids", group: 3, period: 6, block: "L" },
    { AtomicNumber: "", symbol: "89-103", name: "Actinoids", group: 3, period: 7, block: "A" },
  ]
  
   // Popup and overlay elements
      const popupOverlay = document.createElement('div');
      popupOverlay.className = 'popup-overlay';
      document.body.appendChild(popupOverlay); 
 
function createPeriodicTable() {
    const mainTable = document.createElement('div');
    mainTable.className = 'periodic-table';
    document.body.appendChild(mainTable);
  
    const fBlockContainer = document.createElement('div');
    fBlockContainer.className = 'f-container';
    document.body.appendChild(fBlockContainer);

    
  
      const popup = document.createElement('div');
      popup.className = 'popup';
      popup.innerHTML = `
        <div class="popup-content"></div>
        <button class="close-btn">X</button>
      `;
      document.body.appendChild(popup);
  
      // Event to close the popup
      popup.querySelector('.close-btn').addEventListener('click', () => {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';
        clearHighlight();
      });
  
      popupOverlay.addEventListener('click', () => {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';
        clearHighlight();
      });

      mainTable.addEventListener('click',()=>{
        // clearHighlight();
      })
  
  
    // Create grid structure for the main table
    for (let period = 1; period <= 11; period++) {
      for (let group = 1; group <= 18; group++) {
        const cell = document.createElement('div');
        cell.className = 'element-cell';
        cell.dataset.period = period;
        cell.dataset.group = group;
        mainTable.appendChild(cell);
      }
    }
  

  
    // Place each element in its correct position
    elements.forEach(element => {
      if (element.block === 'f') {
        const row = element.period === 6 ? 10 : 11;
        const col = element.AtomicNumber - (element.period === 6 ? 57 : 89) + 2;
        const fSelector = `.periodic-table .element-cell[data-period='${row}'][data-group='${col}']`;
        const targetCell = document.querySelector(fSelector);
        if (targetCell) fillCell(targetCell, element,  popup, popupOverlay);

        //LOL
        if(element.symbol == "57-71" || element.symbol == "57-71" ){
            const selector = `.periodic-table .element-cell[data-period='${element.period}'][data-group='${element.group}']`;
            const targetCell = document.querySelector(selector);
            if (targetCell) fillCell(targetCell, element,  popup, popupOverlay);
        }
      } else {
        const selector = `.periodic-table .element-cell[data-period='${element.period}'][data-group='${element.group}']`;
        const targetCell = document.querySelector(selector);
        if (targetCell) fillCell(targetCell, element,  popup, popupOverlay);
      }
    });
  }
  
  // Helper function to fill the cell with element data
  function fillCell(cell, element,  popup, popupOverlay) {
    cell.className = `element ${element.block}-block`;
    cell.innerHTML = `
      <div class="atomic-number">${element.AtomicNumber}</div>
      <div class="symbol">${element.symbol}</div>
      <div class="name">${element.name}</div>
    `;
    // Event listener to show the popup with element details
    
    cell.addEventListener('click', () => {
      if(element.name == "Lanthanoids" || element.name == "Actinoids"){
        highlightElements(element.name);
        popup.querySelector('.popup-content').innerHTML = `
        <h2>${element.name} (${element.symbol})</h2>
        <p>Atomic Number: ${element.name=="Lanthanoids"?"57-71":"89-108"}</p>
        <p>${element.name=="Lanthanoids"?"The Lanthanoids (or Lanthanides) are a series of 15 metallic elements with atomic numbers 57 to 71, starting from Lanthanum (La) to Lutetium (Lu). These elements are placed in the f-block of the periodic table because they involve the filling of the 4f-orbitals.":"The Actinoids (or Actinides) are a series of 15 elements with atomic numbers 89 to 103, starting from Actinium (Ac) to Lawrencium (Lr). These elements involve the filling of the 5f-orbital and are placed in the f-block of the periodic table, below the lanthanoids."}</p>
        <p>Period: ${element.period}</p>
        <p>Block: f</p> 
      `;
      popup.style.display = 'block';
      popupOverlay.style.display = 'block';
      }else{
        
      
      popup.querySelector('.popup-content').innerHTML = `
        <h2>${element.name} (${element.symbol})</h2>
<table class="properties-table">
    <tr>
        <td>Atomic Number:</td>
        <td>${element.AtomicNumber}</td>
    </tr>
    <tr>
        <td>Symbol:</td>
        <td>${element.symbol}</td>
    </tr>
    <tr>
        <td>Name:</td>
        <td>${element.name}</td>
    </tr>
    <tr>
        <td>Group:</td>
        <td>${element.group}</td>
    </tr>
    <tr>
        <td>Period:</td>
        <td>${element.period}</td>
    </tr>
    <tr>
        <td>Block:</td>
        <td>${element.block}</td>
    </tr>
    <tr>
        <td>Protons:</td>
        <td>${element.Protons}</td>
    </tr>
    <tr>
        <td>Electrons:</td>
        <td>${element.Electrons}</td>
    </tr>
    <tr>
        <td>Neutrons:</td>
        <td>${element.Neutrons}</td>
    </tr>
    <tr>
        <td>Classification:</td>
        <td>${element.Classification}</td>
    </tr>
    <tr>
        <td>Relative Atomic Mass:</td>
        <td>${element.RAM}</td>
    </tr>
    <tr>
        <td>Ground Electron Configuration:</td>
        <td>${element.GEC}</td>
    </tr>
    <tr>
        <td>Common Oxidation States:</td>
        <td>${element.COS}</td>
    </tr>
    <tr>
        <td>First Ionization Energy:</td>
        <td>${element.FIE}</td>
    </tr>
    <tr>
        <td>Second Ionization Energy:</td>
        <td>${element.SIE}</td>
    </tr>
    <tr>
        <td>Third Ionization Energy:</td>
        <td>${element.TIE}</td>
    </tr>
    <tr>
        <td>Atomic Radius:</td>
        <td>${element.atomicRadius}</td>
    </tr>
    <tr>
        <td>Electron Affinity:</td>
        <td>${element.EA}</td>
    </tr>
    <tr>
        <td>Electronegativity:</td>
        <td>${element.EN}</td>
    </tr>
    <tr>
        <td>Melting Point:</td>
        <td>${element.MP}</td>
    </tr>
    <tr>
        <td>Boiling Point:</td>
        <td>${element.BP}</td>
    </tr>
    <tr>
        <td>Density:</td>
        <td>${element.Density}</td>
    </tr>
    <tr>
        <td>Entropy:</td>
        <td>${element.Entropy}</td>
    </tr>
    <tr>
        <td>Specific Heat Capacity:</td>
        <td>${element.Cp}</td>
    </tr>
    <tr>
        <td>Abundance in Earth's crust:</td>
        <td>${element.Abundance}</td>
    </tr>
    <tr>
        <td>Appearance:</td>
        <td>${element.Appearance}</td>
    </tr>
    <tr>
        <td>Year of Discovery:</td>
        <td>${element.YOD}</td>
    </tr>
</table>


      `;
      popup.style.display = 'block';
      popupOverlay.style.display = 'block';

      }
    });
  }
  
// Function to highlight elements by type (group or series)
function highlightElements(type) {
  clearHighlight(); // Clear previous highlights

  const highlightRanges = {
    Lanthanoids: { start: 57, end: 71 },
    Actinoids: { start: 89, end: 103 },
    AlkaliMetals: [3, 11, 19, 37, 55, 87],
    AlkalineEarthMetals: [4, 12, 20, 38, 56, 88],
    Chalcogens: [8, 16, 34, 52, 84],
    Halogens: [9, 17, 35, 53, 85],
    NobleGases: [2, 10, 18, 36, 54, 86],
    TransitionMetals: [
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 72, 73, 74, 75, 76, 77, 78, 79, 80, 104, 105, 106, 107, 108, 109, 110, 111, 112
    ],
    PostTransitionMetals: [13, 31, 49, 50, 81, 82, 83, 84, 113, 114],
    Metalloids: [5, 14, 32, 33, 51, 52, 85],
    NonMetals: [1, 6, 7, 8, 9, 10, 15, 16, 17, 18],
    TransitionMetalsGroup1: [21, 39, 57, 89],
  };
  

  const range = highlightRanges[type];

  if (Array.isArray(range)) {
    range.forEach((AtomicNumber) => {
      const cell = findElementByAtomicNumber(AtomicNumber);
      highlightCell(cell);
    });
  } else if (range) {
    for (let i = range.start; i <= range.end; i++) {
      const cell = findElementByAtomicNumber(i);
      highlightCell(cell);
    }
  }
}

// Helper function to find an element by its atomic number
function findElementByAtomicNumber(AtomicNumber) {
  const elements = document.querySelectorAll('.element');
  return Array.from(elements).find((element) => {
    const numberDiv = element.querySelector('.atomic-number');
    return numberDiv && numberDiv.textContent.trim() === String(AtomicNumber);
  });
}

// Helper function to highlight a specific element
function highlightCell(cell) {
  if (cell) cell.classList.add('highlight');
  popupOverlay.style.display = 'block';
}

// Function to clear all highlights
function clearHighlight() {
  document.querySelectorAll('.element.highlight').forEach((cell) =>
    cell.classList.remove('highlight')
  );
    // Reset the previous active link (if any)
    if (activeLink) {
      activeLink.classList.remove('active');
    }
}



  createPeriodicTable();
  

  let activeLink = null; // Store the currently active link

  function activateLink(link) {
    // Fetch and log the text content of the clicked link
    const linkText = link.textContent;
    highlightElements(linkText);

    // Reset the previous active link (if any)
    if (activeLink) {
      activeLink.classList.remove('active');
    }

    // Set the new active link
    link.classList.add('active');
    activeLink = link;
  }