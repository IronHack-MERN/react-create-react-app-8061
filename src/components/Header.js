import React from 'react';
import logo from '../logo.svg'; // importing logo from src folder
import Title from './Title';

const Header = (props) => {
    const {curs, module} = props;
  return (
    <header className="App-header">
        <h1>Hola, bienvenido al curso de {curs}</h1>
        <h2>Módulo -> {module}</h2>
        <Title data="Impartido por 'Simon dice'">
        </Title>
    </header>
  );
}

export default Header;