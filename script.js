
const POKEAPI_BASE = 'https://pokeapi.co/api/v2';

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault() 
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    fetch(`${POKEAPI_BASE}/pokemon/${pokemonName}`)
         .then(response => {
        if (!response.ok) throw new Error('No encontrado')
        return response.json()
    })
                const pokemonInfo = `Name: ${data.name}
                ID: ${data.id}
                Height: ${data.height}
                Weight: ${data.weight}`;
                document.getElementById('resultado').textContent = pokemonInfo;      
                })

                .catch(error => 
                {
                    document.getElementById('resultado').textContent = 'Pokemon not found. Please try again.';      

                }); 

