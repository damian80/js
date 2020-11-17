// pobierz element button za pomoca queryselsector i przypisz wynik do zmiennej
const btn = document.querySelector('button');
let number = 1;

const addElement = function () {
    const li = document.createElement('li');
    li.textContent = number;


    if (number % 3 == 0) {
        li.classList.add('big')
    }
    document.body.appendChild(li);
    number++;

}











// ustaw nasluchiwanie (metoda addEventListener) na click na button
btn.addEventListener('click', addElement);