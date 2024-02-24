type TSection = {
    p: string;
    h2: string;
    content?: string;
};

type TConfig = {
    html: {
        title: string;
        fullName: string;
        email: string;
    };
    hero: {
        name: string;
        p: string[];
    };
    contact: {
        form: {
            name: {
                span: string;
                placeholder: string;
            };
            email: {
                span: string;
                placeholder: string;
            };
            message: {
                span: string;
                placeholder: string;
            };
        };
    } & TSection;
    sections: {
        about: Required<TSection>;
        experience: TSection;
        feedbacks: TSection;
        works: Required<TSection>;
    };
};

export const config: TConfig = {
    html: {
        title: "Christian Zaragoza — Portfolio",
        fullName: "Christian Zaragoza",
        email: "christianrobertozarargoza@gmail.com",
    },
    hero: {
        name: "Zaragoza Software Developer",
        p: ["Desarrollo de aplicaciones web", "Desarrollo de aplicaicones multi plataforma"],
    },
    contact: {
        p: "Pongase en contacto",
        h2: "Contacto.",
        form: {
            name: {
                span: "STIP ''Soluciones Informáticas''",
                placeholder: "¿Cuál es su nombre?",
            },
            email: { span: "Su Email", placeholder: "¿Cuál es su E-Mail?" },
            message: {
                span: "Su Mensage",
                placeholder: "¿Cuál es su mensaje?",
            },
        },
    },
    sections: {
        about: {
            p: "Introducción",
            h2: "Descripción general.",
            content: `Soy un desarrollador de software capacitado con experiencia en C# y Python, experiencia en marcos como React, Node.js y Three.js. Aprendo rápido y colaboro estrechamente con los clientes para crear soluciones eficientes, escalables y fáciles de usar que resuelvan problemas del mundo real. ¡Trabajemos juntos para hacer realidad tus ideas!`,
        },
        experience: {
            p: "Mis trabajos",
            h2: "Experiencia Laboral.",
        },
        feedbacks: {
            p: "Que piensan nuestros clientes",
            h2: "Testimonios.",
        },
        works: {
            p: "Mi Trabajo",
            h2: "Proyectos.",
            content: `Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos de mi trabajo del mundo real. Cada proyecto se describe brevemente con enlaces a repositorios de código y demostraciones en vivo. Refleja mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de forma eficaz.`,
        },
    },
};

