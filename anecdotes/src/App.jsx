import { useState } from 'react'
import Button from './Button';
import Anecdote from './Anecdote';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const nextQuoteHandler = () => {
    setSelected(randomInt(0, 7))
  }

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const increaseVoteByOne = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  const mostVoted = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button onClick={increaseVoteByOne} value="vote"/>
      <Button onClick={nextQuoteHandler} value="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={anecdotes} selected={mostVoted} votes={votes} />
    </div>
  )
}

export default App