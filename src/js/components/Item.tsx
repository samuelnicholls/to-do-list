import React, { Dispatch, FC, SetStateAction } from 'react'
import { ItemArray } from '../types'

export type ItemProps = {
  item: ItemArray
  items: Array<ItemArray>
  index: number
  setItems: Dispatch<SetStateAction<ItemArray[]>>
}

const Item: FC<ItemProps> = ({ item, index, items, setItems }) => {
  const completeItem = (itemIndex: number) => {
    const updatedItemsState = items.map((item, index) => {
      if (index === itemIndex) {
        return {...item, completed: item.completed === false ? true : false};
      }
      return item;
    });

    setItems(updatedItemsState)
  }

  const removeItem = (index: number) => (event: any) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  return (
    <div className={item.completed ? 'c-item--completed' : 'c-item'}>
      <button className='c-item__circle' onClick={() => completeItem(index)} />
      <p className='c-item__text'>{item.text}</p>
      <button className='c-item__cross' onClick={removeItem(index)} />
    </div>
  )
}

export default Item
