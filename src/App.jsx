import Card from "./components/Card/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"
const arr = [
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg' },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 16999, imageUrl: '/img/sneakers/2.jpg' },
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/3.jpg' },
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/4.jpg' },

]
function App() {
  return (
    <div className='wrapper clear'>
      <Drawer />
      <Header />
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
            arr.map((obj,i) =>
              <Card key={i}title={obj.name} price={obj.price} imageUrl={obj.imageUrl} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
