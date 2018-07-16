#DIsplay after 2 lines of grep string and oring 
grep -n -A 2 -w '5000.00\|10000.00'  new.txt  | more

grep -n  -A 32 'Some String'  new.txt  | awk '{print $0}' | grep 'January\|February\|March\|April\|May\|June\|July\|August\|September\|October\|November\|December'
