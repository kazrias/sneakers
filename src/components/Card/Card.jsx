import styles from './Card.module.scss'
console.log(styles);
function Card({title,price,imageUrl}) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}><img src="/img/unliked.svg" alt="unliked" /></div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div>
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <button className='button'>
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  )
}
export default Card