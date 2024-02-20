//Calculadora de Partidas Rankeadas

let winPlayer = 1500
let defeatPlayer = 1389
let result = rankBalance (winPlayer, defeatPlayer)

function rankBalance (winPlayer, defeatPlayer){
	let result = winPlayer - defeatPlayer
    return result
}

if(result < 10){
	console.log("O Herói tem de saldo de " + result + " vitórias " + "e está no nível Ferro")
} else if((result >= 11) && (result <= 20)){
	console.log("O Herói tem de saldo de " + result + " vitórias " + "e está no nível Bronze")
} else if((result >= 21) && (result <= 50)){
	console.log("O Herói tem de saldo de " + result + " vitórias " + "e está no nível Prata")
} else if((result >= 51) && (result <= 80)){
	console.log("O Herói tem de saldo de " + result + " vitórias " + "e está no nível Ouro")
} else if((result >= 81) && (result <= 90)){
	console.log("O Herói tem de saldo de " + result + " vitórias " + "e está no nível Diamante")  
} else if((result >= 91) && (result <= 100)){
	console.log("O Herói tem de saldo de " + result + " vitórias " + "e está no nível Lendário")
} else if(result >= 101){
	console.log("O Herói tem de saldo de " + result + " vitórias " + "e está no nível Imortal")
}
