import React, {  useState } from "react";
import Button from "./UI/buttons/Btn";

const EditWindow = ({
  editWindowBlock,
  activeElem,
  editProductFunction,
  closeEditWindow,
  edittedProperties,
  setEdittedproduct,
  formValid, setFormValid
}) => {

  const [emailWrong, setEmailWrong] = useState(false);
  const [pasWrong, setPasWrong] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [pasError, setPasError] = useState("");

  // const blurHandle = (e) => {
  //   console.log(e.target.name);
  //   switch (e.target.name) {
  //     case "title":
  //       if (edittedProperties.name.trim() === "") {
  //         setEmailWrong(true);
  //         setEmailError("некорректный имейл");
  //       } else if (edittedProperties.name.length < 6) {
  //         setEmailError("name");
  //       } else {
  //         setEmailWrong(false);
  //         setEmailError("");
  //       }
  //       break;
  //     case "body":
  //       if (edittedProperties.price.trim() === "") {
  //         setPasWrong(true);
  //         setPasError("некорректный пароль");
  //       } else if (edittedProperties.price.length < 6) {
  //         setPasError("price");
  //       } else {
  //         setPasWrong(false);
  //         setPasError("");
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // };


  
  const blurHandle = (e) => {
    switch (e.target.name) {
      case "title":
        if (
          edittedProperties.name.trim() === "" ||
          edittedProperties.name.length < 6
        ) {
          setEmailWrong(true);
          setEmailError("некорректный имейл");
        } else {
          setEmailWrong(false);
          setEmailError("");
          
         }
        break;
      case "body":
        if (
          edittedProperties.price.trim() === "" ||
          edittedProperties.price.length < 6
        ) {
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
      <div className={editWindowBlock ? "editBlock edit-menu" : "editNone"}>
        <label>
          ID
          <input
            value={edittedProperties.id}
            type="text"
            placeholder={activeElem.id}
            onChange={(e) =>
              setEdittedproduct({ ...edittedProperties, id: activeElem.id })
            }
          />
        </label>
        {emailWrong && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <label>
          Название
          <input
            name="title"
            value={edittedProperties.name}
            type="text"
            placeholder={activeElem.name}
            onBlur={(e) => blurHandle(e)}
            onChange={(e) =>
              setEdittedproduct({ ...edittedProperties, name: e.target.value })
            }
          />
        </label>
        {pasWrong && pasError && <div style={{ color: "red" }}>{pasError}</div>}
        <label>
          Цена
          <input
            name="body"
            value={edittedProperties.price}
            type="text"
            placeholder={activeElem.price}
            onBlur={(e) => blurHandle(e)}
            onChange={(e) =>
              setEdittedproduct({ ...edittedProperties, price: e.target.value })
            }
          />
        </label>
        <label>
          Количество
          <input
            value={edittedProperties.count}
            type="number"
            placeholder={activeElem.count}
            onChange={(e) =>
              setEdittedproduct({ ...edittedProperties, count: e.target.value })
            }
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
        <Button disabled={!formValid} onClick={editProductFunction} >
          {"Edit"}
        </Button>
        <Button onClick={closeEditWindow}>{"Cancel"}</Button>
      </div>
    </form>
  );
};

export default EditWindow;
