const btnReg = document.getElementsByClassName('reg')[0];

btnReg.addEventListener('click', register);

async function register() {
    try {
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const psw = document.getElementById('psw').value;
        const psw2 = document.getElementById('psw2').value;

        console.log(email, name, psw, psw2);

        if (psw !== psw2) {
            return alert('A két jelszó nem egyezik!');
        }

        const response = await fetch('http://127.0.0.1:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, name, psw })
        });

        console.log(response);
        const data = await response.json();
        console.log(data);
        
        if (response.ok) {
            alert(data.message);
            window.location.href = '../html/login.html';
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