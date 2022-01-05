import React, {useState} from "react";
import { Link } from "react-router-dom";
import Counter from "../counter/counter";
import "./itemDetail.css"

const ItemDetail = ({ product, onAdd, goCart }) => {
  
  const[talles, setTalles] = useState(false)  
  
  const showTalles = ()=>{
    setTalles(!talles)       
  }
 

  return (
    <div className="item-detail-container">
      <article className="card-detail">
        <div className="img-card-container">
          <img src={product.img} alt="img" />
          
          <div className="info-stock">
            <p>Stock disponible: {product.stock}</p>
          </div>
        
        </div>
        <div className="info-container2">
          <div className="info-title2">
            <p>{product.name}</p>
          </div>
          <div className="info-price2">
            <p>${product.price}</p>
          </div>
          <div className="description">
            <p>
              Remeras 100% Algodón, la mejor calidad del mercado.{" "}
              <strong>Tapacosturas</strong> en el cuello interno, combinados en
              todos nuestros diseños. <strong>Estampa</strong> La estampa textil
              es serigráfica de alta definición para lograr un efecto
              hiperrealista.{" "}
            </p>
          </div>
          <div className="info-size">
            <p onMouseOver={()=>showTalles()} onMouseOut={()=>showTalles()}>Info Talles</p>
            {
              talles ? 
              <div className="info-size-img">
                <img src="https://i.imgur.com/BD4v88S.jpg" alt="" />
              </div> : ""
            }
            
            <p>Medios de pago</p>
          </div>
          <div className="info-cuotas">
            <p>
              <img src="https://i.imgur.com/jbCriHS.png" alt="tdc" />3 cuotas sin interés de{" "}
              <span> ${parseFloat(product.price / 3).toFixed(2)}</span>
            </p>
            <p>
              <img src="https://i.imgur.com/jbCriHS.png" alt="tdc" />6 cuotas sin interés de{" "}
              <span> ${Math.round(product.price / 6).toFixed(2)}</span>
            </p>
          </div>
          {
        
        goCart ? <Link to="/cart" className="finish-shop">Terminar compra</Link> : <Counter stock= {product.stock} onAdd={onAdd} />
      }
         
        </div>
      </article>
      
      
      
    </div>
  );
};

export default ItemDetail;
