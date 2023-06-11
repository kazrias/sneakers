import { useState, useEffect } from "react"
import Card from "./components/Card/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"
function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  // 
  // 
  // 
  useEffect(() => {
    fetch('https://64862735a795d24810b7c1b8.mockapi.io/items')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])
  const onAddToCart = (product) => {
    if (!cartItems.length)
      setCartItems(prev => [...prev, product])
    else {
     
      for (let item of cartItems) {
        console.log(item);
        if (item.name != product.name && item.price != product.price && item.imageUrl != product.imageUrl)
          setCartItems(prev => [...prev, product])
      }
    }
  }
  return (
    <div className='wrapper clear'>
      {cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex mb-40 align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search " />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {
            items.map((obj, i) =>
              <Card
                key={i} name={obj.name}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClickFavorite={() => console.log('Добавили в закладки')}
                onClickPlus={onAddToCart}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
