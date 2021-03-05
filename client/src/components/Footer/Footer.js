import React from 'react'
import ContainerComp from '../Container/ContainerComp';
import "./styles.css";

const Footer = () => {
    return (
        <ContainerComp>
        <footer className="footer">
            <h1 className="footerText">
                © 2021 Victor Moscone. All Rights Reserved.
            </h1>
        </footer>
        </ContainerComp>

    );
};

export default Footer
