const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{style:"currency", currency:"INR"})

export function CurrFormater(price){
    return CURRENCY_FORMATTER.format(price)
}
    

