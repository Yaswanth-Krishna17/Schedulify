const coursesData = [
  // Project Courses
  { code: "ECS1002", title: "Engineering Clinics - Raspberry Pi using Python", type: "PJT", slots: ["NILL"] },
  { code: "ECS2002", title: "Engineering Clinics - System Design", type: "PJT", slots: ["NILL"] },
  { code: "ECS3001", title: "Engineering Clinics - II", type: "PJT", slots: ["NILL"] },
  { code: "MIC5002", title: "Senior Design Project", type: "PJT", slots: ["NILL"] },
  { code: "BIC4002", title: "Internship", type: "PJT", slots: ["NILL"] },
  // CHY - Chemistry Courses
  { code: "CHY1005", title: "Industrial Chemistry for Engineers", type: "TH", slots: ["B1+TB1"] },
  { code: "CHY1006", title: "Corrosion Science and Engineering", type: "TH", slots: ["C1+TC1"] },
  { code: "CHY1007", title: "Energy Materials and Their Applications", type: "TH", slots: ["A1+TA1"] },
  { code: "CHY2001", title: "Chemical and Biosensors", type: "TH", slots: ["C2+TC2"] },
  { code: "CHY2002", title: "Organic Electronics", type: "TH", slots: ["A2+TA2"] },

  // CSE - Computer Science Courses
  { code: "CSE0109", title: "Computer Applications for Social Sciences", type: "ETH", slots: ["TG2"] },
  { code: "CSE0503", title: "Concepts of Data Mining", type: "ETH", slots: ["B2+TB2"] },
  { code: "CSE1005", title: "Software Engineering", type: "ETH", slots: ["B1+TB1", "B2+TB2", "C1+TC1", "C2+TC2", "C1+TCC1", "C2+TCC2"] },
  { code: "CSE1005", title: "Software Engineering", type: "ELA", slots: ["L10+L11", "L14+L15", "L2+L3", "L20+L21", "L22+L23", "L26+L27", "L28+L29", "L31+L32", "L33+L34", "L35+L36", "L37+L38", "L39+L40", "L4+L5", "L41+L42", "L43+L44", "L45+L46", "L47+L48", "L49+L50", "L51+L52", "L53+L54", "L55+L56", "L8+L9"] },
  { code: "CSE1008", title: "Theory of Computation", type: "TH", slots: ["A1+TA1+TAA1", "A2+TA2+TAA2", "B1+TB1+TBB1", "B2+TB2+TBB2"] },
  { code: "CSE2003", title: "Requirements Engineering Management", type: "ETH", slots: ["A1+TA1", "A2+TA2"] },
  { code: "CSE2004", title: "Software Design and Architecture", type: "ETH", slots: ["F1+TF1", "F2+TF2"] },
  { code: "CSE2007", title: "Database Management Systems", type: "ETH", slots: ["C1+TC1", "C2+TC2", "D1+TD1", "D2+TD2", "C1+TCC1", "C2+TCC2", "D1+TDD1", "D2+TDD2"] },
  { code: "CSE2007", title: "Database Management Systems", type: "ELA", slots: ["L10+L11", "L14+L15", "L2+L3", "L20+L21", "L22+L23", "L26+L27", "L28+L29", "L31+L32", "L33+L34", "L35+L36", "L37+L38", "L39+L40", "L4+L5", "L41+L42", "L43+L44", "L45+L46", "L47+L48", "L49+L50", "L51+L52", "L53+L54", "L55+L56", "L8+L9"] },
  { code: "CSE2009", title: "Soft Computing", type: "ETH", slots: ["A1+TA1", "A2+TA2", "E1+TEE1", "E2+TE2", "E1+TE1"] },
  { code: "CSE2011", title: "Cyber Security and Digital Forensics", type: "ETH", slots: ["F1+TF1", "F2+TF2"] },
  { code: "CSE2011", title: "Cyber Security and Digital Forensics", type: "ELA", slots: ["L14+L15", "L33+L34", "L4+L5", "L43+L44", "L47+L48"] },
  { code: "CSE2013", title: "Information Theory and Coding", type: "TH", slots: ["D2+TD2+TDD2", "D1+TD1+TDD1", "A1+TA1+TAA1", "A2+TA2+TAA2", "D2+SD2+TD2", "D1+SD1+TD1"] },
  { code: "CSE2016", title: "Software Engineering", type: "ETH", slots: ["A1+TA1", "A2+TA2"] },
  { code: "CSE2016", title: "Software Engineering", type: "ELA", slots: ["L10+L11", "L39+L40", "L4+L5", "L49+L50"] },
  { code: "CSE2017", title: "Operating Systems", type: "ETH", slots: ["B1+TB1", "B2+TB2"] },
  { code: "CSE2017", title: "Operating Systems", type: "ELA", slots: ["L14+L15", "L31+L32", "L8+L9", "L41+L42"] },
  { code: "CSE2021", title: "Cryptology", type: "TH", slots: ["A1+TA1", "A2+TA2"] },
  { code: "CSE2024", title: "Blockchain Architecture Design", type: "ETH", slots: ["F2+TF2"] },
  { code: "CSE2024", title: "Blockchain Architecture Design", type: "ELA", slots: ["L10+L11"] },
  { code: "CSE3002", title: "Artificial Intelligence", type: "TH", slots: ["F1+TF1", "F2+TF2"] },
  { code: "CSE3006", title: "Data Visualization", type: "ETH", slots: ["E1+TE1", "E2+TE2"] },
  { code: "CSE3006", title: "Data Visualization", type: "ELA", slots: ["L2+L3", "L37+L38", "L45+L46"] },
  { code: "CSE3008", title: "Introduction to Machine Learning", type: "ETH", slots: ["E1+TEE1", "E2+TE2", "F1+TF1", "F2+TF2", "E1+TE1", "F1+TFF1", "F2+TFF2"] },
  { code: "CSE3008", title: "Introduction to Machine Learning", type: "ELA", slots: ["L10+L11", "L14+L15", "L2+L3", "L20+L21", "L22+L23", "L26+L27", "L28+L29", "L31+L32", "L33+L34", "L35+L36", "L37+L38", "L39+L40", "L4+L5", "L41+L42", "L43+L44", "L45+L46", "L47+L48", "L49+L50", "L51+L52", "L53+L54", "L55+L56", "L8+L9"] },
  { code: "CSE3009", title: "NoSQL Databases", type: "ETH", slots: ["F1+TF1", "F2+TF2"] },
  { code: "CSE3009", title: "NoSQL Databases", type: "ELA", slots: ["L10+L11", "L39+L40", "L55+L56"] },
  { code: "CSE3012", title: "Network Security", type: "ETH", slots: ["F1+TF1", "F2+TF2"] },
  { code: "CSE3012", title: "Network Security", type: "ELA", slots: ["L26+L27", "L43+L44", "L49+L50"] },
  { code: "CSE3013", title: "Secure Group Communications", type: "ETH", slots: ["C2+TC2", "C1+TCC1", "C1+TC1"] },
  { code: "CSE3015", title: "Natural Language Processing", type: "ETH", slots: ["E1+TE1", "F1+TFF1", "E2+TE2", "F2+TFF2", "F1+TF1", "F2+TF2"] },
  { code: "CSE3015", title: "Natural Language Processing", type: "ELA", slots: ["L14+L15", "L2+L3", "L20+L21", "L22+L23", "L26+L27", "L28+L29", "L31+L32", "L33+L34", "L35+L36", "L37+L38", "L4+L5", "L41+L42", "L43+L44", "L45+L46", "L47+L48", "L49+L50", "L51+L52", "L53+L54", "L8+L9"] },
  { code: "CSE3019", title: "Software Quality and Reliability", type: "ETH", slots: ["D2+TD2", "D1+TD1", "D1+TDD1"] },
  { code: "CSE3020", title: "Product Definition and Validation", type: "TH", slots: ["F2+TF2", "F1+TF1"] },
  { code: "CSE3021", title: "Design Thinking", type: "TH", slots: ["E1+TE1", "E2+TE2", "F1+TFF1"] },
  { code: "CSE3023", title: "Design and Analysis of Algorithms", type: "ETH", slots: ["C1+TC1", "C2+TC2", "C1+TCC1", "C2+TCC2"] },
  { code: "CSE3023", title: "Design and Analysis of Algorithms", type: "ELA", slots: ["L22+L23", "L28+L29", "L37+L38", "L55+L56"] },
  { code: "CSE3025", title: "Computer Networks", type: "ETH", slots: ["C1+TC1", "C2+TC2", "C1+TCC1", "C2+TCC2"] },
  { code: "CSE3025", title: "Computer Networks", type: "ELA", slots: ["L10+L11", "L22+L23", "L51+L52", "L55+L56"] },
  { code: "CSE3026", title: "Artificial Intelligence", type: "ETH", slots: ["D1+TD1", "D2+TD2", "D1+TDD1", "D2+TDD2"] },
  { code: "CSE3026", title: "Artificial Intelligence", type: "ELA", slots: ["L2+L3", "L20+L21", "L43+L44", "L53+L54"] },
  { code: "CSE3036", title: "Cryptocurrency Technologies and Bitcoin", type: "ETH", slots: ["F1+TF1", "F2+TF2"] },
  { code: "CSE4004", title: "Web Technologies", type: "ETH", slots: ["C1+TC1", "C2+TC2", "D1+TD1", "D2+TD2", "C1+TCC1", "C2+TCC2", "D1+TDD1", "D2+TDD2"] },
  { code: "CSE4004", title: "Web Technologies", type: "ELA", slots: ["L10+L11", "L14+L15", "L2+L3", "L20+L21", "L22+L23", "L26+L27", "L28+L29", "L31+L32", "L33+L34", "L35+L36", "L37+L38", "L39+L40", "L4+L5", "L41+L42", "L43+L44", "L45+L46", "L47+L48", "L49+L50", "L51+L52", "L53+L54", "L55+L56", "L8+L9"] },
  { code: "CSE4005", title: "Data Warehousing and Data Mining", type: "ETH", slots: ["E1+TE1", "E2+TE2", "F1+TF1", "F2+TF2"] },
  { code: "CSE4006", title: "Deep Learning", type: "ETH", slots: ["F1+TF1", "F2+TF2", "F1+TFF1", "F2+TFF2"] },
  { code: "CSE4007", title: "Digital Image Processing", type: "ETH", slots: ["B1+TB1", "B2+TB2", "E1+TE1", "E2+TE2"] },
  { code: "CSE4007", title: "Digital Image Processing", type: "ELA", slots: ["L14+L15", "L16+L17", "L28+L29", "L31+L32", "L37+L38", "L4+L5", "L45+L46", "L47+L48", "L51+L52", "L8+L9"] },
  { code: "CSE4009", title: "Wireless and Mobile Computing", type: "ETH", slots: ["E1+TE1", "E2+TE2"] },
  { code: "CSE4011", title: "Internet of Things", type: "ETH", slots: ["F1+TF1", "F2+TF2", "E1+TE1", "E2+TE2"] },
  { code: "CSE4012", title: "UI UX User Experience Design", type: "ETH", slots: ["G1+TG1", "G2+TG2"] },
  { code: "CSE4012", title: "UI UX User Experience Design", type: "ELA", slots: ["L22+L23", "L26+L27", "L43+L44", "L47+L48", "L51+L52", "L8+L9"] },
  { code: "CSE4015", title: "Network and System Administration", type: "ETH", slots: ["E1+TE1", "E2+TE2"] },
  { code: "CSE4015", title: "Network and System Administration", type: "ELA", slots: ["L10+L11", "L33+L34", "L39+L40"] },
  { code: "CSE4016", title: "Database Administration", type: "ETH", slots: ["B1+TB1", "B2+TB2"] },
  { code: "CSE4016", title: "Database Administration", type: "ELA", slots: ["L28+L29", "L31+L32", "L37+L38"] },
  { code: "CSE4019", title: "Applications of Artificial Intelligence", type: "ETH", slots: ["A1+TA1", "A2+TA2", "E1+TE1", "E2+TE2"] },
  { code: "CSE4032", title: "Information Security", type: "ETH", slots: ["F1+TF1", "F2+TF2", "F1+TFF1", "F2+TFF2"] },
  { code: "CSE4032", title: "Information Security", type: "ELA", slots: ["L14+L15", "L26+L27", "L35+L36", "L45+L46"] },
  { code: "CSE4035", title: "Enterprise Systems", type: "TH", slots: ["B1+TB1", "B2+TB2"] },
  { code: "CSE4037", title: "Reinforcement Learning", type: "ETH", slots: ["D1+TD1", "D2+TD2", "F1+TF1", "F2+TF2", "F1+TFF1"] },
  { code: "CSE4040", title: "Mining Massive Data Sets", type: "ETH", slots: ["G1+TG1", "G2+TG2"] },
  { code: "CSE4040", title: "Mining Massive Data Sets", type: "ELA", slots: ["L31+L32", "L39+L40", "L8+L9"] },
  { code: "CSE4043", title: "Network Intrusion Detection and Prevention System", type: "ETH", slots: ["D1+TD1", "D2+TD2"] },
  { code: "CSE4043", title: "Network Intrusion Detection and Prevention System", type: "ELA", slots: ["L10+L11", "L43+L44", "L51+L52"] },

  // ECE - Electronics Courses
  { code: "ECE0103", title: "Digital Design", type: "ETH", slots: ["G1"] },
  { code: "ECE0103", title: "Digital Design", type: "ELA", slots: ["L16+L17"] },
  { code: "ECE1010", title: "Probability and Random Processes", type: "TH", slots: ["A1+TA1+TAA1", "A2+TA2+TAA2", "B1+TB1+TBB1"] },
  { code: "ECE1011", title: "Hybrid and Electric Vehicles", type: "TH", slots: ["A2+TA2+TAA2"] },
  { code: "ECE2001", title: "Analog Devices and Circuits", type: "ETH", slots: ["B1+TB1", "B2+TB2", "C1+TCC1"] },
  { code: "ECE2001", title: "Analog Devices and Circuits", type: "ELA", slots: ["L22+L23", "L26+L27", "L35+L36", "L37+L38", "L45+L46", "L55+L56"] },
  { code: "ECE2002", title: "Computer Organization and Architecture", type: "TH", slots: ["A1+TA1+TAA1", "A2+TA2+TAA2", "B1+TB1+TBB1", "B2+TB2+TBB2"] },
  { code: "ECE2009", title: "Data Acquisition and Transmission Systems", type: "ETH", slots: ["D1+TD1"] },
  { code: "ECE2009", title: "Data Acquisition and Transmission Systems", type: "ELA", slots: ["L33+L34"] },
  { code: "ECE2010", title: "Digital System Design for ASICs and FPGAs", type: "ETH", slots: ["D1+TD1"] },
  { code: "ECE2010", title: "Digital System Design for ASICs and FPGAs", type: "ELA", slots: ["L31+L32"] },
  { code: "ECE2014", title: "Microprocessors and Microcontrollers", type: "ETH", slots: ["C1+TC1", "C2+TC2", "A1+TA1"] },
  { code: "ECE2014", title: "Microprocessors and Microcontrollers", type: "ELA", slots: ["L10+L11", "L2+L3", "L39+L40", "L41+L42", "L45+L46", "L51+L52"] },
  { code: "ECE2015", title: "Computer Architecture", type: "TH", slots: ["A1+TA1+TAA1", "A2+TA2+TAA2"] },
  { code: "ECE3001", title: "Linear Integrated Circuits and Applications", type: "ETH", slots: ["B1+TB1", "B2+TB2", "A1+TA1"] },
  { code: "ECE3001", title: "Linear Integrated Circuits and Applications", type: "ELA", slots: ["L14+L15", "L28+L29", "L31+L32", "L43+L44", "L51+L52", "L53+L54"] },
  { code: "ECE3002", title: "Antennas and Wave Propagation", type: "TH", slots: ["D2+TD2"] },
  { code: "ECE3004", title: "Embedded Hardware Software System Design", type: "ETH", slots: ["B1+TB1"] },
  { code: "ECE3004", title: "Embedded Hardware Software System Design", type: "ELA", slots: ["L39+L40"] },
  { code: "ECE3005", title: "CMOS VLSI Design", type: "ETH", slots: ["A1+TA1"] },
  { code: "ECE3005", title: "CMOS VLSI Design", type: "ELA", slots: ["L49+L50"] },
  { code: "ECE3006", title: "HDL Verification and Methodology", type: "ETH", slots: ["F1+TF1", "F2+TF2"] },
  { code: "ECE3006", title: "HDL Verification and Methodology", type: "ELA", slots: ["L20+L21", "L51+L52", "L55+L56"] },
  { code: "ECE3008", title: "Neural Networks and Fuzzy Systems", type: "TH", slots: ["F2+TBB1+TF2"] },
  { code: "ECE3010", title: "Speech processing", type: "ETH", slots: ["C2+TC2"] },
  { code: "ECE3010", title: "Speech processing", type: "ELA", slots: ["L22+L23"] },
  { code: "ECE3020", title: "Introduction to IoT", type: "TH", slots: ["E1+TE1", "E2+TE2"] },
  { code: "ECE3023", title: "Scripting Languages", type: "ETH", slots: ["F1+TF1"] },
  { code: "ECE3023", title: "Scripting Languages", type: "ELA", slots: ["L31+L32"] },
  { code: "ECE4004", title: "Automotive Electrical and Electronic Systems", type: "TH", slots: ["D2+TD2+TDD2"] },
  { code: "ECE4006", title: "Analog IC Design", type: "ETH", slots: ["D1+TD1"] },
  { code: "ECE4006", title: "Analog IC Design", type: "ELA", slots: ["L33+L34"] },
  { code: "ECE4008", title: "Low Power VLSI Design", type: "TH", slots: ["E1+TE1"] },
  { code: "ECE4011", title: "Robotics and Automation", type: "TH", slots: ["E1+SE1+TE1"] },
  { code: "ECE4017", title: "IoT Domain Analyst", type: "ETH", slots: ["C1"] },
  { code: "ECE4017", title: "IoT Domain Analyst", type: "ELA", slots: ["L49+L50"] },
  { code: "ECE4018", title: "Image Analysis and Computer Vision", type: "ETH", slots: ["E2+TE2"] },
  { code: "ECE4018", title: "Image Analysis and Computer Vision", type: "ELA", slots: ["L2+L3"] },

  // ENG - English Courses
  { code: "ENG2009", title: "Business Communication and Value Science - IV", type: "TH", slots: ["G1", "G2"] },

  // FRL - Foreign Language Courses
  { code: "FRL1001", title: "Basic French", type: "TH", slots: ["C1", "C2", "D1", "D2", "F2", "G1", "G2"] },
  { code: "FRL1004", title: "Basic Spanish", type: "TH", slots: ["A1", "A2", "D2", "F1", "F2"] },
  { code: "FRL1005", title: "German for Beginners", type: "TH", slots: ["E2", "F1", "F2", "G1", "G2"] },
  { code: "FRL2004", title: "Korean for Beginners", type: "TH", slots: ["A1", "C2", "D1", "D2"] },
  { code: "FRL2005", title: "German for Advanced Learners", type: "TH", slots: ["E1+TE1"] },

  // HUM - Humanities Courses
  { code: "HUM1110", title: "Contemporary Sociological Issues", type: "TH", slots: ["F2+TBB1+TF2"] },
  { code: "HUM1112", title: "Indirect Tax", type: "ETH", slots: ["G1+TG1"] },
  { code: "HUM2014", title: "Introduction of French Theatre from Classics to Contemporary", type: "TH", slots: ["E1"] },
  { code: "HUM2108", title: "History of Modern World", type: "TH", slots: ["E2+SE2+TE2"] },
  { code: "HUM2121", title: "Development Economics - I", type: "TH", slots: ["C1+SC1+TC1"] },
  { code: "HUM2122", title: "Econometrics - I", type: "ETH", slots: ["D1+TD1"] },
  { code: "HUM3102", title: "Strategic Business Leader", type: "TH", slots: ["D1+SD1+TD1"] },
  { code: "HUM3105", title: "Public Finance", type: "TH", slots: ["F2+TBB1+TF2"] },
  { code: "HUM3107", title: "Indian Administration", type: "TH", slots: ["A2+TA2+TAA2"] },
  { code: "HUM3113", title: "India in the World Affairs", type: "TH", slots: ["C2+SC2+TC2"] },

  // INL - Indian Language Courses
  { code: "INL1002", title: "Introduction to Hindi Language and Literature", type: "TH", slots: ["F2"] },

  // LIB - Liberal Arts Courses
  { code: "LIB1009", title: "Essence of Indian Traditional Knowledge", type: "TH", slots: ["TG1", "TG2"] },
  { code: "LIB1011", title: "Introduction to Social Inequalities", type: "TH", slots: ["C2+TC2", "F1+TF1"] },
  { code: "LIB1014", title: "Pursuit of Happiness", type: "TH", slots: ["E2+TE2"] },
  { code: "LIB1019", title: "Dynamics of Gender Psychology", type: "TH", slots: ["A1+TA1", "A2+TA2"] },
  { code: "LIB1020", title: "Basic Psychology for Engineers", type: "TH", slots: ["A2+TA2"] },
  { code: "LIB1103", title: "Introduction to Psychology", type: "TH", slots: ["B1+TB1", "B2+TB2"] },
  { code: "LIB1120", title: "Introduction to GIS", type: "ETH", slots: ["TG1"] },
  { code: "LIB2003", title: "Geography of Asia and Sub-Saharan Africa", type: "TH", slots: ["D2+TD2", "A1+TA1"] },
  { code: "LIB2006", title: "Critical Thinking and Formal Logic", type: "TH", slots: ["E1+TE1", "E2+TE2"] },
  { code: "LIB2018", title: "Indian National Movement", type: "TH", slots: ["F1+TF1+TFF1"] },
  { code: "LIB2019", title: "Water and Society", type: "TH", slots: ["D1+TD1", "D2+TD2"] },
  { code: "LIB2023", title: "Constitution of India: Formation and Implementation", type: "TH", slots: ["B2+TB2+TBB2"] },
  { code: "LIB2110", title: "Political Theory & Ideologies", type: "TH", slots: ["E1+SE1+TE1"] },
  { code: "LIB2121", title: "Introduction to Study of Archaeology", type: "TH", slots: ["B1+TB1+TBB1"] },
  { code: "LIB2127", title: "Anthropology and Human Evolution", type: "TH", slots: ["B1+TB1"] },
  { code: "LIB2129", title: "Mathematics For Economics", type: "TH", slots: ["A1+TA1+TAA1"] },
  { code: "LIB3001", title: "Applications of Moral Philosophy", type: "TH", slots: ["E2+TE2", "D1+TD1"] },
  { code: "LIB3200", title: "Indian Political Thought", type: "TH", slots: ["D2+SD2+TD2"] },

  // MAT - Mathematics Courses
  { code: "MAT1011", title: "Applied Statistics", type: "ETH", slots: ["D1+TD1", "D2+TD2", "E1+TE1", "E2+TE2", "D1+TDD1", "D2+TDD2", "E1+TEE1"] },
  { code: "MAT1011", title: "Applied Statistics", type: "ELA", slots: ["L10+L11", "L14+L15", "L2+L3", "L20+L21", "L22+L23", "L26+L27", "L28+L29", "L31+L32", "L33+L34", "L35+L36", "L37+L38", "L39+L40", "L4+L5", "L41+L42", "L43+L44", "L45+L46", "L47+L48", "L49+L50", "L51+L52", "L53+L54", "L55+L56", "L8+L9"] },
  { code: "MAT1110", title: "Introduction to Regression Analysis", type: "ETH", slots: ["C2+TC2"] },
  { code: "MAT1110", title: "Introduction to Regression Analysis", type: "ELA", slots: ["L8+L9"] },
  { code: "MAT2001", title: "Numerical Methods for Engineers", type: "ETH", slots: ["F1"] },
  { code: "MAT2001", title: "Numerical Methods for Engineers", type: "ELA", slots: ["L39+L40"] },
  { code: "MAT2003", title: "Optimization Techniques", type: "ETH", slots: ["B2+TB2", "C1+TC1"] },
  { code: "MAT2003", title: "Optimization Techniques", type: "ELA", slots: ["L20+L21", "L37+L38"] },
  { code: "MAT2005", title: "Linear Algebra", type: "TH", slots: ["C2+TC2", "E1+TE1"] },
  { code: "MAT2101", title: "Stochastic Processes", type: "TH", slots: ["A2+TA2+TAA2"] },
  { code: "MAT3101", title: "Biostatistics", type: "ETH", slots: ["D2+TD2"] },
  { code: "MAT3101", title: "Biostatistics", type: "ELA", slots: ["L14+L15"] },
  { code: "MAT3102", title: "Fundamentals of Machine learning", type: "ETH", slots: ["E2+TE2"] },
  { code: "MAT3102", title: "Fundamentals of Machine learning", type: "ELA", slots: ["L26+L27"] },

  // MEC - Mechanical Engineering Courses
  { code: "MEC2005", title: "Fundamentals of Manufacturing Processes", type: "ETH", slots: ["A1+TA1", "A2+TA2"] },
  { code: "MEC2005", title: "Fundamentals of Manufacturing Processes", type: "ELA", slots: ["L10+L11", "L37+L38", "L53+L54"] },
  { code: "MEC2007", title: "Introduction to Mechanical Engineering Design Process", type: "TH", slots: ["E1+TE1"] },
  { code: "MEC2010", title: "Machine Drawing", type: "LO", slots: ["L43+L44+L55+L56", "L14+L15+L26+L27"] },
  { code: "MEC2014", title: "Production Planning and Inventory Control", type: "TH", slots: ["D1+TD1"] },
  { code: "MEC2018", title: "Thermal Engineering Systems", type: "ETH", slots: ["C1+TC1", "C2+TC2"] },
  { code: "MEC2018", title: "Thermal Engineering Systems", type: "ELA", slots: ["L2+L3", "L41+L42", "L51+L52"] },
  { code: "MEC2021", title: "Mechatronics", type: "TH", slots: ["B1+TB1+TBB1"] },
  { code: "MEC3002", title: "Theory of Machines", type: "ETH", slots: ["B1+TB1", "B2+TB2"] },
  { code: "MEC3002", title: "Theory of Machines", type: "ELA", slots: ["L20+L21", "L47+L48", "L55+L56"] },
  { code: "MEC3006", title: "Fluid Dynamics and Hydraulic Machines", type: "ETH", slots: ["E2+TE2"] },
  { code: "MEC3006", title: "Fluid Dynamics and Hydraulic Machines", type: "ELA", slots: ["L22+L23"] },
  { code: "MEC3010", title: "Renewable Source of Energy", type: "TH", slots: ["B2+TB2"] },
  { code: "MEC3011", title: "Operations Research", type: "TH", slots: ["E2+TE2"] },
  { code: "MEC3015", title: "Advanced Machining Processes", type: "ETH", slots: ["D2+TD2"] },
  { code: "MEC3015", title: "Advanced Machining Processes", type: "ELA", slots: ["L4+L5"] },
  { code: "MEC3027", title: "Robot Dynamics", type: "TH", slots: ["C1+SC1+TC1"] },
  { code: "MEC4008", title: "Automobile Engineering", type: "ETH", slots: ["A2+TA2"] },
  { code: "MEC4008", title: "Automobile Engineering", type: "ELA", slots: ["L28+L29"] },
  { code: "MEC4017", title: "Introduction to Mechanical Vibrations", type: "ETH", slots: ["C2+TC2"] },
  { code: "MEC4017", title: "Introduction to Mechanical Vibrations", type: "ELA", slots: ["L28+L29"] },

  // MGT - Management Courses
  { code: "MGT1001", title: "Ethics and Values", type: "LO", slots: ["L10+L11", "L14+L15", "L22+L23", "L26+L27", "L33+L34", "L37+L38", "L39+L40", "L4+L5", "L43+L44", "L49+L50", "L55+L56", "L8+L9"] },
  { code: "MGT1015", title: "Fundamentals of Consumer Behaviour", type: "ETH", slots: ["B1+TB1"] },
  { code: "MGT1023", title: "Fundamentals of Human Resource Management", type: "ETH", slots: ["B2+TB2"] },
  { code: "MGT1040", title: "Entrepreneurship", type: "TH", slots: ["A1", "A2", "C1", "C2", "G1", "G2"] },
  { code: "MGT1106", title: "Business Research Methods", type: "ETH", slots: ["C1+TC1", "C2+TC2"] },
  { code: "MGT1107", title: "Business Problem Solving with Computer Applications", type: "ETH", slots: ["E1", "G1", "G2"] },
  { code: "MGT1107", title: "Business Problem Solving with Computer Applications", type: "ELA", slots: ["L20+L21", "L31+L32", "L39+L40"] },
  { code: "MGT1122", title: "Team Building and Leadership Skills", type: "TH", slots: ["F1+TF1"] },
  { code: "MGT2009", title: "Financial Management", type: "TH", slots: ["D1+TD1", "F1+TF1", "F2+TF2", "F2+TFF2"] },
  { code: "MGT2101", title: "Financial Management", type: "ETH", slots: ["B1+TB1", "D1+TD1", "D2+TD2"] },
  { code: "MGT2105", title: "Operations and Supply Chain Management", type: "TH", slots: ["E1+TE1", "E2+TE2"] },
  { code: "MGT2110", title: "Business Environment", type: "TH", slots: ["F2+TBB1+TF2"] },
  { code: "MGT2119", title: "Performance Management", type: "TH", slots: ["F1+TBB2+TF1"] },
  { code: "MGT3002", title: "Operation Research", type: "ETH", slots: ["D1", "D2", "E1"] },
  { code: "MGT3005", title: "Advanced Finance", type: "TH", slots: ["A2+TA2", "B1+TB1", "B2+TB2"] },
  { code: "MGT3103", title: "Security Analysis and Portfolio Management", type: "ETH", slots: ["E1+TE1"] },
  { code: "MGT3206", title: "HR Analytics", type: "ETH", slots: ["D1+TD1"] },
  { code: "MGT3218", title: "Marketing Analytics", type: "ETH", slots: ["A1+TA1", "A2+TA2"] },
  { code: "MGT3223", title: "Advanced Performance Management", type: "TH", slots: ["A1+TA1+TAA1"] },
  { code: "MGT3225", title: "Brand Management", type: "TH", slots: ["B1+TB1"] },
  { code: "MGT3226", title: "Advertisement and Sales Promotion", type: "ETH", slots: ["C1+TC1"] },
  { code: "MGT3505", title: "Supply Chain Analytics", type: "ETH", slots: ["G2"] },
  { code: "MGT3614", title: "Business Analytics", type: "ETH", slots: ["F1+TF1", "F2+TF2"] },
  { code: "MGT3615", title: "Investment Banking and Financial Services", type: "TH", slots: ["F1+TBB2+TF1"] },
  { code: "MGT4102", title: "International Business", type: "TH", slots: ["C2+SC2+TC2"] },

  // PHY - Physics Courses
  { code: "PHY2003", title: "Condensed Matter Physics", type: "TH", slots: ["D2+TD2"] },
  { code: "PHY2004", title: "Optoelectronics", type: "TH", slots: ["F2+TF2"] },
  { code: "PHY2005", title: "Introduction to Nanotechnology", type: "TH", slots: ["E1+TE1"] },
  { code: "PHY2006", title: "Solar Photovoltaics : Fundamentals and Technologies", type: "TH", slots: ["D1+TD1"] },

  // STS - Skill Training Courses
  { code: "STS1007", title: "Arithmetic problem solving", type: "TH", slots: ["B1+TB1", "B2+TB2"] },
  { code: "STS2007", title: "Enhancing Problem Solving Skills", type: "TH", slots: ["B1+TB1", "B2+TB2", "E1+TE1", "E2+TE2"] },
  { code: "STS2009", title: "Arithmetic Problem Solving Skills", type: "TH", slots: ["A1+TA1", "A2+TA2", "B1+TB1", "B2+TB2", "C1+TC1", "C2+TC2", "D1+TD1", "D2+TD2", "E1+TE1", "E2+TE2", "F1+TF1", "F2+TF2", "G1+TG1", "G2+TG2", "C1+TCC1", "C2+TCC2", "D1+TDD1", "D2+TDD2", "F1+TFF1", "F2+TFF2"] },
  { code: "STS4003", title: "Enhancing Programming Ability", type: "TH", slots: ["B1+TB1", "B2+TB2", "E1+TE1", "E2+TE2", "F1+TF1", "F2+TF2", "G1+TG1", "G2+TG2"] },
  { code: "STS4005", title: "Basic Competitive Coding - II", type: "TH", slots: ["A1+TA1", "A2+TA2", "C1+TC1", "C2+TC2", "F1+TF1", "F2+TF2"] },
  { code: "STS4006", title: "Advanced Competitive Coding - II", type: "TH", slots: ["A1+TA1", "A2+TA2", "B1+TB1", "B2+TB2", "C1+TC1", "C2+TC2", "D1+TD1", "D2+TD2", "E1+TE1", "E2+TE2", "F1+TF1", "F2+TF2", "G1+TG1", "G2+TG2", "C1+TCC1", "C2+TCC2", "D1+TDD1", "D2+TDD2", "F1+TFF1", "F2+TFF2"] },

  // SWE - Software Engineering Courses
  { code: "SWE2002", title: "Human Computer Interaction", type: "TH", slots: ["D1+TD1", "D2+TD2", "E1+TE1", "E2+TE2", "D1+TDD1", "D2+TDD2"] },
  { code: "SWE2003", title: "Requirements Engineering Management", type: "ETH", slots: ["E1+TE1", "E2+TE2"] },
  { code: "SWE2004", title: "Software Design and Architecture", type: "ETH", slots: ["B1+TB1", "B2+TB2"] },
  { code: "SWE2006", title: "Database Systems", type: "ETH", slots: ["C1+TC1", "C2+TC2", "D1+TD1", "D2+TD2", "C1+TCC1", "C2+TCC2", "D1+TDD1", "D2+TDD2"] },
  { code: "SWE2006", title: "Database Systems", type: "ELA", slots: ["L10+L11", "L2+L3", "L20+L21", "L22+L23", "L28+L29", "L31+L32", "L33+L34", "L39+L40", "L45+L46", "L47+L48", "L51+L52", "L53+L54"] },
  { code: "SWE3001", title: "Introduction to Computer Networks", type: "ETH", slots: ["C1+TC1", "C2+TC2", "F1+TF1", "F2+TF2", "C1+TCC1", "C2+TCC2", "F1+TFF1", "F2+TFF2"] },
  { code: "SWE3001", title: "Introduction to Computer Networks", type: "ELA", slots: ["L20+L21", "L26+L27", "L28+L29", "L33+L34", "L35+L36", "L37+L38", "L39+L40", "L4+L5", "L45+L46", "L53+L54", "L55+L56", "L8+L9"] },
  { code: "SWE3002", title: "Software Project Management", type: "ETH", slots: ["C1+TC1", "C2+TC2", "C1+TCC1", "C2+TCC2"] },
  { code: "SWE3005", title: "Principles of Design Patterns", type: "ETH", slots: ["F1+TF1", "F2+TF2", "F1+TFF1", "F2+TFF2"] },
  { code: "SWE3005", title: "Principles of Design Patterns", type: "ELA", slots: ["L14+L15", "L26+L27", "L4+L5", "L41+L42", "L49+L50", "L55+L56"] },
  { code: "SWE4001", title: "Internet and Web Technologies", type: "ETH", slots: ["B1+TB1", "B2+TB2"] },
  { code: "SWE4001", title: "Internet and Web Technologies", type: "ELA", slots: ["L14+L15", "L22+L23", "L28+L29", "L37+L38", "L43+L44"] },
  { code: "SWE4002", title: "Software Testing", type: "ETH", slots: ["A1+TA1", "A2+TA2"] },
  { code: "SWE4002", title: "Software Testing", type: "ELA", slots: ["L22+L23", "L4+L5", "L49+L50", "L55+L56", "L8+L9"] },
  { code: "SWE4005", title: "Storage Technologies and Management", type: "TH", slots: ["D1+TD1", "D2+TD2"] },
  { code: "SWE4006", title: "Advanced Server Side Programming", type: "ETH", slots: ["C1+TC1", "C2+TC2"] },
  { code: "SWE4006", title: "Advanced Server Side Programming", type: "ELA", slots: ["L10+L11", "L2+L3", "L31+L32", "L37+L38", "L53+L54"] },
  { code: "SWE4008", title: "Application Development and Deployment Architecture", type: "ETH", slots: ["A1+TA1", "A2+TA2"] },
  { code: "SWE4008", title: "Application Development and Deployment Architecture", type: "ELA", slots: ["L4+L5", "L43+L44", "L8+L9"] },
  { code: "SWE4010", title: "Formal Language and Automata Theory", type: "TH", slots: ["A1+TA1+TAA1", "A2+TA2+TAA2"] }
];

// Slot time mapping - Updated based on ANNEXURE - I Winter Semester 2025-26 Slot Timetable
const slotMap = {
  // Theory Slots - Morning (8:00-12:50) and Afternoon (2:00-6:50)
  'TFF1': [{ day: 'TUE', time: '8:00-8:50', type: 'Theory' }],
  'TGG1': [{ day: 'WED', time: '8:00-8:50', type: 'Theory' }],
  'TEE1': [{ day: 'THU', time: '8:00-8:50', type: 'Theory' }],
  'TCC1': [{ day: 'FRI', time: '8:00-8:50', type: 'Theory' }],
  'TDD1': [{ day: 'SAT', time: '8:00-8:50', type: 'Theory' }],
  
  'A1': [
    { day: 'TUE', time: '9:00-9:50', type: 'Theory' },
    { day: 'SAT', time: '12:00-12:50', type: 'Theory' }
  ],
  'B1': [
    { day: 'TUE', time: '10:00-10:50', type: 'Theory' },
    { day: 'WED', time: '12:00-12:50', type: 'Theory' }
  ],
  'C1': [
    { day: 'THU', time: '9:00-9:50', type: 'Theory' },
    { day: 'SAT', time: '10:00-10:50', type: 'Theory' }
  ],
  'D1': [
    { day: 'TUE', time: '12:00-12:50', type: 'Theory' },
    { day: 'WED', time: '9:00-9:50', type: 'Theory' }
  ],
  'E1': [
    { day: 'WED', time: '11:00-11:50', type: 'Theory' },
    { day: 'SAT', time: '9:00-9:50', type: 'Theory' }
  ],
  'F1': [
    { day: 'WED', time: '10:00-10:50', type: 'Theory' },
    { day: 'FRI', time: '11:00-11:50', type: 'Theory' }
  ],
  'G1': [
    { day: 'TUE', time: '11:00-11:50', type: 'Theory' },
    { day: 'SAT', time: '11:00-11:50', type: 'Theory' }
  ],
  
  'TA1': [{ day: 'FRI', time: '10:00-10:50', type: 'Theory' }],
  'TB1': [{ day: 'FRI', time: '9:00-9:50', type: 'Theory' }],
  'TC1': [{ day: 'TUE', time: '11:00-11:50', type: 'Theory' }],
  'TD1': [{ day: 'THU', time: '10:00-10:50', type: 'Theory' }],
  'TE1': [{ day: 'FRI', time: '12:00-12:50', type: 'Theory' }],
  'TF1': [{ day: 'SAT', time: '11:00-11:50', type: 'Theory' }],
  'TG1': [{ day: 'THU', time: '10:00-10:50', type: 'Theory' }],
  'TAA1': [{ day: 'THU', time: '11:00-11:50', type: 'Theory' }],
  'TBB1': [{ day: 'THU', time: '12:00-12:50', type: 'Theory' }],
  
  // Afternoon Theory Slots
  'A2': [
    { day: 'TUE', time: '3:00-3:50', type: 'Theory' },
    { day: 'THU', time: '4:00-4:50', type: 'Theory' }
  ],
  'B2': [
    { day: 'TUE', time: '4:00-4:50', type: 'Theory' },
    { day: 'WED', time: '5:00-5:50', type: 'Theory' }
  ],
  'C2': [
    { day: 'FRI', time: '2:00-2:50', type: 'Theory' },
    { day: 'THU', time: '3:00-3:50', type: 'Theory' }
  ],
  'D2': [
    { day: 'WED', time: '2:00-2:50', type: 'Theory' },
    { day: 'SAT', time: '2:00-2:50', type: 'Theory' }
  ],
  'E2': [
    { day: 'SAT', time: '3:00-3:50', type: 'Theory' },
    { day: 'WED', time: '4:00-4:50', type: 'Theory' }
  ],
  'F2': [
    { day: 'FRI', time: '5:00-5:50', type: 'Theory' },
    { day: 'TUE', time: '2:00-2:50', type: 'Theory' }
  ],
  'G2': [
    { day: 'TUE', time: '4:00-4:50', type: 'Theory' },
    { day: 'WED', time: '3:00-3:50', type: 'Theory' }
  ],
  
  'TA2': [{ day: 'FRI', time: '4:00-4:50', type: 'Theory' }],
  'TB2': [{ day: 'FRI', time: '3:00-3:50', type: 'Theory' }],
  'TC2': [{ day: 'TUE', time: '5:00-5:50', type: 'Theory' }],
  'TD2': [{ day: 'THU', time: '5:00-5:50', type: 'Theory' }],
  'TE2': [{ day: 'THU', time: '2:00-2:50', type: 'Theory' }],
  'TF2': [{ day: 'WED', time: '3:00-3:50', type: 'Theory' }],
  'TG2': [{ day: 'THU', time: '5:00-5:50', type: 'Theory' }],
  'TAA2': [{ day: 'SAT', time: '4:00-4:50', type: 'Theory' }],
  'TBB2': [{ day: 'SAT', time: '5:00-5:50', type: 'Theory' }],
  'TCC2': [{ day: 'WED', time: '6:00-6:50', type: 'Theory' }],
  'TDD2': [{ day: 'TUE', time: '6:00-6:50', type: 'Theory' }],
  'TEE2': [{ day: 'FRI', time: '6:00-6:50', type: 'Theory' }],
  'TFF2': [{ day: 'SAT', time: '6:00-6:50', type: 'Theory' }],
  'TGG2': [{ day: 'THU', time: '6:00-6:50', type: 'Theory' }],
  // Lab Slots - Updated based on ANNEXURE - I
  // Lab slots have different time intervals than theory slots
  // Morning: 8:00-8:50, 9:00-9:50, 9:50-10:40, 11:00-11:50, 11:50-12:40, 12:40-1:30
  // Afternoon: 2:00-2:50, 2:50-3:40, 4:00-4:50, 4:50-5:40, 6:00-6:50, 6:50-7:30
  
  // TUESDAY Lab Slots
  'L1': { day: 'TUE', time: '8:00-8:50', type: 'Lab' },
  'L2': { day: 'TUE', time: '9:00-9:50', type: 'Lab' },
  'L3': { day: 'TUE', time: '9:50-10:40', type: 'Lab' },
  'L4': { day: 'TUE', time: '11:00-11:50', type: 'Lab' },
  'L5': { day: 'TUE', time: '11:50-12:40', type: 'Lab' },
  'L6': { day: 'TUE', time: '12:40-1:30', type: 'Lab' },
  'L31': { day: 'TUE', time: '2:00-2:50', type: 'Lab' },
  'L32': { day: 'TUE', time: '2:50-3:40', type: 'Lab' },
  'L33': { day: 'TUE', time: '4:00-4:50', type: 'Lab' },
  'L34': { day: 'TUE', time: '4:50-5:40', type: 'Lab' },
  'L35': { day: 'TUE', time: '6:00-6:50', type: 'Lab' },
  'L36': { day: 'TUE', time: '6:50-7:30', type: 'Lab' },
  
  // WEDNESDAY Lab Slots
  'L7': { day: 'WED', time: '8:00-8:50', type: 'Lab' },
  'L8': { day: 'WED', time: '9:00-9:50', type: 'Lab' },
  'L9': { day: 'WED', time: '9:50-10:40', type: 'Lab' },
  'L10': { day: 'WED', time: '11:00-11:50', type: 'Lab' },
  'L11': { day: 'WED', time: '11:50-12:40', type: 'Lab' },
  'L12': { day: 'WED', time: '12:40-1:30', type: 'Lab' },
  'L37': { day: 'WED', time: '2:00-2:50', type: 'Lab' },
  'L38': { day: 'WED', time: '2:50-3:40', type: 'Lab' },
  'L39': { day: 'WED', time: '4:00-4:50', type: 'Lab' },
  'L40': { day: 'WED', time: '4:50-5:40', type: 'Lab' },
  'L41': { day: 'WED', time: '6:00-6:50', type: 'Lab' },
  'L42': { day: 'WED', time: '6:50-7:30', type: 'Lab' },
  
  // THURSDAY Lab Slots
  'L13': { day: 'THU', time: '8:00-8:50', type: 'Lab' },
  'L14': { day: 'THU', time: '9:00-9:50', type: 'Lab' },
  'L15': { day: 'THU', time: '9:50-10:40', type: 'Lab' },
  'L16': { day: 'THU', time: '11:00-11:50', type: 'Lab' },
  'L17': { day: 'THU', time: '11:50-12:40', type: 'Lab' },
  'L18': { day: 'THU', time: '12:40-1:30', type: 'Lab' },
  'L43': { day: 'THU', time: '2:00-2:50', type: 'Lab' },
  'L44': { day: 'THU', time: '2:50-3:40', type: 'Lab' },
  'L45': { day: 'THU', time: '4:00-4:50', type: 'Lab' },
  'L46': { day: 'THU', time: '4:50-5:40', type: 'Lab' },
  'L47': { day: 'THU', time: '6:00-6:50', type: 'Lab' },
  'L48': { day: 'THU', time: '6:50-7:30', type: 'Lab' },
  
  // FRIDAY Lab Slots
  'L19': { day: 'FRI', time: '8:00-8:50', type: 'Lab' },
  'L20': { day: 'FRI', time: '9:00-9:50', type: 'Lab' },
  'L21': { day: 'FRI', time: '9:50-10:40', type: 'Lab' },
  'L22': { day: 'FRI', time: '11:00-11:50', type: 'Lab' },
  'L23': { day: 'FRI', time: '11:50-12:40', type: 'Lab' },
  'L24': { day: 'FRI', time: '12:40-1:30', type: 'Lab' },
  'L49': { day: 'FRI', time: '2:00-2:50', type: 'Lab' },
  'L50': { day: 'FRI', time: '2:50-3:40', type: 'Lab' },
  'L51': { day: 'FRI', time: '4:00-4:50', type: 'Lab' },
  'L52': { day: 'FRI', time: '4:50-5:40', type: 'Lab' },
  'L53': { day: 'FRI', time: '6:00-6:50', type: 'Lab' },
  'L54': { day: 'FRI', time: '6:50-7:30', type: 'Lab' },
  
  // SATURDAY Lab Slots
  'L25': { day: 'SAT', time: '8:00-8:50', type: 'Lab' },
  'L26': { day: 'SAT', time: '9:00-9:50', type: 'Lab' },
  'L27': { day: 'SAT', time: '9:50-10:40', type: 'Lab' },
  'L28': { day: 'SAT', time: '11:00-11:50', type: 'Lab' },
  'L29': { day: 'SAT', time: '11:50-12:40', type: 'Lab' },
  'L30': { day: 'SAT', time: '12:40-1:30', type: 'Lab' },
  'L55': { day: 'SAT', time: '2:00-2:50', type: 'Lab' },
  'L56': { day: 'SAT', time: '2:50-3:40', type: 'Lab' },
  'L57': { day: 'SAT', time: '4:00-4:50', type: 'Lab' },
  'L58': { day: 'SAT', time: '4:50-5:40', type: 'Lab' },
  'L59': { day: 'SAT', time: '6:00-6:50', type: 'Lab' },
  'L60': { day: 'SAT', time: '6:50-7:30', type: 'Lab' }
};

let selectedBatch = '';
let selectedSubjects = [];

const initialForm = document.getElementById('initial-form');
const subjectSelectionSection = document.getElementById('subject-selection-section');
const subjectsForm = document.getElementById('subjects-form');
const timetableSection = document.getElementById('timetable-section');
const timetableDiv = document.getElementById('timetable');
const resetBtn = document.getElementById('reset-btn');

// Initial form submission
initialForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const numSubjects = parseInt(document.getElementById('num-subjects').value, 10);
  
  if (numSubjects > 0) {
    generateSubjectSelectors(numSubjects);
    subjectSelectionSection.classList.remove('hidden');
    subjectSelectionSection.scrollIntoView({ behavior: 'smooth' });
  }
});

function generateSubjectSelectors(numSubjects) {
  // Use all courses without batch filtering
  const filteredCourses = coursesData;
  
  // Group courses by code+title to get unique courses with all their slots
  const courseMap = new Map();
  filteredCourses.forEach(course => {
    const key = course.code + '|' + course.title;
    if (!courseMap.has(key)) {
      courseMap.set(key, {
        code: course.code,
        title: course.title,
        programmes: new Set(), // Use Set to store unique programmes
        theorySlots: [],
        labSlots: [],
        hasTheory: false,
        hasLab: false
      });
    }
    const courseData = courseMap.get(key);
    
    // Add programme to the set
    courseData.programmes.add(course.programme);
    
    // Process slots based on type (handle both "Lab" and "LAB")
    const courseType = course.type ? course.type.toUpperCase() : '';
    if (courseType === 'THEORY') {
      courseData.hasTheory = true;
      course.slots.forEach(slot => {
        if (!courseData.theorySlots.includes(slot)) {
          courseData.theorySlots.push(slot);
        }
      });
    } else if (courseType === 'LAB' || courseType === 'LABS') {
      courseData.hasLab = true;
      course.slots.forEach(slot => {
        if (!courseData.labSlots.includes(slot)) {
          courseData.labSlots.push(slot);
        }
      });
    }
  });
  
  // Convert to array and add combined information, then sort alphabetically
  const uniqueCourses = Array.from(courseMap.values()).map(course => {
    // Convert programmes Set to sorted array and join
    const programmesArray = Array.from(course.programmes).sort();
    const programmeStr = programmesArray.length > 1 
      ? programmesArray.join(', ') 
      : programmesArray[0];
    
    // Determine if course has both theory and lab
    const hasBoth = course.hasTheory && course.hasLab;
    
    return {
      code: course.code,
      title: course.title,
      programme: programmeStr,
      programmes: programmesArray,
      theorySlots: course.theorySlots,
      labSlots: course.labSlots,
      hasTheory: course.hasTheory,
      hasLab: course.hasLab,
      hasBoth: hasBoth
    };
  }).sort((a, b) => {
    // Sort alphabetically by title (case-insensitive)
    return a.title.localeCompare(b.title, undefined, { sensitivity: 'base' });
  });
  
  let html = '<div class="mb-6 text-center text-gray-700">';
  html += '<p class="text-lg font-semibold">Batch: ' + selectedBatch + ' | Subjects: ' + numSubjects + '</p>';
  html += '</div>';
  
  for (let i = 0; i < numSubjects; i++) {
    html += `<div class="bg-gray-50 rounded-xl p-6 mb-4 shadow" id="subject-${i}">
      <h3 class="text-lg font-bold text-gray-800 mb-4">Subject ${i + 1}</h3>
      
      <div class="mb-4 relative">
        <label for="course-search-${i}" class="block mb-2 font-semibold text-gray-700">Select Course</label>
        <div class="relative">
          <input 
            type="text" 
            id="course-search-${i}" 
            placeholder="Type to search courses (e.g., CSE1005, Software Engineering, AI...)" 
            class="w-full p-3 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
            autocomplete="off"
            oninput="window.handleCourseSearch(${i}, event)"
            onfocus="window.showCourseDropdown(${i})"
            onkeydown="window.handleCourseKeydown(${i}, event)"
          />
          <input type="hidden" id="course-select-${i}" value="" />
          <div id="selected-course-${i}" class="hidden mt-2 p-3 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <div class="flex items-center justify-between">
              <span id="selected-course-text-${i}" class="font-semibold text-gray-800"></span>
              <button type="button" onclick="window.clearCourseSelection(${i})" class="text-red-500 hover:text-red-700 font-bold">✕</button>
            </div>
          </div>
          <div id="course-dropdown-${i}" class="hidden absolute z-50 w-full mt-1 bg-white border-2 border-blue-300 rounded-lg shadow-xl max-h-96 overflow-y-auto"></div>
        </div>
      </div>
      
      <div id="slot-options-${i}" class="hidden">
        <div class="mb-4">
          <p class="font-semibold text-gray-700 mb-3">Slot Preference</p>
          <div class="space-y-2">
            <label class="flex items-center p-3 bg-white rounded-lg border-2 border-gray-300 cursor-pointer hover:border-blue-400 transition">
              <input type="radio" name="slot-preference-${i}" value="auto" class="mr-3 h-5 w-5" checked onchange="window.handleSlotPreference(${i}, 'auto')">
              <span class="text-gray-800">Use all available slots (Auto-generate)</span>
            </label>
            <label class="flex items-center p-3 bg-white rounded-lg border-2 border-gray-300 cursor-pointer hover:border-blue-400 transition">
              <input type="radio" name="slot-preference-${i}" value="manual" class="mr-3 h-5 w-5" onchange="window.handleSlotPreference(${i}, 'manual')">
              <span class="text-gray-800">I have slot preferences</span>
            </label>
          </div>
        </div>
        
        <div id="manual-slots-${i}" class="hidden mt-4">
          <p class="font-semibold text-gray-700 mb-3">Select Your Preferred Slots</p>
          <div id="theory-slots-${i}" class="mb-4"></div>
          <div id="lab-slots-${i}"></div>
        </div>
      </div>
    </div>`;
  }
  
  html += `<div class="text-center mt-8">
    <button type="submit" class="btn bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white px-10 py-4 rounded-xl shadow-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
      Generate Timetable
    </button>
  </div>`;
  
  subjectsForm.innerHTML = html;
  subjectsForm.onsubmit = handleTimetableGeneration;
  
  // Store courses globally for dropdown population
  allAvailableCourses = uniqueCourses;
  
  // Initialize dropdowns for all subjects
  for (let i = 0; i < numSubjects; i++) {
    populateCourseDropdown(i, uniqueCourses);
  }
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    for (let i = 0; i < numSubjects; i++) {
      const dropdown = document.getElementById(`course-dropdown-${i}`);
      const searchInput = document.getElementById(`course-search-${i}`);
      if (dropdown && searchInput && !dropdown.contains(e.target) && !searchInput.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    }
  });
}

// Store all available courses for filtering
let allAvailableCourses = [];

// Populate course dropdown with available courses (excluding already selected ones)
function populateCourseDropdown(index, courses) {
  // Only update if courses are provided and different
  if (courses && courses.length > 0) {
    allAvailableCourses = courses;
  }
  const dropdown = document.getElementById(`course-dropdown-${index}`);
  if (!dropdown) return;
  
  // Use stored courses if available
  const coursesToUse = allAvailableCourses.length > 0 ? allAvailableCourses : courses;
  
  // Get currently selected courses from other boxes
  const selectedCourseKeys = new Set();
  for (let j = 0; j < selectedSubjects.length; j++) {
    if (j !== index && selectedSubjects[j] && selectedSubjects[j].code && selectedSubjects[j].title) {
      selectedCourseKeys.add(`${selectedSubjects[j].code}|${selectedSubjects[j].title}`);
    }
  }
  
  // Filter out already selected courses
  const availableCourses = coursesToUse.filter(course => {
    const key = `${course.code}|${course.title}`;
    return !selectedCourseKeys.has(key);
  });
  
  // Get search term
  const searchInput = document.getElementById(`course-search-${index}`);
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  
  // Filter by search term
  const filteredCourses = availableCourses.filter(course => {
    if (!searchTerm) return true;
    const searchableText = `${course.code} ${course.title} ${course.programme}`.toLowerCase();
    return searchableText.includes(searchTerm);
  });
  
  // Build dropdown HTML
  let dropdownHTML = '';
  if (filteredCourses.length === 0) {
    dropdownHTML = '<div class="p-4 text-center text-gray-500">No courses found</div>';
  } else {
    filteredCourses.forEach(course => {
      let typeTag = '';
      if (course.hasBoth) {
        typeTag = ' ⭐ (Theory+Lab)';
      } else if (course.hasTheory) {
        typeTag = ' 📚 (Theory)';
      } else if (course.hasLab) {
        typeTag = ' 🔬 (Lab)';
      }
      
      const displayText = `${course.code} - ${course.title}${typeTag} [${course.programme}]`;
      const value = `${course.code}|${course.title}`;
      
      dropdownHTML += `
        <div 
          class="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 transition-colors"
          onclick="window.selectCourseFromDropdown(${index}, '${value.replace(/'/g, "\\'")}', '${displayText.replace(/'/g, "\\'")}')"
          onmouseenter="this.style.backgroundColor='#dbeafe'"
          onmouseleave="this.style.backgroundColor=''"
        >
          <div class="font-semibold text-gray-800">${course.code} - ${course.title}</div>
          <div class="text-sm text-gray-600 mt-1">
            ${typeTag ? `<span class="font-semibold">${typeTag}</span> • ` : ''}${course.programme}
          </div>
        </div>
      `;
    });
  }
  
  dropdown.innerHTML = dropdownHTML;
}

// Handle course search input
window.handleCourseSearch = function(index, event) {
  const searchInput = event.target;
  const dropdown = document.getElementById(`course-dropdown-${index}`);
  
  if (!dropdown) return;
  
  // Get all courses (will filter out selected ones in populateCourseDropdown)
  const filteredCourses = allAvailableCourses || [];
  populateCourseDropdown(index, filteredCourses);
  
  // Show dropdown
  dropdown.classList.remove('hidden');
};

// Show course dropdown
window.showCourseDropdown = function(index) {
  const dropdown = document.getElementById(`course-dropdown-${index}`);
  if (dropdown) {
    populateCourseDropdown(index, allAvailableCourses);
    dropdown.classList.remove('hidden');
  }
};

// Handle keyboard navigation
window.handleCourseKeydown = function(index, event) {
  const dropdown = document.getElementById(`course-dropdown-${index}`);
  if (!dropdown || dropdown.classList.contains('hidden')) return;
  
  const items = dropdown.querySelectorAll('div[onclick]');
  const currentFocus = Array.from(items).findIndex(item => item.classList.contains('bg-blue-100'));
  
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    const nextIndex = currentFocus < items.length - 1 ? currentFocus + 1 : 0;
    items.forEach((item, i) => {
      if (i === nextIndex) {
        item.classList.add('bg-blue-100');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('bg-blue-100');
      }
    });
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    const prevIndex = currentFocus > 0 ? currentFocus - 1 : items.length - 1;
    items.forEach((item, i) => {
      if (i === prevIndex) {
        item.classList.add('bg-blue-100');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('bg-blue-100');
      }
    });
  } else if (event.key === 'Enter') {
    event.preventDefault();
    if (currentFocus >= 0 && items[currentFocus]) {
      items[currentFocus].click();
    }
  } else if (event.key === 'Escape') {
    dropdown.classList.add('hidden');
  }
};

// Select course from dropdown
window.selectCourseFromDropdown = function(index, value, displayText) {
  const searchInput = document.getElementById(`course-search-${index}`);
  const hiddenInput = document.getElementById(`course-select-${index}`);
  const selectedDiv = document.getElementById(`selected-course-${index}`);
  const selectedText = document.getElementById(`selected-course-text-${index}`);
  const dropdown = document.getElementById(`course-dropdown-${index}`);
  const slotOptionsDiv = document.getElementById(`slot-options-${index}`);
  
  // Process course selection
  const [code, title] = value.split('|');
  
  // Check if this course is already selected in another box
  const courseKey = `${code}|${title}`;
  for (let i = 0; i < selectedSubjects.length; i++) {
    if (i !== index && selectedSubjects[i] && selectedSubjects[i].code && selectedSubjects[i].title) {
      const existingKey = `${selectedSubjects[i].code}|${selectedSubjects[i].title}`;
      if (existingKey === courseKey) {
        alert(`This course (${code} - ${title}) is already selected in Subject ${i + 1}. Please select a different course.`);
        return;
      }
    }
  }
  
  if (searchInput) searchInput.value = '';
  if (hiddenInput) hiddenInput.value = value;
  if (selectedText) selectedText.textContent = displayText;
  if (selectedDiv) selectedDiv.classList.remove('hidden');
  if (dropdown) dropdown.classList.add('hidden');
  
    // Get all slots for this course (handle both "Lab" and "LAB" types)
    const courseSlots = coursesData.filter(c => c.code === code && c.title === title);
    const theorySlots = [...new Set(courseSlots.filter(c => c.type && c.type.toUpperCase() === 'THEORY').flatMap(c => c.slots))];
    const labSlots = [...new Set(courseSlots.filter(c => c.type && (c.type.toUpperCase() === 'LAB' || c.type === 'Lab')).flatMap(c => c.slots))];
    
    // Store in global state
    selectedSubjects[index] = {
      code,
      title,
      theorySlots,
      labSlots,
      preference: 'auto',
      selectedTheorySlots: theorySlots,
      selectedLabSlots: labSlots
    };
  
  // Show slot options
  if (slotOptionsDiv) slotOptionsDiv.classList.remove('hidden');
  
  // Populate manual slot selection areas
  populateManualSlots(index, theorySlots, labSlots);
  
  // Update all other dropdowns to remove this selected course
  for (let i = 0; i < selectedSubjects.length; i++) {
    if (i !== index) {
      populateCourseDropdown(i, allAvailableCourses);
    }
  }
};

// Clear course selection
window.clearCourseSelection = function(index) {
  const searchInput = document.getElementById(`course-search-${index}`);
  const hiddenInput = document.getElementById(`course-select-${index}`);
  const selectedDiv = document.getElementById(`selected-course-${index}`);
  const slotOptionsDiv = document.getElementById(`slot-options-${index}`);
  
  if (searchInput) searchInput.value = '';
  if (hiddenInput) hiddenInput.value = '';
  if (selectedDiv) selectedDiv.classList.add('hidden');
  if (slotOptionsDiv) slotOptionsDiv.classList.add('hidden');
  
  selectedSubjects[index] = null;
  
  // Update all dropdowns to include this course again
  for (let i = 0; i < selectedSubjects.length; i++) {
    populateCourseDropdown(i, allAvailableCourses);
  }
};

// Handle course selection (legacy function for compatibility)
window.handleCourseSelection = function(index) {
  const hiddenInput = document.getElementById(`course-select-${index}`);
  const selectedValue = hiddenInput ? hiddenInput.value : '';
  const slotOptionsDiv = document.getElementById(`slot-options-${index}`);
  
  if (selectedValue) {
    const [code, title] = selectedValue.split('|');
    
    // Check if this course is already selected in another box
    const courseKey = `${code}|${title}`;
    for (let i = 0; i < selectedSubjects.length; i++) {
      if (i !== index && selectedSubjects[i] && selectedSubjects[i].code && selectedSubjects[i].title) {
        const existingKey = `${selectedSubjects[i].code}|${selectedSubjects[i].title}`;
        if (existingKey === courseKey) {
          alert(`This course (${code} - ${title}) is already selected in Subject ${i + 1}. Please select a different course.`);
          if (hiddenInput) hiddenInput.value = '';
          return;
        }
      }
    }
    
    // Get all slots for this course (handle both "Lab" and "LAB" types)
    const courseSlots = coursesData.filter(c => c.code === code && c.title === title);
    const theorySlots = [...new Set(courseSlots.filter(c => c.type && c.type.toUpperCase() === 'THEORY').flatMap(c => c.slots))];
    const labSlots = [...new Set(courseSlots.filter(c => c.type && (c.type.toUpperCase() === 'LAB' || c.type === 'Lab')).flatMap(c => c.slots))];
    
    // Store in global state
    selectedSubjects[index] = {
      code,
      title,
      theorySlots,
      labSlots,
      preference: 'auto',
      selectedTheorySlots: theorySlots,
      selectedLabSlots: labSlots
    };
    
    // Show slot options
    if (slotOptionsDiv) slotOptionsDiv.classList.remove('hidden');
    
    // Populate manual slot selection areas
    populateManualSlots(index, theorySlots, labSlots);
    
    // Update all other dropdowns to remove this selected course
    for (let i = 0; i < selectedSubjects.length; i++) {
      if (i !== index) {
        populateCourseDropdown(i, allAvailableCourses);
      }
    }
  } else {
    if (slotOptionsDiv) slotOptionsDiv.classList.add('hidden');
    selectedSubjects[index] = null;
    
    // Update all other dropdowns when a course is cleared
    for (let i = 0; i < selectedSubjects.length; i++) {
      if (i !== index) {
        populateCourseDropdown(i, allAvailableCourses);
      }
    }
  }
};

// Handle slot preference change
window.handleSlotPreference = function(index, preference) {
  const manualSlotsDiv = document.getElementById(`manual-slots-${index}`);
  
  if (preference === 'manual') {
    manualSlotsDiv.classList.remove('hidden');
    selectedSubjects[index].preference = 'manual';
    // Initialize with empty arrays - user must select slots manually
    selectedSubjects[index].selectedTheorySlots = [];
    selectedSubjects[index].selectedLabSlots = [];
    // Uncheck all checkboxes
    const theoryCheckboxes = document.querySelectorAll(`.theory-slot-${index}`);
    const labCheckboxes = document.querySelectorAll(`.lab-slot-${index}`);
    theoryCheckboxes.forEach(cb => cb.checked = false);
    labCheckboxes.forEach(cb => cb.checked = false);
  } else {
    manualSlotsDiv.classList.add('hidden');
    selectedSubjects[index].preference = 'auto';
    // Reset to all slots
    selectedSubjects[index].selectedTheorySlots = selectedSubjects[index].theorySlots;
    selectedSubjects[index].selectedLabSlots = selectedSubjects[index].labSlots;
  }
};

// Populate manual slot selection checkboxes
function populateManualSlots(index, theorySlots, labSlots) {
  const theorySlotsDiv = document.getElementById(`theory-slots-${index}`);
  const labSlotsDiv = document.getElementById(`lab-slots-${index}`);
  
  let theoryHtml = '';
  let labHtml = '';
  
  if (theorySlots.length > 0) {
    theoryHtml = '<p class="font-semibold text-blue-700 mb-2">Theory Slots:</p><div class="grid grid-cols-2 md:grid-cols-3 gap-2">';
    theorySlots.forEach(slot => {
      theoryHtml += `<label class="flex items-center p-2 bg-blue-50 rounded border cursor-pointer hover:bg-blue-100">
        <input type="checkbox" value="${slot}" class="mr-2 theory-slot-${index}" onchange="window.updateSelectedSlots(${index})">
        <span class="text-sm">${slot}</span>
      </label>`;
    });
    theoryHtml += '</div>';
  }
  
  if (labSlots.length > 0) {
    labHtml = '<p class="font-semibold text-green-700 mb-2 mt-4">Lab Slots:</p><div class="grid grid-cols-2 md:grid-cols-3 gap-2">';
    labSlots.forEach(slot => {
      labHtml += `<label class="flex items-center p-2 bg-green-50 rounded border cursor-pointer hover:bg-green-100">
        <input type="checkbox" value="${slot}" class="mr-2 lab-slot-${index}" onchange="window.updateSelectedSlots(${index})">
        <span class="text-sm">${slot}</span>
      </label>`;
    });
    labHtml += '</div>';
  }
  
  theorySlotsDiv.innerHTML = theoryHtml;
  labSlotsDiv.innerHTML = labHtml;
}

// Update selected slots based on checkbox selection
window.updateSelectedSlots = function(index) {
  const theoryCheckboxes = document.querySelectorAll(`.theory-slot-${index}:checked`);
  const labCheckboxes = document.querySelectorAll(`.lab-slot-${index}:checked`);
  
  selectedSubjects[index].selectedTheorySlots = Array.from(theoryCheckboxes).map(cb => cb.value);
  selectedSubjects[index].selectedLabSlots = Array.from(labCheckboxes).map(cb => cb.value);
};

// Handle timetable generation
function handleTimetableGeneration(e) {
  e.preventDefault();
  
  // Filter out null subjects
  const validSubjects = selectedSubjects.filter(s => s !== null && s !== undefined);
  
  if (validSubjects.length === 0) {
    alert('Please select at least one subject!');
    return;
  }
  
  // Check for duplicate subjects
  const subjectKeys = new Set();
  const duplicates = [];
  for (let i = 0; i < validSubjects.length; i++) {
    const key = `${validSubjects[i].code}|${validSubjects[i].title}`;
    if (subjectKeys.has(key)) {
      duplicates.push(`Subject ${i + 1}: ${validSubjects[i].code} - ${validSubjects[i].title}`);
    } else {
      subjectKeys.add(key);
    }
  }
  
  if (duplicates.length > 0) {
    alert(`Duplicate subjects detected:\n${duplicates.join('\n')}\n\nPlease select each subject only once.`);
    return;
  }
  
  // Show loading
  timetableSection.classList.remove('hidden');
  timetableDiv.innerHTML = '<div class="text-center text-blue-500 font-semibold animate-pulse my-8">Generating your clash-free timetable...</div>';
  timetableSection.scrollIntoView({ behavior: 'smooth' });
  
  setTimeout(() => {
    const timetable = generateTimetable(validSubjects);
    if (timetable) {
      renderTimetable(timetable);
    } else {
      timetableDiv.innerHTML = '<p class="text-center text-red-500 font-semibold text-lg py-8">Unable to generate a clash-free timetable with the selected slots. Please try different slot preferences.</p>';
    }
  }, 1000);
}

// Generate clash-free timetable using backtracking
function generateTimetable(subjects) {
  const assignments = [];
  const usedTimes = new Set();
  
  function getSlotTimes(slotCombo) {
    const slots = slotCombo.split('+');
    const times = [];
    slots.forEach(slot => {
      const slotInfo = slotMap[slot];
      if (slotInfo) {
        if (Array.isArray(slotInfo)) {
          slotInfo.forEach(info => times.push(`${info.day}|${info.time}`));
        } else {
          times.push(`${slotInfo.day}|${slotInfo.time}`);
        }
      }
    });
    return times;
  }
  
  function hasClash(slotCombo) {
    const times = getSlotTimes(slotCombo);
    // Check if any time slot overlaps with already used times
    // This ensures theory and lab slots don't clash with each other
    return times.some(time => usedTimes.has(time));
  }
  
  function hasClashBetweenSlots(slot1, slot2) {
    // Check if two slot combinations clash with each other
    const times1 = getSlotTimes(slot1);
    const times2 = getSlotTimes(slot2);
    const times1Set = new Set(times1);
    return times2.some(time => times1Set.has(time));
  }
  
  function addSlotTimes(slotCombo) {
    const times = getSlotTimes(slotCombo);
    times.forEach(time => usedTimes.add(time));
    return times;
  }
  
  function removeSlotTimes(times) {
    times.forEach(time => usedTimes.delete(time));
  }
  
  function backtrack(subjectIndex) {
    if (subjectIndex === subjects.length) {
      return true;
    }
    
    const subject = subjects[subjectIndex];
    const hasTheory = subject.selectedTheorySlots.length > 0;
    const hasLab = subject.selectedLabSlots.length > 0;
    
    // Try all combinations: theory slot (if exists) + lab slot (if exists)
    const theorySlotsToTry = hasTheory ? subject.selectedTheorySlots : [null];
    const labSlotsToTry = hasLab ? subject.selectedLabSlots : [null];
    const subjectHasBoth = hasTheory && hasLab;
    
    for (const theorySlot of theorySlotsToTry) {
      for (const labSlot of labSlotsToTry) {
        // Check if both slots (if they exist) don't clash
        const slotsToCheck = [];
        if (theorySlot) slotsToCheck.push(theorySlot);
        if (labSlot) slotsToCheck.push(labSlot);
        
        // First, check if theory and lab slots clash with each other
        let theoryLabClash = false;
        if (theorySlot && labSlot) {
          theoryLabClash = hasClashBetweenSlots(theorySlot, labSlot);
        }
        
        // Then check if any of the slots clash with already used times
        const hasAnyClash = theoryLabClash || slotsToCheck.some(slot => hasClash(slot));
        
        if (!hasAnyClash) {
          // Add all slot times
          const allTimes = [];
          slotsToCheck.forEach(slot => {
            const times = addSlotTimes(slot);
            allTimes.push(...times);
          });
          
          // Add assignments with proper tracking
          if (theorySlot) {
            assignments.push({
              subject: subject.title,
              code: subject.code,
              slot: theorySlot,
              type: 'Theory',
              hasTheory: true,
              hasLab: hasLab,
              subjectHasBoth: subjectHasBoth
            });
          }
          
          if (labSlot) {
            assignments.push({
              subject: subject.title,
              code: subject.code,
              slot: labSlot,
              type: 'Lab',
              hasTheory: hasTheory,
              hasLab: true,
              subjectHasBoth: subjectHasBoth
            });
          }
          
          if (backtrack(subjectIndex + 1)) {
            return true;
          }
          
          // Backtrack - remove assignments and times
          if (theorySlot) assignments.pop();
          if (labSlot) assignments.pop();
          removeSlotTimes(allTimes);
        }
      }
    }
    
    return false;
  }
  
  if (backtrack(0)) {
    return assignments;
  }
  return null;
}

// Render the timetable
function renderTimetable(assignments) {
  const days = ['TUE', 'WED', 'THU', 'FRI', 'SAT'];
  // Separate times into Morning (8 AM - 1 PM) and Afternoon (2 PM - 7:30 PM)
  const morningTimes = [
    '8:00-8:50', '9:00-9:50', '9:50-10:40', '10:00-10:50', '11:00-11:50', '11:50-12:40', '12:00-12:50', '12:40-1:30'
  ];
  const afternoonTimes = [
    '2:00-2:50', '2:50-3:40', '3:00-3:50', '4:00-4:50', '4:50-5:40', '5:00-5:50', '6:00-6:50', '6:50-7:30'
  ];
  const times = [...morningTimes, ...afternoonTimes];
  
  // Build grid with proper type information
  const grid = {};
  assignments.forEach(assignment => {
    const slots = assignment.slot.split('+');
    slots.forEach(slot => {
      const slotInfo = slotMap[slot.trim()];
      if (slotInfo) {
        const infos = Array.isArray(slotInfo) ? slotInfo : [slotInfo];
        infos.forEach(info => {
          const key = `${info.day}|${info.time}`;
          if (!grid[key]) {
            grid[key] = [];
          }
          grid[key].push({
            subject: assignment.subject,
            code: assignment.code,
            slot: assignment.slot,
            type: assignment.type || info.type, // Use assignment type, fallback to slotMap type
            hasTheory: assignment.hasTheory,
            hasLab: assignment.hasLab,
            subjectHasBoth: assignment.subjectHasBoth,
            time: info.time,
            day: info.day
          });
        });
      }
    });
  });
  
  // Render compact table that fits on single page
  let html = '<div class="w-full mb-6 shadow-2xl rounded-xl bg-white">';
  html += '<table class="w-full border border-gray-300 text-center bg-white" style="table-layout: fixed; width: 100%; font-size: 0.75rem;">';
  html += '<thead class="sticky top-0 z-20">';
  
  // Section header row - Morning and Afternoon (compact)
  html += '<tr class="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white">';
  html += '<th class="border border-gray-600 px-3 py-2 font-bold text-sm bg-gradient-to-br from-gray-900 to-gray-800" style="width: 80px;">';
  html += '<div class="text-xs">📅 DAY</div>';
  html += '</th>';
  
  // Morning section header
  html += `<th colspan="${morningTimes.length}" class="border border-gray-600 px-2 py-2 font-bold text-sm bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600">
    <div class="flex items-center justify-center gap-2">
      <span>🌅</span>
      <span class="text-xs">MORNING</span>
    </div>
  </th>`;
  
  // Afternoon section header (including 6:00-7:30 slots)
  html += `<th colspan="${afternoonTimes.length}" class="border border-gray-600 px-2 py-2 font-bold text-sm bg-gradient-to-r from-orange-600 via-orange-700 to-orange-600">
    <div class="flex items-center justify-center gap-2">
      <span>🌆</span>
      <span class="text-xs">AFTERNOON</span>
    </div>
  </th>`;
  
  html += '</tr>';
  
  // Header row with timings - compact
  html += '<tr class="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 text-white">';
  html += '<th class="border border-blue-800 px-3 py-3 font-bold text-sm bg-gradient-to-br from-blue-800 to-purple-800" style="width: 80px;">';
  html += '<div class="text-sm">DAY</div>';
  html += '</th>';
  
  // Morning time slots - compact
  morningTimes.forEach((time) => {
    const bgClass = 'bg-gradient-to-b from-blue-600 to-blue-700';
    html += `<th class="border border-blue-800 px-2 py-3 font-bold text-sm whitespace-nowrap ${bgClass}" title="Time Slot: ${time}">
      <div class="text-sm leading-tight">${time}</div>
    </th>`;
  });
  
  // Afternoon time slots - compact (including 6:00-6:50 and 6:50-7:30)
  afternoonTimes.forEach((time) => {
    const startTime = time.split('-')[0];
    const hour = parseInt(startTime.split(':')[0]);
    const bgClass = hour >= 6 ? 'bg-gradient-to-b from-purple-700 to-purple-800' : 'bg-gradient-to-b from-orange-600 to-orange-700';
    html += `<th class="border border-blue-800 px-2 py-3 font-bold text-sm whitespace-nowrap ${bgClass}" title="Time Slot: ${time}">
      <div class="text-sm leading-tight">${time}</div>
    </th>`;
  });
  
  html += '</tr>';
  
  html += '</thead><tbody>';
  
  days.forEach((day, dayIndex) => {
    html += `<tr class="${dayIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition">`;
    html += `<td class="border border-gray-300 px-3 py-3 font-bold text-gray-800 text-sm" style="width: 80px;">${day}</td>`;
    
    times.forEach(time => {
      const key = `${day}|${time}`;
      const cells = grid[key];
      
      if (cells && cells.length > 0) {
        html += '<td class="border border-gray-300 px-2 py-2 align-top">';
        cells.forEach(cell => {
          const isLab = cell.type && (cell.type === 'Lab' || cell.type.toUpperCase() === 'LAB');
          const bgColor = isLab ? 'bg-green-100 border-green-400' : 'bg-blue-100 border-blue-400';
          const textColor = isLab ? 'text-green-900' : 'text-blue-900';
          const borderColor = isLab ? 'border-green-500' : 'border-blue-500';
          
          // Show indicator if subject has both theory and lab
          const subjectHasBoth = cell.subjectHasBoth || (cell.hasTheory && cell.hasLab);
          let typeBadge = '';
          if (subjectHasBoth) {
            typeBadge = `<div class="text-xs font-semibold mb-1 ${isLab ? 'text-green-700' : 'text-blue-700'}">${cell.type}</div>`;
          } else {
            typeBadge = `<div class="text-xs font-semibold mb-1 ${isLab ? 'text-green-700' : 'text-blue-700'}">${cell.type}</div>`;
          }
          
          html += `<div class="${bgColor} ${textColor} ${borderColor} rounded p-2 mb-2 border shadow-sm">
            ${typeBadge}
            <div class="font-bold text-xs mb-1 leading-tight">${cell.code}</div>
            <div class="text-[11px] mb-1 leading-tight">${cell.subject}</div>
            <div class="text-[10px] font-mono text-gray-600 bg-white bg-opacity-50 rounded px-1.5 py-1">${cell.slot}</div>
          </div>`;
        });
        html += '</td>';
      } else {
        html += '<td class="border border-gray-300 px-2 py-2 bg-gray-50"></td>';
      }
    });
    
    html += '</tr>';
  });
  
  html += '</tbody></table></div>';
  
  // Add summary and legend - determine from assignment types and collect slots
  const subjectSummary = {};
  assignments.forEach(a => {
    if (!subjectSummary[a.code]) {
      subjectSummary[a.code] = {
        code: a.code,
        title: a.subject,
        hasTheory: false,
        hasLab: false,
        theorySlots: [],
        labSlots: []
      };
    }
    // Determine from assignment type and collect slots
    const assignmentType = a.type ? a.type.toUpperCase() : '';
    if (assignmentType === 'THEORY') {
      subjectSummary[a.code].hasTheory = true;
      if (!subjectSummary[a.code].theorySlots.includes(a.slot)) {
        subjectSummary[a.code].theorySlots.push(a.slot);
      }
    }
    if (assignmentType === 'LAB' || a.type === 'Lab') {
      subjectSummary[a.code].hasLab = true;
      if (!subjectSummary[a.code].labSlots.includes(a.slot)) {
        subjectSummary[a.code].labSlots.push(a.slot);
      }
    }
  });
  
  html += '<div class="bg-gray-100 rounded-lg p-4 mt-4">';
  html += '<h3 class="text-sm font-bold text-gray-800 mb-3">Subject Summary</h3>';
  html += '<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">';
  Object.values(subjectSummary).forEach(subj => {
    const types = [];
    if (subj.hasTheory) types.push('Theory');
    if (subj.hasLab) types.push('Lab');
    const typeStr = types.join(' + ');
    
    // Build slots display
    let slotsDisplay = '';
    if (subj.theorySlots.length > 0 || subj.labSlots.length > 0) {
      slotsDisplay = '<div class="mt-2 pt-2 border-t border-gray-300">';
      if (subj.theorySlots.length > 0) {
        slotsDisplay += `<div class="text-[9px] mb-1"><span class="font-semibold text-blue-700">Theory:</span> <span class="font-mono text-gray-700">${subj.theorySlots.join(', ')}</span></div>`;
      }
      if (subj.labSlots.length > 0) {
        slotsDisplay += `<div class="text-[9px]"><span class="font-semibold text-green-700">Lab:</span> <span class="font-mono text-gray-700">${subj.labSlots.join(', ')}</span></div>`;
      }
      slotsDisplay += '</div>';
    }
    
    html += `<div class="bg-white rounded-lg p-2 border ${subj.hasTheory && subj.hasLab ? 'border-purple-400' : subj.hasLab ? 'border-green-400' : 'border-blue-400'}">
      <div class="font-bold text-xs">${subj.code}</div>
      <div class="text-[10px] text-gray-600 mt-1 line-clamp-2">${subj.title}</div>
      <div class="text-[10px] font-semibold mt-1 ${subj.hasTheory && subj.hasLab ? 'text-purple-600' : subj.hasLab ? 'text-green-600' : 'text-blue-600'}">${typeStr}</div>
      ${slotsDisplay}
    </div>`;
  });
  html += '</div>';
  html += '</div>';
  
  // Add legend - compact
  html += '<div class="mt-4 flex justify-center gap-4 flex-wrap text-xs">';
  html += '<div class="flex items-center gap-1"><div class="w-4 h-4 bg-blue-100 border border-blue-400 rounded"></div><span class="font-semibold">Theory</span></div>';
  html += '<div class="flex items-center gap-1"><div class="w-4 h-4 bg-green-100 border border-green-400 rounded"></div><span class="font-semibold">Lab</span></div>';
  html += '<div class="flex items-center gap-1"><div class="w-4 h-4 bg-purple-100 border border-purple-400 rounded"></div><span class="font-semibold">Both</span></div>';
  html += '</div>';
  
  timetableDiv.innerHTML = html;
}

// Reset button
resetBtn.addEventListener('click', function() {
  selectedBatch = '';
  selectedSubjects = [];
  document.getElementById('batch-year').value = '';
  document.getElementById('num-subjects').value = '';
  subjectSelectionSection.classList.add('hidden');
  timetableSection.classList.add('hidden');
  subjectsForm.innerHTML = '';
  timetableDiv.innerHTML = '<p class="text-center text-gray-400 py-12 text-lg">Your timetable will appear here once you generate it.</p>';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
