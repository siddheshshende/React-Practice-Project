import React from "react";

const ItemListAccordian = ({ items }) => {
  {
    /*accordian body*/
  }
  console.log("items of accordian: ", items);
  return (
    <div>
      ItemListAccordian
      {items.map((item) => (
        <div>
          <div>
            <p>{item.card.info.name}</p>
            <p>
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
          </div>
          <p>{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListAccordian;
