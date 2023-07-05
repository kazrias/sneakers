import { useContext } from "react"
import Card from "../components/Card/Card"
import AppContext from "../context";
function Favorites({ onAddToFavorite }) {
  const { favoriteItems
  } = useContext(AppContext)

  return (
    <div className="content p-40">
      <div className="d-flex mb-40 align-center justify-between">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {
          favoriteItems.map((obj) =>
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