import React from 'react';
import Bio from './Bio';
import WelcomeCats from './WelcomeCats';
import Instagram from './Instagram';

function MainPage({catsArray}) {
  return (
    <div className="main-page">
        <h1>Welcome</h1>
        <div className="bio-insta-main">
            <Bio />
            <WelcomeCats catsArray={catsArray}/>
            <Instagram />
        </div>
    </div>
  )
}

export default MainPage