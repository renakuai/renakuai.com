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
  border: ${props => props.active ? `none` : `1.5px solid var(--color-border-action-secondary)`};
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${props => props.active ? `var(--color-font-inverse)` : `var(--color-font-tertiary)`};
  background-color: ${props => props.active ? `var(--color-background-action-primary)` : `var(--color-background-action-secondary)`};
 &:hover {
  background-color: ${props => props.active ? `var(--color-background-action-primary-hover)` : `var(--color-background-action-secondary-hover)`};
 }
`