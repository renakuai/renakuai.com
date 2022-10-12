import styled from 'styled-components';
import '../../../styles/_themes.scss';
import '../../../styles/tokens.scss';

export const Path = styled.path`
    fill: ${props => {
    switch (props.color) {
      case ('primary'):
        return `var(--color-icon-tertiary)`;
      case ('secondary'):
        return `var(--color-icon-secondary)`;
      case ('tertiary'):
        return `var(--color-icon-secondary)`;
      default:
        break;
    }
  }
  }
`