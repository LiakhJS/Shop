import React from "react";
import DeleteBtn from "./UI/buttons/DeleteBtn";
import EditBtn from "./UI/buttons/EditBtn";

const Product = ({
  item,
  deleteProduct,
  setActiveProduct,
  isActiveProduct,
  showEditWindow,
  editWindowBlock,
  setProductCardBlock,
}) => {
  const changeBgColor = () => {
    setActiveProduct(item.name);
    setProductCardBlock(true);
  };
  const deleteProductRow = (e) => {
    e.stopPropagation();
    const isDelete = window.confirm("Вы действительно хотите удалить?");
    isDelete && deleteProduct(item.name);
    setProductCardBlock(false);
  };
  return (
    <tr
      className={
        isActiveProduct || (isActiveProduct && editWindowBlock)
          ? "productRow orange"
          : "productRow"
      }
      onClick={changeBgColor}
      key={item.id}
    >
      <td>
        <img src={item.url} style={{ width: "100px" }} alt="name of product" />
      </td>
      <td>{item.name}</td>
      <td>{item.price} руб</td>
      <td>{item.count} шт</td>
      <td>{item.count} шт</td>
      <DeleteBtn item={item} onClick={deleteProductRow} />
      <EditBtn onClick={showEditWindow} />
    </tr>
  );
};

export default Product;
