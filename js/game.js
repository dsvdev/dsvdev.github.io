function onButtonPush() {
    let button = document.getElementById("strangeButton")
    if (stage == 1) {
        button.textContent = "Thanks"
        button.classList = "btn btn-success"
        stage++

    } else if(stage == 2) {
        button.textContent = "No more"
        button.classList = "btn btn-warning"
        stage++
    } else if (stage == 3) {
        button.textContent = "Stop please"
        button.classList = "btn btn-danger"
        stage++
    } else if (stage == 4) {
        button.textContent = "х_х"
        button.classList = "btn btn-secondary"
        button.disabled = true
        stage++
    }
}

let stage = 1
