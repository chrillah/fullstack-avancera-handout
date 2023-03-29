import React, { useState, useEffect } from 'react'

function FetchUseEffect() {
    const [cities, setCities] = useState(null)
    useEffect(() => {
        fetch('https://avancera.app/cities/')
            .then((response) => response.json())
            .then((result) => {
                setCities(result)
            })
    }, [])
    // ANDRAARGUMENTET är där för att inte göra så att settern skapar en oändlig loop
    return (
        cities && (
            <ol>
                {cities.map((city) => (
                    <li key={city.id}>{city.name}</li>
                ))}
            </ol>
        )
    )
}

export default FetchUseEffect
