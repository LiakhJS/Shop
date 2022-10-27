import React from "react";

const ProductCard = ({ activeProduct, productCardBlock }) => {
  return (
    <div className={productCardBlock ? "productBlock" : "productNone"}>
      <form>
        <div>
          <span>ID</span>
          <span></span>
        </div>
        <label>
          {" "}
          Название
          <input type="text" placeholder={activeProduct} />
        </label>
        <label>
          Цена
          <input type="number" />
        </label>
        <label>
          Количество
          <input type="number" />
        </label>
        <div>
          <span>URL фотографии</span>
          <span>
            <img alt="url" />
          </span>
        </div>
      </form>
    </div>
  );
};

export default ProductCard;
