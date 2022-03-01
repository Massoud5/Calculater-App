// input radio adaptation to prefers-color-scheme.css

const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
const lightMode = window.matchMedia("(prefers-color-scheme: light)");


function screenModes(){
    
    if(darkMode.matches){
        firstTheme.setAttribute("checked","");
        secondeTheme.removeAttribute("checked");
    }
    else if (lightMode.matches){
        firstTheme.removeAttribute("checked");
        secondeTheme.setAttribute("checked","");
    }
}

screenModes();
darkMode.addEventListener("change",screenModes);
lightMode.addEventListener("change",screenModes);