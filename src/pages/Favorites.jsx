import Card from "../components/Card/Card"
function Favorites({ items, onAddToFavorite }) {

  return (
    <div className="content p-40">
      <div className="d-flex mb-40 align-center justify-between">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {
          items.map((obj) =>
            <Card
              key={obj.imageUrl} 
              favorited={true}
              onClickFavorite={onAddToFavorite}
              {...obj}
            />
          )
        }
      </div>
    </div>
  )
}
export default Favorites