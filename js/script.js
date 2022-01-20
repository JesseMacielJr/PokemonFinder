document.querySelector('.busca').addEventListener('submit', async e => {
    // Previne que ao clicar no botão haja um recarregamento na página
    e.preventDefault()

    let input = document.querySelector('#searchInput').value

    // Caso o usuário digitou algo no input
    if (input) {
        showWarning('Carregando...')
        // Utiliza a API do site 'Open Weather'
        let url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(input.toLowerCase())}`
        // Aguarda a resposta para somente depois armazenar na variável
        let results = await fetch(url)
        let json = null

        clearInfo()

        if (results.status !== 404) {
            // Aguarda a transformação das respostas para o formato '.json' para somente depois armazenar na variável
            json = await results.json()
            showInfo({
                name: json.forms[0].name,
                nameId: json.id,
                weight: json.weight,
                height: json.height,
                type: json.types[0].type.name,
                image: json.sprites.front_default
            })
        } else {
            // Se a requisição for um sucesso
            clearInfo()
            showWarning('Pokemon não encontrado!')
        }

        console.log(results)
    } else {
        clearInfo()
    }
})

function showInfo(json) {
    // Limpa a div de avisos
    showWarning('')

    changeColors(json.type)

    // Seleciona os dados requisitados 
    document.querySelector('.titulo').innerHTML = `${capitalize(json.name)} - #${json.nameId}`

    if(json.weight < 1000)
        document.querySelector('.perfilPesoValor').innerHTML = `${json.weight} kg`
    else
        document.querySelector('.perfilPesoValor').innerHTML = `${json.weight/1000} Ton`

    if(json.height*10 < 100)
        document.querySelector('.perfilAlturaValor').innerHTML = `${json.height*10} cm`
    else
        document.querySelector('.perfilAlturaValor').innerHTML = `${json.height/10} m` 

    document.querySelector('.caracteristicasInfo').innerHTML = `${capitalize(json.type)}`

    document.querySelector('.imagemPokemon').innerHTML = `<img src="${json.image}">`

    // Mostra a div que contém todos os resultados
    document.querySelector('.resultado').style.display = 'block'
}


function showWarning(msg) {
    // Coloca a mensagem passada como parâmetro dentro da div 'aviso'
    document.querySelector('.aviso').innerHTML = msg;
}

function clearInfo() {
    showWarning('')
    // Torna a div 'resultado' invisível
    document.querySelector('.imagemPokemon img').setAttribute('src', 'img/imageNotFound.jpg')
    document.querySelector('.resultado').style.display = 'none'
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function changeColors(type) {

    switch (type) {
        case 'normal':
            document.body.style.background = "linear-gradient(145deg, rgba(144,153,161,1) 0%, rgba(144,153,161,0.860364214044993) 78%)";
            break;
        case 'fighting':
            document.body.style.background = "linear-gradient(145deg, rgba(206,64,105,1) 0%, rgba(206,64,105,0.8323530095632002) 78%)";
            break;
        case 'flying':
            document.body.style.background = "linear-gradient(145deg, rgba(143,168,221,1) 0%, rgba(143,168,221,0.9500000683867297) 78%)";
            break;
        case 'poison':
            document.body.style.background = "linear-gradient(145deg, rgba(173,106,201,1) 0%, rgba(173,106,201,0.8883754185267857) 78%)";
            break;
        case 'ground':
            document.body.style.background = "linear-gradient(145deg, rgba(217,119,70,1) 0%, rgba(217,119,70,0.9303922252494747) 78%)";
            break;
        case 'rock':
            document.body.style.background = "linear-gradient(145deg, rgba(199,183,139,1) 0%, rgba(199,183,139,0.829551889115021) 78%)";
            break;
        case 'bug':
            document.body.style.background = "linear-gradient(145deg, rgba(144,193,44,1) 0%, rgba(144,193,44,0.8267507686668417) 78%)";
            break;
        case 'ghost':
            document.body.style.background = "linear-gradient(145deg, rgba(82,105,172,1) 0%, rgba(82,105,172,0.7847339619441527) 78%)";
            break;
        case 'steel':
            document.body.style.background = "linear-gradient(145deg, rgba(90,142,161,1) 0%, rgba(90,142,161,0.8575630935968137) 78%)";
            break;
        case 'fire':
            document.body.style.background = "linear-gradient(145deg, rgba(255,32,17,1) 0%, rgba(255,32,17,0.6250700963979341) 78%) ";
            break;
        case 'water':
            document.body.style.background = "linear-gradient(145deg, rgba(77,144,213,1) 0%, rgba(77,144,213,0.9051821412158614) 78%)";
            break;
        case 'grass':
            document.body.style.background = "linear-gradient(145deg, rgba(99,187,91,1) 0%, rgba(99,187,91,0.9135855025603992) 78%)";
            break;
        case 'electric':
            document.body.style.background = "linear-gradient(145deg, rgba(243,210,59,1) 0%, rgba(243,210,59,0.8687675753895308) 78%)";
            break;
        case 'psychic':
            document.body.style.background = "linear-gradient(145deg, rgba(249,113,118,1) 0%, rgba(249,113,118,0.9359944661458334) 78%)";
            break;
        case 'ice':
            document.body.style.background = "linear-gradient(145deg, rgba(116,206,192,1) 0%, rgba(116,206,192,0.9359944661458334) 78%)";
            break;
        case 'dragon':
            document.body.style.background = "linear-gradient(145deg, rgba(10,109,196,1) 0%, rgba(10,109,196,0.9079832616640406) 78%)";
            break;
        case 'dark':
            document.body.style.background = "linear-gradient(145deg, rgba(90,83,102,1) 0%, rgba(90,83,102,0.9331933456976541) 78%)";
            break;
        case 'fairy':
            document.body.style.background = "linear-gradient(145deg, rgba(236,143,230,1) 0%, rgba(236,143,230,0.9275911048012955) 78%)";
            break;
        default:
            document.body.style.background = "linear-gradient(145deg, rgba(58,70,232,1) 45%, rgba(180,194,6,0.9275911048012955) 100%)";
    }


}