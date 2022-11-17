import React, { useState } from "react";
import Button from "./UI/buttons/Btn";

const NewProductForm = ({
  setActiveCreateForm,
  activeCreateForm,
  editWindowBlock,
  createNewProduct,
  newId,
  formValid,
  setFormValid,
}) => {
  const [nameWrong, setNameWrong] = useState(false);
  const [priceWrong, setPriceWrong] = useState(false);
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [countWrong, setCountWrong] = useState(false);
  const [countError, setCountError] = useState("");
  const [product, setNewProduct] = useState({
    name: "",
    price: "",
    count: "",
    url: "",
  });

  const addNewProduct = (e) => {
    e.preventDefault();
    const NewProduct = { id: newId, ...product };
    createNewProduct(NewProduct);
    setNewProduct({ url: "", name: "", price: "", count: "" });
    closeCreateMenu();
  };

  const openCreateMenu = (e) => {
    e.preventDefault();
    setFormValid(false);
    setActiveCreateForm(true);
    // setBtnCreate(false);
  };

  const closeCreateMenu = (e) => {
    setActiveCreateForm(false);
    // setBtnCreate(true);
    e.preventDefault();
  };

  const blurHandle = (e) => {
    switch (e.target.name) {
      case "name":
        if (
          product.name.trim() === "" ||
          product.name[0] !== product.name[0].toLocaleUpperCase() ||
          isNaN(+product.name) === false
        ) {
          setNameWrong(true);
          setNameError(
            "некорректное название товара. Название товара должно начинаться с прописной буквы."
          );
        } else {
          setNameWrong(false);
          setNameError("");
          if (nameError || priceError || countError) {
            setFormValid(false);
          } else {
            setFormValid(true);
          }
        }
        break;
      case "price":
        if (
          product.price.trim() === "" ||
          product.price.length < 3 ||
          +product.price <= 0 ||
          isNaN(+product.price)
        ) {
          setPriceWrong(true);
          setPriceError(
            "поле не должно быть пустым и должно содержать не менее 3 цифр."
          );
        } else {
          setPriceWrong(false);
          setPriceError("");
          if (nameError || priceError || countError) {
            setFormValid(false);
          } else {
            setFormValid(true);
          }
        }
        break;
      case "count":
        if (
          product.count.trim() === "" ||
          +product.count <= 0 ||
          isNaN(+product.count)
        ) {
          setCountWrong(true);
          setCountError(
            "поле не должно быть пустым и должно состоять только из цифр"
          );
        } else {
          setCountWrong(false);
          setCountError("");
          if (nameError || priceError || countError) {
            setFormValid(false);
          } else {
            setFormValid(true);
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <form>
      <div className={activeCreateForm ? "block edit-menu" : "none "}>
        <input
          value={product.url}
          type="text"
          placeholder="url.."
          onChange={(e) => setNewProduct({ ...product, url: e.target.value })}
        />
        {nameWrong && nameError && (
          <div style={{ color: "red" }}>{nameError}</div>
        )}
        <input
          name="name"
          value={product.name}
          type="text"
          placeholder="name.."
          onBlur={(e) => blurHandle(e)}
          onChange={(e) => setNewProduct({ ...product, name: e.target.value })}
        />
        {priceWrong && priceError && (
          <div style={{ color: "red" }}>{priceError}</div>
        )}
        <input
          name="price"
          value={product.price}
          type="text"
          placeholder="price.."
          onBlur={(e) => blurHandle(e)}
          onChange={(e) => setNewProduct({ ...product, price: e.target.value })}
        />
        {countWrong && countError && (
          <div style={{ color: "red" }}>{countError}</div>
        )}
        <input
          name="count"
          value={product.count}
          type="text"
          placeholder="count.."
          onBlur={(e) => blurHandle(e)}
          onChange={(e) => setNewProduct({ ...product, count: e.target.value })}
        />
        <Button disabled={!formValid} onClick={addNewProduct}>
          {"Create"}
        </Button>
        <Button onClick={closeCreateMenu}>{"Cancel"}</Button>
      </div>
      <Button
        hidden={activeCreateForm || editWindowBlock}
        onClick={openCreateMenu}
      >
        {"Создать пост"}
      </Button>
    </form>
  );
};

export default NewProductForm;
