import React from 'react'

const TodoCard = React.memo(
  ({ activity, isComplete, handleCompleteActivity, handleDeleteActivity }) => {
    return (
      <div className='todo-card'>
        <div
          className={isComplete ? 'todo-activiy complete' : 'todo-activiy'}
          onClick={handleCompleteActivity}
        >
          {activity}
        </div>
        <div className='btn btn-delete'>
          <svg viewBox='-0.338 -3.868 24 24' onClick={handleDeleteActivity}>
            <path d='M 5.662 3.132 L 4.662 3.132 L 4.662 16.132 C 4.662 17.237 5.557 18.132 6.662 18.132 L 16.662 18.132 C 17.767 18.132 18.662 17.237 18.662 16.132 L 18.662 3.132 L 5.662 3.132 Z M 16.28 0.132 L 14.662 -1.868 L 8.662 -1.868 L 7.044 0.132 L 2.662 0.132 L 2.662 2.132 L 20.662 2.132 L 20.662 0.132 L 16.28 0.132 Z' />
          </svg>
        </div>
      </div>
    )
  }
)

export default TodoCard
