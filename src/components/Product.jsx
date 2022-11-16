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
  setActiveElem,
  index,
}) => {
  const changeBgColor = () => {
    setActiveProduct(item.id);
    setProductCardBlock(true);
    setActiveElem({
      index: index,
      id: item.id,
      url: item.url,
      name: item.name,
      price: item.price,
      count: item.count,
    });
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
      key={item}
    >
      <td>{item.id}</td>
      <td>
        <img src={item.url} style={{ width: "100px" }} alt="product" />
      </td>
      <td>{item.name}</td>
      <td>{item.price} руб</td>
      <td>{item.count} шт</td>
      <td>
        <DeleteBtn item={item} onClick={deleteProductRow} />
      </td>
      <td>
        <EditBtn onClick={showEditWindow} />
      </td>
    </tr>
  );
};

export default Product;
