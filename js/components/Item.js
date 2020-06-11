import React from "react"

const Item = (props) => {
  const completeItem = (index) => event => {
    event.preventDefault();
    const newItems = [...props.items];
    newItems[index].completed = true;
    props.setItems(newItems);
  };

  const removeItem = (index) => event => {
    event.preventDefault();
    const newItems = [...props.items];
    newItems.splice(index, 1);
    props.setItems(newItems);
  };

  return (
    <div className={props.item.completed ? "c-item--completed" : "c-item"}>
      <button className='c-item__circle' onClick={completeItem(props.index)} />
      <p className='c-item__text'>{props.item.text}</p>
      <button className='c-item__cross' onClick={removeItem(props.index)} />
    </div>
  );
}

export default Item