import React, { useEffect, useState } from 'react';
import InstagramEmbed from 'react-instagram-embed';

function Instagram() {

  return (
    <div className="instagram-container">
        <iframe src="https://www.instagram.com/p/CdbU5mAJUBR/embed" frameBorder="0" title="all-cats-insta-post" className="responsive-iframe"></iframe>

        <p>See more cute stories <a href="https://www.instagram.com/allcatsarebeautiful_bktnr/" target="blank">here 🐈 </a></p>
        {/*
        <script src="https://snapwidget.com/js/snapwidget.js"></script>
        <iframe src="https://snapwidget.com/embed/996095" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" title="acab-insta"
        style={{"border":"none", "overflow":"hidden", "width":"660x", "height":"640px"}}
        ></iframe> 
        */}

    </div>
  )
}

export default Instagram