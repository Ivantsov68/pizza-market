import React, { useState } from 'react'

function Categories({ items }) {

   const [activeItem, setActiveItems] = useState(null)

   const onSelectedItem = (index) => {
      setActiveItems(index);
   }

   return (
      <div className="categories">
         <ul>
            <li className={activeItem === null ? "active" : ''} onClick={()=> onSelectedItem(null)}>Все</li>
            {items.map((name, index) => (
               <li 
                  className={activeItem === index ? "active" : ''}
                  onClick={()=>onSelectedItem(index)} 
                  key={`${name}_${index}`}>
                  {name}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Categories;
