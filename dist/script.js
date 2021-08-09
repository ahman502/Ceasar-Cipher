function rot13(str) {

  var normal =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
  var rot13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];

  var result = [];

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < normal.length; j++) {
      if (str[i] === normal[j]) {
        result.push(rot13[j]);
      }
    }
  }
  return result.join('');
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));