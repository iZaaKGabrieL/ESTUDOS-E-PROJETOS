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
const btn = document.getElementsByClassName("adicionarLivro")[0];
 btn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookLibrary();
 })

  //PARA REMOVER OS LIVROS DA TELA  A OUTRA PARTE TA LA EMBAIXO NO FINAL
 const botaoApagar = document.querySelector(".remover");

 // function to add Books for the dataBase (library)

function addBookLibrary(){
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const status = document.getElementById("status").value;
    const paginas = document.getElementById("paginas").value;

console.log("Função foi chamada");

    const livros = new Book(titulo, autor, genero, paginas, status);
    library.push(livros);


    
// show the books in the screen:

const tela = document.querySelector(".estanteDeLivro");
tela.innerHTML = " ";
library.forEach(livros => {

    const livrocard = document.createElement('div');
    livrocard.classList.add('livro')

    const TituloDoLivro = document.createElement('h1');
    TituloDoLivro.textContent = livros.title;
    const generoDolivro = document.createElement('h2');
    generoDolivro.textContent = livros.category;
    const AutorDolivro = document.createElement('h3');
    AutorDolivro.textContent = livros.autor;
    const PaginasDolivro = document.createElement('p');
    PaginasDolivro.textContent = livros.pages


livrocard.appendChild(TituloDoLivro);
livrocard.appendChild(generoDolivro);
livrocard.appendChild(AutorDolivro);
livrocard.appendChild(PaginasDolivro);

tela.appendChild(livrocard);


});

 //PARA REMOVER OS LIVROS DA TELA II

}

 botaoApagar.addEventListener("click", (e) => {
    e.preventDefault();
    library.length = 0;
    tela.innerHTML = '';
});
