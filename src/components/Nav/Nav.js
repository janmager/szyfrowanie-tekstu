import React from 'react'

function Nav() {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', width: '100%', flexDirection: 'column', background: 'white', alignItems: 'flex-start', gap: '10px'}}>
        <div style={{gap: '10px', display: 'flex', flexDirection: 'column'}}>
            <h1>Kryptograficzne szyfrowanie tekstu</h1>
            <p>Jan Mager, numer albumu: <b>120117</b>, grupa <b>K23</b></p>
        </div>
        <div style={{gap: '10px', display: 'flex', flexDirection: 'column'}}>
            <p>Wykorzystany algorytm: <b>SZYFR CEZARA</b></p>
            <p>Działanie: <b>lorem ipsum lorem ipsun porem psu</b></p>
        </div>
    </div>
  )
}

export default Nav