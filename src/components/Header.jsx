function Header() {
  return (
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
  )
}
export default Header