function checkPL(initialValue, quantity, currentAmount) {
    const initialTotal = Number(initialValue) * Number(quantity);
    const currentTotal = Number(currentAmount) * Number(quantity);
    const pl = Math.abs(initialTotal - currentTotal);
    const percentage = initialValue < currentAmount ? 100 - (currentTotal/initialTotal)*100 : 100 - (initialTotal/currentTotal)*100 
    const object = {
        profit: Number(initialValue) < Number(currentAmount) ? true : false,
        amount: Math.abs(Number(initialValue) - Number(currentAmount)),
        totalAmount: pl,
        percent: Math.round((Math.abs(percentage) + Number.EPSILON) * 100) / 100
    }

    return object;
}

export { checkPL };