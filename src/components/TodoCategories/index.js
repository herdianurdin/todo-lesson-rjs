import React from 'react'

const TodoCategories = React.memo(({ handleCategory }) => {
  return (
    <div className='todo-categories'>
      <div className='category active' onClick={handleCategory} id='all'>
        All
      </div>
      <div className='category' onClick={handleCategory} id='complete'>
        Complete
      </div>
      <div className='category' onClick={handleCategory} id='incomplete'>
        Incomplete
      </div>
    </div>
  )
})

export default TodoCategories
