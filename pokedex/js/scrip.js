const nome_pokemon = document.querySelector('.nome_pokemon')
const nume_pokemon = document.querySelector('.num_pokemon')
const poke_img = document.querySelector('.imagem__pokemon')
const form = document.querySelector('.form')
const input = document.querySelector('.input__pesquisa')
const proxbtn = document.querySelector('.btn-next')
const antbtn = document.querySelector('.btn-prev')

let pokemonProx = 1;

const pokemonNome = async (pokemon) =>{

    const pokemonResp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (pokemonResp.status == 200){
        
        const dado = await pokemonResp.json();
       
        return dado;
    }
}


const renderPoke = async (pokemon) =>{

    nome_pokemon.innerHTML = 'Carrengando...';
    nume_pokemon.innerHTML = '';
    

    const dado = await pokemonNome(pokemon);

    

    if(dado){

    poke_img.style.display =  'block';
    nome_pokemon.innerHTML = dado.name;
    nume_pokemon.innerHTML = dado.id;
    poke_img.src = dado['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    
    input.value ='';
    pokemonProx = dado.id;
    
    } else{
        poke_img.style.display =  'none';
        nome_pokemon.innerHTML = "Não encontrado...";
        nume_pokemon.innerHTML = ":/";
    }
} 

form.addEventListener('submit',(event) => {

    event.preventDefault();

    renderPoke(input.value.toLowerCase());
});

antbtn.addEventListener('click' , () => {
   if(pokemonProx > 1){
    pokemonProx -= 1;
    renderPoke(pokemonProx)
   }
});

proxbtn.addEventListener('click' , () => {
   
    pokemonProx += 1;
    renderPoke(pokemonProx)
   
});

renderPoke(pokemonProx);



/*form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
  });*/





/*const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
    if (APIResponse.status === 200) {
      const data = await APIResponse.json();
      return data;
    }
}
``
await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}');*/