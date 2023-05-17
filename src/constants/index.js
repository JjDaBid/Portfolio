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
    scotiabank,    
    freelancer,
    cic,
    consultorio1,
    alimentos,
    todo,
    consultorio2,
    oficina1,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Quién Soy",
    },
    {
      id: "work",
      title: "Experiencia",
    },
    {
      id: "projects",
      title: "Proyectos",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Desarrollador web",
      icon: web,
    },
    {
      title: "Desarrollador FullStack",
      icon: mobile,
    },
    {
      title: "Diseñador UX/UI",
      icon: backend,
    },
    {
      title: "Diseñador 3D",
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
  
  const experiences = [
    {
      title: "Desarrollador Web",
      company_name: "Clínica Internacional de Cirugía",
      icon: cic,
      iconBg: "#383E56",
      date: "Septiembre 2021 - Actual",
      points: [
        "Desarrollo y mantenimiento del software de gestión de inventarios de farmacia.",
        "Desarrollo y mantenimiento del modulo de registro de pacientes.",
        "Diseño y elaboración de protocolos para optimizar procesos y procedimientos.",
        "Diseño y creación de campañas y materiales audiovisuales para promoción y difusión."
      ],
    },
    {
      title: "Diseño y Render de Arquitectura",
      company_name: "Freelancer",
      icon: freelancer,
      iconBg: "#E6DEDD",
      date: "Junio 2022 - Actual",
      points: [
        "Creación de modelos tridimensionales y representación visual realista de instalaciones físicas.",
        "Renderizado y animación de modelos 3D."        
      ],
    },
    {
      title: "CCA - Customer Care Advisor",
      company_name: "Gestión de Servicios Globales SCOTIABANK",
      icon: scotiabank,
      iconBg: "#E6DEDD",
      date: "Febrero 2020 - Marzo 2021",
      points: [
        "Identificar y resolver requerimientos bancarios de los clientes de Scotiabank en Canadá.",
        " brindar soluciones personalizadas dando como resultado experiencias memorables para los clientes."        
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
        "Los desarrollo han permitido mejorar la eficiencia en la prestación de los servicios",
      name: "Yohanna Carvajal",
      designation: "Supervisora de Contratos",
      company: "Subred Sur Occidente E.S.E.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Alimentos",
      description:
        "Aplicación web que permite calcular las calorías de los alimentos en base a su valor nutricional, además de brindarte la capacidad de guardar, editar y eliminar los alimentos de forma sencilla.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "swing",
          color: "green-text-gradient",
        },
        {
          name: "photoshop",
          color: "pink-text-gradient",
        },        
      ],
      image: alimentos,
      source_code_link: "https://github.com/JjDaBid/alimentoscalorias",
    },
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
      name: "Consultorio Dr Ramos",
      description:
        "Render de un consultorio de cirugía plástica y reconstructiva.",
      tags: [
        {
          name: "sketchup",
          color: "blue-text-gradient",
        },
        {
          name: "lumion",
          color: "green-text-gradient",
        },
        {
          name: "blender",
          color: "pink-text-gradient",
        },        
      ],
      image: consultorio1,
      source_code_link: "https://www.youtube.com/watch?v=2TsydqPAuXk",
    },
    {
      name: "Consultorio Cirugía Plástica y Reconstructiva",
      description:
        "Render de un consultorio de cirugía plástica y reconstructiva.",
      tags: [
        {
          name: "sketchup",
          color: "blue-text-gradient",
        },
        {
          name: "lumion",
          color: "green-text-gradient",
        },
        {
          name: "blender",
          color: "pink-text-gradient",
        },        
      ],
      image: consultorio2,
      source_code_link: "https://www.youtube.com/watch?v=8vGAqTEQ3i4",
    },
    {
      name: "Ruta de Evacuación",
      description:
        "Ruta de evacuación de una oficina.",
      tags: [
        {
          name: "sketchup",
          color: "blue-text-gradient",
        },
        {
          name: "lumion",
          color: "green-text-gradient",
        },
        {
          name: "blender",
          color: "pink-text-gradient",
        },        
      ],
      image: oficina1,
      source_code_link: "https://youtu.be/fmp9kdMXs_s",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, renders };