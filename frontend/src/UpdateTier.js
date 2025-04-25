import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UpdateTier() {

    const { id } = useParams();
    const [tier, setTier] = useState(null);
    const [data, setData] = useState({
        name: '',
        tierart: '',
        krankheit: '',
        geburtstag: '',
        gewicht: ''
    });
    const updatedTier = {
        "tierart": "UPDATE",
        "name": "TEST UPDATE",
        "krankheit": "UPDATE",
        "geburtstag": "01.03.2024",
        "gewicht": 7.1
    };
    useEffect(() => {
        async function updateTiere() {
            const response = await fetch(`http://localhost:5005/tiere/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedTier)

            })
            const data = await response.json();
            setTier(data);
            setData({
                name: data.name,
                tierart: data.tierart,
                krankheit: data.krankheit,
                geburtstag: data.geburtstag,
                gewicht: data.gewicht
            });
        }
        updateTiere();
    }, [id]);
    return (
        <div>


            <Link to={"/"}>Alle Tiere </Link>
        </div>
    )
}

export default UpdateTier