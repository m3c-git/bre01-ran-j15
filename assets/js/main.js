let bg = document.querySelectorAll("header > div");

let bg2 = document.querySelectorAll("main > div > div");


//bonus 3

 for (let i = 0; i < bg.length; i++)
    {
        let input = document.createElement("input");
        input.setAttribute("type", "color")

        bg[i].appendChild(input);
        
        bg[i].addEventListener("change", function(e){
            
            bg[i].style.backgroundColor = event.target.value;

        });
    }

/*********************************/

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
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80","#000000", "#366e7e", "#555fff", "#ee506b", "#9a7ccc", "#eccff9", "#0fef00", "#efcf70"]);

    // le code de l'étape 2 se passe ici
    
    
     for (let i = 0; i < bg.length; i++)
    {
        bg[i].addEventListener("click", selectColor);
    }
    
    // le code de l'étape 3 se passe ici
    
    for (let j = 0; j < bg2.length; j++)
    {
        
        bg2[j].addEventListener("click", function(){
            
            if (bg2[j].style.backgroundColor = true)
                {
                    bg2[j].style.backgroundColor = false;
                    
                    let color = getSelectedColor();

                    bg2[j].style.backgroundColor = `${color}`;
                }
                else
                {
                    let color = getSelectedColor();

                    bg2[j].style.backgroundColor = `${color}`;
                }
            

        });

    }

});