"use client"
import Link from 'next/link';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [navyes, setNav] = useState(false);
  
    const handleSwitch = () => {
      setNav(!navyes);
    };
  return (
    <div className="flex flex-col gap-0 ">
    <nav className="navbar">
    <img alt='iopl'
      src="/logo-nav.svg"
      />
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link href="/">ACCUEIL</Link>
        </li>
        <li className="navbar-item">
          <Link href="/permis">PERMIS</Link>
        </li>
        <li className="navbar-item">
          <Link href="/code">CODE</Link>
        </li>
        <li className="navbar-item">
          <Link href="/qsn">QUI SOMME-NOUS?</Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      {!navyes && <FontAwesomeIcon onClick={() => handleSwitch()} icon={faBars} className='nav-selection' />}
      {navyes && <FontAwesomeIcon onClick={() => handleSwitch()} icon={faXmark} className='nav-selection' />}
    </nav>
    <ul className= {`navbar-menu-h ${!navyes ? "undisplay" : ""}`}>
        <li className="navbar-item-h">
          <Link href="/" data-page="acceuil" className='one-styling-nav' onClick={() => handleSwitch()} >ACCUEIL</Link>
        </li>
        <li className="navbar-item-h">
          <Link href="/permis" data-page="permis" className='one-styling-nav' onClick={() => handleSwitch()} >PERMIS</Link>
        </li>
        <li className="navbar-item-h">
          <Link href="/code" data-page="code" className='one-styling-nav' onClick={() => handleSwitch()} >CODE</Link>
        </li>
        <li className="navbar-item-h">
          <Link href="/qsn"  data-page="qsn" className='one-styling-nav' onClick={() => handleSwitch()} >QUI SOMME-NOUS?</Link>
        </li>
        <li className="navbar-item-h">
          <Link href="/contact" data-page="contact" className='one-styling-nav' onClick={() => handleSwitch()} >CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;