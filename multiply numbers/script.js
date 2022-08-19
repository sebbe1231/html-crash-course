window.onload = () => {
    const number = document.querySelector("#fnumber");
    const times = document.querySelector("#ftimes");
    const form = document.querySelector("#fform");

    form.addEventListener("submit", e => {
        e.preventDefault();

        
        var result = "";
        if (times.value < 1) {
            document.querySelector("#fresult").innerHTML = "Not valid number for multiplication!"
            return
        }
        for (let index = 1; index <= times.value; index++) {
            console.log(index*number.value);
            result = result + "<br />" + index*number.value;
        }
        document.querySelector("#fresult").innerHTML = result
    });
}