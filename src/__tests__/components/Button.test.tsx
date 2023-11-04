import { render, fireEvent, screen } from '@testing-library/react'
import Button from '@/components/Button'

test('Button 컴포넌트 테스트', () => {
  const btnText = 'Test'
  const ButtonEle = render(<Button text={btnText} />)
  const btnType = typeof Number(ButtonEle.getByText(btnText))
  expect(btnType).toBe('number')
})

test('Button 이벤트 클릭 테스트', () => {
  let val = 0
  const onTestClickEvent = () => {
    val += 1
  }
  render(<Button text={'test'} onClick={onTestClickEvent} />)
  const buttonEl = screen.getByText('test')
  fireEvent.click(buttonEl)
  expect(val).toBe(1)
})
