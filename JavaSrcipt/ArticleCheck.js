var age = prompt('How old are you?');

if (age < 18) {
  alert('Sorry, this article available only for adults.')
} else if (age == 18) {
  alert('Exactly 18? Welcome to adulthood! Enjoy the article!')
} else {
  alert('Thank you! You can read the article.')
}