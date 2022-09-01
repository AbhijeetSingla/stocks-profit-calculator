function checkPL(initialValue, quantity, currentAmount) {
    const initialTotal = Number(initialValue) * Number(quantity);
    const currentTotal = Number(currentAmount) * Number(quantity);
    const pl = Math.abs(initialTotal - currentTotal);
    const object = {
        profit: Number(initialValue) < Number(currentAmount) ? true : false,
        amount: Math.abs(Number(initialValue) - Number(currentAmount)),
        totalAmount: pl,
        percent: (currentTotal / initialTotal) * 100
    }

    return object;
}

export { checkPL };