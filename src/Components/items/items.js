import React , {useContext} from 'react'
import { GlobalContext } from '../../Context/GlobalContext';

const Item = () => {
    const {items , addToCart} = useContext(GlobalContext)
    return (
        <div>
            {items.map((item) => <div key={item.id} className='card'>
                <img src={require(` ${item.image}.jpg`)}  alt='img'/>
                <div className="card-info">
                    <h4>{item.name}</h4>
                    <span>Rs. {item.price}</span>
                </div>
                <button className="btn" onClick={() => addToCart(item)}> Add to Cart</button>
            </div>
            )}
        </div>
    )
}

export default Item;
