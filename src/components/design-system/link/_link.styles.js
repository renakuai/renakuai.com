import styled, { keyframes } from 'styled-components';
import '../../../styles/styles.scss';

export const Link = styled.a`
  cursor: pointer;
  font-family: var(--font-family);
  border-radius: var(--border-radius-large);
  display: inline-flex;
  width: fit-content;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
  border: none;
  ${props => props.type === 'default' &&
    `text-decoration: underline;
    `
  }
  ${props => props.type !== 'default' &&
    `height: 2.5rem;
     padding-left: 1rem;
     padding-right: 1rem;
     font-size: var( --font-body-regular-size);
     text-decoration: none;
     transition: transform 250ms;
     `
  }
  color: ${props => {
    switch (props.type) {
      case ('primary'):
        return `var(--color-font-inverse)`;
      case ('secondary'):
        return `var(--color-font-tertiary)`;
      case ('tertiary'):
        return `var(--color-font-tertiary)`;
      case ('default'):
        return `var(--color-font-link)`;
    }
  }};
  background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return `var(--color-background-action-primary)`;
      case ('secondary'):
        return `var(--color-background-action-secondary)`;
      case ('tertiary'):
        return `var(--color-background-action-secondary)`;
      case ('default'):
        return `none`;
    }
  }};
 &:hover {
  transform: ${props => props.type !== 'default' && `translateY(-4px)`};
  background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return `var(--color-background-action-primary-hover)`;
      case ('secondary'):
        return `var(--color-background-action-secondary-hover)`;
      case ('tertiary'):
        return `var(--color-background-action-secondary-hover)`;
      case ('default'):
        return `none`
    }
  }};
  color: ${props => props.type === 'default' && `var(--color-font-link-hover)`
  }};
  &:visited {
    color: ${props => {
    switch (props.type) {
      case ('primary'):
        return `var(--color-font-inverse)`;
      case ('secondary'):
        return `var(--color-font-tertiary)`;
      case ('tertiary'):
        return `var(--color-font-tertiary)`;
      case ('default'):
        return `var(--color-font-link)`;
    }
  }};
  }
 }
`