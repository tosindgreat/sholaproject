import React from 'react';

const Hero = () => {
    
    const heroStyle = {
        width: '100%',
        height: '100vh',
        backgroundImage: `url('/images/background.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
    };

    return (
        <div style={heroStyle}>
            <h1>
            Adebimpe Radiating Skincare Products
                <br />
                <iframe width="1236" height="695" src="https://www.youtube.com/embed/Z9Rsen3LYM8" title="Why Choose LAIKOU? The Secret Behind Gently Glowing Your Skin So" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </h1>
            <p>Your World of Gentle Care</p>
        </div>
    );
};

export default Hero;
