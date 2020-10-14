export function createTimesTable() {
    let problems = []
    for (let i = 1; i < 13; i++) {
        for (let a = 1; a < 13; a++) {
            problems.push({
                "problem": `${a} x ${i}`,
                "answer": a * i
            })
        }
    }
    return problems
}

export function createAdditionTable() {
    let problems = []
    for (let i = 1; i < 21; i++) {
        for (let a = 1; a < 21; a++) {
            problems.push({
                "problem": `${a} + ${i}`,
                "answer": a + i
            })
        }
    
    return problems
}

export function createDivisionTable() {
    let problems = []
    for (let i = 1; i < 11; i++) {
        for (let a = 1; a < 11; a++) {
            let dividend = a * i
            problems.push({
                "problem": `${dividend} / ${a}`,
                "answer": i
            })
        }
    }
    return problems
}

export function createSubtractionTable() {
    let problems = []
    for (let i = 1; i < 21; i++) {
        for (let a = 1; a < 21; a++) {
            let sum = a + i
            problems.push({
                "problem": `${sum} - ${a}`,
                "answer": i
            })
        }
    }
    return problems
}

export function createAdditionTable100() {
    let problems = []
    for (let i = 1; i < 101; i++) {
        for (let a = 1; a < 101; a++) {
            problems.push({
                "problem": `${a} + ${i}`,
                "answer": a + i
            })
        }
    return problems
}

export function createSubtractionTable100() {
    let problems = []
    for (let i = 1; i < 101; i++) {
        for (let a = 1; a < 101; a++) {
            let sum = a + i
            problems.push({
                "problem": `${sum} - ${a}`,
                "answer": i
            })
        }
    }
    return problems
}