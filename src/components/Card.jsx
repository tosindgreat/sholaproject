import React, { useState } from 'react';

const Card = ({ data }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (amount) => {
        setQuantity(prev => prev + amount);
    };

    const handleOrderSubmit = () => {
        alert(`You ordered ${quantity} of ${data.title}`);
    };

    return (
        <div className="card">
            <img src={data.imageUrl} alt={data.title} />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>${data.price}</p>
            <div>
                <button onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <button onClick={handleOrderSubmit}>Submit Order</button>
        </div>
    );
};

export default Card;
