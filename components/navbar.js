
const lightmodeVariables = {
    dark:{
        "--theme-1": "var(--dark-theme-1)",
        "--theme-2": "var(--dark-theme-2)",
        "--theme-3": "var(--dark-theme-3)",
        "--theme-4": "var(--dark-theme-4)",
        "--accent-1": "var(--dark-accent-1)",
        "--accent-2": "var(--dark-accent-2)",
        "--accent-color": "var(--dark-accent-color)",
        "--active": "var(--dark-active)",
        "--active-color": "var(--dark-active-color)",
        "--p-color": "var(--dark-p-color)",
        "--a-color": "var(--dark-a-color)",
    },
    light:{
        "--theme-1": "var(--light-theme-1)",
        "--theme-2": "var(--light-theme-2)",
        "--theme-3": "var(--light-theme-3)",
        "--theme-4": "var(--light-theme-4)",
        "--accent-1": "var(--light-accent-1)",
        "--accent-2": "var(--light-accent-2)",
        "--accent-color": "var(--light-accent-color)",
        "--active": "var(--light-active)",
        "--active-color": "var(--light-active-color)",
        "--p-color": "var(--light-p-color)",
        "--a-color": "var(--light-a-color)",
    },
    themes:[
        "--theme-1",
        "--theme-2",
        "--theme-3",
        "--theme-4",
        "--accent-1",
        "--accent-2",
        "--accent-color",
        "--active",
        "--active-color",
        "--p-color",
        "--a-color",
    ],
}

const lightmodeCookieName = "lightmode"
const lightmodeSwitch = document.getElementById('nav-switch');
let lightmode = $.cookie(lightmodeCookieName);

if(lightmode === undefined)
    lightmode = false;
else if(lightmode == 0)
    lightmode = false;
else
    lightmode = true;

const setLightmode = (bIsInit)=>{
    if(lightmode === true){
        lightmodeVariables.themes.forEach(theme=>{
            let themeAsString = theme.toString();
            document.documentElement.style.setProperty(theme, lightmodeVariables.light[themeAsString]);
        })
    }
    else{
        if(bIsInit === true){
            lightmodeSwitch.click();
        }
        lightmodeVariables.themes.forEach(theme=>{
            let themeAsString = theme.toString();
            document.documentElement.style.setProperty(theme, lightmodeVariables.dark[themeAsString]);
        })
    }
}

setLightmode(true);

lightmodeSwitch.onclick = ()=>{
    lightmode = !lightmode;
    setLightmode(false);
    $.cookie(lightmodeCookieName, Number(lightmode), { path: '/' });;
}
