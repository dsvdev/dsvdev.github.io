function onButtonPush() {
    let button = document.getElementById("strangeButton")
    if(button.textContent == "thanks") {
        button.textContent = "No more"
    } else if (button.textContent == "No more") {
        button.textContent = "Stop please"
    } else if (button.textContent == "Stop please") {
        button.textContent = "dead button"
        button.classList = "btn btn-secondary"
        button.disabled = true
    } else {
        button.textContent = "thanks"
    }
}

