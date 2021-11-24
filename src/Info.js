import React from "react";

function Info() {
    return (
        <div className="info">
            <img src="images/person.png" alt="person" className="info-image"/>
            <div className="container">
                <h1 className='name'>Laura Smith</h1>
                <h2 className="position">Frontend Developer</h2>
                <div className='info-site'>laurasmith.website</div>
                <div className="buttons">
                    <button type="button" className="button-email">
                    <span className="button__icon__email">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                        <span className="button__text__email">Email</span>
                    </button>

                    <button type="button" className="button">
                    <span className="button__icon">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </span>
                        <span className="button__text">LinkedIn</span>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Info;