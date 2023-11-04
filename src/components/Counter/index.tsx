interface ICounter {
  count: number
}

const Counter = ({ count }: ICounter) => {
  return <div className="counter">{count}</div>
}

export default Counter
