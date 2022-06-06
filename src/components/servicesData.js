import { v4 as uuidv4 } from "uuid";

const servicesData = [
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + './services.png',
        title: 'Пошив формы оптом и в розницу',
        text: 'Пошив любой сложности в сжатые сроки, с гарантией 30 дней',
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + './services.png',
        title: 'Пошив гражданской одежды',
        text: 'Пошив любой сложности в сжатые сроки, с гарантией 30 дней',
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + './services.png',
        title: 'Изготовление колодок и планок',
        text: 'Пошив любой сложности в сжатые сроки, с гарантией 30 дней',
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + './services.png',
        title: 'Для высшего офицерского состава',
        text: 'Пошив любой сложности в сжатые сроки, с гарантией 30 дней',
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + './services.png',
        title: 'Для иностранных военнослужащих',
        text: 'Пошив любой сложности в сжатые сроки, с гарантией 30 дней',
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + './services.png',
        title: 'Ремонт формы и прочего',
        text: 'Пошив любой сложности в сжатые сроки, с гарантией 30 дней',
    },
];

export default servicesData;