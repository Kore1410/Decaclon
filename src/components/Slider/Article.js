import './Article.css';
import { VtmnPrice, VtmnRating, VtmnTag } from '@vtmn/react';
import { useEffect, useState } from "react";


function Article({price, imgArticles, title, description,num}) {
  let[products,setProducts] =useState([]);

  useEffect(
      () => {
          const options = {
              method:'GET',
          };

          fetch('http://localhost:3000/products')
              .then(response => response.json())
              .then(data => setProducts(data))
              .catch(err => console.error(err));
      },
      []
  );

  return (
    <article  className='carousel'>
      {
        products.slice(15).map(product =>
          <div>
            <div className="tarjeta">
              <div  className='cajaPrecio'>
                <VtmnTag className='precio'>
                  <VtmnPrice>{product.precio}</VtmnPrice> 
                </VtmnTag>
              </div>  
              <div className='caja'>
                <img src={product.imagen} className="imgArticles" alt="Articulo" />
              </div> 
              <div className='cajaTexto'>
                <h3>{product.marca}</h3>
                <p className='descripcion'>{product.nombre}</p> 
                <VtmnRating size="small"></VtmnRating>
              </div>
            </div>
          </div>
            
        )
      }
    </article>
  );
}

export default Article;
