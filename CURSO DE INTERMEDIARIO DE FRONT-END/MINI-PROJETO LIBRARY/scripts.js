const library = [];


//construct Block
function Book (title, autor, category, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.autor = autor;
    this.category = category;
    this.pages = pages;
    this.read = read;

}

// button event
const btn = document.getElementsByClassName("adicionarLivro");
 btn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookLibrary();
 })

 // function to add Books for the dataBase (library)

function addBookLibrary(){

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const status = document.getElementById("status").value;
    const paginas = document.getElementById("paginas").value;


    const livros = new Book(titulo, autor, genero, paginas, status);
    library.push(livros);

    console.log(library);

}

// show the books in the screen:

 const tela = document.getElementsByClassName("estanteDeLivro")[0];
 tela.innerHTML = '';
library.forEach(livros => {

    const TituloDoLivro = document.createElement('h1');
    TituloDoLivro.textContent = livros.title;

tela.appendChild(TituloDoLivro);
});