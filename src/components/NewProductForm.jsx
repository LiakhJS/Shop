import React, { useState } from "react";
import Button from "./UI/buttons/Btn";

const NewProductForm = ({
  setActiveCreateForm,
  activeCreateForm,
  setBtnCreate,
  editWindowBlock,
  createNewProduct,
  newId,
  formValid,
  setFormValid,
}) => {
  const [emailWrong, setEmailWrong] = useState(false);
  const [pasWrong, setPasWrong] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [pasError, setPasError] = useState("");
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
    setBtnCreate(false);
  };

  const closeCreateMenu = (e) => {
    e.preventDefault();
    setActiveCreateForm(false);
    setBtnCreate(true);
  };

  const blurHandle = (e) => {
    switch (e.target.name) {
      case "title":
        if (product.name.trim() === "" || product.name.length < 6) {
          setEmailWrong(true);
          setEmailError("некорректный имейл");
        } else {
          setEmailWrong(false);
          setEmailError("");
          if (emailError || pasError) {
            setFormValid(false);
          } else {
            setFormValid(true);
          }
        }
        break;
      case "body":
        if (product.price.trim() === "" || product.price.length < 6) {
          setPasWrong(true);
          setPasError("некорректный пароль");
        } else {
          setPasWrong(false);
          setPasError("");
          if (emailError || pasError) {
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
        {emailWrong && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <input
          name="title"
          value={product.name}
          type="text"
          placeholder="name.."
          onBlur={(e) => blurHandle(e)}
          onChange={(e) => setNewProduct({ ...product, name: e.target.value })}
        />
        {pasWrong && pasError && <div style={{ color: "red" }}>{pasError}</div>}
        <input
          name="body"
          value={product.price}
          type="number"
          placeholder="price.."
          onBlur={(e) => blurHandle(e)}
          onChange={(e) => setNewProduct({ ...product, price: e.target.value })}
        />
        <input
          value={product.count}
          type="number"
          placeholder="count.."
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
