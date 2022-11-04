import React from "react";

const ProductCard = ({ activeElem, productCardBlock }) => {
  return (
    <div className={productCardBlock ? "productBlock" : "productNone"}>
      <div> <img alt="product" src={activeElem.url}/></div>
      <div>
        <div>{activeElem.name}</div>
        <div>{activeElem.price} руб</div>
        <div>{activeElem.count} шт</div>
      </div>
    </div>
  );
};

export default ProductCard;
