// frontend/src/pages/TierDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TierCard from './TierCard';

function TierDetail() {
    const { id } = useParams();
    const [tier, setTier] = useState(null);

    useEffect(() => {
        async function detailTiere() {
            fetch(`http://localhost:5005/tiere/${id}`)
                .then(res => res.json())
                .then(data => setTier(data));
        }
        detailTiere();
    }, [id]);

    if (!tier) return <p>Lade Tierdaten...</p>;

    return (
        <div>
            <h2>{tier.name}</h2>
            <TierCard name={tier.name} art={tier.tierart} id={tier.id} />


            <button>Bearbeiten</button>
            <button>Löschen</button>
        </div>
    );
}

export default TierDetail;
