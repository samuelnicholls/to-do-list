import React from 'react'

export interface ItemArray {
  text: string
  completed: boolean
}

export interface InputProps {
  value: string
  items: Array<ItemArray>
  setValue: React.Dispatch<React.SetStateAction<string>>
  setItems: React.Dispatch<React.SetStateAction<ItemArray[]>>
}

const Input = ({ value, items, setValue, setItems }: InputProps) => {
  const addItem = (text: string) => {
    // Spreading the current state and adding the new value in
    const newItems = [...items, { text }] as []
    // Setting the item state to the newItems
    setItems(newItems)
  }

  const handleSubmit = (event: any) => {
    // Preventing the default action of a button
    event.preventDefault()
    // If there is no value on submit then don't do anything
    if (!value) return
    // Calling the addItem function and passing it the value from the input
    addItem(value)
    // Resetting the input field to just an empty string
    setValue('')
  }

  const onChange = (event: any) => {
    // Set the value state to whatever the user has typed
    setValue(event.target.value)
  }

  return (
    <form className='c-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='c-input'
        placeholder='Enter To-Do'
        value={value}
        onChange={onChange}
      />
    </form>
  )
}

export default Input
