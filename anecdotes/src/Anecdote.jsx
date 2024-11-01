import { useState } from "react"
import Button from "./Button"

const Anecdote = ({anecdotes, selected, votes}) => {
    console.log(votes)
    return (
      <>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
      </>
    )
}
  
  export default Anecdote