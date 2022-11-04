import React from "react";
import Button from "./UI/buttons/Btn";

const EditWindow = ({
  editWindowBlock,
  activeElem,
  editProductFunction,
closeEditWindow,
  edittedProperties,
  setEdittedproduct
}) => {


  return (
    <div className={editWindowBlock ? "editBlock" : "editNone"}>
      <label>
        ID
        <input
          value={edittedProperties.id}
          type="text"
          placeholder={activeElem.id}
          onChange={(e) =>
            setEdittedproduct({ ...edittedProperties, id: activeElem.id})
          }
          
        />
      </label>
      <label>
        Название
        <input
          value={edittedProperties.name}
          type="text"
          placeholder={activeElem.name}
          onChange={(e) =>
            setEdittedproduct({ ...edittedProperties, name: e.target.value })
          }
        />
      </label>
      <label>
        Цена
        <input
          value={edittedProperties.price}
          type="number"
          placeholder={activeElem.price}
          onChange={(e) =>
            setEdittedproduct({ ...edittedProperties, price: e.target.price })
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
      <Button onClick={editProductFunction}>{"Edit"}</Button>
      <Button onClick={closeEditWindow}>{"Cancel"}</Button>
    </div>
  );
};

export default EditWindow;
