import React , { useState } from "react"
import Heading from '../components/Heading'
import Item from "../components/Item";
import Input from "../components/Input";

const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className='o-wrapper'>
      <Heading />
      <div className='c-list'>
        {items.map((item, index) => (
          <Item
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
  )
}

export default App