let p = document.createElement('p')
p.innerText = 'something text content'
document.body.appendChild(p)

const text = "Пиздец какая нудятина.\nЕбучий случай.";

let count = 0;

p = document.createElement('p')
document.body.appendChild(p)

const i = setInterval(() => {
    p.textContent += text[count];
    count++;
    if(count >= text.length){
        clearInterval(i)
    }
}, 100)
