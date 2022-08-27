import React from "react";
// import ItemCount from "./ItemCount";
import ItemList from "../items/ItemList";

export default function ItemListContainer({ greetings }) {
  return (
    <div className="flex flex-wrap justify-center bg-base-200 p-10 my-5 rounded-md">
      <ItemList />
    </div>
  );
}
