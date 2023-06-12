function Drawer({ cartItems, onClose, onRemove }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between align-center">Корзина <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" /></h2>
        {cartItems.length > 0 ? <>
          <div className="items flex">
            {
              cartItems.map((obj) => (
                <div key={obj.imageUrl} className="cartItem d-flex align-center mb-20">
                  <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.name}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img className="removeBtn" onClick={() => onRemove(obj.id)} src="/img/btn-remove.svg" alt="Remove" />
                </div>))
            }

          </div>
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li className="d-flex">
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              <span>Оформить заказ</span>
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </> :
          <div className="cartEmpty">
            <img width={120} height={120} src="/img/drawer.png" alt="empty-cart" />
            <h4>Корзина пустая</h4>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              <span>Вернуться назад</span>
            </button>
          </div>
        }




      </div>
    </div>
  )
}
export default Drawer