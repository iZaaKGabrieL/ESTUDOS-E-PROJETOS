const library = [];

const tela = document.querySelector(".estanteDeLivro");

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
    tela.innerHTML = " ";
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const status = document.getElementById("status").value;
    const paginas = document.getElementById("paginas").value;
    
    

    const livros = new Book(titulo, autor, genero, paginas, status);
    library.push(livros);

      renderLibrary();
    
};
    

function renderLibrary(){
    tela.innerHTML = ""
    library.forEach(livros => {
    const livrocard = document.createElement('div');
    livrocard.classList.add('livro');
    
    const TituloDoLivro = document.createElement('h1');
    TituloDoLivro.textContent = livros.title;
    const generoDolivro = document.createElement('h2');
    generoDolivro.textContent = livros.category;
    const AutorDolivro = document.createElement('h3');
    AutorDolivro.textContent = livros.autor;
    const PaginasDolivro = document.createElement('p');
    PaginasDolivro.textContent = livros.pages;

    const btnRemove = document.createElement('button');
    btnRemove.textContent = "remover livro";

    btnRemove.setAttribute('data-id', livros.id);
    btnRemove.addEventListener("click", (e) => {
        const idLivro = e.target.getAttribute('data-id');
        const index = library.findIndex(livro => livro.id === idLivro);
        if(index != -1){
            library.splice(index, 1);
            renderLibrary();
        }
    });
// show the books in the screen:


livrocard.appendChild(TituloDoLivro);
livrocard.appendChild(generoDolivro);
livrocard.appendChild(AutorDolivro);
livrocard.appendChild(PaginasDolivro);
livrocard.appendChild(btnRemove);

tela.appendChild(livrocard);

    }); 

}




 //PARA REMOVER OS LIVROS DA TELA II
 botaoApagar.addEventListener("click", (e) => {
    e.preventDefault();
    library.length = 0;
    tela.innerHTML = '';
});
