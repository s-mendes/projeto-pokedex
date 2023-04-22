import styled from 'styled-components'

export const Container = styled.section`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000055;
    backdrop-filter: blur(2px);
    opacity: 0;
    pointer-events: none;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    ${({ isVisible }) => isVisible && `
        opacity: 1;
        pointer-events: auto;
        div {
            transform: scale(1);
        }
    `}
`
export const Message = styled.div`
    width: 451px;
    height: 222px;
    background: #FFFFFF;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 72px;
        color: #000000;
    }
    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
    `