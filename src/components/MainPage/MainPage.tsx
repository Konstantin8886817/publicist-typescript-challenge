import React, { useState, useEffect } from 'react';
import { TextSection } from '../common/TextSectionComponent';
import CardComponent from '../common/CardComponent';

function App() {
  const [sliderCarousel, setSliderCarousel] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (sliderCarousel < 3) {
        setSliderCarousel(sliderCarousel + 1);
      } else {
        setSliderCarousel(1);
      }
    }, 5000);
  }, [sliderCarousel]);

  return (
    <React.Fragment>
      {sliderCarousel === 1 && (
        <CardComponent>
          <TextSection id="welcome" />
        </CardComponent>
      )}
      {sliderCarousel === 2 && (
        <CardComponent>
          <TextSection id="blog_post" />
        </CardComponent>
      )}
      {sliderCarousel === 3 && (
        <CardComponent>
          <TextSection id="kitchen_sink" />
        </CardComponent>
      )}
    </React.Fragment>
  );
}

export default App;
