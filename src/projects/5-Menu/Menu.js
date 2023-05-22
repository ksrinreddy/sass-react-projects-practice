import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <>
      <section className="menu-items">
        {menuItems.map((menuItem) => {
          const { id, title, img, price, category, desc } = menuItem;
          return (
            <article className="menu-item" key={id}>
              <img src={img} alt={title} className="menu-item__img" />
              <div className="menu-item__info">
                <header className="menu-item__header">
                  <h4 className="menu-item__title">{title}</h4>
                  <h4 className="menu-item__price">${price}</h4>
                </header>
                <p className="menu-item__desc">{desc}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Menu;
