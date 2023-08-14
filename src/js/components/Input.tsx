import React, { Dispatch, FC, SetStateAction } from 'react'

export type ItemArray = {
  text: string
  completed: boolean
}

export type InputProps = {
  value: string
  items: Array<ItemArray>
  setValue: Dispatch<SetStateAction<string>>
  setItems: Dispatch<SetStateAction<ItemArray[]>>
}

const Input: FC<InputProps> = ({ value, items, setValue, setItems }) => {
  const addItem = (text: string) => {
    setItems([...items, { "text": text, completed: false}])
  }

  // TODO: Remove any type
  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (!value) return
    addItem(value)
    setValue('')
  }

  // TODO: Remove any type
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
