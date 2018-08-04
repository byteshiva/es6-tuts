
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
