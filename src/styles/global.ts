'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;

    background: #1a1a1a;

    color: #f7f7f7;
    font-family: 'Inter', sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
