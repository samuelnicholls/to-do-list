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
  const addItem = (text: any) => {
    const newItems = [...items, { text }] as []
    setItems(newItems)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (!value) return
    addItem(value)
    setValue('')
  }

  const onChange = (event: any) => {
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
