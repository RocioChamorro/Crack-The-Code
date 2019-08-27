let suma = sessionStorage.setItem('valueAfter', 1);
document.getElementById("btnProgress").addEventListener('click', () => {
    if (sessionStorage.getItem('valueAfter')) {
        suma = sessionStorage.getItem('valueAfter');
        suma++;
        suma < 5 ? suma != 4 ? suma != 3 ? (document.getElementById(`step${suma}`).setAttribute('class', 'completed'),
            document.getElementById('btnSubmit').style.display = "none",
            document.getElementById(`step${suma}`).setAttribute('class', 'completed'),
            document.getElementById('form-1').style.display = "none",
            document.getElementById(`form-${suma}`).style.display = "block",
            sessionStorage.setItem('valueAfter', suma)) :

            (document.getElementById(`step${suma}`).setAttribute('class', 'completed'),
                document.getElementById('btnSubmit').style.display = "none",
                document.getElementById(`step${suma}`).setAttribute('class', 'completed'),
                document.getElementById('form-1').style.display = "none",
                document.getElementById('form-2').style.display = "none",
                document.getElementById(`form-${suma}`).style.display = "block",

                sessionStorage.setItem('valueAfter', suma)) :

            (document.getElementById('btnProgress').style.display = "none",
                document.getElementById('btnSubmit').style.display = "block",
                document.getElementById(`step${suma}`).setAttribute('class', 'completed'),
                document.getElementById('form-1').style.display = "none",
                document.getElementById('form-2').style.display = "none",
                document.getElementById('form-3').style.display = "none",
                document.getElementById(`form-${suma}`).style.display = "block",
                sessionStorage.setItem('valueAfter', suma)) : '';
    } else {
        suma++;
        if (suma < 5) {
            const step = document.getElementById(`step${suma}`);
            step.classList.add('completed');
            document.getElementById('form-1').style.display = "none"
            document.getElementById(`form-${suma}`).style.display = "block"
            sessionStorage.setItem('valueAfter', suma);
        }
    }
})
//
document.getElementById("btnLess").addEventListener('click', () => {
    let resta = sessionStorage.getItem('valueAfter');

    if (resta >= 1) {
        const step = document.getElementById(`step${resta}`);
        resta--;
        resta == 0 ? '' : (step.classList.remove('completed'),
            document.getElementById(`form-${resta + 1}`).style.display = "none",
            document.getElementById('btnSubmit').style.display = "none",
            document.getElementById('btnProgress').style.display = "block",
            document.getElementById(`form-${resta}`).style.display = "block",
            sessionStorage.setItem('valueAfter', resta));
    }
})

