import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AddTier() {
    const [tier, setTier] = useState(null);
    const newTier = {
        "tierart": "Hund",
        "name": "Bello",
        "krankheit": "Husten",
        "geburtstag": "01.03.2024",
        "gewicht": 7.1
    };
    useEffect(() => {
        async function addTiere() {
            const response = await fetch(`http://localhost:5005/tiere`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTier)

            })
            const data = await response.json();
            setTier(data);
        }
        addTiere();
    }, []);
    return (
        <div> <h3>Tier wurde hinzugefügt:</h3>

            <Link to={"/"}>Alle Tiere </Link></div>
    )
}

export default AddTier