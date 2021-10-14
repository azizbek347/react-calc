const hasSpareDot = (str = '') => str.match(/\./g) === null ? false : str.match(/\./g).length > 1 ? true : false;
// {
//     const matchRes = str.match(/\./g);
//     console.log(matchRes);
//     if(matchRes === null) return false;
//     return matchRes.length > 1 ? true : false; 
// };

const removeSpareDot = (str = '') => {
    const re = /(\+|-|\*|\/+)/;
    const lastNumber = str.split(re).slice(-1)[0];
    str = lastNumber === '.' ? `${str.slice(0, -1)}0${lastNumber}` : str;
    return hasSpareDot(lastNumber) ? str.slice(0, -1) : str;
}

const clearSpareOperator = (str = '') => str.slice(-1).match(/(\+|-|\*|\/+)/) ? str.slice(0, -1) : str;

const checkForZeroOrInfinity = (str = '') => str === '0' || str === 'Infinity';

export {
    hasSpareDot, removeSpareDot, clearSpareOperator, checkForZeroOrInfinity
};