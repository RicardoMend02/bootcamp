function sumatoria_p() {
    let n = document.querySelector("#numero").value
    let r = 0;
    for (let x = 1; x <= n; x ++) {
        r = r + x
        console.log(r)
    }
}