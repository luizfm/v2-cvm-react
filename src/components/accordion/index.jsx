import React from 'react';
import { prismicSlicePropTypes } from '_utils/proptypes';

const Accordion = ({ slice }) => {
  console.log({ slice });
  return (
    <section>
      <h1>Os projetos disponibilizados pela CVM</h1>
      <div>
        {slice.items.map((item) => (
          <div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

Accordion.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(Accordion);
