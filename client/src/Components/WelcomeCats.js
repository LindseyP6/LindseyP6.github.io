import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function WelcomeCats({catsArray}) {

  const singleCatImg = catsArray.sort(() => Math.random() - .5).slice(0, 8);

  const catImgs = singleCatImg.map((cat) => 
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>{cat.name}</Tooltip>}
    >
      <img className="welcome-cat-img" src={cat.image} alt={cat.name}/>
    </OverlayTrigger>
  );

  return (
    <div className="welcome-cats-main">
        {catImgs}
    </div>
  )
}

export default WelcomeCats