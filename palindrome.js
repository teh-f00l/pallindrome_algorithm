// There are easier ways but I needed to make sure I really get JS syntax. Also lowercase only letter strings assumed
function pallindrome(str) {
    
    for (i=0;i<str.length;i++){
        if (str[i] != str[str.length-i-1]){
			console.log(str[i]);
            console.log(str[str.length-i-1]); // print diagnostics
            return false;
        }
   
    }
	return true;

}


console.log(pallindrome("haolah"));
