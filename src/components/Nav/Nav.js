import React, { useState } from 'react'

import styled from 'styled-components'

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
  color: #FF7B9C;
  background: #39375B;
  align-items: flex-start;
  gap: 10px;

  div{
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  div p{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
  }
`

const InfoButton = styled.div`
  cursor: pointer;
  margin-left: 15px;
  transition: .2s;

  &:hover{
    transform: scale(2);
    transition: .2s;
    opacity: 1;
  }
`

const AlgoInfoModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.9);
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  color: white;

  h1{
    font-size: 32px;
    text-align: center;
  }

  p{
    max-width: 550px;
    font-size: 20px;
    margin-top: 45px;
    line-height: 150%;
    text-align: center;
    margin: 0 auto;
  }

  table{
    margin-top: 25px;
    border-collapse: collapse;
  }

  table tr:nth-of-type(1) td:nth-of-type(1), table tr:nth-of-type(1) td, table tr td:nth-of-type(1){
    background: #FF7B9C;
    font-size: 16px;
    color: #39375B;
  }

  table td{
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    width: 40px;
    height: 40px;
    border: 1px solid #FF7B9C;
    border-collapse: collapse;
    padding: 4px;
  }
`


function Nav() {

const [ showInfo, setShowInfo ] = useState(false)

  return (
    <NavContainer>
        {showInfo && <AlgoInfoModal onClick={() => setShowInfo(false)}>
          <h1>Szachownica Polibiusza</h1>
          <p>Szyfr został opracowany przez greckiego historyka Polibiusza. Litery szyfrujemy zgodnie z poniższą szachownicą, najpierw numer kolumny, potem wiersza np.:</p>
          <table>
            <tr>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>1</td>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
              <td>E</td>
            </tr>
            <tr>
              <td>2</td>
              <td>F</td>
              <td>G</td>
              <td>H</td>
              <td style={{letterSpacing: '2px'}}>I/J</td>
              <td>K</td>
            </tr>
            <tr>
              <td>3</td>
              <td>L</td>
              <td>M</td>
              <td>N</td>
              <td>O</td>
              <td>P</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Q</td>
              <td>R</td>
              <td>S</td>
              <td>T</td>
              <td>U</td>
            </tr>
            <tr>
              <td>5</td>
              <td>V</td>
              <td>W</td>
              <td>X</td>
              <td>Y</td>
              <td>Z</td>
            </tr>
          </table>
          <p>np. BILET = 21 42 13 51 44</p>
        </AlgoInfoModal>
        }
        <div>
            <h1>Kryptograficzne szyfrowanie tekstu</h1>
            <p><b>Jan Mager</b>, numer albumu: <b>120117</b>, grupa <b> K23</b></p>
        </div>
        <div>
            <p>Metoda szyfrowania: <b>SZACHOWNICA POLIBIUSZA</b> <InfoButton onClick={() => setShowInfo(true)}>ℹ️</InfoButton></p>
        </div>
    </NavContainer>
  )
}

export default Nav