let suma = sessionStorage.setItem('value',1);
document.getElementById("btnProgress").addEventListener('click', () => {
        if (sessionStorage.getItem('value')) {
            suma = sessionStorage.getItem('value');
            suma++;
            suma < 4 ? suma != 3 ? (document.getElementById(`step${suma}`).setAttribute('class', 'completed'),
                    document.getElementById('btnSubmit').style.display = "none",
                    document.getElementById(`step${suma}`).setAttribute('class', 'completed'),
                    document.getElementById('form-1').style.display = "none",
                    document.getElementById(`form-${suma}`).style.display = "block",

                    sessionStorage.setItem('value', suma)) :
//
                (document.getElementById('btnProgress').style.display = "none",
                    document.getElementById('btnSubmit').style.display = "block",
                    document.getElementById(`step${suma}`).setAttribute('class', 'completed'),
                    document.getElementById('form-1').style.display = "none",
                    document.getElementById('form-2').style.display = "none",
                    document.getElementById(`form-${suma}`).style.display = "block",
                    sessionStorage.setItem('value', suma)) : '';
        } else {
            suma++;
            if (suma < 4) {
                const step = document.getElementById(`step${suma}`);
                step.classList.add('completed');
                document.getElementById('form-1').style.display = "none"
                document.getElementById(`form-${suma}`).style.display = "block"
                sessionStorage.setItem('value', suma);
            }
        }
    })
    //
document.getElementById("btnLess").addEventListener('click', () => {
    let resta = sessionStorage.getItem('value');

    if (resta >= 1) {
        const step = document.getElementById(`step${resta}`);
        resta--;
        resta == 0 ? '' : (step.classList.remove('completed'),
            document.getElementById(`form-${resta+1}`).style.display = "none",
            document.getElementById('btnSubmit').style.display = "none",
            document.getElementById('btnProgress').style.display = "block",
            document.getElementById(`form-${resta}`).style.display = "block",
            sessionStorage.setItem('value', resta));
    }
})

