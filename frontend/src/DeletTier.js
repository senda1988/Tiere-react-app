import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DeletTier() {
    const { id } = useParams();
    const [tier, setTier] = useState(null);

    useEffect(() => {
        async function deleteTiere() {
            await fetch(`http://localhost:5005/tiere/${id}`, {
                method: "DELETE",

            })

        }
        deleteTiere();
    }, [id]);

    return (
        <>
            <h1> Tiere erfolgreich gelöscht! </h1>
            <Link to={"/"}>Alle Tiere </Link>
        </>


    )
}

export default DeletTier