// src/pages/SiteFooter.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const SiteFooter = () => {
  /* ending copyrighht year is current year */
  const GetCurrentYear = () => {
    const currDate = new Date();
    const currYear = currDate.getFullYear();
    return (
      <span><strong>{currYear}</strong></span>
    );
  }

  return (
    <div>
      <footer className="footer has-background-white is-widescreen">
        <div className="content has-text-centered">
            <p>
               <strong>Financial File Uploads</strong><br />  <em>Filler text</em> kindly supplied by  <a href="https://pirateipsum.me/">PirateIpsum.me</a>. <br />This source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
               Copyright &copy; 2018 - <GetCurrentYear /> | All rights reserved.</p>

        </div>
      </footer>
    </div>
  )
}

export default SiteFooter;