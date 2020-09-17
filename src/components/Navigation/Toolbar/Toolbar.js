import React from 'react';
import Logo from "../../Logo/Logo";
import './Toolbar.css';
import SerialsForm from "../../SerialsForm/SerialsForm";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div className="Toolbar-logo">
        <Logo />
      </div>
        <div className='Form'>
            <SerialsForm/>
        </div>
    </header>
  );
};

export default Toolbar;