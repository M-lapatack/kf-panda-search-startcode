//  Kung Fu Panda Search by Mr. V

// Button Event Listener
document.getElementById("search.btn").addEventListener("click", btnClicked);

function btnClicked() {
  //  Get Search Input
  let name = document.getElementById("search-in").value;

  // Test the Search Name
  if (name === "Po") {
    document.getElementById("char-info").innerHTML = `
   <img src="image/po.png" alt="kung fu panda character" />
   <h2>Po<h2>
   <p class="quote">"Buddy, I am the Dragon Warrior"</p> `;
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
