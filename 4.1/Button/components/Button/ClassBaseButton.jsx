import React, { Component } from 'react';
import './style.css';

class Button extends Component {
    state = {
        Subscribed: false
    }

    render() {
        const buttonClass = this.state.Subscribed ? 'btn subscribed' : 'btn';

        return (
            <>
                <button onClick={this.toggleSubscribed} className={buttonClass}>
                    {this.getButtonText()}
                </button>
            </>
        );
    }

    toggleSubscribed = () => {
        this.setState(prevState => ({
            Subscribed: !prevState.Subscribed
        }));
    }

    getButtonText() {
        return this.state.Subscribed ? "Subscribed" : "Subscribe";
    }
}

export default Button;
