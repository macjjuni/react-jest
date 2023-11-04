import { render, screen } from '@testing-library/react'
import Counter from '@/components/Counter'

test('Count 컴포넌트 렌더링 테스트', async () => {
  const count = 100
  render(<Counter count={count} />)
  const countEle = screen.getByText(count)
  expect(countEle).toBeInTheDocument()
})
