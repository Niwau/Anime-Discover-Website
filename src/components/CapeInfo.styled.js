import styled from 'styled-components';

export const Container = styled.div`

    color: var(--white);

    width: 630px;
    flex: 1;

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 3.5rem;
    }

    h2 {
        font-size: 2rem;
        font-weight: 200;
    }

    p {
        margin-top: 20px;
        font-size: 1.5rem;
        font-weight: 200;
    }

    button {
        margin-top: 20px;
        padding: 20px 50px;
        border: 2px solid var(--white);
        background: none;
        color: white;
        border-radius: 15px;
    }

`