import Card from "../components/Card/Card"
function Home({ items, searchValue, onChangeSearchInput, onAddToFavorite, onAddToCart }) {

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
          items.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj) =>
              <Card
                key={obj.imageUrl}
                name={obj.name}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClickFavorite={onAddToFavorite}
                onClickPlus={onAddToCart}
              />
            )
        }
      </div>
    </div>
  )
}
export default Home