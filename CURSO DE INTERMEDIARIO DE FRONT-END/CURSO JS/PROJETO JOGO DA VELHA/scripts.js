
//PEGANDO ELEMENTOS HTML:

const tabuleiro = document.getElementsByClassName("tabuleiro");


//CRIAÇÃO DO IIFE:




const JogoDaVelha = (function(){
    let GameBoard = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => GameBoard;

    const updateBoard = (index, marker) => {
        if (GameBoard[index] == ""){
            GameBoard[index] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        GameBoard = ["", "", "", "", "", "", "", "", ""];
    };

    return {getBoard, updateBoard, resetBoard};
    
})();

//FABRICA DO JOGADOR:

function createPlayer(name, marker){
    return {name, marker};

};

//CRIAÇÃO DOS JOGADORES:

    const jogadores = (function(){
        const Player1 = createPlayer("Isaac", "X");
        const Player2 = createPlayer("Outro", "O");
        let correntPlayer = Player1;
        let gameOver = false;
  
         const jogar = (index) => {

            JogoDaVelha.updateBoard(index, correntPlayer.marker);
            if(checarVitoria()){
                gameOver = true;
                console.log(`${correntPlayer.name}, venceu!`);
            } else if(checaEmpate()){
                gameOver = true;
                console.log("Empatou!");
            }else{
                alternarTurno();
            };
            
        }

        const checarVitoria = () => {
        const b = JogoDaVelha.getBoard();
        const linhas = [
      [0,1,2], [3,4,5], [6,7,8], // linhas
      [0,3,6], [1,4,7], [2,5,8], // colunas
      [0,4,8], [2,4,6]           // diagonais
    ];

    return linhas.some(([a, b1, c]) =>
      b[a] && b[a] === b[b1] && b[a] === b[c]
    );
  };

  const checaEmpate = () => {
    return JogoDaVelha.getBoard().every(c => c !== "");
  };

  const alternarTurno = () => {
    correntPlayer = correntPlayer === Player1 ? Player2 : Player1;
  };

  return { jogar };
        
function CriaTabuleiro(){

    const JogoDaVelha = JogoDaVelha.getBoard();
    tabuleiro.innerHTML = "";

    GameBoard.forEach((valor, index) => {
        const celulas = document.getElementsByClassName("celula");
        celulas.classList.add("celulas");
        celulas.textContent = valor;

        celulas.addEventListener("click", (e) => {
             jogadores.jogar(index);
             CriaTabuleiro();
        })
    })
    
    
    
    };
   

})();




