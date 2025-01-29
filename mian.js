const form = document.querySelector('form');
const contenedor = document.querySelector('.contenedor')

let acumuladora = null

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // console.log(event.target.nombre.value)
    // console.log(event.target.apellido.value)
    // console.log(new formData(event.target))
    const data = Object.fromEntries(new FormData(event.target));
    // console.log(Object.fromEntries(new formData(event.target)))
    // acumuladora =acumuladora + 'string nuevo';
    // acumuladora += 'string nuevo';

    // console.log(data);
    // // Reset form
    // event.target.reset();
    // // Save data to local storage
    // localStorage.setItem('userData', JSON.stringify(data));

    acumuladora += `<div>
                            <h2>${data.nombre}</h2>
                            <h2 class="azul">${data.apellido}</h2>
                            </div>`
console.log(acumuladora)
console.log('---------------------------------------------')
form.reset()
contenedor.innerHTML = acumuladora
});

