import { useContext } from "react"
import Card from "../components/Card/Card"
import AppContext from "../context"
function Home({
  items,
  cartItems,
  searchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading
}) {

  const renderItems = () => {
    return (isLoading ? [...Array(8)] : items.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase())))
      .map((item, index) =>
        <Card
          key={index}
          {...item}
          onClickFavorite={onAddToFavorite}
          onClickPlus={onAddToCart}
          loading={isLoading}
        />
      )
  }
  return (
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
          renderItems()
        }
      </div>
    </div>
  )
}
export default Home