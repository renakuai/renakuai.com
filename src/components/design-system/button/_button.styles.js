import styled from 'styled-components';
import '../../../styles/styles.scss';

export const Btn = styled.button`
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var( --font-body-regular-size);
  border-radius: var(--border-radius-large);
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
  border: none;
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${props => {
    switch (props.type) {
      case ('primary'):
        return `var(--color-font-inverse)`;
      case ('secondary'):
        return `var(--color-font-tertiary)`;
      case ('tertiary'):
        return `var(--color-font-tertiary)`;
      default:
        break;
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
      default:
        break;
    }
  }};
 &:hover {
  background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return `var(--color-background-action-primary-hover)`;
      case ('secondary'):
        return `var(--color-background-action-secondary-hover)`;
      case ('tertiary'):
        return `var(--color-background-action-secondary-hover)`;
      default:
        break;
    }
  }};
 }
`