import React, {useState, useEffect} from 'react'
import {fireDb} from '../firebase'

const ChoreList = (props) => {
  const [chores, setChores] = useState([])

  useEffect(() => {
    fireDb.ref('chores').once('value')
      .then(snapshot => {
        let array = []
        snapshot.forEach(child => {
          let item = child.val()
          item.key = child.key
          array.push(item)
        })
        console.log(array)
        setChores(array)
      })
  }, [])

  if (chores === undefined || chores === []) {
    return null
  } 

  return (
    <div>
      <h3>Chores that need doing</h3>
      <ul>
        {chores.map(chore =>
          <li key={chore.key}>{chore.chore}</li>
        ) }
      </ul>
    </div>
  )

}

export default ChoreList