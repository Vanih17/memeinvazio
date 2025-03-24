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
        
        
        
    } catch (error) {
        console.log(error);
    }
}