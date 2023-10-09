
const button = document.getElementById('submit')
let isLoading = false;
const root = document.querySelector(":root");

button.addEventListener('click', () => {
   

    isLoading ? isLoading = false : isLoading = true;

    if(isLoading)
    {
        root.style.setProperty("--pseudo-display", 'inline-block');
        button.innerHTML = "";
    }
    else
    {
        root.style.setProperty("--pseudo-display", 'none');
        button.innerHTML = "Submit";
    }
})


const typeButton = document.getElementById('typewrite')
typeButton.addEventListener('click', () =>{
    const spanElement = document.getElementById('textToWrite')
    const spanText = spanElement.innerText;

    let i = 0;

    spanElement.innerText = "";
    
    const interval = setInterval(() => {
        spanElement.innerText += spanText[i]
        i == spanText.length - 1 ? clearInterval(interval) : i++
        console.log(i)
        //если успеть нажать еще раз, то текст берется текущий, хотя переменная константа, почему?
    }, 10);
})

const packman = document.getElementById('packman')

const buttonTop = document.getElementById('top')
buttonTop.addEventListener('click', () => {
  
    // var bodyStyles = window.getComputedStyle(document.root);
    // var packmanRow = bodyStyles.getPropertyValue('--packmanRow');
    // var packmanColumn = bodyStyles.getPropertyValue('--packmanColumn');
    // var packmanFutureRow = bodyStyles.getPropertyValue('--packmanFutureRow');
    // var packmanFutureColumn = bodyStyles.getPropertyValue('--packmanFutureColumn');

    root.style.setProperty("--packmanFutureRow", root.style.getPropertyValue());
    root.style.setProperty("--packmanFutureColumn", packmanColumn);
    packman.style.animation = 'movePackman linear 0ms 1 normal both'
    root.style.setProperty("--packmanRow", packmanFutureRow + 1);
    root.style.setProperty("--packmanColumn", packmanFutureColumn);
})

const buttonDown = document.getElementById('down')
buttonDown.addEventListener('click', () => {
    root.style.setProperty("--packmanFutureRow", 2);
    // root.style.setProperty("--packmanFutureColumn", );
    packman.style.animation = 'movePackman linear 0ms 1 normal both'
    root.style.setProperty("--packmanRow", 2);
    // root.style.setProperty("--packmanColumn", packman.style.gridColumn);
})