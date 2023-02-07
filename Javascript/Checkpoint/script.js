const url = 'https://pokeapi.co/api/v2/pokemon/';

const promise = async()=> {
    try {
        const name = document.getElementById('name').value;
        const experience = document.getElementById('baseExperience');
        const ability = document.getElementById('ability');
        
        const res = await fetch(`${url}${name}`);
        const text = await res.json();
        ability.value = text.abilities.map(x=> x.ability.name).join();
        experience.value = text.base_experience;
    }catch(error) {
        console.error('Cerca un altro pokemon');
    }
}

document.getElementById('button').onclick = ()=> {promise()};