window.onload = () => {
    let users = []
    const rusername = document.querySelector("#rusername");
    const rpassword = document.querySelector("#rpassword");
    const fregister = document.querySelector("#fregister");
    const rclose = document.querySelector("#rclose")

    const lusername = document.querySelector("#lusername");
    const lpassword = document.querySelector("#lpassword");
    const flogin = document.querySelector("#flogin");
    const lclose = document.querySelector("#lclose")

    const welcome = document.querySelector("#welcome")

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    fregister.addEventListener("submit", e => {
        e.preventDefault();
        if (!rusername.value || !rpassword.value)
            return

        if (users.find(i => i.username === rusername.value)) {
            Toast.fire({
                icon: "error",
                title: "Username already exists!"
            })
            return
        }
        users.push({
            "username": rusername.value,
            "password": rpassword.value
        })
        rusername.value = null
        rpassword.value = null
        console.log(users)
        rclose.click()
        Toast.fire({
            icon: 'success',
            title: 'Account registered!'
        })
    })

    flogin.addEventListener("submit", e => {
        e.preventDefault();
        if (!lusername.value || !lpassword.value)
            return
        
        if (users.find(i => i.username === lusername.value) && users.find(i => i.password === lpassword.value)) {
            welcome.innerText = "Welcome back " + lusername.value + " :)"
            welcome.style.display = "block"
            lusername.value = null
            lpassword.value = null
            lclose.click()
            Toast.fire({
                icon: "success",
                title: "Login successful!"
            })
            return
        }
        else{
            Toast.fire({
                icon: "error",
                title: "Wrong username or password!"
            })
        }
    })
}