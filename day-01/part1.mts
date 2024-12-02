const fileContent = await Bun.file('input.txt').text();

const leftList: number[] = [];
const rightList: number[] = [];

for (const line of fileContent.split('\n')) {
    const [left, right] = line.split(/\s+/);
    leftList.push(Number.parseInt(left, 10));
    rightList.push(Number.parseInt(right, 10));
}
leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

const distances = leftList.map((left, index) => Math.abs(left - rightList[index]));

const sum = distances.reduce((accumulator, distance) => accumulator + distance, 0);

console.log(sum);

