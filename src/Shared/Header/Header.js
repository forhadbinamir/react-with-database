import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link style={{ marginRight: '8px' }} to="/home">Home</Link>
            <Link to="/">Users Info</Link>

        </div>
    );
};

export default Header;