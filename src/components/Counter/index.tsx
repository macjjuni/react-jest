interface ICounter {
  count: number
}

const Counter = ({ count }: ICounter) => {
  return <h1 className="counter">{count}</h1>
}

export default Counter
