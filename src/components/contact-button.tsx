'use client'
import React from 'react';
import styled from 'styled-components';

const ContactButton = ({ href }: { href: string }) => {
  return (
    <StyledWrapper>
      <a href={href}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
              <path fill="none" d="M0 0h24v24H0z" />
              <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
            </svg>
          </div>
        </div>
        <span>Me contacter</span>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  a {
    font-family: inherit;
    font-size: 16px;
    background: transparent;
    color: inherit;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: 1px solid currentColor;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
    width: 160px; // Largeur fixe pour éviter le débordement
    height: 54px; // Hauteur fixe pour correspondre au download button
    box-sizing: border-box;
    position: relative;
    justify-content: center;
  }

  .svg-wrapper-1 {
    position: absolute;
    left: 0.7em;
    transition: transform 0.3s ease-in-out; // Ajout de la transition de base
  }

  a span {
    display: block;
    margin-left: 1.5em;
    transition: all 0.3s ease-in-out;
  }

  a svg {
    display: block;
    transform-origin: center center;
    transition: all 0.3s ease-in-out; // Modification pour inclure toutes les propriétés
  }

  a:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  a:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  a:hover .svg-wrapper-1 {
    transform: translateX(3.2em);
  }

  a:hover svg {
    transform: rotate(45deg) scale(1.1);
  }

  a:hover span {
    transform: translateX(100%);
    opacity: 0;
  }

  a:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }
    to {
      transform: translateY(-0.1em);
    }
  }
`;

export default ContactButton;