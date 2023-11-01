const inputSimbolEl = document.querySelector("#validation-input");
const onInputBlur = (event) => {
    if (inputSimbolEl.value.length === Number(inputSimbolEl.dataset.length)) {
        inputSimbolEl.classList.add("valid");
        inputSimbolEl.classList.remove("invalid");
    }
    else {
        inputSimbolEl.classList.add("invalid");
        inputSimbolEl.classList.remove("valid");
    }
}
inputSimbolEl.addEventListener("blur", onInputBlur);