import { v4 as uuidv4 } from "uuid";

const militaryData = [
    {
        id: uuidv4(),
        title: 'Китель церемониальный (РПК)',
        img: process.env.PUBLIC_URL + '/ceremonia-catalog.png',
        price: '75 000р',
    },
    {
        id: uuidv4(),
        title: 'Тужурка адмиральская',
        img: process.env.PUBLIC_URL + '/tujurka-admiral.png',
        price: '65 000р',
    },
    {
        id: uuidv4(),
        title: 'Китель генеральский',
        img: process.env.PUBLIC_URL + '/kitel-gen.png',
        price: '65 000р',
    },
    {
        id: uuidv4(),
        title: 'Китель повседневный ФСО',
        img: process.env.PUBLIC_URL + '/kitel-povsed.png',
        price: '13 000р',
    },
    {
        id: uuidv4(),
        title: 'Куртка офисная на молнии',
        img: process.env.PUBLIC_URL + '/kurtka-molnia.png',
        price: '3500р',
    },
    {
        id: uuidv4(),
        title: 'Куртка офисная на пуговицах',
        img: process.env.PUBLIC_URL + '/kurtka-pugovici-catalog.png',
        price: '4000р',
    },
    {
        id: uuidv4(),
        title: 'Офисная форма ВС РФ',
        img: process.env.PUBLIC_URL + '/vsrf-catalog.png',
        price: 'От 5000р',
    },
    {
        id: uuidv4(),
        title: 'Офисная форма ВС РФ с коротким рукавом',
        img: process.env.PUBLIC_URL + '/short-vsrf.png',
        price: 'От 5000р',
    },
    {
        id: uuidv4(),
        title: 'Офисная форма МЧС (новый образец) с шевроном',
        img: process.env.PUBLIC_URL + '/mchs-catalog-kostum.png',
        price: '7000р',
    },
    {
        id: uuidv4(),
        title: 'Костюм парадный ВМФ (черный)',
        img: process.env.PUBLIC_URL + '/vmf-catalog.png',
        price: '25 000p',
    },
    {
        id: uuidv4(),
        title: 'Костюм парадный ВМФ (белый)',
        img: process.env.PUBLIC_URL + '/vmf-white-catalog.png',
        price: '25 000р',
    },
    {
        id: uuidv4(),
        title: 'Кадетская форма парадная',
        img: process.env.PUBLIC_URL + '/kadet-parad.png',
        price: 'от 9500р',
    },
    {
        id: uuidv4(),
        title: 'Кадетская форма',
        img: process.env.PUBLIC_URL + '/kadet-catalog.png',
        price: '6000р',
    },
    {
        id: uuidv4(),
        title: 'Брюки парадные с кантом',
        img: process.env.PUBLIC_URL + '/bruki.png',
        price: '4000р',
    },
];

export default militaryData;