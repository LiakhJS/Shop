import React, { useState, useEffect } from "react";
import EditWindow from "./EditWindow";
import NewProductForm from "./NewProductForm";
import Product from "./Product";
import ProductCard from "./ProductCard";

const shopName = "Евроопт";
// const productsList = [
//   {
//     id: 1,
//     name: "Ананас",
//     price: "4.55",
//     url: project2,
//     count: 111,
//   },
//   {
//     id: 2,
//     name: "Банан",
//     price: "3.79",
//     url: "https://img.e-dostavka.by/UserFiles/images/catalog/Goods/3033/00093033/norm/thumbs/00093033.n_1_190x190@2x.png.jpg",
//     count: 333,
//   },
//   {
//     id: 3,
//     name: "Помело",
//     price: "3.19",
//     url: "https://img.e-dostavka.by/UserFiles/images/catalog/Goods/7050/00077050/norm/thumbs/00077050.n_1_190x190@2x.png.jpg?09022021",
//     count: 444,
//   },
// ];

const ProductsTable = () => {
  const [products, setProductsList] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [editWindowBlock, setEditWindowBlock] = useState(false);
  const [productCardBlock, setProductCardBlock] = useState(false);
  const [activeCreateForm, setActiveCreateForm] = useState(false);
  const [activeElem, setActiveElem] = useState({});
  const [edittedProperties, setEdittedproduct] = useState({
    id: "",
    url: "",
    name: "",
    price: "",
    count: "",
  });
  const productsId = products.map((elem) => elem.id);
  const newId = Number(productsId.slice(-1)) + 1;
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then(
        (result) => {
          setProductsList(result);
        },
        (error) => {
          console.log(error.message);
        }
      );
  }, []);

  const deleteProduct = (name) => {
    setProductsList(products.filter((el) => el.name !== name));
    setEditWindowBlock(false);
  };

  const editProduct = () => {
    const copy = Object.assign([], products);
    copy[activeElem.index].url = edittedProperties.url;
    copy[activeElem.index].name = edittedProperties.name;
    copy[activeElem.index].price = edittedProperties.price;
    copy[activeElem.index].count = edittedProperties.count;
    setProductsList(copy);
  };

  const editProductFunction = (e) => {
    setEditWindowBlock(false);
    setFormValid(false);
    e.stopPropagation();
    e.preventDefault();
    editProduct();
    setEdittedproduct({ url: "", name: "", price: "", count: "" });
    closeEditWindow();
  };

  const createNewProduct = (NewProduct) => {
    setProductsList([...products, NewProduct]);
  };

  const showEditWindow = () => {
    if (activeCreateForm) {
      setEditWindowBlock(editWindowBlock);
    } else setEditWindowBlock(!editWindowBlock);
  };

  const closeEditWindow = (e) => {
    e.preventDefault();
    setEditWindowBlock(false);
  };

  const tableTitles = [
    "URL фотографии",
    "Название",
    "Цена",
    "Количество",
    "Управление",
  ].map((item) => <th key={item}>{item}</th>);

  const tableRows = products.map((item, index) => {
    return (
      <Product
        item={item}
        isActiveProduct={activeProduct === item.id}
        setActiveProduct={setActiveProduct}
        deleteProduct={deleteProduct}
        showEditWindow={showEditWindow}
        key={item.id}
        editWindowBlock={editWindowBlock}
        setProductCardBlock={setProductCardBlock}
        setActiveElem={setActiveElem}
        index={index}
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
          activeElem={activeElem}
        />
      </div>
      <EditWindow
        editWindowBlock={editWindowBlock}
        activeElem={activeElem}
        edittedProperties={edittedProperties}
        setEdittedproduct={setEdittedproduct}
        editProductFunction={editProductFunction}
        closeEditWindow={closeEditWindow}
        formValid={formValid}
        setFormValid={setFormValid}
      />
      <NewProductForm
        createNewProduct={createNewProduct}
        activeCreateForm={activeCreateForm}
        setActiveCreateForm={setActiveCreateForm}
        newId={newId}
        editWindowBlock={editWindowBlock}
        formValid={formValid}
        setFormValid={setFormValid}
      />
    </div>
  );
};

export default ProductsTable;
