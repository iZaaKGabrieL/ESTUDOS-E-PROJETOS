//keyup e keydown

document.addEventListener("keydown", function(event){
    console.log(event.key);

    if( event.key === "Enter"){
        console.log("Apertou o Enter");
    };


});

//keyup

document.addEventListener("keyup", function(event){

        if( event.key === "Enter"){
        console.log("Soltou o Enter");
    };

})