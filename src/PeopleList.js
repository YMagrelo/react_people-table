import React from 'react';
import PropTypes from 'prop-types';

export const PeopleList = ({ people }) => (
  <ul>
    {people.map(({ name, born, died }) => (
      <li key={name}>
        {name}
        {born}
        -
        {died}
      </li>
    ))}
  </ul>
);

PeopleList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    sex: PropTypes.string,
    mother: PropTypes.string,
    father: PropTypes.string,
    born: PropTypes.string,
    died: PropTypes.string,
  })),
};

PeopleList.defaultProps = {
  people: [],
};
