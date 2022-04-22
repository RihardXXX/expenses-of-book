
const addZero = (number) => {
    return number < 10 ? `0${number}` : number;
};

const getFormattedDate = (date) => {
    return `${addZero(date.getDate())} - ${addZero(date.getMonth() + 1)} - ${date.getFullYear()}`;
};

export {
    getFormattedDate,
}