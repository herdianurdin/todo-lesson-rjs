import { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import { TodoAdd, TodoCard, TodoCategories } from './components'

const App = () => {
  const [activities, setActivities] = useState(
    JSON.parse(localStorage.getItem('activities')) || []
  )
  const [filteredActivities, setFilteredActivities] = useState(
    JSON.parse(localStorage.getItem('activities')) || []
  )
  const [filter, setFilter] = useState('all')
  const [activityName, setActivityName] = useState('')

  const handleAdd = () => {
    if (activityName) {
      setActivities([
        ...activities,
        {
          id: uuid(),
          name: activityName,
          isComplete: false,
          timestamp: Date.now(),
        },
      ])

      setActivityName('')
    }
  }

  const handleBtnAdd = (event) => {
    event.preventDefault()

    handleAdd()
  }

  const handleEnterAdd = (event) => {
    event.preventDefault()

    if (event.key === 'Enter') {
      handleAdd()
    }
  }

  const handleCategory = (event) => {
    event.preventDefault()

    document
      .querySelectorAll('.category')
      .forEach((category) => category.classList.remove('active'))

    const target = event.target

    target.classList.add('active')
    setFilter(target.id)
  }

  const handleCompleteActivity = (activityId) => {
    setActivities((previousActivities) =>
      previousActivities.map((activity) =>
        activity.id === activityId
          ? { ...activity, isComplete: !activity.isComplete }
          : activity
      )
    )
  }

  const handleDeleteActivity = (activityId) => {
    setActivities(activities.filter((activity) => activity.id !== activityId))
  }

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities))
    setFilteredActivities(activities)
  }, [activities])

  return (
    <div className='todo'>
      <h1>TODO</h1>
      <TodoAdd
        name={activityName}
        setName={(event) => setActivityName(event.target.value)}
        handleBtnAdd={handleBtnAdd}
        handleEnterAdd={handleEnterAdd}
      />
      <TodoCategories handleCategory={handleCategory} />
      {activities.length === 0 ? (
        <div className='todo-not-found'>No activity...</div>
      ) : (
        <div className='todo-list'>
          {filteredActivities
            .filter((activity) =>
              filter === 'all'
                ? activity
                : filter === 'complete'
                ? activity.isComplete
                : !activity.isComplete
            )
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((activity) => (
              <TodoCard
                key={activity.id}
                activity={activity.name}
                isComplete={activity.isComplete}
                handleCompleteActivity={() =>
                  handleCompleteActivity(activity.id)
                }
                handleDeleteActivity={() => handleDeleteActivity(activity.id)}
              />
            ))}
        </div>
      )}
    </div>
  )
}

export default App
