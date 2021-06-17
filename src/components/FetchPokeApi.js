import React, {useState, useEffect} from 'react'

function FetchPokeApi() {
    const [Pokemon, setPokemon] = useState(null)
        useEffect(() => {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=125")
            .then((res)=>res.json())
            .then((res)=>(setPokemon(res.results)))
            
        }, [])
    return (
        <div>
            {Pokemon !== null ? (Pokemon.map((Pokemon, index)=>{
                    return console.log(Pokemon.name)
                })
                ) : (
                    console.log("Pokemones:")
                )
            }
        </div>
    )
}

export default FetchPokeApi
