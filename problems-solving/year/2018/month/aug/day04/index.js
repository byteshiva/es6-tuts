
uniqueCharacters = (string str) => {
    for(const i = 0; i < str.length; i++) {
        for(const j = i + 1; j < str.length; j++) {
            if(str[i] == str[j]) {
                return false;
            }
        }
    }
     
    return true;
}
 
console.log(uniqueCharacters("abcdef"));
console.log(uniqueCharacters("aabcdef"));
