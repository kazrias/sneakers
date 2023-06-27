import { Link } from 'react-router-dom'
function Header({ onClickCart }) {
  return (
    <header className='d-flex justify-between align-center p-40'>
      <Link to="/">
        <div className='d-flex align-center'>
          <img className='mr-15 cu-p' width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className='headerRight'>
        <li onClick={onClickCart} className="cu-p">
          <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="Корзина" />
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img className="cu-p" width={18} height={18} src="/img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  )
}
export default Header