import React from 'react'

const Input = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!props.value) return;
    addItem(props.value);
    props.setValue("");
  }

  const addItem = (text) => {
    const newItems = [...props.items, { text }];
    props.setItems(newItems);
  }

  const onChange = (event) => {
    props.setValue(event.target.value)
  }

  return (
    <form className='c-form' onSubmit={handleSubmit}>
      <input
        type="text"
        className="c-input"
        placeholder='Enter To-Do'
        value={props.value}
        onChange={onChange}
      />
    </form>
  )
}
  
export default Input