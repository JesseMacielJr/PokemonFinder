document.querySelector('.busca').addEventListener('submit', async e => {
    // Previne que ao clicar no botão haja um recarregamento na página
    e.preventDefault()

    let input = document.querySelector('#searchInput').value

    // Caso o usuário digitou algo no input
    if (input) {
        // Utiliza a API do site 'PokeAPI'
        let url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(input.toLowerCase())}`
        // Aguarda a resposta para somente depois armazenar na variável
        let results = await fetch(url)
        // Aguarda a transformação das respostas para o formato '.json' para somente depois armazenar na variável
        let json = await results.json()

        console.log(json)
    }
})
