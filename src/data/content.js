export const navLinks = [
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'portfolio' },
  { label: 'Blogs', target: 'blogs' },
  { label: 'Education', target: 'education' },
  { label: 'Contact', target: 'contact' },
];

export const heroContent = {
  firstName: 'Nagesh',
  lastName: 'Gupta',
  title: 'Data Scientist / AI ML Engineer',
  tagline: 'Stay Hungry, Stay Foolish',
  buttonLabel: 'Hello 👋',
  download_Resume: 'Download Resume',
};

export const resumeContent = {
  showDownload: false,
  eyebrow: 'Resume',
  heading: 'Download my latest resume',
  file: '/resume/nagesh-gupta-resume.pdf',
  fileLabel: 'Download Resume (PDF)',
  updated: 'Dec 2025',
  fileSize: '355 KB',
  
};

export const topSocialLinks = [
  {
    href: 'https://www.linkedin.com/in/nageshgupta01/',
    iconClass: 'fab fa-linkedin',
    title: 'Nagesh Gupta LinkedIn',
  },
  {
    href: 'mailto:nageshgupta0806@gmail.com',
    iconClass: 'fa fa-envelope',
    title: "Nagesh Gupta's Mail",
  },
];

export const laptopProgrammingLanguages = [
  { alt: 'Javascript', src: '/images/icon/javascript.png' },
  { alt: 'Python', src: '/images/icon/python.png' },
  { alt: 'SQL', src: '/images/icon/sql.png' },
  { alt: 'Java', src: '/images/icon/java.png' },
  { alt: 'HTML5', src: '/images/icon/800px-Devicon-html5-plain-wordmark.svg.png' },
  { alt: 'CSS3', src: '/images/icon/CSS3_logo_and_wordmark.svg.png' },
];

export const laptopTools = [
  { alt: 'Jupyter Notebook', src: '/images/icon/jupyter.png' },
  { alt: 'pytorch', src: '/images/icon/pytorch.png' },
  { alt: 'opencv', src: '/images/icon/Opencv.png' },
  { alt: 'Numpy', src: '/images/icon/numpy.png' },
  { alt: 'LLM', src: '/images/icon/chatGPT.png' },
  { alt: 'ReactJS', src: '/images/icon/react.png' },
  { alt: 'Azure', src: '/images/icon/azure.png' },
  { alt: 'MongoDB', src: '/images/icon/mongodb.png' },
  { alt: 'MySQL', src: '/images/icon/mysql.webp' },
];

export const mobileProgrammingLanguages = [
  ...laptopProgrammingLanguages,
];

export const mobileTools = [
 ...laptopTools
];

export const marqueeSkillsLeft = [
  'React.js',
  'JavaScript',
  'SQL',
  'NoSQL',
  'FastAPI',
  'GIT',
  'Python',
  'MySQL',
  'PostgreSQL',
  'Docker',
];

export const marqueeSkillsRight = [

  
  
  'Numpy',
  'Pandas',
  'Scikit-learn',
  'Azure',
  'Tesseract',
  'Huggingface',
  'Pytorch',
  'ML',
  'NLP',
  'LLM',
  'OpenCV',
  'Computer Vision'
];

export const aboutContent = {
  image: '/images/me.jpeg',
  name: 'Nagesh Gupta',
  paragraphs: [
    "Hiyaaa! 👋🏻 I'm Nagesh Gupta, Data Scientist and AI ML Engineer with approximately 4 years of working experience and based in United Kingdom. I always have been fascinated by maths and computers since an early age and I completed my bachelor in Computer Science and Engineering with specialization in Artificial Intelligence from Indore, and Masters From Oxford Brookes University, Oxford.",
    "One of the things I love most about software engineering is the constant learning that comes with it. New technologies and frameworks are constantly emerging, and I'm always eager to learn and stay up-to-date on the latest trends.",
    'I am also a die hard fan of Cars, love travelling and try to meet new people every day, living one day at a time. I find that getting outside and engaging in hands-on activities helps me to stay balanced and focused, both in my personal life and in my work.',
  ],
};

const dxcDescription = [
  'As a Data Scientist at DXC Technology, I led the development and deployment of a Global Employee Relocation Cost Savings Prediction tool that leveraged machine learning to forecast potential cost benefits from international employee transfers',
  'This solution replaced manual Excel-based workflows and enabled HR and finance teams to simulate and compare relocation scenarios in real time, improving planning accuracy by 27% and reducing manual analysis time by over 60%.',
];

const lentraDescription = [
  'As an ML/Software Engineer at Lentra, I contributed to the development of LaviOsa, a loan origination system used by banks to streamline home and auto loan processing.',
  'A significant aspect of my role involved cimplemented OCR-based document parsing using Tesseract and OpenCV to extract PAN card details with 88% precision, reducing manual data entry for KYC verification. I also developed Angular and React-based onboarding flows and integrated backend Python services with CIBIL and identity verification APIs. Additionally, I engineered a deduplication workflow to identify and prefill prior applications, cutting duplicate submissions by 40% and improving data consistency across the system.',
];

const SpeedNetworkNow = [
  'As an AI Automation Intern, I work on streamlining outreach and lead engagement processes automation tools.',
  'My responsibilities include building, optimizing, and maintaining smart workflows for event marketing and sales teams. I use platforms like n8n to automate end-to-end operations — from lead collection and enrichment to campaign tracking — and tools like Smartlead to drive personalized, sequenced communication at scale.'
  ];



export const experiencesPrimary = [
  {
    date: 'Nov 2025 - Present',
    location: 'London, United Kingdom',
    company: 'Speed Network Now',
    role: 'AI Automation (Intern)',
    description: SpeedNetworkNow,
    techStack:
      'LLM, Python, smartlead, n8n, Zapier, ZOHO CRM',
  },
  {
    date: 'March 2022 - September 2023',
    location: 'Hyderabad, India',
    company: 'DXC Technology.',
    role: 'Data Scientist',
    description: dxcDescription,
    techStack: 'Python, SQL, Machine Learning, XGBoost, scikit-learn, NumPy, pandas, Azure Functions, Cosmos DB, Azure Blob Storage, Docker, FastAPI, Docker, Postman, Git',
  },
  {
    date: 'July 2020 - March 2022',
    location: 'Pune , India',
    company: 'Lentra AI',
    role: 'ML/Software Engineer',
    description: lentraDescription,
    techStack: 'Machine Learning, Data Analysis, Tesseract, OpenCV, Python, JavaScript, React, SQL, HTML, CSS, Git',
  },
  
];

export const projects = [
  {
    title: 'DOC-QUERY',
    link: 'https://github.com/nageshgg/DOC-QUERY',
    image: '/images/docQ.jpeg',
    stack: 'Python, LLM, RAG, GenAI, Laingchain, Huggingface, React Js',
    summary: 'Quering the Reasearch Paper using RAG and LLM',
  },
  {
    title: 'Loan Approval System',
    link: 'https://github.com/nageshgg/Loan-Approval-System',
    image: '/images/LoanAproval.png',
    stack: 'Python, Pandas, Scikit-learn, XGBoost, Random Forest Classifier, Decision Tree Classifier, FastAPI, Docker',
    summary: 'Predicting Loan Approval using Machine Learning Algorithms',
  },{
    title: 'Crick Vision',
    link: 'https://github.com/nageshgg/CricketVision',
    image: '/images/crickvision.png',
    stack: 'OpenCV, YOLOv5, python, Roboflow, Jupyter Notebook',
    summary: 'Analysing cricket game using Object Detection and Computer Vision',
  },{
    title: 'Churn Prediction',
    link: 'https://github.com/nageshgg/customer-churn-prediction',
    image: '/images/churnprediction.png',
    stack: 'Python (Pandas, Scikit-learn, Matplotlib, Joblib), Machine Learning Algorithm, FASTAPI, Vanilla JavaScript, HTML, CSS',
    summary: 'Predicting Customer Churn using Machine Learning Algorithms',
  },
];

export const publications = [
  {
    title: 'An Efficient Ensemble Explainable AI (XAI) Approach for Morphed Face Detection',
    link: 'https://www.sciencedirect.com/science/article/pii/S0167865524001843?dgcid=coauthor',
    venue: 'Pattern Recognition Letters, 2024',
    description:
      'In this work, we propose Ensemble XAI, a novel visual explanation approach which combines Saliency maps, Class Activation Maps, and Gradient-CAM to enhance the visual explanations provided by a deep learning prognostic model used for predicting the authenticity of biometric authentication system inputs (morphed or genuine).',
    image: '/images/publication-1.webp',
  },
  {
    title: 'Incorporating zk-SNARK for Blockchain-based Identity Management with off-chain computations',
    link: 'https://arxiv.org/abs/2310.19452',
    venue: 'arXiv preprint (arXiv:2310.19452), 2023',
    description:
      'In this work, we propose a novel blockchain-based fingerprint authentication system that integrates zk-SNARKs to enable secure and efficient authentication. A KNN-based approach is used to generate a cancelable template for secure, faster, and robust biometric registration and authentication, which is stored using the InterPlanetary File System.',
    image: '/images/publication-2.webp',
  },
];

export const blogs = [
  {
    title: 'Prerequisites for Neural Network and Deep Learning',
    date: 'Aug 27, 2025',
    link: 'https://medium.com/@nageshgupta0806/prerequisite-of-neural-network-and-deep-learning-856f2257b526',
    image: 'images/blog1.png',
  },
  {
    title: 'Understanding Convolutional Neural Networks',
    date: 'Sep 15, 2025',
    link: 'https://medium.com/@nageshgupta0806/understanding-convolutional-neural-networks-1234567890',
    image: '',
  },
  
];

export const educationSteps = [
  {
    period: '2024 - 2023',
    institution: 'Oxford Brookes University, Oxford, United Kingdom',
    degree: 'Masters in Advanced Computer Science and Artificial Intelligence',
    details: ['7.0 CGPA | Distinction'],
  },
  {
    period: '2016 - 2020',
    institution: 'Bansal Group Institute, Indore, India',
    degree: 'Bachelor of Science and Technology in Computer Science',
    details: ['7.6 CGPA | Honours'],
  },
  {
    period: '2004 - 2018',
    institution: 'RRMB Gujrati school, Indore',
    degree: 'Higher Secondary Education',
    details: [
      'Class 12th - 80.0% | Class 10th - 76%',
      'Completed Higher Secondary Education with a focus on Science and Mathematics.',
    ],
  },
];

export const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nageshgupta01/',
    title: 'LinkedIn of Nagesh Gupta',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/nageshgg',
    title: 'GitHub of Nagesh Gupta',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@nageshgupta0806',
    title: 'Medium Blog Site of Nagesh Gupta',
  },
];

export const experienceCounter = {
  years: '6+',
  label: ['years of', 'programming', 'experience'],
};
