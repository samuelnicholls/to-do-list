import React from 'react'

export interface ItemArray {
  text: string
  completed: boolean
}

export interface ItemProps {
  item: ItemArray
  items: Array<ItemArray>
  index: number
  setItems: React.Dispatch<React.SetStateAction<ItemArray[]>>
}

const Item = ({ item, index, items, setItems }: ItemProps) => {
  const completeItem = (index: number) => (event: any) => {
    const newItems = [...items]

    if (item.completed === true) {
      newItems[index].completed = false
      setItems(newItems)
    } else {
      newItems[index].completed = true
      setItems(newItems)
    }
  }

  const removeItem = (index: number) => (event: any) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  return (
    <div className={item.completed ? 'c-item--completed' : 'c-item'}>
      <button className='c-item__circle' onClick={completeItem(index)} />
      <p className='c-item__text'>{item.text}</p>
      <button className='c-item__cross' onClick={removeItem(index)} />
    </div>
  )
}

export default Item
