const fileContent = await Bun.file('input.txt').text();

const [rules, updates] = fileContent.split('\n\n');
const numbersThatMustComeAfterMap = new Map<number, number[]>();

for (const rule of rules.split('\n')) {
  const [a, b] = rule.split('|').map(Number);
  if (numbersThatMustComeAfterMap.get(a)) {
    numbersThatMustComeAfterMap.get(a)!.push(b);
  } else {
    numbersThatMustComeAfterMap.set(a, [b]);
  }
}

let sum = 0;
for (const updateString of updates.split('\n')) {
  const update = updateString.split(',').map(Number);
  const isCorrect = isInCorrectOrder(update);
  if (isCorrect) {
    const middle = update[Math.floor(update.length / 2)];
    sum += middle;
  }
}


function isInCorrectOrder(update: number[]) {
  const previousNumbers: number[] = [];
  for (const number of update) {
    const numbersThatMustComeAfter = numbersThatMustComeAfterMap.get(number) ?? [];
    if (numbersThatMustComeAfter.some(x => previousNumbers.includes(x))) {
      return false;
    }
    previousNumbers.push(number);
  }
  return true;
}


console.log(sum);
