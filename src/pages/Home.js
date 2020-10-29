// src/pages/Home.js
import React from 'react';
import RecentlySearched from '../components/RecentlySearched';
import LatestActivity from '../components/LatestActivity';

const Home = () => {
  return (
    <div className="container">
      <RecentlySearched />
      <br /><br />
      <LatestActivity />

	  <br />
      <p>Corsair clipper doubloon sloop loot American Main Shiver me timbers. Reef sails Plate Fleet ye yard walk the plank lugsail sloop.</p><br />
	  </div>
  )
}

export default Home;