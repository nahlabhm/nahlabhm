
import mobileIcon from '../assets/icons8-mobile-64.png';
import webIcon from '../assets/icons8-web-64.png';
import projectIcon from '../assets/mockrocket-capture (1).png';
import htmlIcon from '../assets/html-1.svg';
import jsIcon from '../assets/javascript-1.svg';
import cssIcon from '../assets/css-3.svg';
import projectIcon2 from '../assets/screenshot.png';
import projectmIcon1 from '../assets/mockrocket-capture (5).png';
import projectmIcon4 from '../assets/dental.PNG';
import projectmIcon6 from '../assets/mockrocket-capture.png';
import projectmIcon5 from '../assets/1704727805653.jpg';
import flutterIcon from '../assets/flutter.svg';
import nodejsIcon from '../assets/nodejs-3.svg';
import expressjsIcon from '../assets/icons8-express-js.svg';
import mongodbIcon from '../assets/icons8-mongodb.svg';
import jwtIcon from '../assets/icons8-jwt.svg';
import dartIcon from '../assets/icons8-dart.svg';
import projectmIcon7 from '../assets/253333838-4b78932f-0817-40a8-8adc-ef1d60d21d4d.png';
import symfonyIcon from '../assets/symfony.svg';
import mysqlIcon from '../assets/sqlite.svg';
import bootstrapIcon from '../assets/bootstrap-5-1.svg';

export const PROJECT = [
    {
      title: "Web",
      icon: webIcon,
      projects: [
        { 
        project: projectIcon, 
        description: "Frontend pharmaceutical web application" ,
        projectskills : [ 
          htmlIcon ,
          jsIcon ,
          cssIcon,
          ], 
          lien:"https://nahlabhm.github.io/pharma/"
         },
         { 
          project: projectIcon2, 
          description: "Frontend Travel  web application" ,
          projectskills : [ 
            htmlIcon ,
            jsIcon ,
            cssIcon,
            ], 
           },
           { 
            project: projectmIcon4, 
            description: "Creation and development of a frontend web application for a dental " ,
            projectskills : [ 
              htmlIcon ,
              jsIcon ,
              cssIcon,
              ], 
              lien:"https://nahlabhm.github.io/dentaire/"
            },   
            
             { 
              project: projectmIcon7, 
              description: "Frontend & backend managing IT equipment web application " ,
              projectskills : [ 
                bootstrapIcon ,
                symfonyIcon ,
                mysqlIcon,
                jwtIcon
                ], 
                lien:"https://github.com/nahlabhm/gestion-materiel-Informatique-Symfony?tab=readme-ov-file"
               },   
                 ],
    },
    {
        title: "Mobile",
        icon: mobileIcon,
        projects: [
          { 
            project: projectmIcon1, 
            description: "Frontend make up Mobile Application : 5 Screens" ,
            projectskills : [ 
              flutterIcon ,
              dartIcon
              ], 
             },
             { 
              project: projectmIcon6, 
              description: "Frontend & Backend white-label mobile e-commerce application 26 Screens" ,
              projectskills : [ 
               
            flutterIcon ,
            nodejsIcon ,
            expressjsIcon,
            mongodbIcon,
            jwtIcon

                ], 
               },
               { 
                project: projectmIcon5, 
                description: "Frontend Car Mobile Application : 3 Screens" ,
                projectskills : [ 
                  flutterIcon ,
                  dartIcon
                  ], 
                 },      
                  ],
      },

]