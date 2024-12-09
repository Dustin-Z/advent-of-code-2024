
const fileContent = await Bun.file('input.txt').text();

const grid = fileContent.split(/\r?\n/).map(line => line.split(''));

// console.table(grid);


let count = 0;

for (let y = 0; y < grid.length; y++) {
  for (let x = 0; x < grid[y].length; x++) {

    //  .  .  #
    //  . [i] .
    //  #  .  .
    const up = [

      grid[y + 1]?.[x - 1],

            grid[y][x],

      grid[y - 1]?.[x + 1]

    ].join('');

    //  #  .  .
    //  . [i] .
    //  .  .  #
    const down = [

      grid[y - 1]?.[x - 1],

            grid[y][x],

      grid[y + 1]?.[x + 1]

    ].join('');


    if (up === 'MAS' && down === 'MAS') count++;
    if (up === 'MAS' && down === 'SAM') count++;

    if (up === 'SAM' && down === 'MAS') count++;
    if (up === 'SAM' && down === 'SAM') count++;

  }
}

console.log(count);
