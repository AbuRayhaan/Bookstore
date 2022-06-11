import React from 'react';
import '../scss/Footer.scss';
import github from '../assets/github.svg';

function Footer() {
  return (
    <section className="footer">
      Copyright ©️
      <a href="https://github.com/aburayhaan">Hammed Adisa</a>
      <img src={github} alt="" />
    </section>
  );
}

export default Footer;
