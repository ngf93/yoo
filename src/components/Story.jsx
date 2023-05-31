import React from 'react';

const Story = (props) => {
  return (
    <figure className="story" onClick={props.onClick}>
      <img src="imgs/img1.png" alt="Пицца «Больше мяса»" />
      <figcaption>Пицца «Больше мяса»</figcaption>
    </figure>
  );
};

export default Story;