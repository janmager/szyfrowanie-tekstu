import './App.css';
import styled from 'styled-components';

import Nav from './components/Nav/Nav';
import { useState } from 'react';

const Container = styled.div`
  height: 100vh;
  display: flex;
  background: gray;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  > div > div{
    padding: 25px;
  }
`

const SwitchModeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  color: #39375B;
  background: #FF7B9C;

  div{
    width: 50%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;

    &:hover{
      background: red;
      color: rebeccapurple;
    }
  }
`

const InputOutputBox = styled.div`
    height: 100%;
    background: #39375B;
    color: #B3C2F2;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 24px;
    line-height: 175%;

  > div:nth-of-type(2){
    background: #B3C2F2;
    color: #39375B;
  }
  textarea{
    display: flex;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    resize: none;
    height: 50%;
    background: #39375B;
    color: #B3C2F2;
    outline: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    font-family: inherit;

    &::placeholder{
      opacity: .2;
      font-size: 22px;
      color: inherit;
    }
  }

  textarea:nth-of-type(2){
    background: #B3C2F2;
    color: #39375B;

    &::placeholder{
      opacity: .2;
    }
  }
`

const SwtichModeButton = styled.span`
    height: 50px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    opacity: .5;
    transition: .2s;

    &.active{
      font-weight: 600;
      opacity: 1;
      font-size: 18px;
    }

    &:hover{
      cursor: pointer;
      font-weight: 600;
      opacity: .75;
      font-size: 18px;
      transition: .2s;
    }
`

function App() {
  // 0 szyfruj
  // 1 deszyfruj
  const [ mode, setMode ] = useState(0)

  const inputPlaceholders = [
    'Wpisz tekst, który chcesz zaszyfrować',
    'Wpisz tekst, który chcesz odszyfrować'
  ]

  const outputPlaceholders = [
    'Wpisz teskt powyżej',
    'Wpisz teskt powyżej'
  ]
  
  return (
    <Container>
      <div>
        <Nav />
        <SwitchModeBox>
          <SwtichModeButton className={mode == 0 ? 'active' : null} onClick={() => setMode(0)}>
            szyfruj
          </SwtichModeButton>
          <SwtichModeButton className={mode == 1 ? 'active' : null} onClick={() => setMode(1)}>
            deszyfruj
          </SwtichModeButton>
        </SwitchModeBox>
      </div>
      <InputOutputBox>
        <textarea placeholder={inputPlaceholders[mode]}></textarea>
        <textarea disabled placeholder={outputPlaceholders[mode]}></textarea>
      </InputOutputBox>
    </Container>
  );
}

export default App;
