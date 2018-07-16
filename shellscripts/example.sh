#DIsplay after 2 lines of grep string and oring 
grep -n -A 2 -w '5000.00\|10000.00'  new.txt  | more

grep -n  -A 32 'Some String'  new.txt  | awk '{print $0}' | grep 'January\|February\|March\|April\|May\|June\|July\|August\|September\|October\|November\|December'

#display 32 lines after the grepped orred string
grep -n  -A 32 'Some stringt'  new.txt  | awk '{print $0}' | grep 'January\|February\|March\|April\|May\|June\|July\|August\|September\|October\|November\|December'  | awk -F'-' '{print $1}'

cat -n new.txt | awk '{print $0}' | grep 'January\|February\|March\|April\|May\|June\|July\|August\|September\|October\|November\|December' | awk '{print $1}' > second-new.txt 

#Increment the array by 1
cat sortedmerged-new.txt | xargs -I{} bash -c 'expr {} + 1'

#Increment the array by 1
cat sortedmerged-new.txt | xargs -I{} bash -c 'expr {} + 2'


cat sortedmerged-new.txt | xargs -I{} bash -c 'expr {} + 1' > sortedmerged-increment-by-1.txt
cat sortedmerged-new.txt | xargs -I{} bash -c 'expr {} + 2' > sortedmerged-increment-by-2.txt 
cat sortedmerged-new.txt sortedmerged-increment-by-1.txt sortedmerged-increment-by-2.txt > unsorted-increment-2.txt
cat unsorted-increment-2.txt | sort -n > sortedmerged-final-2.txt
cat sortedmerged-final-2.txt | xargs -I{}  sed '{}!d' new.txt | grep -n -A 2 -w '5000.00\|10000.00\|January\|February\|March\|April\|May\|June\|July\|August\|September\|October\|November\|December'  



cat first.txt  | sort -n | more

cat first.txt second.txt >  mergedfinalunsorted.txt
  
cat mergedfinalunsorted.txt | sort -n > sortedmerged.txt

cat sortedmerged.txt | xargs -I{}  sed '{}!d' new.txt 
