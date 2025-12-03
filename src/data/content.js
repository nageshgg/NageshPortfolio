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
  { alt: 'HTML5', src: '/images/icon/800px-Devicon-html5-plain-wordmark.svg.png' },
  { alt: 'CSS3', src: '/images/icon/CSS3_logo_and_wordmark.svg.png' },
  { alt: 'Javascript', src: '/images/icon/javascript.png' },
  { alt: 'Python', src: '/images/icon/python.png' },
  { alt: 'C++', src: '/images/icon/c++.webp' },
  { alt: 'SQL', src: '/images/icon/sql.png' },
  { alt: 'Java', src: '/images/icon/java.png' },
];

export const laptopTools = [
  { alt: 'NodeJS', src: '/images/icon/node.png' },
  { alt: 'ReactJS', src: '/images/icon/react.png' },
  { alt: 'MongoDB', src: '/images/icon/mongodb.png' },
  { alt: 'MySQL', src: '/images/icon/mysql.webp' },
];

export const mobileProgrammingLanguages = [
  ...laptopProgrammingLanguages,
  { alt: 'Solidity', src: '/images/icon/solidity.png' },
  { alt: 'Lua', src: '/images/icon/lua.png' },
];

export const mobileTools = [
  { alt: 'NodeJS', src: '/images/icon/node.png' },
  { alt: 'ReactJS', src: '/images/icon/react.png' },
  { alt: 'AngularJS', src: '/images/icon/angular.png' },
  { alt: 'MongoDB', src: '/images/icon/mongodb.png' },
  { alt: 'MySQL', src: '/images/icon/mysql.webp' },
  { alt: 'AWS', src: '/images/icon/aws.png' },
];

export const marqueeSkillsLeft = [
  'Python',
  'JavaScript',
  'HTML',
  'CSS',
  'C++',
  'Java',
  'SQL',
];

export const marqueeSkillsRight = [
  'FastAPI',
  'React.js',
  'Angular',
  'MongoDB',
  'MySQL',
  'AI',
  'ML',
  'NLP',
  'Git',
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
  'As a Data Scientist at DXC Technology, I led a team of 4 members to develop and deploy a Employee Migration tool that utilized machine learning algorithms to predict employee attrition and migration patterns.',
  'This tool helped the organization to proactively manage its workforce and reduce attrition rates.',
];

const lentraDescription = [
  'As a Software Engineer/ Data Analyst at Lentra AI, I had the exciting opportunity to delve into the fintech domain, specifically',
  'A significant aspect of my role involved creating SQL-based analytical content. This content revolved around analyzing and visualizing Reach, Retention, and Revenue metrics that were relevant to businesses operating in the blockchain space.',
];

const SpeedNetworkNow = [
  'As an intern at Speed Network Now, I worked on an AI culling software that is designed to help photographers cull their images automatically. '
  ];



export const experiencesPrimary = [
  {
    date: 'Nov 2025 - Present',
    location: 'London, United Kingdom',
    company: 'Speed Network Now',
    role: 'AI Automation',
    description: SpeedNetworkNow,
    techStack:
      'Python, Flask, Lua, Node.js, ReactJS, AngularJS, ElectronJS, JavaScript, TypeScript, HTML5, CSS, Computer Vision, Google Cloud Platform (GCP), Microsoft Azure, Machine Learning, MongoDB, Ruby on Rails',
  },
  {
    date: 'March 2022 - September 2023',
    location: 'Hyderabad, India',
    company: 'DXC Technology.',
    role: 'Data Scientist',
    description: dxcDescription,
    techStack: 'Python, React, TypeScript, Machine Learning, Azure, SQL, Power BI, Tableau, Docker',
  },
  {
    date: 'July 2020 - March 2022',
    location: '',
    company: 'Lentra AI',
    role: 'Software Engineer/ Data Analyst',
    description: lentraDescription,
    techStack: 'Machine Learning, Python, Java, React, Angular, SQL, HTML, CSS, Data Analysis',
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
    stack: 'Python, LLM, RAG, GenAI, Laingchain, Huggingface, React Js',
    summary: 'Quering the Reasearch Paper using RAG and LLM',
  },{
    title: 'Crick Vision',
    link: 'https://github.com/nageshgg/CricketVision',
    image: '/images/crickvision.png',
    stack: 'Python, LLM, RAG, GenAI, Laingchain, Huggingface, React Js',
    summary: 'Quering the Reasearch Paper using RAG and LLM',
  },{
    title: 'Churn Prediction',
    link: 'https://github.com/nageshgg/customer-churn-prediction',
    image: '/images/churnprediction.png',
    stack: 'Python, LLM, RAG, GenAI, Laingchain, Huggingface, React Js',
    summary: 'Quering the Reasearch Paper using RAG and LLM',
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
    link: 'https://bit.ly/',
    image: 'images/blog1.png',
  },
  {
    title: 'Understanding Convolutional Neural Networks',
    date: 'Sep 15, 2025',
    link: 'https://bit.ly/',
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
