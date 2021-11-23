import React from "react";

function Info() {
    return (
        <div className="info">
            <img src="images/person.png" alt="person" className="info-image"/>
            <div className="container">
                <h1>Laura Smith</h1>
                <h2>Frontend Developer</h2>
                <div>laurasmith.website</div>
                <div className="buttons">
                    <button type="button" className="button">
                    <span className="button__icon">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </span>
                        <span className="button__text">Email</span>
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