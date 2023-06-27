import styles from './Card.module.scss'
import { useState } from 'react'
function Card({ id, name, price, imageUrl, onClickPlus, onClickFavorite, favorited = false }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const handleClickPlus = () => {
    if (!isAdded)
      onClickPlus({ name, price, imageUrl });
    setIsAdded(!isAdded)
  }
  const handleClickFavorite = () => {
    onClickFavorite({ id, name, price, imageUrl });
    setIsFavorite(!isFavorite);
  }
  return (
    <div className={styles.card}>
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
        <img className={styles.plus} onClick={handleClickPlus} src={`/img/${isAdded ? "added.svg" : "add.svg"}`} alt="plus" />
      </div>
    </div>
  )
}
export default Card