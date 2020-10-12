export const getSum = (arr) => {
    var sum = arr.reduce((a, b) => {
        return a + b;
    }, 0);
    return sum;
};

export const calculateGrowthRate = (past, present) => {
    const growthRate = ((present - past) / past) * 100;
    return growthRate;
};
