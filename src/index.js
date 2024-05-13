const readline = require('readline')
const corAmarela = '\x1b[33m'; // Amarelo
const corVerde = '\x1b[32m'; // Verde
const corPadrao = '\x1b[0m'; // Cor Padrão

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostraNivel(xp) {
    switch(true) {
        case xp >= 0 && xp <= 1000:
            return "Ferro"
        case xp >= 1001 && xp <= 2000:
            return "Bronze"
        case xp >= 2001 && xp <= 5000:
            return "Prata"
        case xp >= 5001 && xp <= 7000:
            return "Ouro"
        case xp >= 7001 && xp <= 8000:
            return "Platina"
        case xp >= 8001 && xp <= 9000:
            return "Ascendente"
        case xp >= 9001 && xp <= 10000:
            return "Imortal"
        case xp >= 10001:
            return "Radiante"
        default:
            return console.log('Nível não definido ou informado!')
    }
}

rl.question('Innforme o nome do herói: ', (nome) => {
    rl.question(`Qual a experiência do herói ${nome}: `, (xp) => {
        const nivelDoHeroi = mostraNivel(Number(xp));
        console.log(`O herói de nome ${corAmarela}${nome}${corPadrao} está no nível ${corVerde}${nivelDoHeroi}${corPadrao}!`)
        rl.close();
    });
});
