import './App.css';
import styled from 'styled-components';

import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';

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
    color: #FF7B9C;
    outline: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    font-family: inherit;

    &::placeholder{
      opacity: .4;
      font-size: 22px;
      color: inherit;
    }
  }

  textarea:nth-of-type(2){
    color: #39375B;
    background: #FF7B9C;

    &::placeholder{
      opacity: .4;
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
  const [ inputInsert, setInputInsert ] = useState('')
  const [ codedTxt, setCodedTxt ] = useState('')
  const [ arrowSwitch, setArrowSwitch ] = useState('⬅️')

  const inputPlaceholders = [
    'Wpisz tekst, który chcesz zaszyfrować',
    'Wpisz tekst, który chcesz odszyfrować'
  ]

  const outputPlaceholders = [
    'Wpisz teskt powyżej',
    'Wpisz teskt powyżej'
  ]

  useEffect(() => {
    setCodedTxt(SzachownicaPolibiusza(inputInsert, mode))
  }, [inputInsert])

  useEffect(() => {
    if(mode == 0) setArrowSwitch('⬅️')
    else setArrowSwitch('➡️')
    setInputInsert('')
  }, [mode])

  const SzachownicaPolibiusza = (txt, mode) => {
    let coded = ''
    let decoded = ''

    const board = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i', 'k'],
      ['l', 'm', 'n', 'o', 'p'],
      ['q', 'r', 's', 't', 'u'],
      ['v', 'w', 'x', 'y', 'z'],
    ]

    const nums = [1,2,3,4,5]

    if(mode == 0){
      txt = txt.trim()
  
      let splitWordsToCode = txt.split(' ')
  
      splitWordsToCode.map(word => {
        for(let i = 0; i < word.length; i++){
          let charToCode = word[i].toLowerCase()
          
          if(charToCode == 'ł') charToCode = 'l'
          else if(charToCode == 'j' || charToCode == 'i') charToCode = 'i'
          else if(charToCode == 'ó') charToCode = 'o'
          else if(charToCode == 'ć') charToCode = 'c'
          else if(charToCode == 'ź') charToCode = 'z'
          else if(charToCode == 'ż') charToCode = 'z'
          else if(charToCode == 'ę') charToCode = 'e'
          else if(charToCode == 'ń') charToCode = 'n'
          else if(charToCode == 'ą') charToCode = 'a'
  
          console.log(charToCode)

          let found = false
          let toAdd = ''
          board.map((row, idr) => {
            if(row.indexOf(charToCode) >= 0) found = true
            row.map((cell, idc) => {
              if(cell == charToCode) toAdd = (idc+1).toString()+(idr+1).toString()
            })
          })

          if(found) coded += toAdd
          else coded += '?'

          console.log(found)
        }
        coded = coded + " "
      })
  
      return coded
    }
    else if(mode == 1){
      txt = txt.trim()

      let splitWordsToDecode = txt.split(' ')

      splitWordsToDecode.map(word => {
        let l = word.length
        console.log(l)
        if(l.length <= 1) decoded = '?'
        else{
          let toAdd = ''
          
          for(let i = 0; i < word.length; i += 2){
            let err = false
            if(nums.indexOf(parseInt(word[i])) == -1 || nums.indexOf(parseInt(word[i+1])) == -1) err = true
            if(!err) toAdd = `${board[parseInt(word[i+1]-1)][parseInt(word[i]-1)]}`
            err ? decoded += '? ' : decoded = decoded + toAdd
          }

          decoded += ' '
        }
      })
      
      return decoded
    }
  }
  
  return (
    <Container>
      <div>
        <Nav />
        <SwitchModeBox>
          <SwtichModeButton className={mode == 0 ? 'active' : null} onClick={() => setMode(0)}>
            szyfruj
          </SwtichModeButton>
          <div onClick={() => setMode(mode == 0 ? 1 : 0)} style={{cursor: 'pointer'}}>{arrowSwitch}</div>
          <SwtichModeButton className={mode == 1 ? 'active' : null} onClick={() => setMode(1)}>
            deszyfruj
          </SwtichModeButton>
        </SwitchModeBox>
      </div>
      <InputOutputBox>
        <textarea placeholder={inputPlaceholders[mode]} value={inputInsert && inputInsert} onInput={(e) => setInputInsert(e.target.value)}></textarea>
        <textarea disabled placeholder={outputPlaceholders[mode]} value={setInputInsert.length > 0 && codedTxt}></textarea>
      </InputOutputBox>
    </Container>
  );
}

export default App;
