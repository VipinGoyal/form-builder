import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import styled from "styled-components";

const ButtonContainer = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, className='', ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <ButtonContainer
      type="button"
      className={['storybook-button', `storybook-button--${size}`, `${className}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </ButtonContainer>
  );
};

Button.propTypes = {
   className: PropTypes.string,
   primary: PropTypes.bool,
   backgroundColor: PropTypes.string,
   size: PropTypes.oneOf(['small', 'medium', 'large']),
   label: PropTypes.string.isRequired,
   onClick: PropTypes.func
};

Button.defaultProps = {
  label: 'Button',
  primary: true,
  size: 'large',
  onClick: undefined,
};
