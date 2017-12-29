function theFortuneTeller() {
    var name = prompt("Hi, dear! My name is Rosie and I am an expert fortune teller. What is your name?");
    var choice = prompt("Yes, I have seen that you would come to me, " + name + ". Now please, choose one from the following and type it in the box: turtle, rose, teacup, moon.");
    alert("Hmm... " + choice + ". Excellent choice. Let us see what your future holds.");
    
    if (choice == "turtle") {
      alert("Here is your fortune: Don't panic.");
    return;
    }
  
    else if (choice == "rose") {
      alert("Here is your fortune: You will find a thing. It may be important.");
    return;
    }
      
    else if (choice == "teacup") {
      alert("Here is your fortune: The end is near, might as well have dessert.");
    return;
    }
      
    else if (choice == "moon") {
      alert("Here is your fortune: Look before you leap. Or wear a parachute.");
    return;
    }
  
    else {
      alert("I am sorry, " + name + ". I do not think I understand you correctly. Are you sure you typed in one of the offered possibilities?");
    return;
    }
}

theFortuneTeller();