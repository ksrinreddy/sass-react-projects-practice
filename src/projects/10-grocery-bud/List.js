import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  // console.log(items);
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        // console.log(item);
        return (
          <article className="grocery-item" key={id}>
            <p className="item-title" key={id}>
              {title}
            </p>
            <div className="btn-container">
              <button
                type="button"
                className="btn btn-edit"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="btn btn-delete"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
