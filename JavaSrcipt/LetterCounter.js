function letterCounter () {
    var sentence = prompt("Enter a sentence:");
    var letter = prompt("Which letter would you like to count?");
    
    var count = 0;
    var length = sentence.length;
    var i = 0;
    
    for (count = 0; count <= length; count++) {
      var find = sentence.charAt(count);
      if (find == letter) {
        i++;
      }
    }
    alert("The letter \"" + letter + "\" occurs " + i + " times in this sentence.");
    return;
  }
  
  letterCounter();
  