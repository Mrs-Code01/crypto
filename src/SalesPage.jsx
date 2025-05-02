import React from 'react'
import './salespage.css'
import CountdownTimer from './CountdownTimer'
import cryptomen from '../images/cryptomen.jpg'



const SalesPage = () => {
  return (
    <>
      <main>
        <h1>Understand Crypto Or Stay Broke</h1>
        <img src={cryptomen} alt="" />
        <p>
          Every week, people make thousands from crypto_not because they invest big, but because they understand the terms. <br />This channel is created to decode every blockchain term that could mean the difference between staying broke or catching the next opportunity. No hype. No guesswork. Just raw crypto truth in a language anyone can understand. <br />If you're tired of missing out, this is your warning shot_get in.
        </p>
        <a href="https://t.me/understandCryptoOrStayBroke">GET ACCESS NOW</a>
        <CountdownTimer />
      </main>
      <div className='gas'>
        <p>In 2021, someone tried to swap $100 worth of tokens. The gas fee? $140. He lost more than he was sending.<br />Why? He didn't check the network status_or understand gas lol
        </p>
        <h3>Understand Crypto Or Stay Broke</h3>
        <a href="https://t.me/understandCryptoOrStayBroke">GET ACCESS NOW</a>
        <CountdownTimer />
      </div>
    </>
  )
}

export default SalesPage
