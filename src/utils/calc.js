export const calcMonthPay = (price, initPay, months, percent) => {
    const monthPay = Math.round((price - initPay) * ((percent * Math.pow((1 + percent), months)) / (Math.pow((1 + percent), months) - 1)));
    const totalSum = initPay + months * monthPay;
    const result = {monthPay, totalSum};

    return result;
};

export const convertNumToStr = (num) => {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};  

export const convertStrToNum = (str) => {
    return Number(str.replace(/\s+/g, ''));
};  