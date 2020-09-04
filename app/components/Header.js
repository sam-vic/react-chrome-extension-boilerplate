import React, { Component } from 'react';
import style from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <imput type="file"/>
        <img src={require('../images/logo.png').default} alt='logo' className={style.logo} />
        <div className={style.title}>Reelgood</div>
      </header>
    );
  }
}
