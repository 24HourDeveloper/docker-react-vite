import { render, screen } from '@testing-library/react'
import App from './App'

it("should have title Vite + React Typescript 3", () => {
  render(<App />)
  const title = screen.queryByText("Vite + React Typescript 3")
  expect(title).toBeVisible()
})