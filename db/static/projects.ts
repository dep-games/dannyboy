const projects: Project[] = [
  {
    title: {
      en: "Sudoku Puzzle",
      es: "Sudoku Puzzle",
    },
    endpoint: "sudoku-puzzle",
    images: [
      {
        src: "/pics/projects/sudoku/1.png",
        alt: "",
      },
      {
        src: "/pics/projects/sudoku/2.png",
        alt: "",
      },
      {
        src: "/pics/projects/sudoku/3.png",
        alt: "",
      },
      {
        src: "/pics/projects/sudoku/4.png",
        alt: "",
      },
      {
        src: "/pics/projects/sudoku/5.png",
        alt: "",
      }
    ],
    "description": {
      "en": "A feature-rich Sudoku game for Android offering multiple themes and support for 30 different languages. The classic puzzle game with customizable settings, intuitive controls, and a sleek interface. Perfect for both beginners and advanced players.",
      "es": "Un juego de Sudoku para Android con múltiples temas y soporte para 30 idiomas diferentes. El clásico juego de rompecabezas con configuraciones personalizables, controles intuitivos y una interfaz elegante. Perfecto tanto para principiantes como para jugadores avanzados."
    },
    repoLink: "",
    demoLink: "https://play.google.com/store/apps/details?id=com.dannyboydev.sudokupuzzle",
    status: "completed",
    techStack: [
      { 
        name: "Dart",
        url: "https://dart.dev/"
      },
      {
        name: "Flutter",
        url: "https://flutter.dev/"
      },
      {
        name: "SQLite",
        url: "https://www.sqlite.org/index.html",
      }
    ],
  },
  {
    title: {
      en: "Repair Management Software",
      es: "Software de Gestión de Reparación de Equipos",
    },
    endpoint: "pos",
    images: [
      {
        src: "/pics/projects/pos/1.jpg",
        alt: "",
      },
      {
        src: "/pics/projects/pos/2.jpg",
        alt: "",
      },
      {
        src: "/pics/projects/pos/3.png",
        alt: "",
      }
    ],
    description: {
      en: "A cross-platform application developed with Flutter for managing the repair of technological devices. It allows users to register devices, add images, and generate receipts, with cloud storage for remote access. The system supports multiple users with different permission levels, ensuring efficient and secure administration.",
      es: "Aplicación multiplataforma desarrollada en Flutter para la gestión de equipos tecnológicos en reparación. Permite registrar dispositivos, añadir imágenes y generar recibos, con almacenamiento en la nube para acceso remoto. Soporta múltiples usuarios con diferentes niveles de permisos, facilitando una administración eficiente y segura.",
    },
    repoLink: "",
    demoLink: "",
    status: "completed",
    techStack: [
      { 
        name: "Dart",
        url: "https://dart.dev/"
      },
      {
        name: "Flutter",
        url: "https://flutter.dev/"
      },
      {
        name: "SQLite",
        url: "https://www.sqlite.org/index.html",
      }
    ],
  },
  {
    title: {
      en: "Polish Notation Calculator Application",
      es: "Aplicación de Calculadora con Notación Polaca",
    },
    endpoint: "calculator",
    images: [
      {
        src: "/pics/projects/calculator/1.png",
        alt: "Testimonial Grid Preview",
      }
    ],
    description: {
      en: "A Java-based calculator application that uses Polish notation (also known as prefix notation) for arithmetic operations.",
      es: "Aplicación de calculadora basada en Java que utiliza notación polaca (también conocida como notación prefija) para operaciones aritméticas.",
    },
    repoLink: "",
    status: "completed",
    techStack: [
      {
        name: "Java",
        url: "https://www.java.com/",
      }
    ],
  },
];

export default projects;
