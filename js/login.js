const btnLogin = document.getElementsByClassName('login')[0];

btnLogin.addEventListener('click', login);

async function login() {
    const email = document.getElementById('email').value;
    const psw = document.getElementById('psw').value;

    console.log(email, psw);

    try {
        const response = await fetch("http://127.0.0.1:3000/api/auth/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, psw }),
            credentials: 'include'
        });
    
        //console.log(response);
        const data = await response.json();
        console.log(data);
    
        if (response.ok) {
            alert(data.message);
            window.location.href = '../html/home.html';
        } else if(data.errors) {
            let errorMessages = '';
            data.errors.forEach(error => {
                errorMessages += `${error.error}\n`;
            });
            alert(errorMessages);
        } else if(data.error) {
            alert(data.error);
        } else {
            alert('Ismeretlen hiba!');
        }
    } catch (error) {
        console.log(error);
    }
}