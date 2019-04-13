import isValidDate from '../../utils/isValidDate';
export default function czId(value) {
    if (!/^\d{9,10}$/.test(value)) {
        return false;
    }
    let year = 1900 + parseInt(value.substr(0, 2), 10);
    const month = parseInt(value.substr(2, 2), 10) % 50 % 20;
    const day = parseInt(value.substr(4, 2), 10);
    if (value.length === 9) {
        if (year >= 1980) {
            year -= 100;
        }
        if (year > 1953) {
            return false;
        }
    }
    else if (year < 1954) {
        year += 100;
    }
    if (!isValidDate(year, month, day)) {
        return false;
    }
    if (value.length === 10) {
        let check = parseInt(value.substr(0, 9), 10) % 11;
        if (year < 1985) {
            check = check % 10;
        }
        return `${check}` === value.substr(9, 1);
    }
    return true;
}