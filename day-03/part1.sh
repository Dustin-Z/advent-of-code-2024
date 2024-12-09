grep -Eo 'mul\([0-9]{1,3},[0-9]{1,3}\)' input.txt | awk -F'[(),]' '{print $2 * $3}' | awk '{sum+=$1} END{print sum}'
