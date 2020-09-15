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
    // Spreading the current items state
    const newItems = [...items]

    // If the item has the completed field set to true
    if (item.completed === true) {
      // Only get the one value based on the index passed and set the completed field to false
      newItems[index].completed = false
      // Set the items state based on the new changes
      setItems(newItems)
    } else {
      // Only get the one value based on the index passed and set the completed field to true
      newItems[index].completed = true
      // Set the items state based on the new changes
      setItems(newItems)
    }
  }

  const removeItem = (index: number) => (event: any) => {
    // Spreading the current items state
    const newItems = [...items]
    // Only get the one value based on the index passed through
    newItems.splice(index, 1)
    // Set the items state based on the new changes
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
