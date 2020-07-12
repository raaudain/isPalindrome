function isPalindrome(string){
  const str = string.toLowerCase();
  const charArr = str.split("");
  const validChar = "abcdefghijklmnopqrstuvwxyz".split("");

  const letters = [];

  // Creates array without special characters
  charArr.forEach(char => {
    if (validChar.indexOf(char) > -1) letters.push(char);
  });


  if (letters.join("") === letters.reverse().join("")) return true;
  else return false;
}

isPalindrome("race car");