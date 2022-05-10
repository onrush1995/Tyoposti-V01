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
        max-width: 100%;
        max-height: 100%;
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
    .toggle-btn {
        background: transparent;
        letter-spacing: var(--letterSpacing);
        font-weight: 900;
        border: transparent;
        color: var(--megento-6);
        cursor: pointer;
    }
`;

export default GlobalStyle;
