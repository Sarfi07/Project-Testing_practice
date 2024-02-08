export default function analyzeArray(arr) {
    const average = findAverage(arr);
    const min = findMin(arr);
    const max = findMax(arr);

    return {
        average,
        min,
        max,
        length: arr.length
    }
}

// console.log(analyzeArray([]))
function findAverage(arr) {
    if (!arr.length) return null;
    const sum = arr.reduce((acc, val) => acc + val, 0);  
    return sum / arr.length;
}

function findMin(arr) {
    if (!arr.length) return null;
    return Math.min(...arr);
}

function findMax(arr) {
    if (!arr.length) return null
    return Math.max(...arr);
}
