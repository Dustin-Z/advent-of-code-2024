const fileContent = await Bun.file('input.txt').text();

const lines = fileContent.split('\n');



function isSafe(report: number[]) {
    let direction: 'ascending' | 'descending' | undefined;
    for (let i = 0; i < report.length - 1; i++) {
        const delta = report[i + 1] - report[i];
        if (delta === 0 || Math.abs(delta) > 3) {
            return false;
        }
        let isIncreasing = delta > 0;
        if (direction === undefined) {
            direction = delta > 0 ? 'ascending' : 'descending';
        } else {
            if (direction === 'ascending' && !isIncreasing) {
                return false;
            }
            if (direction === 'descending' && isIncreasing) {
                return false;
            }
        }
    }
    return true;
}

let numberOfSafeReports = 0;
lines.forEach(line => {
    const report = line.split(' ').map(Number);
    if (isSafe(report)) {
        numberOfSafeReports++;
    } else {
        // With Problem Dampener™
        for (const index in report) {
            const reportWithRemovedLevel = report.with(index, null).filter(Number.isInteger);
            if (isSafe(reportWithRemovedLevel)) {
                numberOfSafeReports++;
                break;
            }
        }
    }
});


console.log(numberOfSafeReports);
