function primeiro(num1){
    const number1 = num1;
    return function segundo(num2){
        const number2 = num2;
        return number1 + number2;
    }
 
   

}
    const add4 = primeiro(4);
        console.log(add4(4));