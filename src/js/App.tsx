import React, { useState } from 'react'
import Heading from './components/Heading'
import Item, { ItemArray } from './components/Item'
import Input from './components/Input'

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const [items, setItems] = useState<ItemArray[]>([])

  return (
    <div>
      <div className='o-wrapper'>
        <Heading title='To-Do-List' />
        <div className='c-list'>
          {items.map((item, index) => (
            <Item
              key={index}
              item={item}
              items={items}
              index={index}
              setItems={setItems}
            />
          ))}
        </div>
        <Input
          value={value}
          setValue={setValue}
          setItems={setItems}
          items={items}
        />
      </div>
    </div>
  )
}

export default App
