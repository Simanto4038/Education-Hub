import React from 'react';
import UpperNav from './UpperNav';
import MainNav from './MainNav';
import NavLogo from './NavLogo';

const NevigationBar = () => {
    return (
        <div>
            <UpperNav/>
            <NavLogo/>
            <MainNav/>
        </div>
    );
};

export default NevigationBar;