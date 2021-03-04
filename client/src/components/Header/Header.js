import React from 'react'
import "./styles.css";

const Header = ({children}) => {
    return (
        <header className="style">
            {children}
        </header>
    );
};

export default Header
