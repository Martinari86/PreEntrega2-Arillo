import json from "./data.json"

const getListaPokemon = () =>{
        
    return new Promise ( (resolve,reject)=> {
      setTimeout( ()=>{     
              resolve(json)
        },3000)
    });
  };

export default getListaPokemon

/*
const listaPokemon = 
[
      {
        "id": 1,
        "nombre": "Bulbasaur",
        "tipo": ["Planta", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "precio": 10
      },
      {
        "id": 2,
        "nombre": "Ivysaur",
        "tipo": ["Planta", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        "precio": 15
      },
      {
        "id": 3,
        "nombre": "Venusaur",
        "tipo": ["Planta", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        "precio": 20
      },
      {
        "id": 4,
        "nombre": "Charmander",
        "tipo": ["Fuego"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "precio": 12
      },
      {
        "id": 5,
        "nombre": "Charmeleon",
        "tipo": ["Fuego"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        "precio": 18
      },
      {
        "id": 6,
        "nombre": "Charizard",
        "tipo": ["Fuego", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        "precio": 25
      },
      {
        "id": 7,
        "nombre": "Squirtle",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        "precio": 11
      },
      {
        "id": 8,
        "nombre": "Wartortle",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
        "precio": 16
      },
      {
        "id": 9,
        "nombre": "Blastoise",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        "precio": 22
      },
      {
        "id": 10,
        "nombre": "Caterpie",
        "tipo": ["Bicho"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
        "precio": 8
      },
      {
        "id": 11,
        "nombre": "Metapod",
        "tipo": ["Bicho"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
        "precio": 9
      },
      {
        "id": 12,
        "nombre": "Butterfree",
        "tipo": ["Bicho", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
        "precio": 14
      },
      {
        "id": 13,
        "nombre": "Weedle",
        "tipo": ["Bicho", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
        "precio": 7
      },
      {
        "id": 14,
        "nombre": "Kakuna",
        "tipo": ["Bicho", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
        "precio": 8
      },
      {
        "id": 15,
        "nombre": "Beedrill",
        "tipo": ["Bicho", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
        "precio": 13
      },
      {
        "id": 16,
        "nombre": "Pidgey",
        "tipo": ["Normal", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
        "precio": 10
      },
      {
        "id": 17,
        "nombre": "Pidgeotto",
        "tipo": ["Normal", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        "precio": 15
      },
      {
        "id": 18,
        "nombre": "Pidgeot",
        "tipo": ["Normal", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
        "precio": 20
      },
      {
        "id": 19,
        "nombre": "Rattata",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
        "precio": 9
      },
      {
        "id": 20,
        "nombre": "Raticate",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
        "precio": 14
      },
      {
        "id": 21,
        "nombre": "Spearow",
        "tipo": ["Normal", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
        "precio": 11
      },
      {
        "id": 22,
        "nombre": "Fearow",
        "tipo": ["Normal", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
        "precio": 16
      },
      {
        "id": 23,
        "nombre": "Ekans",
        "tipo": ["Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
        "precio": 12
      },
      {
        "id": 24,
        "nombre": "Arbok",
        "tipo": ["Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
        "precio": 18
      },
      {
        "id": 25,
        "nombre": "Pikachu",
        "tipo": ["Eléctrico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        "precio": 20
      },
      {
        "id": 26,
        "nombre": "Raichu",
        "tipo": ["Eléctrico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
        "precio": 25
      },
      {
        "id": 27,
        "nombre": "Sandshrew",
        "tipo": ["Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
        "precio": 14
      },
      {
        "id": 28,
        "nombre": "Sandslash",
        "tipo": ["Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
        "precio": 20
      },
      {
        "id": 29,
        "nombre": "Nidoran♀",
        "tipo": ["Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
        "precio": 12
      },
      {
        "id": 30,
        "nombre": "Nidorina",
        "tipo": ["Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
        "precio": 17
      },
      {
        "id": 31,
        "nombre": "Nidoqueen",
        "tipo": ["Veneno", "Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
        "precio": 25
      },
      {
        "id": 32,
        "nombre": "Nidoran♂",
        "tipo": ["Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
        "precio": 12
      },
      {
        "id": 33,
        "nombre": "Nidorino",
        "tipo": ["Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
        "precio": 17
      },
      {
        "id": 34,
        "nombre": "Nidoking",
        "tipo": ["Veneno", "Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
        "precio": 25
      },
      {
        "id": 35,
        "nombre": "Clefairy",
        "tipo": ["Hada"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
        "precio": 18
      },
      {
        "id": 36,
        "nombre": "Clefable",
        "tipo": ["Hada"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
        "precio": 25
      },
      {
        "id": 37,
        "nombre": "Vulpix",
        "tipo": ["Fuego"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
        "precio": 16
      },
      {
        "id": 38,
        "nombre": "Ninetales",
        "tipo": ["Fuego"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
        "precio": 22
      },
      {
        "id": 39,
        "nombre": "Jigglypuff",
        "tipo": ["Normal", "Hada"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
        "precio": 17
      },
      {
        "id": 40,
        "nombre": "Wigglytuff",
        "tipo": ["Normal", "Hada"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
        "precio": 24
      },
      {
        "id": 41,
        "nombre": "Zubat",
        "tipo": ["Veneno", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
        "precio": 11
      },
      {
        "id": 42,
        "nombre": "Golbat",
        "tipo": ["Veneno", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
        "precio": 17
      },
      {
        "id": 43,
        "nombre": "Oddish",
        "tipo": ["Planta", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
        "precio": 10
      },
      {
        "id": 44,
        "nombre": "Gloom",
        "tipo": ["Planta", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
        "precio": 15
      },
      {
        "id": 45,
        "nombre": "Vileplume",
        "tipo": ["Planta", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
        "precio": 20
      },
      {
        "id": 46,
        "nombre": "Paras",
        "tipo": ["Bicho", "Planta"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
        "precio": 11
      },
      {
        "id": 47,
        "nombre": "Parasect",
        "tipo": ["Bicho", "Planta"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
        "precio": 17
      },
      {
        "id": 48,
        "nombre": "Venonat",
        "tipo": ["Bicho", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
        "precio": 12
      },
      {
        "id": 49,
        "nombre": "Venomoth",
        "tipo": ["Bicho", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
        "precio": 18
      },
      {
        "id": 50,
        "nombre": "Diglett",
        "tipo": ["Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
        "precio": 13
      },
      {
        "id": 51,
        "nombre": "Dugtrio",
        "tipo": ["Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
        "precio": 20
      },
      {
        "id": 52,
        "nombre": "Meowth",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
        "precio": 14
      },
      {
        "id": 53,
        "nombre": "Persian",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
        "precio": 20
      },
      {
        "id": 54,
        "nombre": "Psyduck",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
        "precio": 15
      },
      {
        "id": 55,
        "nombre": "Golduck",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
        "precio": 22
      },
      {
        "id": 56,
        "nombre": "Mankey",
        "tipo": ["Lucha"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
        "precio": 13
      },
      {
        "id": 57,
        "nombre": "Primeape",
        "tipo": ["Lucha"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
        "precio": 19
      },
      {
        "id": 58,
        "nombre": "Growlithe",
        "tipo": ["Fuego"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
        "precio": 18
      },
      {
        "id": 59,
        "nombre": "Arcanine",
        "tipo": ["Fuego"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
        "precio": 25
      },
      {
        "id": 60,
        "nombre": "Poliwag",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
        "precio": 14
      },
      {
        "id": 61,
        "nombre": "Poliwhirl",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
        "precio": 19
      },
      {
        "id": 62,
        "nombre": "Poliwrath",
        "tipo": ["Agua", "Lucha"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
        "precio": 25
      },
      {
        "id": 63,
        "nombre": "Abra",
        "tipo": ["Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
        "precio": 16
      },
      {
        "id": 64,
        "nombre": "Kadabra",
        "tipo": ["Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
        "precio": 22
      },
      {
        "id": 65,
        "nombre": "Alakazam",
        "tipo": ["Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
        "precio": 28
      },
      {
        "id": 66,
        "nombre": "Machop",
        "tipo": ["Lucha"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
        "precio": 15
      },
      {
        "id": 67,
        "nombre": "Machoke",
        "tipo": ["Lucha"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
        "precio": 20
      },
      {
        "id": 68,
        "nombre": "Machamp",
        "tipo": ["Lucha"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
        "precio": 25
      },
      {
        "id": 69,
        "nombre": "Bellsprout",
        "tipo": ["Planta", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
        "precio": 13
      },
      {
        "id": 70,
        "nombre": "Weepinbell",
        "tipo": ["Planta", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
        "precio": 18
      },
      {
        "id": 71,
        "nombre": "Victreebel",
        "tipo": ["Planta", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
        "precio": 24
      },
      {
        "id": 72,
        "nombre": "Tentacool",
        "tipo": ["Agua", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
        "precio": 16
      },
      {
        "id": 73,
        "nombre": "Tentacruel",
        "tipo": ["Agua", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
        "precio": 22
      },
      {
        "id": 74,
        "nombre": "Geodude",
        "tipo": ["Roca", "Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
        "precio": 15
      },
      {
        "id": 75,
        "nombre": "Graveler",
        "tipo": ["Roca", "Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
        "precio": 20
      },
      {
        "id": 76,
        "nombre": "Golem",
        "tipo": ["Roca", "Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
        "precio": 25
      },
      {
        "id": 77,
        "nombre": "Ponyta",
        "tipo": ["Fuego"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
        "precio": 17
      },
      {
        "id": 78,
        "nombre": "Rapidash",
        "tipo": ["Fuego"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
        "precio": 23
      },
      {
        "id": 79,
        "nombre": "Slowpoke",
        "tipo": ["Agua", "Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
        "precio": 18
      },
      {
        "id": 80,
        "nombre": "Slowbro",
        "tipo": ["Agua", "Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
        "precio": 25
      },
      {
        "id": 81,
        "nombre": "Magnemite",
        "tipo": ["Eléctrico", "Acero"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
        "precio": 18
      },
      {
        "id": 82,
        "nombre": "Magneton",
        "tipo": ["Eléctrico", "Acero"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
        "precio": 25
      },
      {
        "id": 83,
        "nombre": "Farfetch'd",
        "tipo": ["Normal", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
        "precio": 20
      },
      {
        "id": 84,
        "nombre": "Doduo",
        "tipo": ["Normal", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
        "precio": 15
      },
      {
        "id": 85,
        "nombre": "Dodrio",
        "tipo": ["Normal", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
        "precio": 22
      },
      {
        "id": 86,
        "nombre": "Seel",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
        "precio": 17
      },
      {
        "id": 87,
        "nombre": "Dewgong",
        "tipo": ["Agua", "Hielo"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
        "precio": 24
      },
      {
        "id": 88,
        "nombre": "Grimer",
        "tipo": ["Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
        "precio": 14
      },
      {
        "id": 89,
        "nombre": "Muk",
        "tipo": ["Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
        "precio": 20
      },
      {
        "id": 90,
        "nombre": "Shellder",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
        "precio": 16
      },
      {
        "id": 91,
        "nombre": "Cloyster",
        "tipo": ["Agua", "Hielo"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
        "precio": 23
      },
      {
        "id": 92,
        "nombre": "Gastly",
        "tipo": ["Fantasma", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
        "precio": 18
      },
      {
        "id": 93,
        "nombre": "Haunter",
        "tipo": ["Fantasma", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
        "precio": 23
      },
      {
        "id": 94,
        "nombre": "Gengar",
        "tipo": ["Fantasma", "Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
        "precio": 30
      },
      {
        "id": 95,
        "nombre": "Onix",
        "tipo": ["Roca", "Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
        "precio": 28
      },
      {
        "id": 96,
        "nombre": "Drowzee",
        "tipo": ["Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
        "precio": 17
      },
      {
        "id": 97,
        "nombre": "Hypno",
        "tipo": ["Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
        "precio": 24
      },
      {
        "id": 98,
        "nombre": "Krabby",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
        "precio": 15
      },
      {
        "id": 99,
        "nombre": "Kingler",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
        "precio": 22
      },
      {
        "id": 100,
        "nombre": "Voltorb",
        "tipo": ["Eléctrico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
        "precio": 16
      },
      {
        "id": 101,
        "nombre": "Electrode",
        "tipo": ["Eléctrico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
        "precio": 23
      },
      {
        "id": 102,
        "nombre": "Exeggcute",
        "tipo": ["Planta", "Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
        "precio": 17
      },
      {
        "id": 103,
        "nombre": "Exeggutor",
        "tipo": ["Planta", "Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
        "precio": 24
      },
      {
        "id": 104,
        "nombre": "Cubone",
        "tipo": ["Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
        "precio": 18
      },
      {
        "id": 105,
        "nombre": "Marowak",
        "tipo": ["Tierra"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
        "precio": 25
      },
      {
        "id": 106,
        "nombre": "Hitmonlee",
        "tipo": ["Lucha"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
        "precio": 25
      },
      {
        "id": 107,
        "nombre": "Hitmonchan",
        "tipo": ["Lucha"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
        "precio": 25
      },
      {
        "id": 108,
        "nombre": "Lickitung",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
        "precio": 20
      },
      {
        "id": 109,
        "nombre": "Koffing",
        "tipo": ["Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
        "precio": 15
      },
      {
        "id": 110,
        "nombre": "Weezing",
        "tipo": ["Veneno"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
        "precio": 22
      },
      {
        "id": 111,
        "nombre": "Rhyhorn",
        "tipo": ["Tierra", "Roca"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
        "precio": 20
      },
      {
        "id": 112,
        "nombre": "Rhydon",
        "tipo": ["Tierra", "Roca"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
        "precio": 25
      },
      {
        "id": 113,
        "nombre": "Chansey",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
        "precio": 30
      },
      {
        "id": 114,
        "nombre": "Tangela",
        "tipo": ["Planta"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
        "precio": 22
      },
      {
        "id": 115,
        "nombre": "Kangaskhan",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
        "precio": 30
      },
      {
        "id": 116,
        "nombre": "Horsea",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
        "precio": 14
      },
      {
        "id": 117,
        "nombre": "Seadra",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
        "precio": 20
      },
      {
        "id": 118,
        "nombre": "Goldeen",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
        "precio": 15
      },
      {
        "id": 119,
        "nombre": "Seaking",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
        "precio": 22
      },
      {
        "id": 120,
        "nombre": "Staryu",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
        "precio": 17
      },
      {
        "id": 121,
        "nombre": "Starmie",
        "tipo": ["Agua", "Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
        "precio": 24
      },
      {
        "id": 122,
        "nombre": "Mr. Mime",
        "tipo": ["Psíquico", "Hada"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
        "precio": 22
      },
      {
        "id": 123,
        "nombre": "Scyther",
        "tipo": ["Bicho", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
        "precio": 25
      },
      {
        "id": 124,
        "nombre": "Jynx",
        "tipo": ["Hielo", "Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
        "precio": 24
      },
      {
        "id": 125,
        "nombre": "Electabuzz",
        "tipo": ["Eléctrico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
        "precio": 25
      },
      {
        "id": 126,
        "nombre": "Magmar",
        "tipo": ["Fuego"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
        "precio": 25
      },
      {
        "id": 127,
        "nombre": "Pinsir",
        "tipo": ["Bicho"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
        "precio": 25
      },
      {
        "id": 128,
        "nombre": "Tauros",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
        "precio": 25
      },
      {
        "id": 129,
        "nombre": "Magikarp",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
        "precio": 10
      },
      {
        "id": 130,
        "nombre": "Gyarados",
        "tipo": ["Agua", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
        "precio": 30
      },
      {
        "id": 131,
        "nombre": "Lapras",
        "tipo": ["Agua", "Hielo"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
        "precio": 30
      },
      {
        "id": 132,
        "nombre": "Ditto",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
        "precio": 50
      },
      {
        "id": 133,
        "nombre": "Eevee",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
        "precio": 25
      },
      {
        "id": 134,
        "nombre": "Vaporeon",
        "tipo": ["Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
        "precio": 30
      },
      {
        "id": 135,
        "nombre": "Jolteon",
        "tipo": ["Eléctrico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
        "precio": 30
      },
      {
        "id": 136,
        "nombre": "Flareon",
        "tipo": ["Fuego"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
        "precio": 30
      },
      {
        "id": 137,
        "nombre": "Porygon",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
        "precio": 35
      },
      {
        "id": 138,
        "nombre": "Omanyte",
        "tipo": ["Roca", "Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
        "precio": 30
      },
      {
        "id": 139,
        "nombre": "Omastar",
        "tipo": ["Roca", "Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
        "precio": 35
      },
      {
        "id": 140,
        "nombre": "Kabuto",
        "tipo": ["Roca", "Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
        "precio": 30
      },
      {
        "id": 141,
        "nombre": "Kabutops",
        "tipo": ["Roca", "Agua"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
        "precio": 35
      },
      {
        "id": 142,
        "nombre": "Aerodactyl",
        "tipo": ["Roca", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
        "precio": 35
      },
      {
        "id": 143,
        "nombre": "Snorlax",
        "tipo": ["Normal"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
        "precio": 50
      },
      {
        "id": 144,
        "nombre": "Articuno",
        "tipo": ["Hielo", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
        "precio": 100
      },
      {
        "id": 145,
        "nombre": "Zapdos",
        "tipo": ["Eléctrico", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
        "precio": 100
      },
      {
        "id": 146,
        "nombre": "Moltres",
        "tipo": ["Fuego", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
        "precio": 100
      },
      {
        "id": 147,
        "nombre": "Dratini",
        "tipo": ["Dragón"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
        "precio": 40
      },
      {
        "id": 148,
        "nombre": "Dragonair",
        "tipo": ["Dragón"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
        "precio": 60
      },
      {
        "id": 149,
        "nombre": "Dragonite",
        "tipo": ["Dragón", "Volador"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
        "precio": 80
      },
      {
        "id": 150,
        "nombre": "Mewtwo",
        "tipo": ["Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
        "precio": 150
      },
      {
        "id": 151,
        "nombre": "Mew",
        "tipo": ["Psíquico"],
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
        "precio": 200
      }
]
*/  

  /*
Estructura BASICA de una promesa

 const promesa = () =>{
        
    return new Promise ( (resolve,reject)=> {
      setTimeout( ()=>{             aca se simula un retrazo    
          if(condicion){
              resolve("Se resolvio")
            }else
            {
              reject("Se rechazo")
            }
        },2000)
    });
  }

promesa()
    .then( (respuesta)=>{
      console.log(respuesta)
    })
    .catch( (error)=>{
      console.log(error)
    })
    .finally( (respuesta)=>{
      console.log("Finalizo la promesa");
    })

  */
  
  