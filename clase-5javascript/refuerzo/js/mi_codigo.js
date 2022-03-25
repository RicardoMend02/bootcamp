//var tituloHtml = document.getElementById('titulo-pagina')
var tituloHtml = document.querySelector('#titulo-pagina')
tituloHtml.classList.add('text-center', 'text-danger')
tituloHtml.classList.remove("bg-success")

let contenidoDiv = document.querySelector('.contenido')
console.log(contenidoDiv)
let imagenes = [
    'https://fondosmil.com/fondo/52714.jpg',
    'http://evilnapsis.com/wp-content/uploads/2018/04/orig_227950.jpg',
    'https://www.wallpaperkiss.com/wimg/b/112-1123213_big.jpg'
]
contenidoDiv.innerHTML = `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="${imagenes[0]}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="${imagenes[1]}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="${imagenes[2]}" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
`
