
let bg = document.querySelectorAll("header > div")

let bg2 = document.querySelectorAll("main > div > div")


function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;
    // le code de l'étape 1 se passe ici
    
    for (let i = 0; i < colors.length; i++)
    {

        bg[i].style.backgroundColor = `${colors[i]}`
    }
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    // le code de l'étape 2 se passe ici
    
    
     for (let i = 0; i < bg.length; i++)
    {
        bg[i].addEventListener("click", selectColor);
    }
    
    // le code de l'étape 3 se passe ici
    
    
    
    for (let j = 0; j < bg2.length; j++)
    {
        let color = getSelectedColor();
        bg2[j].addEventListener("click", function(){
            
            console.log("toto")
            bg2[j].style.backgroundColor = `${color}`;
        });
                    console.log(color)

    }

});