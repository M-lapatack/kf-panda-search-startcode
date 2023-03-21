//  Kung Fu Panda Search by Mr. V

// Button Event Listener
document.getElementById("search.btn").addEventListener("click", btnClicked);

function btnClicked() {
  let name = document.getElementById("search-in").value;

  if (name === "po") {
    document.getElementById("char-info").innerHTML = ``;
  } else {
  }
}

// Po: "Buddy, I am the Dragon Warrior."
// Crane: "You can chain my body, but you will never chain my warrior spirit!"
// Mantis: "Fear the bug!"
// Monkey: "We should hang out!"
// Tigress: "That was pretty hardcore!"
// Viper: "I don't need to bite to fight!"
// -->
