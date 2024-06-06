const button = document.querySelectorAll('button');
const input = document.querySelector('input');

for (let x of button) {

    x.addEventListener('click', (e) => {
        console.log(x.innerText);
        if (x.innerText === 'C')
            input.value = "";
        else if (x.innerText === '=') {
            try {
                input.value = eval(input.value);

            } catch (result) {
                input.value = 'Invalid Operation'

            }

        }

        else if (x.innerText === 'X')
            input.value += '*';
        else
            input.value += x.innerText;
    })

}