import React from 'react';
import {BannerImage, Blurb} from '../../../styled-components/home'

function Banner(props) {
  return (
    <div>
      <BannerImage src="https://images.pexels.com/photos/6941442/pexels-photo-6941442.jpeg"/>
      <Blurb>
      Welcome to gogy where you can browse and share projects!!!
      </Blurb>
    </div>
  );
}

export default Banner;