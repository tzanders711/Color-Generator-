   var container = document.getElementById("container");

    function hover() {

      container.style.transform = "translateY(-6px)";

 }

const colorCards = document.querySelectorAll(".colorCards1, .colorCards2, .colorCards3, .colorCards4, .colorCards5");

function generateRandomColor() {

  const letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  let color = '#';

  for (let i = 0; i < 6; i++) {

    color += letters[Math.floor(Math.random() * 16)];

  }

  return color;

}

function generatePallete() {

  colorCards.forEach(card => {

    const newColor = generateRandomColor();

    card.style.background = newColor;

    card.querySelector("p").innerText = newColor;

  });

}

document.addEventListener('keydown', e => {

  if (e.key === ' ') {

   generatePallete();

  }

});

document.getElementById("btn").addEventListener("click", () => {

  generatePallete();

});
          

          

          

       
