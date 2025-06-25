const nasaApiKey = 'OO3xZLPBpQ4DNmiKBiC0KlkBvXFC1qd8krNwRqOK';

function formatJSON(data) {
    return JSON.stringify(data, null, 2);
}

function getSpaceX() {
    fetch('https://api.spacexdata.com/v4/launches/latest')
        .then(res => res.json())
        .then(data => {
            document.getElementById('spacex-result').textContent = formatJSON(data);
        });
}

function getPokemon() {
    const name = document.getElementById('pokemon-name').value.trim().toLowerCase();
    if (!name) return alert("Digite um nome de Pokémon.");

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {
            if (!res.ok) throw new Error("Pokémon não encontrado");
            return res.json();
        })
        .then(data => {
            document.getElementById('poke-result').textContent = formatJSON(data);
        })
        .catch(() => {
            document.getElementById('poke-result').textContent = "Pokémon não encontrado.";
        });
}

function getNASA() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('nasa-result').textContent = formatJSON(data);
        });
}

function getAgify() {
    const name = document.getElementById('agify-name').value.trim().toLowerCase();
    if (!name) return alert("Digite um nome.");

    fetch(`https://api.agify.io/?name=${name}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('agify-result').textContent = formatJSON(data);
        })
        .catch(() => {
            document.getElementById('agify-result').textContent = "Erro ao buscar idade.";
        });
}