// Custom Data-Driven Periodic Table - Developed for Strata STEM Guide
document.addEventListener('DOMContentLoaded', () => {
    
    // Core structural data avoiding 118 explicit lines of HTML (Memory efficient JS generation)
    // Structure: [Atomic#, Symbol, Name, Mass, Group, Period, Category, Melt(K), Boil(K)]
    const elementData = [
        [1, 'H', 'Hydrogen', '1.008', 1, 1, 'nonmetal', 13.99, 20.271, 1, 2.2, 72.769, 1312, "N/A", "N/A", "N/A", 0.08988, "N/A", 28.836, "N/A", "Henry Cavendish"],
        [2, 'He', 'Helium', '4.002602', 18, 1, 'noble', 0.95, 4.222, 1, null, -48, 2372.3, "N/A", "N/A", "N/A", 0.1786, "N/A", null, "N/A", "Pierre Janssen"],
        [3, 'Li', 'Lithium', '6.94', 1, 2, 'alkali', 453.65, 1603, 2, 0.98, 59.6326, 520.2, "N/A", "N/A", "N/A", 0.534, "N/A", 24.86, "N/A", "Johan August Arfwedson"],
        [4, 'Be', 'Beryllium', '9.012183', 2, 2, 'alkaline', 1560, 2742, 2, 1.57, -48, 899.5, "N/A", "N/A", "N/A", 1.85, "N/A", 16.443, "N/A", "Louis Nicolas Vauquelin"],
        [5, 'B', 'Boron', '10.81', 13, 2, 'metalloid', 2349, 4200, 2, 2.04, 26.989, 800.6, "N/A", "N/A", "N/A", 2.08, "N/A", 11.087, "N/A", "Joseph Louis Gay-Lussac"],
        [6, 'C', 'Carbon', '12.011', 14, 2, 'nonmetal', null, null, 2, 2.55, 121.7763, 1086.5, "N/A", "N/A", "N/A", 1.821, "N/A", 8.517, "N/A", "Ancient Egypt"],
        [7, 'N', 'Nitrogen', '14.007', 15, 2, 'nonmetal', 63.15, 77.355, 2, 3.04, -6.8, 1402.3, "N/A", "N/A", "N/A", 1.251, "N/A", null, "N/A", "Daniel Rutherford"],
        [8, 'O', 'Oxygen', '15.999', 16, 2, 'nonmetal', 54.36, 90.188, 2, 3.44, 140.976, 1313.9, "N/A", "N/A", "N/A", 1.429, "N/A", null, "N/A", "Carl Wilhelm Scheele"],
        [9, 'F', 'Fluorine', '18.998403', 17, 2, 'nonmetal', 53.48, 85.03, 2, 3.98, 328.1649, 1681, "N/A", "N/A", "N/A", 1.696, "N/A", null, "N/A", "André-Marie Ampère"],
        [10, 'Ne', 'Neon', '20.17976', 18, 2, 'noble', 24.56, 27.104, 2, null, -116, 2080.7, "N/A", "N/A", "N/A", 0.9002, "N/A", null, "N/A", "Morris Travers"],
        [11, 'Na', 'Sodium', '22.989769', 1, 3, 'alkali', 370.944, 1156.09, 3, 0.93, 52.867, 495.8, "N/A", "N/A", "N/A", 0.968, "N/A", 28.23, "N/A", "Humphry Davy"],
        [12, 'Mg', 'Magnesium', '24.305', 2, 3, 'alkaline', 923, 1363, 3, 1.31, -40, 737.7, "N/A", "N/A", "N/A", 1.738, "N/A", 24.869, "N/A", "Joseph Black"],
        [13, 'Al', 'Aluminium', '26.981539', 13, 3, 'post-transition', 933.47, 2743, 3, 1.61, 41.762, 577.5, "N/A", "N/A", "N/A", 2.7, "N/A", 24.2, "N/A", "N/A"],
        [14, 'Si', 'Silicon', '28.085', 14, 3, 'metalloid', 1687, 3538, 3, 1.9, 134.0684, 786.5, "N/A", "N/A", "N/A", 2.329, "N/A", 19.789, "N/A", "Jöns Jacob Berzelius"],
        [15, 'P', 'Phosphorus', '30.973762', 15, 3, 'nonmetal', null, null, 3, 2.19, 72.037, 1011.8, "N/A", "N/A", "N/A", 1.823, "N/A", 23.824, "N/A", "Hennig Brand"],
        [16, 'S', 'Sulfur', '32.06', 16, 3, 'nonmetal', 388.36, 717.8, 3, 2.58, 200.4101, 999.6, "N/A", "N/A", "N/A", 2.07, "N/A", 22.75, "N/A", "Ancient china"],
        [17, 'Cl', 'Chlorine', '35.45', 17, 3, 'nonmetal', 171.6, 239.11, 3, 3.16, 348.575, 1251.2, "N/A", "N/A", "N/A", 3.2, "N/A", null, "N/A", "Carl Wilhelm Scheele"],
        [18, 'Ar', 'Argon', '39.9481', 18, 3, 'noble', 83.81, 87.302, 3, null, -96, 1520.6, "N/A", "N/A", "N/A", 1.784, "N/A", null, "N/A", "Lord Rayleigh"],
        [19, 'K', 'Potassium', '39.09831', 1, 4, 'alkali', 336.7, 1032, 4, 0.82, 48.383, 418.8, "N/A", "N/A", "N/A", 0.862, "N/A", 29.6, "N/A", "Humphry Davy"],
        [20, 'Ca', 'Calcium', '40.0784', 2, 4, 'alkaline', 1115, 1757, 4, 1, 2.37, 589.8, "N/A", "N/A", "N/A", 1.55, "N/A", 25.929, "N/A", "Humphry Davy"],
        [21, 'Sc', 'Scandium', '44.955908', 3, 4, 'transition', 1814, 3109, 4, 1.36, 18, 633.1, "N/A", "N/A", "N/A", 2.985, "N/A", 25.52, "N/A", "Lars Fredrik Nilson"],
        [22, 'Ti', 'Titanium', '47.8671', 4, 4, 'transition', 1941, 3560, 4, 1.54, 7.289, 658.8, "N/A", "N/A", "N/A", 4.506, "N/A", 25.06, "N/A", "William Gregor"],
        [23, 'V', 'Vanadium', '50.94151', 5, 4, 'transition', 2183, 3680, 4, 1.63, 50.911, 650.9, "N/A", "N/A", "N/A", 6, "N/A", 24.89, "N/A", "Andrés Manuel del Río"],
        [24, 'Cr', 'Chromium', '51.99616', 6, 4, 'transition', 2180, 2944, 4, 1.66, 65.21, 652.9, "N/A", "N/A", "N/A", 7.19, "N/A", 23.35, "N/A", "Louis Nicolas Vauquelin"],
        [25, 'Mn', 'Manganese', '54.938044', 7, 4, 'transition', 1519, 2334, 4, 1.55, -50, 717.3, "N/A", "N/A", "N/A", 7.21, "N/A", 26.32, "N/A", "Torbern Olof Bergman"],
        [26, 'Fe', 'Iron', '55.8452', 8, 4, 'transition', 1811, 3134, 4, 1.83, 14.785, 762.5, "N/A", "N/A", "N/A", 7.874, "N/A", 25.1, "N/A", "5000 BC"],
        [27, 'Co', 'Cobalt', '58.933194', 9, 4, 'transition', 1768, 3200, 4, 1.88, 63.898, 760.4, "N/A", "N/A", "N/A", 8.9, "N/A", 24.81, "N/A", "Georg Brandt"],
        [28, 'Ni', 'Nickel', '58.69344', 10, 4, 'transition', 1728, 3003, 4, 1.91, 111.65, 737.1, "N/A", "N/A", "N/A", 8.908, "N/A", 26.07, "N/A", "Axel Fredrik Cronstedt"],
        [29, 'Cu', 'Copper', '63.5463', 11, 4, 'transition', 1357.77, 2835, 4, 1.9, 119.235, 745.5, "N/A", "N/A", "N/A", 8.96, "N/A", 24.44, "N/A", "Middle East"],
        [30, 'Zn', 'Zinc', '65.382', 12, 4, 'transition', 692.68, 1180, 4, 1.65, -58, 906.4, "N/A", "N/A", "N/A", 7.14, "N/A", 25.47, "N/A", "India"],
        [31, 'Ga', 'Gallium', '69.7231', 13, 4, 'post-transition', 302.9146, 2673, 4, 1.81, 41, 578.8, "N/A", "N/A", "N/A", 5.91, "N/A", 25.86, "N/A", "Lecoq de Boisbaudran"],
        [32, 'Ge', 'Germanium', '72.6308', 14, 4, 'metalloid', 1211.4, 3106, 4, 2.01, 118.9352, 762, "N/A", "N/A", "N/A", 5.323, "N/A", 23.222, "N/A", "Clemens Winkler"],
        [33, 'As', 'Arsenic', '74.921596', 15, 4, 'metalloid', null, null, 4, 2.18, 77.65, 947, "N/A", "N/A", "N/A", 5.727, "N/A", 24.64, "N/A", "Bronze Age"],
        [34, 'Se', 'Selenium', '78.9718', 16, 4, 'nonmetal', 494, 958, 4, 2.55, 194.9587, 941, "N/A", "N/A", "N/A", 4.81, "N/A", 25.363, "N/A", "Jöns Jakob Berzelius"],
        [35, 'Br', 'Bromine', '79.904', 17, 4, 'nonmetal', 265.8, 332, 4, 2.96, 324.537, 1139.9, "N/A", "N/A", "N/A", 3.1028, "N/A", null, "N/A", "Antoine Jérôme Balard"],
        [36, 'Kr', 'Krypton', '83.7982', 18, 4, 'noble', 115.78, 119.93, 4, 3, -96, 1350.8, "N/A", "N/A", "N/A", 3.749, "N/A", null, "N/A", "William Ramsay"],
        [37, 'Rb', 'Rubidium', '85.46783', 1, 5, 'alkali', 312.45, 961, 5, 0.82, 46.884, 403, "N/A", "N/A", "N/A", 1.532, "N/A", 31.06, "N/A", "Robert Bunsen"],
        [38, 'Sr', 'Strontium', '87.621', 2, 5, 'alkaline', 1050, 1650, 5, 0.95, 5.023, 549.5, "N/A", "N/A", "N/A", 2.64, "N/A", 26.4, "N/A", "William Cruickshank (chemist)"],
        [39, 'Y', 'Yttrium', '88.905842', 3, 5, 'transition', 1799, 3203, 5, 1.22, 29.6, 600, "N/A", "N/A", "N/A", 4.472, "N/A", 26.53, "N/A", "Johan Gadolin"],
        [40, 'Zr', 'Zirconium', '91.2242', 4, 5, 'transition', 2128, 4650, 5, 1.33, 41.806, 640.1, "N/A", "N/A", "N/A", 6.52, "N/A", 25.36, "N/A", "Martin Heinrich Klaproth"],
        [41, 'Nb', 'Niobium', '92.906372', 5, 5, 'transition', 2750, 5017, 5, 1.6, 88.516, 652.1, "N/A", "N/A", "N/A", 8.57, "N/A", 24.6, "N/A", "Charles Hatchett"],
        [42, 'Mo', 'Molybdenum', '95.951', 6, 5, 'transition', 2896, 4912, 5, 2.16, 72.1, 684.3, "N/A", "N/A", "N/A", 10.28, "N/A", 24.06, "N/A", "Carl Wilhelm Scheele"],
        [43, 'Tc', 'Technetium', '98', 7, 5, 'transition', 2430, 4538, 5, 1.9, 53, 702, "N/A", "N/A", "N/A", 11, "N/A", 24.27, "N/A", "Emilio Segrè"],
        [44, 'Ru', 'Ruthenium', '101.072', 8, 5, 'transition', 2607, 4423, 5, 2.2, 100.96, 710.2, "N/A", "N/A", "N/A", 12.45, "N/A", 24.06, "N/A", "Karl Ernst Claus"],
        [45, 'Rh', 'Rhodium', '102.905502', 9, 5, 'transition', 2237, 3968, 5, 2.28, 110.27, 719.7, "N/A", "N/A", "N/A", 12.41, "N/A", 24.98, "N/A", "William Hyde Wollaston"],
        [46, 'Pd', 'Palladium', '106.421', 10, 5, 'transition', 1828.05, 3236, 4, 2.2, 54.24, 804.4, "N/A", "N/A", "N/A", 12.023, "N/A", 25.98, "N/A", "William Hyde Wollaston"],
        [47, 'Ag', 'Silver', '107.86822', 11, 5, 'transition', 1234.93, 2435, 5, 1.93, 125.862, 731, "N/A", "N/A", "N/A", 10.49, "N/A", 25.35, "N/A", "unknown, before 5000 BC"],
        [48, 'Cd', 'Cadmium', '112.4144', 12, 5, 'transition', 594.22, 1040, 5, 1.69, -68, 867.8, "N/A", "N/A", "N/A", 8.65, "N/A", 26.02, "N/A", "Karl Samuel Leberecht Hermann"],
        [49, 'In', 'Indium', '114.8181', 13, 5, 'post-transition', 429.7485, 2345, 5, 1.78, 37.043, 558.3, "N/A", "N/A", "N/A", 7.31, "N/A", 26.74, "N/A", "Ferdinand Reich"],
        [50, 'Sn', 'Tin', '118.7107', 14, 5, 'post-transition', 505.08, 2875, 5, 1.96, 107.2984, 708.6, "N/A", "N/A", "N/A", 7.365, "N/A", 27.112, "N/A", "unknown, before 3500 BC"],
        [51, 'Sb', 'Antimony', '121.7601', 15, 5, 'metalloid', 903.78, 1908, 5, 2.05, 101.059, 834, "N/A", "N/A", "N/A", 6.697, "N/A", 25.23, "N/A", "unknown, before 3000 BC"],
        [52, 'Te', 'Tellurium', '127.603', 16, 5, 'metalloid', 722.66, 1261, 5, 2.1, 190.161, 869.3, "N/A", "N/A", "N/A", 6.24, "N/A", 25.73, "N/A", "Franz-Joseph Müller von Reichenstein"],
        [53, 'I', 'Iodine', '126.904473', 17, 5, 'nonmetal', 386.85, 457.4, 5, 2.66, 295.1531, 1008.4, "N/A", "N/A", "N/A", 4.933, "N/A", null, "N/A", "Bernard Courtois"],
        [54, 'Xe', 'Xenon', '131.2936', 18, 5, 'noble', 161.4, 165.051, 5, 2.6, -77, 1170.4, "N/A", "N/A", "N/A", 5.894, "N/A", null, "N/A", "William Ramsay"],
        [55, 'Cs', 'Cesium', '132.905452', 1, 6, 'alkali', 301.7, 944, 6, 0.79, 45.505, 375.7, "N/A", "N/A", "N/A", 1.93, "N/A", 32.21, "N/A", "Robert Bunsen"],
        [56, 'Ba', 'Barium', '137.3277', 2, 6, 'alkaline', 1000, 2118, 6, 0.89, 13.954, 502.9, "N/A", "N/A", "N/A", 3.51, "N/A", 28.07, "N/A", "Carl Wilhelm Scheele"],
        [57, 'La', 'Lanthanum', '138.905477', 3, 6, 'lanthanoid', 1193, 3737, 6, 1.1, 53, 538.1, "N/A", "N/A", "N/A", 6.162, "N/A", 27.11, "N/A", "Carl Gustaf Mosander"],
        [58, 'Ce', 'Cerium', '140.1161', 3, 6, 'lanthanoid', 1068, 3716, 6, 1.12, 55, 534.4, "N/A", "N/A", "N/A", 6.77, "N/A", 26.94, "N/A", "Martin Heinrich Klaproth"],
        [59, 'Pr', 'Praseodymium', '140.907662', 3, 6, 'lanthanoid', 1208, 3403, 6, 1.13, 93, 527, "N/A", "N/A", "N/A", 6.77, "N/A", 27.2, "N/A", "Carl Auer von Welsbach"],
        [60, 'Nd', 'Neodymium', '144.2423', 3, 6, 'lanthanoid', 1297, 3347, 6, 1.14, 184.87, 533.1, "N/A", "N/A", "N/A", 7.01, "N/A", 27.45, "N/A", "Carl Auer von Welsbach"],
        [61, 'Pm', 'Promethium', '145', 3, 6, 'lanthanoid', 1315, 3273, 6, 1.13, 12.45, 540, "N/A", "N/A", "N/A", 7.26, "N/A", null, "N/A", "Chien Shiung Wu"],
        [62, 'Sm', 'Samarium', '150.362', 3, 6, 'lanthanoid', 1345, 2173, 6, 1.17, 15.63, 544.5, "N/A", "N/A", "N/A", 7.52, "N/A", 29.54, "N/A", "Lecoq de Boisbaudran"],
        [63, 'Eu', 'Europium', '151.9641', 3, 6, 'lanthanoid', 1099, 1802, 6, 1.2, 11.2, 547.1, "N/A", "N/A", "N/A", 5.264, "N/A", 27.66, "N/A", "Eugène-Anatole Demarçay"],
        [64, 'Gd', 'Gadolinium', '157.253', 3, 6, 'lanthanoid', 1585, 3273, 6, 1.2, 13.22, 593.4, "N/A", "N/A", "N/A", 7.9, "N/A", 37.03, "N/A", "Jean Charles Galissard de Marignac"],
        [65, 'Tb', 'Terbium', '158.925352', 3, 6, 'lanthanoid', 1629, 3396, 6, 1.1, 112.4, 565.8, "N/A", "N/A", "N/A", 8.23, "N/A", 28.91, "N/A", "Carl Gustaf Mosander"],
        [66, 'Dy', 'Dysprosium', '162.5001', 3, 6, 'lanthanoid', 1680, 2840, 6, 1.22, 33.96, 573, "N/A", "N/A", "N/A", 8.54, "N/A", 27.7, "N/A", "Lecoq de Boisbaudran"],
        [67, 'Ho', 'Holmium', '164.930332', 3, 6, 'lanthanoid', 1734, 2873, 6, 1.23, 32.61, 581, "N/A", "N/A", "N/A", 8.79, "N/A", 27.15, "N/A", "Marc Delafontaine"],
        [68, 'Er', 'Erbium', '167.2593', 3, 6, 'lanthanoid', 1802, 3141, 6, 1.24, 30.1, 589.3, "N/A", "N/A", "N/A", 9.066, "N/A", 28.12, "N/A", "Carl Gustaf Mosander"],
        [69, 'Tm', 'Thulium', '168.934222', 3, 6, 'lanthanoid', 1818, 2223, 6, 1.25, 99, 596.7, "N/A", "N/A", "N/A", 9.32, "N/A", 27.03, "N/A", "Per Teodor Cleve"],
        [70, 'Yb', 'Ytterbium', '173.0451', 3, 6, 'lanthanoid', 1097, 1469, 6, 1.1, -1.93, 603.4, "N/A", "N/A", "N/A", 6.9, "N/A", 26.74, "N/A", "Jean Charles Galissard de Marignac"],
        [71, 'Lu', 'Lutetium', '174.96681', 3, 6, 'lanthanoid', 1925, 3675, 6, 1.27, 33.4, 523.5, "N/A", "N/A", "N/A", 9.841, "N/A", 26.86, "N/A", "Georges Urbain"],
        [72, 'Hf', 'Hafnium', '178.492', 4, 6, 'transition', 2506, 4876, 6, 1.3, 17.18, 658.5, "N/A", "N/A", "N/A", 13.31, "N/A", 25.73, "N/A", "Dirk Coster"],
        [73, 'Ta', 'Tantalum', '180.947882', 5, 6, 'transition', 3290, 5731, 6, 1.5, 31, 761, "N/A", "N/A", "N/A", 16.69, "N/A", 25.36, "N/A", "Anders Gustaf Ekeberg"],
        [74, 'W', 'Tungsten', '183.841', 6, 6, 'transition', 3695, 6203, 6, 2.36, 78.76, 770, "N/A", "N/A", "N/A", 19.25, "N/A", 24.27, "N/A", "Carl Wilhelm Scheele"],
        [75, 'Re', 'Rhenium', '186.2071', 7, 6, 'transition', 3459, 5869, 6, 1.9, 5.8273, 760, "N/A", "N/A", "N/A", 21.02, "N/A", 25.48, "N/A", "Masataka Ogawa"],
        [76, 'Os', 'Osmium', '190.233', 8, 6, 'transition', 3306, 5285, 6, 2.2, 103.99, 840, "N/A", "N/A", "N/A", 22.59, "N/A", 24.7, "N/A", "Smithson Tennant"],
        [77, 'Ir', 'Iridium', '192.2173', 9, 6, 'transition', 2719, 4403, 6, 2.2, 150.94, 880, "N/A", "N/A", "N/A", 22.56, "N/A", 25.1, "N/A", "Smithson Tennant"],
        [78, 'Pt', 'Platinum', '195.0849', 10, 6, 'transition', 2041.4, 4098, 6, 2.28, 205.041, 870, "N/A", "N/A", "N/A", 21.45, "N/A", 25.86, "N/A", "Antonio de Ulloa"],
        [79, 'Au', 'Gold', '196.966569', 11, 6, 'transition', 1337.33, 3243, 6, 2.54, 222.747, 890.1, "N/A", "N/A", "N/A", 19.3, "N/A", 25.418, "N/A", "Middle East"],
        [80, 'Hg', 'Mercury', '200.5923', 12, 6, 'transition', 234.321, 629.88, 6, 2, -48, 1007.1, "N/A", "N/A", "N/A", 13.534, "N/A", 27.983, "N/A", "unknown, before 2000 BCE"],
        [81, 'Tl', 'Thallium', '204.38', 13, 6, 'post-transition', 577, 1746, 6, 1.62, 36.4, 589.4, "N/A", "N/A", "N/A", 11.85, "N/A", 26.32, "N/A", "William Crookes"],
        [82, 'Pb', 'Lead', '207.21', 14, 6, 'post-transition', 600.61, 2022, 6, 1.87, 34.4204, 715.6, "N/A", "N/A", "N/A", 11.34, "N/A", 26.65, "N/A", "Middle East"],
        [83, 'Bi', 'Bismuth', '208.980401', 15, 6, 'post-transition', 544.7, 1837, 6, 2.02, 90.924, 703, "N/A", "N/A", "N/A", 9.78, "N/A", 25.52, "N/A", "Claude François Geoffroy"],
        [84, 'Po', 'Polonium', '209', 16, 6, 'post-transition', 527, 1235, 6, 2, 136, 812.1, "N/A", "N/A", "N/A", 9.196, "N/A", 26.4, "N/A", "Pierre Curie"],
        [85, 'At', 'Astatine', '210', 17, 6, 'metalloid', 575, 610, 6, 2.2, 233, 899.003, "N/A", "N/A", "N/A", 6.35, "N/A", null, "N/A", "Dale R. Corson"],
        [86, 'Rn', 'Radon', '222', 18, 6, 'noble', 202, 211.5, 6, 2.2, -68, 1037, "N/A", "N/A", "N/A", 9.73, "N/A", null, "N/A", "Friedrich Ernst Dorn"],
        [87, 'Fr', 'Francium', '223', 1, 7, 'alkali', 300, 950, 7, 0.79, 46.89, 380, "N/A", "N/A", "N/A", 1.87, "N/A", null, "N/A", "Marguerite Perey"],
        [88, 'Ra', 'Radium', '226', 2, 7, 'alkaline', 1233, 2010, 7, 0.9, 9.6485, 509.3, "N/A", "N/A", "N/A", 5.5, "N/A", null, "N/A", "Pierre Curie"],
        [89, 'Ac', 'Actinium', '227', 3, 7, 'actinoid', 1500, 3500, 7, 1.1, 33.77, 499, "N/A", "N/A", "N/A", 10, "N/A", 27.2, "N/A", "Friedrich Oskar Giesel"],
        [90, 'Th', 'Thorium', '232.03774', 3, 7, 'actinoid', 2023, 5061, 7, 1.3, 112.72, 587, "N/A", "N/A", "N/A", 11.724, "N/A", 26.23, "N/A", "Jöns Jakob Berzelius"],
        [91, 'Pa', 'Protactinium', '231.035882', 3, 7, 'actinoid', 1841, 4300, 7, 1.5, 53.03, 568, "N/A", "N/A", "N/A", 15.37, "N/A", null, "N/A", "William Crookes"],
        [92, 'U', 'Uranium', '238.028913', 3, 7, 'actinoid', 1405.3, 4404, 7, 1.38, 50.94, 597.6, "N/A", "N/A", "N/A", 19.1, "N/A", 27.665, "N/A", "Martin Heinrich Klaproth"],
        [93, 'Np', 'Neptunium', '237', 3, 7, 'actinoid', 912, 4447, 7, 1.36, 45.85, 604.5, "N/A", "N/A", "N/A", 20.45, "N/A", 29.46, "N/A", "Edwin McMillan"],
        [94, 'Pu', 'Plutonium', '244', 3, 7, 'actinoid', 912.5, 3505, 7, 1.28, -48.33, 584.7, "N/A", "N/A", "N/A", 19.816, "N/A", 35.5, "N/A", "Glenn T. Seaborg"],
        [95, 'Am', 'Americium', '243', 3, 7, 'actinoid', 1449, 2880, 7, 1.13, 9.93, 578, "N/A", "N/A", "N/A", 12, "N/A", 62.7, "N/A", "Glenn T. Seaborg"],
        [96, 'Cm', 'Curium', '247', 3, 7, 'actinoid', 1613, 3383, 7, 1.28, 27.17, 581, "N/A", "N/A", "N/A", 13.51, "N/A", null, "N/A", "Glenn T. Seaborg"],
        [97, 'Bk', 'Berkelium', '247', 3, 7, 'actinoid', 1259, 2900, 7, 1.3, -165.24, 601, "N/A", "N/A", "N/A", 14.78, "N/A", null, "N/A", "Lawrence Berkeley National Laboratory"],
        [98, 'Cf', 'Californium', '251', 3, 7, 'actinoid', 1173, 1743, 7, 1.3, -97.31, 608, "N/A", "N/A", "N/A", 15.1, "N/A", null, "N/A", "Lawrence Berkeley National Laboratory"],
        [99, 'Es', 'Einsteinium', '252', 3, 7, 'actinoid', 1133, 1269, 7, 1.3, -28.6, 619, "N/A", "N/A", "N/A", 8.84, "N/A", null, "N/A", "Lawrence Berkeley National Laboratory"],
        [100, 'Fm', 'Fermium', '257', 3, 7, 'actinoid', 1800, null, 7, 1.3, 33.96, 627, "N/A", "N/A", "N/A", null, "N/A", null, "N/A", "Lawrence Berkeley National Laboratory"],
        [101, 'Md', 'Mendelevium', '258', 3, 7, 'actinoid', 1100, null, 7, 1.3, 93.91, 635, "N/A", "N/A", "N/A", null, "N/A", null, "N/A", "Lawrence Berkeley National Laboratory"],
        [102, 'No', 'Nobelium', '259', 3, 7, 'actinoid', 1100, null, 7, 1.3, -223.22, 642, "N/A", "N/A", "N/A", null, "N/A", null, "N/A", "Joint Institute for Nuclear Research"],
        [103, 'Lr', 'Lawrencium', '266', 3, 7, 'actinoid', 1900, null, 7, 1.3, -30.04, 470, "N/A", "N/A", "N/A", null, "N/A", null, "N/A", "Lawrence Berkeley National Laboratory"],
        [104, 'Rf', 'Rutherfordium', '267', 4, 7, 'transition', 2400, 5800, 7, null, null, 580, "N/A", "N/A", "N/A", 23.2, "N/A", null, "N/A", "Joint Institute for Nuclear Research"],
        [105, 'Db', 'Dubnium', '268', 5, 7, 'transition', null, null, 7, null, null, null, "N/A", "N/A", "N/A", 29.3, "N/A", null, "N/A", "Joint Institute for Nuclear Research"],
        [106, 'Sg', 'Seaborgium', '269', 6, 7, 'transition', null, null, 7, null, null, null, "N/A", "N/A", "N/A", 35, "N/A", null, "N/A", "Lawrence Berkeley National Laboratory"],
        [107, 'Bh', 'Bohrium', '270', 7, 7, 'transition', null, null, 7, null, null, null, "N/A", "N/A", "N/A", 37.1, "N/A", null, "N/A", "Gesellschaft für Schwerionenforschung"],
        [108, 'Hs', 'Hassium', '269', 8, 7, 'transition', 126, null, 7, null, null, null, "N/A", "N/A", "N/A", 40.7, "N/A", null, "N/A", "Gesellschaft für Schwerionenforschung"],
        [109, 'Mt', 'Meitnerium', '278', 9, 7, 'unknown', null, null, 7, null, null, null, "N/A", "N/A", "N/A", 37.4, "N/A", null, "N/A", "Gesellschaft für Schwerionenforschung"],
        [110, 'Ds', 'Darmstadtium', '281', 10, 7, 'unknown', null, null, 7, null, null, null, "N/A", "N/A", "N/A", 34.8, "N/A", null, "N/A", "Gesellschaft für Schwerionenforschung"],
        [111, 'Rg', 'Roentgenium', '282', 11, 7, 'unknown', null, null, 7, null, 151, null, "N/A", "N/A", "N/A", 28.7, "N/A", null, "N/A", "Gesellschaft für Schwerionenforschung"],
        [112, 'Cn', 'Copernicium', '285', 12, 7, 'transition', null, 3570, 7, null, null, null, "N/A", "N/A", "N/A", 14.0, "N/A", null, "N/A", "Gesellschaft für Schwerionenforschung"],
        [113, 'Nh', 'Nihonium', '286', 13, 7, 'unknown', 700, 1430, 7, null, 66.6, null, "N/A", "N/A", "N/A", 16, "N/A", null, "N/A", "RIKEN"],
        [114, 'Fl', 'Flerovium', '289', 14, 7, 'post-transition', 340, 420, 7, null, null, null, "N/A", "N/A", "N/A", 14, "N/A", null, "N/A", "Joint Institute for Nuclear Research"],
        [115, 'Mc', 'Moscovium', '289', 15, 7, 'unknown', 670, 1400, 7, null, 35.3, null, "N/A", "N/A", "N/A", 13.5, "N/A", null, "N/A", "Joint Institute for Nuclear Research"],
        [116, 'Lv', 'Livermorium', '293', 16, 7, 'unknown', 709, 1085, 7, null, 74.9, null, "N/A", "N/A", "N/A", 12.9, "N/A", null, "N/A", "Joint Institute for Nuclear Research"],
        [117, 'Ts', 'Tennessine', '294', 17, 7, 'unknown', 723, 883, 7, null, 165.9, null, "N/A", "N/A", "N/A", 7.17, "N/A", null, "N/A", "Joint Institute for Nuclear Research"],
        [118, 'Og', 'Oganesson', '294', 18, 7, 'unknown', null, 350, 7, null, 5.40318, null, "N/A", "N/A", "N/A", 4.95, "N/A", null, "N/A", "Joint Institute for Nuclear Research"]
    ];

    const grid = document.getElementById('pt-grid-area');
    
    // Create numerical Group mappings across the top
    for(let g = 1; g <= 18; g++) {
        const gl = document.createElement('div');
        gl.className = 'grid-group-label';
        gl.style.gridColumn = `${g+1}`; // +1 offset for periods
        gl.textContent = g;
        grid.appendChild(gl);
    }

    // Create Period mappings down left
    for(let p = 1; p <= 7; p++) {
        const pl = document.createElement('div');
        pl.className = 'grid-period-label';
        pl.style.gridRow = `${p+1}`;
        pl.textContent = p;
        grid.appendChild(pl);
    }

    // Create the visual key guide next to Hydrogen (Atomic, Symbol, Name, Weight)
    const guideBlock = document.createElement('div');
    guideBlock.className = 'grid-guide-block';
    guideBlock.style.gridRow = '2'; 
    guideBlock.style.gridColumn = '3 / span 2';
    guideBlock.innerHTML = `
        <div style="font-size: 0.55em; font-weight:bold;">Atomic</div>
        <div style="font-size: 1.2em; font-family:'Outfit'; font-weight:800; color:white;">Symbol</div>
        <div style="font-size: 0.55em;">Name</div>
        <div style="font-size: 0.55em;">Weight</div>
    `;
    grid.appendChild(guideBlock);

    // DOM construction variables
    const cardsMap = new Map();

    elementData.forEach(data => {
        let [num, sym, name, mass, group, period, category, melt, boil] = data;
        
        const card = document.createElement('div');
        card.className = `ele-card cat-${category}`;
        
        // Complex positional logic (Lanthanoids and Actinoids float below main grid)
        let row = period + 1;
        let col = group + 1;
        
        if (num >= 57 && num <= 71) {
            row = 10; // Lanthanoids sequence at bottom
            col = (num - 57) + 5; // Start at col 5 to leave space
        } else if (num >= 89 && num <= 103) {
            row = 11; // Actinoids below Lanthanoids
            col = (num - 89) + 5;
        }

        // Add special markers 57-71 to main grid
        if (num === 57) {
            const marker = document.createElement('div');
            marker.className = 'ele-card';
            marker.style.gridRow = '7'; marker.style.gridColumn = '4';
            marker.innerHTML = '<div style="text-align:center; font-size:0.7em; opacity:0.6; padding-top:10px;">57-71</div>';
            grid.appendChild(marker);
        }
        if (num === 89) {
            const marker2 = document.createElement('div');
            marker2.className = 'ele-card';
            marker2.style.gridRow = '8'; marker2.style.gridColumn = '4';
            marker2.innerHTML = '<div style="text-align:center; font-size:0.7em; opacity:0.6; padding-top:10px;">89-103</div>';
            grid.appendChild(marker2);
        }

        card.style.gridRow = `${row}`;
        card.style.gridColumn = `${col}`;
        
        card.innerHTML = `
            <div class="ele-num">${num}</div>
            <div class="ele-sym">${sym}</div>
            <div class="ele-name">${name}</div>
            <div class="ele-mass">${mass}</div>
        `;

        // Store data for interactivity
        card.dataset.num = num;
        card.dataset.cat = category;
        card.dataset.melt = melt;
        card.dataset.boil = boil;
        
        // Bind Interaction Logic natively
        card.addEventListener('mouseenter', () => updateSidebar(data, card));
        card.addEventListener('mouseleave', () => {
            if (window.lockedElementData && window.lockedCardNode) {
                updateSidebar(window.lockedElementData, window.lockedCardNode);
            }
        });
        card.addEventListener('click', () => {
            window.lockedElementData = data;
            window.lockedCardNode = card;
            updateSidebar(data, card);
            
            document.querySelectorAll('.ele-card').forEach(c => c.classList.remove('locked'));
            card.classList.add('locked');
        });

        cardsMap.set(num, card);
        grid.appendChild(card);
    });

    // Reference to sidebar elements
    const ui = {
        clAtomic: document.getElementById('cl-atomic'),
        clSymbol: document.getElementById('cl-symbol'),
        clName: document.getElementById('cl-name'),
        clMass: document.getElementById('cl-mass'),
        clBox: document.getElementById('pt-closeup'),
        pSeries: document.getElementById('p-series'),
        pPhase: document.getElementById('p-phase'),
        pWeight: document.getElementById('p-weight'),
        tempSlider: document.getElementById('temp-slider'),
        tempInput: document.getElementById('temp-input'),
        readoutC: document.getElementById('readout-c'),
        readoutF: document.getElementById('readout-f'),
        readoutK: document.getElementById('readout-k'),
        pWiki: document.getElementById('p-wiki'),
        pEnergy: document.getElementById('p-energy'),
        pElectro: document.getElementById('p-electro'),
        pMelt: document.getElementById('p-melt'),
        pBoil: document.getElementById('p-boil'),
        pAffinity: document.getElementById('p-affinity'),
        pIonization: document.getElementById('p-ionization'),
        pDensity: document.getElementById('p-density'),
        pCond: document.getElementById('p-cond'),
        pHeat: document.getElementById('p-heat'),
        pAbundance: document.getElementById('p-abundance'),
        pDiscovered: document.getElementById('p-discovered')
    };

    function updateSidebar(data, cardNode) {
        document.querySelectorAll('.ele-card').forEach(c => c.classList.remove('active'));
        cardNode.classList.add('active');

        let [num, sym, name, mass, group, period, category, melt, boil, energy, electro, affinity, ionization, radius, hardness, modulus, density, cond, heat, abundance, discovered] = data;

        ui.clAtomic.textContent = num;
        ui.clSymbol.textContent = sym;
        ui.clName.textContent = name;
        ui.clMass.textContent = mass;
        
        ui.clBox.className = `pt-closeup cat-${category}`;
        
        ui.pSeries.textContent = category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        ui.pWeight.textContent = `${mass} u`;

        if (ui.pWiki) {
            ui.pWiki.href = `https://en.wikipedia.org/wiki/${name}`;
            ui.pEnergy.textContent = energy || 'N/A';
            ui.pElectro.textContent = electro || 'N/A';
            ui.pMelt.textContent = melt ? `${(melt-273.15).toFixed(2)} °C` : 'N/A';
            ui.pBoil.textContent = boil ? `${(boil-273.15).toFixed(2)} °C` : 'N/A';
            ui.pAffinity.textContent = affinity ? `${affinity} kJ/mol` : 'N/A';
            ui.pIonization.textContent = ionization ? `${ionization} kJ/mol` : 'N/A';
            ui.pDensity.textContent = density ? `${density} kg/m³` : 'N/A';
            ui.pCond.textContent = cond ? `${cond} W/mK` : 'N/A';
            ui.pHeat.textContent = heat ? `${heat} J/kgK` : 'N/A';
            ui.pAbundance.textContent = abundance ? `${abundance} %` : 'N/A';
            ui.pDiscovered.textContent = discovered || 'N/A';
        }

        // Update single phase based on current slider dynamically
        recalcSinglePhase(data);
    }

    // Interactive Slider logic calculating state based on Thermodynamics
    function getPhase(tempK, meltK, boilK) {
        if (!meltK || meltK === 0) return {txt: 'Unknown', cls: 'phase-unknown'};
        if (tempK < meltK) return {txt: 'Solid', cls: 'phase-solid'};
        if (tempK >= meltK && tempK < boilK) return {txt: 'Liquid', cls: 'phase-liquid'};
        return {txt: 'Gas', cls: 'phase-gas'};
    }

    function recalcSinglePhase(data) {
        let tempC = parseFloat(ui.tempSlider.value);
        let tempK = tempC + 273.15;
        let phase = getPhase(tempK, data[7], data[8]);
        ui.pPhase.textContent = phase.txt;
        ui.pPhase.className = `p-val ${phase.cls}`;
    }

    function syncTemperatures(tempC) {
        let tempK = tempC + 273.15;
        let tempF = (tempC * 9/5) + 32;
        
        ui.readoutC.textContent = tempC.toFixed(1) + ' °C';
        ui.readoutK.textContent = tempK.toFixed(1) + ' K';
        ui.readoutF.textContent = tempF.toFixed(1) + ' °F';

        // Apply visual color changes to elements indicating state
        cardsMap.forEach((card, num) => {
            let melt = parseFloat(card.dataset.melt);
            let boil = parseFloat(card.dataset.boil);
            
            card.style.opacity = '1';
            let phaseCls = getPhase(tempK, melt, boil).cls;
            
            // Highlight text color logically
            let symNode = card.querySelector('.ele-sym');
            if(phaseCls === 'phase-solid') symNode.style.color = '#ffffff';
            if(phaseCls === 'phase-liquid') symNode.style.color = '#60a5fa'; // Blue for liquid
            if(phaseCls === 'phase-gas') symNode.style.color = '#f87171'; // Red for gas
            if(phaseCls === 'phase-unknown') symNode.style.color = 'rgba(255,255,255,0.4)';
        });
    }

    ui.tempSlider.addEventListener('input', (e) => {
        let val = parseFloat(e.target.value);
        ui.tempInput.value = val.toFixed(1);
        syncTemperatures(val);
    });

    ui.tempInput.addEventListener('input', (e) => {
        let val = parseFloat(e.target.value);
        if(!isNaN(val)) {
            ui.tempSlider.value = val;
            syncTemperatures(val);
        }
    });

    // Initialize first element (Hydrogen) as mathematically locked
    if(cardsMap.get(1)) {
        window.lockedElementData = elementData[0];
        window.lockedCardNode = cardsMap.get(1);
        cardsMap.get(1).classList.add('locked');
        updateSidebar(elementData[0], cardsMap.get(1));
    }
    syncTemperatures(0); // init at 0 C
    
    // Category Legend Filtering
    const seriesTags = document.querySelectorAll('.series-tag');
    seriesTags.forEach(tag => {
        const catClass = Array.from(tag.classList).find(c => c.startsWith('cat-'));
        
        tag.addEventListener('mouseenter', () => {
            if(!catClass) return;
            cardsMap.forEach(card => {
                if (card.classList.contains(catClass)) {
                    card.style.opacity = '1';
                    card.style.filter = 'brightness(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.3))';
                    card.style.zIndex = '10';
                } else {
                    card.style.opacity = '0.15';
                    card.style.filter = 'grayscale(1)';
                    card.style.zIndex = '1';
                }
            });
        });

        tag.addEventListener('mouseleave', () => {
            cardsMap.forEach(card => {
                card.style.filter = '';
                card.style.zIndex = '1';
            });
            syncTemperatures(parseFloat(ui.tempSlider.value));
        });
    });
});
