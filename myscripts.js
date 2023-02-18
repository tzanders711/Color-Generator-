   var container = document.getElementById("container");

    function hover() {

      container.style.transform = "translateY(-6px)";

 }

const colorCard = document.querySelectorAll(".colorCards1", ".colorCards2", ".colorCards3", ".colorCards4", ".colorCards5");

const buttonElement = document.getElementById("btn");

document.addEventListener('keydown', e => {

     if (e.key === ' ') {

      generatePalette();

  }

 document.getElementById("btn").addEventListener("click", generatePalette);

     function generatePalette() {

    colorCard.forEach(colorCard => {

       const newColor = generatePalette();

       });

       

        colorCard.querySelector(".colorCards1", ".colorCards2", ".colorCards3", ".colorCards4", ".colorCards5").style.background = newColor;

        colorCard.querySelector("p").innerText = newColor;

    }

});

       function generatePalette() {

        const hexArray = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

        

        let color = '#';

       

        for (let i = 0; i < 6; i++) {

            color += hexArray[Math.floor(Math.random() * hexArray.length)];

          }

          

          return color;

       }
