
//PEGANDO ELEMENTOS HTML:

const tabuleiro = document.getElementById("tabuleiro");

let pontosX = 0;
let pontosO = 0;


function CriaTabuleiro(){

    const estadoTabuleiro = JogoDaVelha.getBoard();
    tabuleiro.innerHTML = "";

    estadoTabuleiro.forEach((valor, index) => {
        const celulas = document.createElement("div");
        celulas.classList.add("celulas");
        celulas.textContent = valor;

        celulas.addEventListener("click", () => {
             jogadores.jogar(index);
             CriaTabuleiro();
        })
        tabuleiro.appendChild(celulas);
    })
    
    };

    

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
        const Player1 = createPlayer("You", "X");
        const Player2 = createPlayer("Other", "O");
        let correntPlayer = Player1;
        let gameOver = false;
  
         const jogar = (index) => {
            if(gameOver) return;
            if(!JogoDaVelha.updateBoard(index, correntPlayer.marker)) return;
            if(checarVitoria()){
                gameOver = true;
                console.log(`${correntPlayer.name}, venceu!`);
                
           if(correntPlayer.marker === "X"){
                pontosX++;
                document.getElementById("placar-x").textContent = `player 1: ${pontosX}`;
            }else{
                pontosO++;
                document.getElementById("placar-o").textContent = `player 2: ${pontosO}`;
            }

            } else if(checaEmpate()){
                gameOver = true;
                console.log("Empatou!");
            }else{
                alternarTurno();
            };


            return;
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

 
 const resetaJogo = () =>{
 gameOver = false;
 correntPlayer = Player1;
} 

 return { jogar, resetaJogo }; 

})();



  function resetaJogo(){
       
        const btt = document.getElementById("resetar");
        btt.addEventListener("click", () => {
            JogoDaVelha.resetBoard();
            CriaTabuleiro();
            jogadores.resetaJogo();
        });
        
    };

resetaJogo();
 CriaTabuleiro();


