import styled, {createGlobalStyle} from 'styled-components';
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Chillax', sans-serif;
  }

  body {
    background: ${props => props.theme.colors.MediumPurple}
  }
`
export default GlobalStyles;