
const button = document.getElementById('submit')
let isLoading = false;

button.addEventListener('click', () => {
    const root = document.querySelector(":root");

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