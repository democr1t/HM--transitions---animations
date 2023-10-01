
const button = document.getElementById('submit')
console.log(button)
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