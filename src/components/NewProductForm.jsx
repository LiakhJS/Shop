import React, { useState } from "react";
import Button from "./UI/buttons/Btn";

const NewProductForm = ({ setActiveCreateForm, activeCreateForm, setBtnCreate, btnCreate, createNewProduct, products}) => {
  const [product, setNewProduct] = useState({ name: "", price: "", count: "", url:'' });
  const openCreateMenu = () => {
    setActiveCreateForm(true);
    setBtnCreate(false);
     };
   
  const addNewProduct = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    const productsId = products.map((elem)=> elem.id);
    console.log(productsId);
    console.log(productsId.slice(-1));
    const newId=Number(productsId.slice(-1))+1;
    
   const NewProduct = {id: newId, ...product, }
    createNewProduct(NewProduct);
      closeCreateMenu();
    setNewProduct({ url:'', name:'', price:'', count:''});
   
   }
   const closeCreateMenu = (e) => {
    // e.stopPropagation();
    // e.preventDefault();
    setActiveCreateForm(false);
    setBtnCreate(true);

     };

  return (
    <div>
    <div className={activeCreateForm ? 'block edit-menu' : 'none ' }>
    <input
        value={product.url}
        type="text"
        placeholder="url.."
        onChange={(e) => setNewProduct({ ...product, url: e.target.value })}
      />
      <input
        value={product.name}
        type="text"
        placeholder="name.."
        onChange={(e) => setNewProduct({ ...product, name: e.target.value })}
      />
      <input
        value={product.price}
        type="number"
        placeholder="price.."
        onChange={(e) => setNewProduct({ ...product, price: e.target.value })}
      />
      <input
        value={product.count}
        type="number"
        placeholder="count.."
        onChange={(e) => setNewProduct({ ...product, count: e.target.value })}
      />
      <Button onClick={addNewProduct}>{'Create'}</Button>
      <Button onClick={closeCreateMenu}>{'Cancel'}</Button>
      </div>
                <button  className={btnCreate ? 'block' : 'none'} onClick={openCreateMenu} >Создать пост </button>
    </div>
  );
};

export default NewProductForm;