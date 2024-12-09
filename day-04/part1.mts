
const fileContent = await Bun.file('input.txt').text();

const grid = fileContent.split(/\r?\n/).map(line => line.split(''));

// console.table(grid);


let count = 0;

for (let y = 0; y < grid.length; y++) {
  for (let x = 0; x < grid[y].length; x++) {
    // [i] # # #
    const forward = [
      grid[y][x],
      grid[y][x + 1],
      grid[y][x + 2],
      grid[y][x + 3]
    ].join('');

    // # # # [i]
    const backward = [
      grid[y][x],
      grid[y][x - 1],
      grid[y][x - 2],
      grid[y][x - 3]
    ].join('');

    //  #
    //  #
    //  #
    // [i]
    const up = [
      grid[y][x],
      grid[y - 1]?.[x],
      grid[y - 2]?.[x],
      grid[y - 3]?.[x]
    ].join('');

    // [i]
    //  #
    //  #
    //  #
    const down = [
      grid[y][x],
      grid[y + 1]?.[x],
      grid[y + 2]?.[x],
      grid[y + 3]?.[x]
    ].join('');

    //  .  .  .  #
    //  .  .  #  .
    //  .  #  .  .
    // [i] .  .  .
    const upRight = [
      grid[y][x],
      grid[y - 1]?.[x + 1],
      grid[y - 2]?.[x + 2],
      grid[y - 3]?.[x + 3]
    ].join('');


    // [i] .  .  .
    //  .  #  .  .
    //  .  .  #  .
    //  .  .  .  #
    const downRight = [
      grid[y][x],
      grid[y + 1]?.[x + 1],
      grid[y + 2]?.[x + 2],
      grid[y + 3]?.[x + 3]
    ].join('');

    // #  .  .  .
    // .  #  .  .
    // .  .  #  .
    // .  .  . [i]
    const upLeft = [
      grid[y][x],
      grid[y - 1]?.[x - 1],
      grid[y - 2]?.[x - 2],
      grid[y - 3]?.[x - 3]
    ].join('');

    // .  .  . [i]
    // .  .  #  .
    // .  #  .  .
    // #  .  .  .
    const downLeft = [
      grid[y][x],
      grid[y + 1]?.[x - 1],
      grid[y + 2]?.[x - 2],
      grid[y + 3]?.[x - 3]
    ].join('');

    if (forward === 'XMAS') count++;
    if (backward === 'XMAS') count++;
    if (up === 'XMAS') count++;
    if (down === 'XMAS') count++;
    if (upRight === 'XMAS') count++;
    if (downRight === 'XMAS') count++;
    if (upLeft === 'XMAS') count++;
    if (downLeft === 'XMAS') count++;
  }
}

console.log(count);
