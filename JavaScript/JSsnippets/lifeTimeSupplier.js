function theLifeTimeSupplier() {
    var age = prompt("How old are you?");
    var lifeSpan = prompt("What do you think, how long will you live?");
    var snack = prompt("What is your favourite snack?");
    var amount = prompt("How much " + snack +" do you eat in a week?");
    
    var supply = (lifeSpan - age) * 52 * amount;
    
    alert("You need " + supply + " " + snack + " until you are " + lifeSpan + " year old.");
    
    return;
  }
  
  theLifeTimeSupplier();