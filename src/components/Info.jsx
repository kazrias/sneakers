import { useContext } from "react"
import AppContext from "../context"

function Info({ img, title, descr }) {
  const {setCartOpened}=useContext(AppContext)
  return (
    <div className="cartEmpty">
      <img width={120} src={img} alt="empty-cart" />
      <h4>{title}</h4>
      <p>{descr}</p>
      <button onClick={()=>setCartOpened(false)} className="greenButton">
        <img src="/img/arrow.svg" alt="arrow" />
        <span>Вернуться назад</span>
      </button>
    </div>
  )
}
export default Info