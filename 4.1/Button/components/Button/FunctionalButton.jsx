import React, { useState } from 'react';
import './style.css';

const Button = () => {
    const [subscribed, setSubscribed] = useState(false);

    function toggleSubscribed() {
        setSubscribed(prevState => !prevState);
    }

    function getButtonText() {
        return subscribed ? "Subscribed" : "Subscribe";
    }

    const buttonClass = subscribed ? 'btn subscribed' : 'btn';

    return (
        <button onClick={toggleSubscribed} className={buttonClass}>
            {getButtonText()}
        </button>
    );
}

export default Button;
