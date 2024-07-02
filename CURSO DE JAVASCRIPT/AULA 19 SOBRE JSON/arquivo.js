/*BASICAMENTE O JSON NO JAVASCRIPT TEM O PAPEL DE TRANSFORMAR OBJETOS EM TEXTOS E TAMBEM AO CONTRARIO, TRANSFORMAR TEXTOS EM OBJETOS. */

/* QUANDO VAMOS UTILIZAQR O JSON TEMOS DOIS METODOS COMUNS QUE USAMOS.

JSON.parse() ->  converte texto no padrão JSON para objetos.
JSON.stringify() -> converte objetos  em texto padrão JSON . */

const carro = {
    marca: "Fiat",
    ano: 2023,
    modelo: "ARGO",


};

let texto = JSON.stringify(carro);
document.getElementById('area').innerHTML = texto;
