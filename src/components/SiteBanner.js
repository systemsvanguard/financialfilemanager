// src/pages/SiteBanner.js
import React from 'react';
import { withRouter } from 'react-router-dom';

const SiteBanner = () => {
  const siteName = "Financial File Uploads";
  const siteMotto = "Financial Client Portal";

  return (
    <div>
      <section className="hero is-white">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="is-size-3 has-text-weight-bold has-text-centered myheadings">{siteName}</h2>
          <h3 className="is-size-5 has-text-weight-bold has-text-centered myheadings">{siteMotto}</h3>
        </div>
      </div>
      </section>
    </div>
  )
}

export default withRouter(SiteBanner);