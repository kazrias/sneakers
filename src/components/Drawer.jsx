import Info from "./info"
import AppContext from "../context";
import { useContext, useState } from "react";
import axios from "axios";
function Drawer({ cartItems, onClose, onRemove }) {
  const { setCartItems } = useContext(AppContext)
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://648b171617f1536d65ea54eb.mockapi.io/orders', {
        items: cartItems
      });
      setOrderId(data.id)
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://64862735a795d24810b7c1b8.mockapi.io/cart/${item.id}`)
        await new Promise(res => setTimeout(res, 1000))
      }
    }
    catch (err) {
      alert('Something went wrong!')
      console.log(err);
    }
    setIsLoading(false)
  }
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
            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
              <span>Оформить заказ</span>
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </> :
          <>
            <Info img={isOrderComplete ? "/img/complete.png" : "/img/drawer.png"} title={isOrderComplete ? "Заказ Оформлен" : "Корзина пустая"} descr={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} />
          </>}




      </div>
    </div>
  )
}
export default Drawer