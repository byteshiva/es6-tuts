
uniqueCharacters = (str) => {
    for(i = 0; i < str.length; i++) {
        for(j = i + 1; j < str.length; j++) {
            if(str[i] == str[j]) {
                return false;
            }
        }
    }
     
    return true;
}
 
// Find unique string without use additional data structure.
// usage of charAtr
uniqCharStr = (str) => {
   let count = 0;
   for (i = 1; i < str.length; i++)  {
     count++;
     for (j = 0; j < i; j++) {
         count++;
         if (str.charAt(i) == str.charAt(j)) {
             console.log("[ count - false ]", count);
             return false;
         }
     }
   }
    console.log("[ count - true ]", count);
    return true;   
}
 
console.log(uniqCharStr("abcdef"));
console.log(uniqCharStr("abcdefaa"));

console.log(uniqueCharacters("abcdef"));
console.log(uniqueCharacters("aabcdef"));

function checkIfUniqueChars (str) {
    var checker = 0; // 32 or 64 bit integer variable 
    for (var i = 0; i< str.length; i++) {
        var index = str[i].charCodeAt(0) - 96;
        var bitRepresentationOfIndex = 1 << index;  // left shift wide operators

        if ( (checker & bitRepresentationOfIndex) > 1) { // AND Operation
            console.log(str, false);
            return false;
        } else {
            checker = (checker | bitRepresentationOfIndex);  // OR Operation
        }
    }
    console.log(str, true);
    return true;
}

checkIfUniqueChars("abcdefghi");  // true
checkIfUniqueChars("aabcdefghi"); // false
checkIfUniqueChars("abbcdefghi"); // false
checkIfUniqueChars("abcdefghii"); // false
checkIfUniqueChars("abcdefghii"); // fal

