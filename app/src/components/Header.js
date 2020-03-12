import React from 'react';
import Logo from './Logo';

const Header = () => (
    <header>
        <div className="fl">
            <button type="button">
                <img className="image-fluid" src="/images/misc/user.png" alt="User Settings" />
            </button>
        </div>

        <div className="fl">
            <Logo />
        </div>
    </header>
)

export default Header;