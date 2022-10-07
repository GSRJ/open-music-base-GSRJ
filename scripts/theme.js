/* Desenvolva sua lógica aqui ... */
const button = document.querySelector(".dark-mode-icon");


const body = document.body;
const theme = "dark-mode";

const themeButtonIcon = ['<img src="./assets/img/darkmode.svg" alt="ícone de modo dark">',
'<img src="./assets/img/lightmode.svg" alt="ícone de modo claro">'
];

let darkMode;

button.addEventListener("click", themeChange);

function themeChange() {
  darkMode = !darkMode;
  body.classList.toggle(theme);
  localStorage.setItem(theme, darkMode);
  themeChangeButtonIcon(button);
}

function themeChangeButtonIcon(el) {
  darkMode
    ? (el.innerHTML = themeButtonIcon[1])
    : (el.innerHTML = themeButtonIcon[0]);
}

function themePreferenceAnalysis(){
    darkMode = JSON.parse(localStorage.getItem(theme))
    if (darkMode){
        themeChangeButtonIcon(button)
        body.classList.add(theme)
    }else{
        themeChangeButtonIcon(theme)
    }
}

themePreferenceAnalysis()
