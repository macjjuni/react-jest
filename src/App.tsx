import { useState } from 'react'
import Button from '@/components/Button'
import Counter from '@/components/Counter'

function App() {
  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <>
      <Counter count={count} />
      <Button text="Up" onClick={onIncrease} />
    </>
  )
}

export default App
