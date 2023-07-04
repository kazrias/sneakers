import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
import { useState, useEffect } from 'react'
function Card({ id,
  name,
  price,
  imageUrl,
  onClickPlus,
  onClickFavorite,
  favorited = false,
  loading = false,
  added }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const handleClickPlus = () => {
    onClickPlus({ id, name, price, imageUrl });
    setIsAdded(!isAdded)
  }
  const handleClickFavorite = () => {
    onClickFavorite({ id, name, price, imageUrl });
    setIsFavorite(!isFavorite);
  }
  useEffect(() => {
    setIsAdded(added);
  }, [added])
  return (
    <div className={styles.card}>
      {
        loading ?
          <ContentLoader
            speed={2}
            width={150}
            height={210}
            viewBox="0 0 150 210"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="150" height="100" />
            <rect x="0" y="117" rx="3" ry="3" width="150" height="15" />
            <rect x="118" y="181" rx="6" ry="6" width="32" height="32" />
            <rect x="0" y="137" rx="3" ry="3" width="93" height="15" />
            <rect x="0" y="189" rx="3" ry="3" width="80" height="24" />
          </ContentLoader> : <>
            <div onClick={handleClickFavorite} className={styles.favorite}>
              <img src={`/img/${isFavorite ? "liked.svg" : "unliked.svg"}`} alt="unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneakers" />
            <h5>{name}</h5>
            <div className='d-flex justify-between align-center'>
              <div>
                <p>Цена:</p>
                <b>{price} руб.</b>
              </div>
              <img className={styles.plus} onClick={() => handleClickPlus()} src={`/img/${isAdded ? "added.svg" : "add.svg"}`} alt="plus" />
            </div></>
      }

    </div>
  )
}
export default Card










































