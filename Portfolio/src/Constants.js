// Skills Section Logo's
import htmlLogo from './assets/Tech_logo/html.png';
import cssLogo from './assets/Tech_logo/css.png';
import javascriptLogo from './assets/Tech_logo/javascript.png';
import reactjsLogo from './assets/Tech_logo/reactjs.png';
import tailwindcssLogo from './assets/Tech_logo/tailwindcss.png';
import nodejsLogo from './assets/Tech_logo/nodejs.png';
import cLogo from './assets/Tech_logo/c.png';
import cppLogo from './assets/Tech_logo/cpp.png';
import javaLogo from './assets/Tech_logo/java.png';
import pythonLogo from './assets/Tech_logo/python.png';
import githubLogo from './assets/Tech_logo/github.png';
import vscodeLogo from './assets/Tech_logo/vscode.png';
import figmaLogo from './assets/Tech_logo/figma.png';
// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import geminiClone from './assets/work_logo/Gemini-clone.png';
import swiggyClone from './assets/work_logo/Swiggy_logo.png';
import wasteAnalyzer from './assets/work_logo/waste_analyzer.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ], 
  },
  {
    title: 'Backend',
    skills: [
      {name : 'Node JS' , logo: nodejsLogo },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      role: "Frontend",
      desc: "Developed dynamic and scalable web applications using HTML, CSS, Javascript and React.js frontend development. ",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
      ],
    },
   
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Quantum University",
      date: "10th aug 2024-28",
      grade: "8.05 cgpa",
      desc: " Currently,I am in 2nd year. I am persuing btech cse in Quantum University,Roorkee, Uttarkhand. My first year of experience was very amazing and completed it with 8.05cgpa.",
      degree: "Bachelor of Technology- Btech(Computer Science)",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Chinmaya Vidyalaya",
      date: "Aug 2022 - Aug 2024",
      grade: "80%",
      desc: "I completed my class 12 education from Chinmaya Vidyalaya, Bokaro,jharkhand, under the CBSE board , where i studied Physics, Chemistry, Mathematics (PCM) with Physical education.",
      degree: "CBSE(XII) - PCM with Physical Education.",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Mount Litera Zee School",
      date: "Apr 2020 - March 2022",
      grade: "97%",
      desc: "I completed my class 10 education from Mount Litera Zee School, Rikhia,Deoghar,Jharkhand  under the CBSE board, where I studied Science with Computer application.",
      degree: "CBSE(X)-science with computer application",
    },
    
  ];
  
  export const projects = [

    {
      id: 0,
      title: "Gemini-Clone",
      image: geminiClone,
      description:
        "A powerful and user-friendly React.js application designed to search any topic on this",
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "",
      webapp: "",
    },
    {
      id: 1,
      title: "Swiggy-Clone",
      image:swiggyClone,
      description:
        "A react js project where i have added the items of swiggy.",
      
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    {
      id: 2,
      title: "Waste Analyzer",
      image: wasteAnalyzer,
      description:
        "A project that determines whether the waste is recycled or not.",
        tags: ["Python", "HTML", "CSS", "JavaScript"],
        github: "",
        webapp: "",
    },
   
    
    
   
  ];  