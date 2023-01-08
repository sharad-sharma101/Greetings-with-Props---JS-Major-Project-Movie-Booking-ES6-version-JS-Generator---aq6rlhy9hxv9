// write code for Welcome component here
import React from 'react'

const Welcome = ({name}) => {
  return (
    <details>
      Hey !<h1>{name}</h1> 
      <h2>Welcome to Newton School.</h2>
    </details>
  )
}
export default Welcome
