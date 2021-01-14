export function getTimeText(time) {
    let hour = time[0]
    let min = parseInt(time[1])
    let timeout = ""
    const underTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty"]

    hour = underTwenty[hour]

    switch (min) {
        case 0:
            return `${hour} oh Clock`
        case 15:
            return `A quarter after ${hour}`
        case 30:
            return `Half past ${hour}`
        case 45:
            if (hour == 'Twelve') {
                hour = "One"
            } else {
                hour = underTwenty[time[0] + 1]
            }
            return `A quarter till ${hour}`
    }
    if (min < 10) {
        min = underTwenty[min]
        timeout = `${hour} oh ${min}`
    } else if (min < 20) {
        min = underTwenty[min]
        timeout = `${hour} ${min}`
    } else {
        let tensPlace = tens[Math.floor(min / 10)]
        let ones = underTwenty[min % 10].toLowerCase()
        min = `${tensPlace}${ones}`
        timeout = `${hour} ${min}`
    }
    return timeout
}