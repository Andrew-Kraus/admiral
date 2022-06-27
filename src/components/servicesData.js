import { v4 as uuidv4 } from "uuid";

const servicesData = [
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + '/services.png',
        title: 'Пошив формы оптом и в розницу',
        text: 'Пошив любой сложности в сжатые сроки, с гарантией 30 дней.',
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + '/suit.png',
        title: 'Пошив гражданской одежды',
        text: 'Пока мы не занимаемся гражданской одеждой, но в скором времени начнем.',
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + '/medal.png',
        title: 'Изготовление шевронов и нашивок',
        text: 'А также колодок, планок, погон и вышивка канителью. Гарантия 30 дней',
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + '/officer.png',
        title: 'Для высшего офицерского состава',
        text: 'Пошив любой сложности в сжатые сроки, с гарантией 30 дней.',
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + '/inno.png',
        title: 'Для иностранных военнослужащих',
        text: 'Пошив любой сложности в сжатые сроки, с гарантией 30 дней.',
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + '/repair.png',
        title: 'Ремонт формы и прочего',
        text: 'Ремонт любой сложности в сжатые сроки, с гарантией 30 дней.',
    },
];

export default servicesData;