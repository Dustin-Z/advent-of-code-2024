cat input.txt \
    | awk 'BEGIN { print "do()" } { print } END { print "don'\''t()" }' \
    | tr -d '\n' \
    | grep -Po 'do\(\)(.*?)(?=don'\''t\(\))' \
    | sed 's/do()//' \
    | grep -Eo 'mul\([0-9]{1,3},[0-9]{1,3}\)' \
    | awk -F'[(),]' '{ print $2 * $3 }' \
    | awk '{ sum+=$1 } END { print sum }'
