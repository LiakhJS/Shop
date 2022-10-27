import React, { useState } from "react";
import EditWindow from "./EditWindow";
import Product from "./Product";
import ProductCard from "./ProductCard";

const shopName = "Евроопт";
const productsList = [
  {
    id: 0,
    name: "Ананас",
    price: "4.55",
    url: "https://img.e-dostavka.by/UserFiles/images/catalog/Goods/1602/00001602/norm/thumbs/00001602.n_1_190x190@2x.png.jpg",
    count: 111,
  },
  {
    id: 1,
    name: "Банан",
    price: "3.79",
    url: "https://img.e-dostavka.by/UserFiles/images/catalog/Goods/3033/00093033/norm/thumbs/00093033.n_1_190x190@2x.png.jpg",
    count: 333,
  },
  {
    id: 2,
    name: "Помело",
    price: "3.19",
    url: "https://img.e-dostavka.by/UserFiles/images/catalog/Goods/7050/00077050/norm/thumbs/00077050.n_1_190x190@2x.png.jpg?09022021",
    count: 444,
  },
];

const ProductsTable = () => {
  const [products, setProductsList] = useState(productsList);
  const [activeProduct, setActiveProduct] = useState(null);
  const [editWindowBlock, setEditWindowBlock] = useState(false);
  const [productCardBlock, setProductCardBlock] = useState(false);

  const deleteProduct = (name) => {
    // name === item.name
    setProductsList(products.filter((el) => el.name !== name));
    setEditWindowBlock(false);
    setActiveProduct(null);
  };
  const showEditWindow = () => {
    setEditWindowBlock(!editWindowBlock);
  };
  const tableTitles = [
    "URL фотографии",
    "Название",
    "Цена",
    "Количество",
    "Управление",
  ].map((item) => <th key={item}>{item}</th>);

  const tableRows = products.map((item) => {
    return (
      <Product
        item={item}
        isActiveProduct={activeProduct === item.name}
        setActiveProduct={setActiveProduct}
        deleteProduct={deleteProduct}
        showEditWindow={showEditWindow}
        key={item.id}
        editWindowBlock={editWindowBlock}
        setProductCardBlock={setProductCardBlock}
      />
    );
  });

  return (
    <div>
      <h1>{shopName}</h1>
      <div className="display-flex">
        <table>
          <thead>
            <tr>{tableTitles}</tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        <ProductCard
          productCardBlock={productCardBlock}
          activeProduct={activeProduct}
        />
      </div>
      <EditWindow
        editWindowBlock={editWindowBlock}
        activeProduct={activeProduct}
      />
    </div>
  );
};

export default ProductsTable;
