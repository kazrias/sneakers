import { Router as Routich, Route, Routes } from 'react-router-dom'
import { useState, useEffect, createContext } from "react"
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import AppContext from './context';
// let arr = [
//   { id:1,name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg' },
//   { id:2,name: 'Мужские Кроссовки Nike Air Max 270', price: 22999, imageUrl: '/img/sneakers/2.jpg' },
//   { id:3,name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 8999, imageUrl: '/img/sneakers/3.jpg' },
//   { id:4,name: 'Кроссовки Puma X Aka Boku Future Rider', price: 15999, imageUrl: '/img/sneakers/4.jpg' },
//   { id:5,name: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imageUrl: '/img/sneakers/5.jpg' },
//   { id:6,name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imageUrl: '/img/sneakers/6.jpg' },
//   { id:7,name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imageUrl: '/img/sneakers/7.jpg' },
//   { id:8,name: 'Мужские Кроссовки Nike LeBron XVIII', price: 12999, imageUrl: '/img/sneakers/8.jpg' }
// ]
// console.log(JSON.stringify(arr));

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  }
  useEffect(() => {
    async function fetchData() {
      const cartRes = await axios.get('https://64862735a795d24810b7c1b8.mockapi.io/cart');
      const favRes = await axios.get('https://648b171617f1536d65ea54eb.mockapi.io/favorites');
      const itemsRes = await axios.get('https://64862735a795d24810b7c1b8.mockapi.io/items');
      setIsLoading(false)
      setCartItems(cartRes.data);
      setFavoriteItems(favRes.data);
      setItems(itemsRes.data);
    }
    fetchData();
  }, [])
  const onAddToCart = (product) => {
    if (cartItems.find(item => +item.id === +product.id)) {
      axios.delete(`https://64862735a795d24810b7c1b8.mockapi.io/cart/${product.id}`);
      setCartItems(prev => prev.filter(item => item.id !== product.id))
    }
    else {
      axios.post('https://64862735a795d24810b7c1b8.mockapi.io/cart', product)
      setCartItems(prev => [...prev, product]);
    }


  }
  const onAddToFavorite = (product) => {
    if (favoriteItems.find(obj => obj.id == product.id)) {
      axios.delete(`https://648b171617f1536d65ea54eb.mockapi.io/favorites/${product.id}`)
      setFavoriteItems((prev) => prev.filter(item => item.id !== product.id))
    } else {
      axios.post('https://648b171617f1536d65ea54eb.mockapi.io/favorites', product).then(res => setFavoriteItems((prev) => [...prev, res.data]));
    }
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://64862735a795d24810b7c1b8.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }
  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }
  return (
    <AppContext.Provider value={{ items, cartItems, favoriteItems, isItemAdded, setCartOpened,setCartItems }}>
      <div className='wrapper clear'>
        {cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route path="/favorites" exact element={
            <Favorites
              onAddToFavorite={onAddToFavorite}
            />
          }></Route>
        </Routes>

      </div>
    </AppContext.Provider>
  )
}

export default App
