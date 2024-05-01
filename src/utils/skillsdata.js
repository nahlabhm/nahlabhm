import frontendIcon from '../assets/icons8-code-64.png';
import backendIcon from '../assets/icons8-backend-64.png';
import toolsIcon from '../assets/icons8-tools-64.png';
import softIcon from '../assets/icons8-learning-64.png';

export const SKILLS = [
    {
      title: "Frontend",
      icon: frontendIcon,
      skills: [
        { skill: "HTML", percentage: "85%" },
        { skill: "CSS", percentage: "75%" },
        { skill: "JavaScript", percentage: "60%" },
        { skill: "Flutter", percentage: "73%" }

      ],
    },
    {
      title: "Backend",
      icon: backendIcon,
      skills: [
        { skill: "Node.js", percentage: "60%" },
        { skill: "Express.js", percentage: "55%" },
        { skill: "MongoDB", percentage: "75%" },
        { skill: "MySQl", percentage: "85%" },
        { skill: "PostgreSQL", percentage: "75%" },
        { skill: "SpringBoot", percentage: "60%" },
        { skill: "PHP", percentage: "60%" }


      ],
    },
    {
      title: "Tools",
      icon: toolsIcon,
      skills: [
        { skill: "Git", percentage: "80%" },
        { skill: "VSCode", percentage: "85%" },
        { skill: "Webpack", percentage: "60%" }
      ],
    },
    {
      title: "Soft Skills",
      icon: softIcon,
      skills: [
        { skill: "Communication", percentage: "55%" },
        { skill: "Problem Solving", percentage: "75%" },
        { skill: "Time Management", percentage: "65%" }
      ],
    },
  ];