import {
    mobile,
    backend,    
    creator,
    web,
    java,
    javascript,
    springboot, 
    html,
    css,
    reactjs,  
    nodejs,
    oracle,
    mongodb,
    git,  
    blender,
    sketchup,
    lumion,    
    freelancer,
    cic,    
    todo,    
    politicaSeguridadPaciente,
    usoAntibioticos,
    reglamentoSalas,
    participacionSocial
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "documents",
      title: "Documentos",
    },
    {
      id: "videos",
      title: "Videos",
    },
  ];
  
  const standards = [
    {
      id: "human-resources",
      title: "Talento Humano",
      icon: web,      
    },
    {
      id: "infrastructure",
      title: "Infraestructura",
      icon: mobile,      
    },
    {
      id: "equipment",
      title: "Dotación",
      icon: backend,
    },
    {
      id: "medicines",
      title: "Medicamentos",
      icon: creator,
    },
    {
      id: "priority_processes",
      title: "Procesos Prioritarios",
      icon: creator,
    },
    {
      id: "clinic_history",
      title: "Historia Clínica",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },    
    {
      name: "Oracle",
      icon: oracle,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Blender",
      icon: blender,
    },
    {
      name: "Sketchup",
      icon: sketchup,
    },
    {
      name: "Lumion",
      icon: lumion,
    },
  ];
  
  const humanResources = [
    {
      title: "Capacidad Instalada",      
      icon: cic,
      iconBg: "#383E56",
      date: "Septiembre 2023",
      points: [
        
      ],
    },
    {
      title: "Programa de Capacitaciones",
      icon: freelancer,
      iconBg: "#E6DEDD",
      date: "Septiembre 2023",
      points: [             
      ],
    },
       
  ];
  
  const testimonials = [
    {
      testimonial:
        "Los renders son impresionantes.",
      name: "María Carrillo",
      designation: "Representante Legal",
      company: "Cirugía Plástica La Castellana",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Las aplicaciones web implementadas han optimizado increíblemente los procesos",
      name: "Edilberto Hernandez",
      designation: "Representante Legal",
      company: "Clínica Internacional de Cirugía",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Los desarrollos han permitido mejorar la eficiencia en la prestación de los servicios",
      name: "Yohanna Carvajal",
      designation: "Supervisora de Contratos",
      company: "Subred Sur Occidente E.S.E.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [   
    {
      name: "Today Board",
      description:
        "Aplicación web que permite realizar un listado de actividades diarias de manera sencilla y organizada.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "illustrator",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://jjdabid.github.io/today-board/",
    },        
  ];

  const renders = [              
    {
      name: "Política de Seguridad del Paciente",
      description:
        "reducir errores médicos, mejorar calidad de atención y salvar vidas.",
      tags: [
        {
          name: "SeguridadDelPaciente",
          color: "blue-text-gradient",
        },
        {
          name: "PolíticasSanitarias",
          color: "green-text-gradient",
        },
        {
          name: "CuidadosMédicosSeguros",
          color: "pink-text-gradient",
        },        
      ],
      image: politicaSeguridadPaciente,
      source_code_link: "https://www.youtube.com/watch?v=tOYsOjvS-oY",
    },
    {
      name: "Uso Adecuado de Antibióticos",
      description:
        "12 recomendaciones clave para el uso apropiado de antibióticos, promoviendo su efectividad y combatiendo la resistencia bacteriana.",
      tags: [
        {
          name: "#Antibióticos",
          color: "blue-text-gradient",
        },
        {
          name: "PrevenciónResistenciaBacteriana",
          color: "green-text-gradient",
        },
        {
          name: "AntibióticosResponsables",
          color: "pink-text-gradient",
        },        
      ],
      image: usoAntibioticos,
      source_code_link: "https://www.youtube.com/watch?v=z_av_yCUow4",
    },
    {
      name: "Reglamento de Salas de Cirugía",
      description:
        "Normas clave en las salas de cirugía para garantizar prácticas seguras y estándares de atención en procedimientos quirúrgicos.",
      tags: [
        {
          name: "SalasDeCirugía",
          color: "blue-text-gradient",
        },
        {
          name: "NormasDeSalas",
          color: "green-text-gradient",
        },
        {
          name: "SeguridadDelPaciente",
          color: "pink-text-gradient",
        },        
      ],
      image: reglamentoSalas,
      source_code_link: "https://www.youtube.com/watch?v=xQReUxn1M4M",
    },
    {
      name: "Política de Participación Social en Salud",
      description:
        "La importancia de la participación social en políticas de salud, empoderando a la comunidad para mejorar la atención y resultados.",
      tags: [
        {
          name: "ParticipaciónSocial",
          color: "blue-text-gradient",
        },
        {
          name: "PolíticasDeSalud",
          color: "green-text-gradient",
        },
        {
          name: "ComunidadYSalud",
          color: "pink-text-gradient",
        },        
      ],
      image: participacionSocial,
      source_code_link: "https://www.youtube.com/watch?v=JCZXfG8u_H4",
    }
  ];
  
  export { standards, technologies, humanResources, testimonials, projects, renders };