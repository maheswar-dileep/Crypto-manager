import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { NavMenu } from './NavMenu';

const Header = () => {
  return (
    <div className="flex justify-between p-6">
      <h5 className="scroll-m-20 text-xl font-semibold tracking-tight">Crypto Manager</h5>
      <NavMenu />
      <Button className="bg-blue-600 md:flex hidden">
        <Link to="/" className="text-lg font-semibold">
          logout
        </Link>
      </Button>
    </div>
  );
};

export default Header;
