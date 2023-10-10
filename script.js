let res = document.querySelector('div.res');

function calcular(){        //Descobrir o tipo do triângulo
    let side1 = document.querySelector('input#side1').value;
    let side2 = document.querySelector('input#side2').value;        //Puxar valores dos inputs.
    let side3 = document.querySelector('input#side3').value;

    if(side1 == '' || side2 == '' || side3 == ''){
        alert('Erro: um dos lados não foi inserido.');      //Verificar se os valores foram inseridos.
        return;
    } 
    
    let s1 = Number(side1);
    let s2 = Number(side2);             //Deixando os input em Number.
    let s3 = Number(side3);
    
    if (s1 <= 0 ||s2 <= 0 || s3 <= 0){
        alert('Erro: um dos lados é menor ou igual a zero.');       
        return;
    } 
    if (s1 > s2 + s3 || s2 > s1 + s3 || s3 > s1 + s2) {
        alert('Erro: um dos lados é maior que a soma dos outros dois.');
        return;
    } 
    if (s1 === s2 && s1 === s3){
        res.innerHTML = 'O triângulo é equilátero.';
    } else if (s1 === s2 || s1 === s3 || s2 === s3) {
        res.innerHTML = 'O triângulo é isósceles.';
    } else {
        res.innerHTML = 'O triângulo é escaleno.'
    }
}