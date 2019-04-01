

const randomize =  {
    get: (name) => {
        let phrase = [
            "Se fosse minhas bolas eu não teria feito",
            "Minha sorte tá invertida",
            "So many possibilites",
            "We are the strantchon",
            "Muito poder pra controlar a força",
            "Vou matar a 6, depois a 8 e depois a 4, usando 33",
            "Wonderful",
            "Vou tentar não derrubar a 1",
            "Tá tão dinâmico, mas tão dinâmico, que não tem como ficar mais dinâmico que isso",
            "Pra falar a verdade eu nem li, só vi a capa",
            "Vou consolar o código",
            "To conflito",
            "O problema do gel é que deixa o cabelo duro",
            "Agora é hora sabe do que? De dar o trinta e four",
            "Quanto mais eu jogo pior eu fico"
        ];

        return phrase[Math.floor(Math.random() * phrase.length)]
    },
    put: () => {

    }
}

module.exports = randomize;