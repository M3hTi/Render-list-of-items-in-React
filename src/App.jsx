import * as React from 'react'
import './App.css'

const lists = [
  {
    title : 'React',
    url : 'https://reactjs.org/',
    author : 'Jordan Walke',
    num_comments : 3,
    points: 4,
    objectID : 0 
  },{
    title : 'Redux',
    url : 'https://redux.js.org/',
    author : 'Dan Abramov, Andrew Clark',
    num_comments : 2,
    points: 5,
    objectID : 1 
  }
]

function App() {
  return (
    <>
      <ul>
      {lists.map(item => (
        <li key={item.objectID}>
          <p>title: {item.title}</p>
          <a href={item.url} className='link'>{item.title}</a>
          <p>Author: {item.author}</p>
          <p>Number of Comments: {item.num_comments}</p>
          <p>Points: {item.points}</p>
        </li>
      ))}
      </ul>
    </>
  )
}

export default App
