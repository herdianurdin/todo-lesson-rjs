import React from 'react'

const TodoAdd = ({ name, setName, handleBtnAdd, handleEnterAdd }) => {
  return (
    <div className='todo-add'>
      <input
        type='text'
        id='activity'
        name='activity'
        placeholder='Add new task'
        value={name}
        onChange={setName}
        onKeyUp={handleEnterAdd}
      />
      <div className='btn btn-add' onClick={handleBtnAdd}>
        <svg viewBox='22.134 7.698 24 24'>
          <path d='M 41.134 18.698 L 35.134 18.698 L 35.134 12.698 L 33.134 12.698 L 33.134 18.698 L 27.134 18.698 L 27.134 20.698 L 33.134 20.698 L 33.134 26.698 L 35.134 26.698 L 35.134 20.698 L 41.134 20.698 L 41.134 18.698 Z' />
        </svg>
      </div>
    </div>
  )
}

export default TodoAdd
