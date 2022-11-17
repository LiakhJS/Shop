import React, { useState } from "react";
import Button from "./UI/buttons/Btn";

const EditWindow = ({
  editWindowBlock,
  activeElem,
  editProductFunction,
  closeEditWindow,
  edittedProperties,
  setEdittedproduct,
  formValid,
  setFormValid,
}) => {
  const [nameWrong, setNameWrong] = useState(false);
  const [priceWrong, setPriceWrong] = useState(false);
  const [countWrong, setCountWrong] = useState(false);
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [countError, setCountError] = useState("");

  const blurHandle = (e) => {
    switch (e.target.name) {
      case "name":
        if (
          edittedProperties.name.trim() === "" ||
          edittedProperties.name[0] !==
            edittedProperties.name[0].toLocaleUpperCase() ||
          isNaN(+edittedProperties.name) === false
        ) {
          setNameWrong(true);
          setNameError(
            "некорректное название товара. название должно состоять не менее, чем из 5 символов."
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
          edittedProperties.price.trim() === "" ||
          edittedProperties.price.length < 3 ||
          edittedProperties.price <= 0 ||
          isNaN(+edittedProperties.price)
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
          edittedProperties.count.trim() === "" ||
          +edittedProperties.count <= 0 ||
          isNaN(+edittedProperties.count)
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
      <div className={editWindowBlock ? "editBlock edit-menu" : "editNone"}>
        <label>
          ID
          <input
            value={activeElem.id}
            type="text"
            placeholder={activeElem.id}
          />
        </label>
        <div>
          <span>URL фотографии</span>
          <span>
            <input
              value={edittedProperties.url}
              type="text"
              placeholder={activeElem.url}
              onChange={(e) =>
                setEdittedproduct({ ...edittedProperties, url: e.target.value })
              }
            />
          </span>
        </div>
        {nameWrong && nameError && (
          <div style={{ color: "red" }}>{nameError}</div>
        )}
        <label>
          Название
          <input
            name="name"
            value={edittedProperties.name}
            type="text"
            placeholder={activeElem.name}
            onBlur={(e) => blurHandle(e)}
            onChange={(e) =>
              setEdittedproduct({ ...edittedProperties, name: e.target.value })
            }
          />
        </label>
        {priceWrong && priceError && (
          <div style={{ color: "red" }}>{priceError}</div>
        )}
        <label>
          Цена
          <input
            name="price"
            value={edittedProperties.price}
            type="text"
            placeholder={activeElem.price}
            onBlur={(e) => blurHandle(e)}
            onChange={(e) =>
              setEdittedproduct({ ...edittedProperties, price: e.target.value })
            }
          />
        </label>
        {countWrong && countError && (
          <div style={{ color: "red" }}>{countError}</div>
        )}
        <label>
          Количество
          <input
            name="count"
            value={edittedProperties.count}
            type="text"
            placeholder={activeElem.count}
            onBlur={(e) => blurHandle(e)}
            onChange={(e) =>
              setEdittedproduct({ ...edittedProperties, count: e.target.value })
            }
          />
        </label>
        <Button disabled={!formValid} onClick={editProductFunction}>
          {"Edit"}
        </Button>
        <Button onClick={closeEditWindow}>{"Cancel"}</Button>
      </div>
    </form>
  );
};

export default EditWindow;
