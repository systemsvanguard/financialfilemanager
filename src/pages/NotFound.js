// src/pages/NotFound.js
import React from 'react';
import NotFoundImg from '../images/not_found.jpg'

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="is-size-2 has-text-weight-bold has-text-info  has-text-centered">Oops! Page Not Found</h1>
      <img src={NotFoundImg} className="img_responsive" alt="Page Not Found" title="Page Not Found" />
      <p className="subtitle has-text-centered">We are very sorry! We cannot find the resource you are looking for.  Please try again?</p><br />
	</div>
  )
}
export default NotFound;