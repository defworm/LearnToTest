import { render, screen } from "@testing-library/react"
import App from './App'
import userEvent from '@testing-library/user-event'

test("Header renders w/ correct text", () => {
  render(<App />)
  const headerEl = screen.getByRole("heading")
  expect(headerEl.textContent).toBe("Testing Playground")

})

describe('test for the button', () => {


  test("button changes colors when clicked", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")

    userEvent.click(colorBtn)

    expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
    expect(colorBtn.textContent).toBe("Change button color to green")

  })
})

test("checkbox disables button when first clicked, then enables button on second click", () => {
  render (<App />)
  const colorBtn = screen.getByRole ('button')
  const checkbox = screen.getByRole("checkbox")

  userEvent.click(checkbox)
  expect(colorBtn).toBeDisabled()

  userEvent.click(checkbox)
  expect(colorBtn).toBeEnabled
})

// test("correct text appears in a paragraph element when the button is disabled or enabled", () => {
//   render (<App />)

// })