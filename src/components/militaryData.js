import { v4 as uuidv4 } from "uuid";

const militaryData = [
    {
        id: uuidv4(),
        title: 'Тужурка',
        img: process.env.PUBLIC_URL + '/tujurka.png',
        price: '15 000р',
    },
    {
        id: uuidv4(),
        title: 'Офисная форма МЧС с шевроном',
        img: process.env.PUBLIC_URL + '/mchs-catalog.png',
        price: '7000р',
    },
    {
        id: uuidv4(),
        title: 'Жакет повседневный',
        img: process.env.PUBLIC_URL + '/jaket-mchs.png',
        price: '13 000р',
    },
    {
        id: uuidv4(),
        title: 'Офисная форма для женщин на пуговицах',
        img: process.env.PUBLIC_URL + '/woman-office.png',
        price: '7000р',
    },
    {
        id: uuidv4(),
        title: 'Куртка офисная на молнии',
        img: process.env.PUBLIC_URL + '/kurtka.png',
        price: '3500р',
    },
    {
        id: uuidv4(),
        title: 'Куртка офисная на пуговицах',
        img: process.env.PUBLIC_URL + '/kurtka-pugovici.png',
        price: '4000р',
    },
    {
        id: uuidv4(),
        title: 'Китель',
        img: process.env.PUBLIC_URL + '/kitel.png',
        price: '15 000р',
    },
    {
        id: uuidv4(),
        title: 'Костюм парадный ВМФ РФ (белый)',
        img: process.env.PUBLIC_URL + '/kitel-vmf.png',
        price: '25 000р',
    },
    {
        id: uuidv4(),
        title: 'Китель генеральный',
        img: process.env.PUBLIC_URL + '/general.png',
        price: '55 000р',
    },
    {
        id: uuidv4(),
        title: 'Китель церемониальный (РПК)',
        img: process.env.PUBLIC_URL + '/ceremonia.png',
        price: '75 000р',
    },
    {
        id: uuidv4(),
        title: 'Куртка МЧС',
        img: process.env.PUBLIC_URL + '/mchs-kurtka.png',
        price: '11 500р',
    },
];

export default militaryData;