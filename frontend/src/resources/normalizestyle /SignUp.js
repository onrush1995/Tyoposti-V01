import styled from 'styled-components';

const GlobalStyle = styled.section`
    display: grid;
    align-items: center;
    .logo {
        display: block;
        margin: 0 auto;
        margin-bottom: 1.38rem;
    }
    .form {
        max-width: 1000px;
        border-top: 5px solid var(--tracker-1);
    }
    h3 {
        text-align: center;
    }
    p {
        margin: 0;
        margin-top: 1rem;
        text-align: center;
    }
    .btn {
        margin-top: 1.1rem;
    }
    .member-btn {
        background: transparent;
        border: transparent;
        color: var(--shiny-orange);
        cursor: pointer;
        letter-spacing: var(--letterSpacing);
        text-align: center;
    }
`;

export default GlobalStyle;
