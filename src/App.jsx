import { useState } from 'react'

function App() {
  return (
    <div className='wrapper clear'>
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img className='mr-15' width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='headerRight d-flex'>
          <li className='mr-30'>
            <img width={18} height={18} src="/img/cart.svg" alt="logo" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/heart.svg" alt="logo" />
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="logo" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className='mb-40'>Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers" />
            <h5 className='hh'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneakers" />
            <h5 className='hh'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneakers" />
            <h5 className='hh'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneakers" />
            <h5 className='hh'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
