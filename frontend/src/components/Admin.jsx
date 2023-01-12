import React from 'react'

import CategoryForm from './CategoryForm'
import UploadImage from './image.model'

const Admin = (category) => {
  return (
    <div>
      <ul>
        <li>{category.mainMenu}
          <ul>
            <li>{category.subMenu}</li>
          </ul>
        </li>
      </ul>
        <CategoryForm/>
        
    </div>
  )
}

export default Admin