import React, { useState } from 'react';

const AuthForms = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
           
            <button 
                onClick={() => setShowSignUp(!showSignUp)} 
                className="btn btn-signup"
                style={{ backgroundColor: 'green', color: 'white' }} 
            >
                Sign Up
            </button>

            
            <button 
                onClick={() => setShowLogin(!showLogin)} 
                className="btn btn-login"
                style={{ backgroundColor: 'lightgreen', color: 'white', marginLeft: '10px' }} 
            >
                Login
            </button>

            {showSignUp && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowSignUp(false)}>&times;</span>
                        <form className="signup-form">
                            <p>Sign Up for Free</p>
                            <label htmlFor="signup-username">Username</label>
                            <input type="text" className="form-control" id="signup-username" placeholder="Enter username" />
                            
                            <div className="input-group">
                                <input type="text" placeholder="First Name*" required />
                                <input type="text" placeholder="Last Name*" required />
                            </div>
                            
                            <input type="email" placeholder="Email Address*" required />
                            <input type="password" placeholder="Set A Password*" required />
                            
                            <button type="submit" className="btn">GET STARTED</button>
                        </form>
                    </div>
                </div>
            )}

            {showLogin && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
                        <form className="login-form">
                            <p>Login to Your Account</p>
                            <div className="form-group">
                                <label htmlFor="login-username">Username</label>
                                <input type="text" className="form-control" id="login-username" placeholder="Enter username" />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="login-password">Password</label>
                                <input type="password" className="form-control" id="login-password" placeholder="Password" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthForms;