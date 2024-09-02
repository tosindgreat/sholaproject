
import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 Adebimpe PLC. All rights reserved.</p>
            <p>
                <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
            </p>
        </footer>
    );
};

const footerStyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
};

export default Footer;