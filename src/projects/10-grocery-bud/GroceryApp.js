import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import List from "./List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const GroceryApp = () => {
  const [itemName, setItemName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [itemsList, setItemsList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: true, type: "", msg: "" });
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //empty vlaues
    if (!itemName) {
      // display alert
      showAlert(true, "danger", "please enter value");
    } else if (itemName && isEditing) {
      // deal with editing
      setItemsList(
        itemsList.map((item) => {
          if (item.id === editID) {
            return { ...item, title: itemName };
          }
          return item;
        })
      );
      setItemName("");
      setIsEditing(false);
      setEditID(null);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: itemName };
      setItemsList([...itemsList, newItem]);
      setItemName("");
    }
    // console.log("submitted");
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  // clear items
  const clearItems = () => {
    setItemsList([]);
    showAlert(true, "danger", "empty list");
  };

  // remove item
  const removeItem = (id) => {
    const newList = itemsList.filter((item) => {
      return item.id !== id;
    });
    setItemsList(newList);
    showAlert(true, "danger", "item removed");
  };

  // edit item
  const editItem = (id) => {
    const specificItem = itemsList.find((item) => item.id === id);

    setIsEditing(true);
    setEditID(id);
    setItemName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(itemsList));
  }, [itemsList]);

  return (
    <>
      <section className="section-center">
        <form className="grocery-form">
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} itemsList={itemsList} />
          )}

          <h2 className="grocery-title">grocery bud</h2>
          <div className="form-control">
            <input
              type="text"
              className="input-name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <button className="btn-submit" onClick={handleSubmit}>
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
          {itemsList.length > 0 && (
            <div className="grocery-list-container">
              <List
                items={itemsList}
                removeItem={removeItem}
                editItem={editItem}
              />
              <button className="btn-clear-items" onClick={clearItems}>
                clear items
              </button>
            </div>
          )}
        </form>
      </section>
    </>
  );
};

export default GroceryApp;
