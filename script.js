// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**
 
if (gender === "male"){
    //Essa condicional está verificando se a altura é maior ou igual a 1.70
    if ( height >= 1.70 ){
        // Essa condicional se a quantidade de Repetições com barra é maior ou igual a 6 OU  
        //Tempo das repetições com barra maior ou igual a 15 segundos 
        if (barReps >= 6 || barSeconds >= 15){
              // Verificando se Abs é maior ou igual a 41
            if (abs >= 41){
                //(Verificiando se a distancia é maior ou 3km E o tempo menor ou igual 12 minutos) OU
                //(Verificiando se a distancia é maior ou 5km E o tempo menor ou igual 20 minutos)
                if((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200) ){
                    // (Distância da natação menor ou igual 100 metros E tempo de 1 minuto) OU tempo de mergulho 30 segundos.
                    if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30){
                       passed = true;
                    }   
                }
            }
        }
    }
}

if (gender === "female"){
    //Essa condicional está verificando se a altura é maior ou igual a 1.60
    if ( height >= 1.60 ){
        // Essa condicional se a quantidade de Repetições com barra é maior ou igual a 5 OU  
        //Tempo das repetições com barra maior ou igual a 12 segundo 
        if (barReps >= 5 || barSeconds >= 12){
            // Verificando se Abs é maior ou igual a 41
            if (abs >= 41){
                //(Verificiando se a distancia é maior ou 4km E o tempo menor ou igual 15 minutos) OU
                //(Verificiando se a distancia é maior ou 6km E o tempo menor ou igual 22 minutos)
                if((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320) ){
                    // (Distância da natação menor ou igual 100 metros E tempo de 1 minuto) OU tempo de mergulho 30 segundos.
                    if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30){
                     passed = true;
                    }   
                }
            }
        }
    }
}


/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
