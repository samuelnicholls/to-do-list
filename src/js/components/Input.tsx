import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  SyntheticEvent,
} from 'react'
import { ItemArray } from '../types'

export type InputProps = {
  value: string
  items: Array<ItemArray>
  setValue: Dispatch<SetStateAction<string>>
  setItems: Dispatch<SetStateAction<ItemArray[]>>
}

const Input: FC<InputProps> = ({ value, items, setValue, setItems }) => {
  const addItem = (text: string) => {
    setItems([...items, { text, completed: false }])
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    if (!value) return
    addItem(value)
    setValue('')
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
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
