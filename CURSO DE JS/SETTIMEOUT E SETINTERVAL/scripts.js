function tomarBanho(callback){
    setTimeout(function(){
        console.log("tomando banho...");
    }, 3000);
    callback();
}

function Secar(){
console.log("secando o cabelo");

};

tomarBanho(Secar);
