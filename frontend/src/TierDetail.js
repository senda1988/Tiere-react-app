
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TierCard from './TierCard';
import { Link } from 'react-router-dom';

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


            <Link to={`/tier-update/${tier.id}`}>  <button>Bearbeiten</button>
                <Link to={`/tierdelete/${tier.id}`}> <button >Löschen</button></Link></Link>

        </div>
    );
}

export default TierDetail;
