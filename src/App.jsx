import { useState, useEffect } from "react"
import axios from 'axios';
import Card from "./components/Card/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"
function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  }
  // https://64862735a795d24810b7c1b8.mockapi.io/cart

  useEffect(() => {
    axios.get('https://64862735a795d24810b7c1b8.mockapi.io/items')
      .then(res => {
        setItems(res.data)
      })
    axios.get('https://64862735a795d24810b7c1b8.mockapi.io/cart')
      .then(res => {
        setCartItems(res.data)
      })
  }, [])
  const onAddToCart = (product) => {
    axios.post('https://64862735a795d24810b7c1b8.mockapi.io/cart', product);
    setCartItems((prev) => [...prev, product])
    console.log(product);
  }
  const onAddToFavorite = (obj) => {

  }
  const onRemoveItem = (id) => {
    axios.delete(`https://64862735a795d24810b7c1b8.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }
  return (
    <div className='wrapper clear'>
      {cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex mb-40 align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search " />
            <input onChange={onChangeSearchInput} type="text" placeholder="Поиск..." value={searchValue} />
          </div>
        </div>
        <div className="sneakers">
          {
            items.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj) =>
                <Card
                  key={obj.imageUrl} name={obj.name}
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
