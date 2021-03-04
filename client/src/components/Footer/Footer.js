import React from 'react'
import "./styles.css";

const Footer = ({children}) => {
    return (
        <footer className="footer">
            {children}
        </footer>
    );
};

export default Footer
