export const calcTax = (subtotal) => {
    var result = parseFloat(subtotal*0.08).toFixed(2)
    return result
}

export const calcTotal = (subtotal, pickupSaving) => {
    var result = parseFloat(subtotal + pickupSaving + calcTax(subtotal)).toFixed(2)
    return result
}
