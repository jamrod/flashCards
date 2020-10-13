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