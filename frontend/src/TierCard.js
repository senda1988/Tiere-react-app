import React from 'react';


function TierCard(props) {
    return (
        <div className="tier-info">
            <strong>Id :</strong> {props.id}<br />
            <strong>Name :</strong> {props.name}<br />
            <strong>Art :</strong>{props.art}<br />

        </div>
    )
}

export default TierCard