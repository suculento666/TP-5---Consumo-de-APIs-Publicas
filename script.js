
const POKEAPI_BASE = 'https://pokeapi.co/api/v2';

document.getElementById('form').addEventListener('submit', function(e) 
{
    e.preventDefault() // Evitar que el formulario se envíe de forma tradicional
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase(); 
    fetch(`${POKEAPI_BASE}/pokemon/${pokemonName}`) // Realizar una solicitud a la API de Pokémon para obtener información sobre el Pokémon ingresado

    .then(response => { // Verificar si la respuesta es exitosa
        return response.json() // Convertir la respuesta a formato JSON
    })
    //Si de .then se obtiene un error, se ejecuta el bloque catch sino se ejecuta el bloque then siguiente
    .then(data => { // Procesar los datos recibidos de la API
        const pokemonInfo = 
        `Name: ${data.name}
        Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}
        Height: ${data.height}
        Weight: ${data.weight}`;
        document.getElementById('resultado').textContent = pokemonInfo;  
        const pokemonImage = document.createElement('img'); // Crear un elemento de imagen
        pokemonImage.src = data.sprites.front_default; // Establecer la fuente de la imagen al sprite frontal del Pokémon
        pokemonImage.alt = data.name;
        document.getElementById('resultadoImagen').innerHTML = '';
        document.getElementById('resultadoImagen').appendChild(pokemonImage); // Agregar la imagen al contenedor de resultados
    })

    .catch(error => // Manejar errores, como cuando el Pokémon no se encuentra
    {
        document.getElementById('resultado').textContent = 'Pokemon not found. Please try again.';      

    }); 
            
});
