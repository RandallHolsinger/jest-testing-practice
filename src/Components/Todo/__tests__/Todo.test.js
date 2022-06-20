import { render, screen, cleanup } from '@testing-library/react'
//Have to import Component to acccess it
import Todo from '../Todo'

//call test function that accepts 2 arguments. 
// 1 description or name of test in quotes
// 2 a callbackfunction () => {}
test('Rendered Todo Component', () => {
  //Calling Render(<Component />) renders the Component to access it.
  render(<Todo />);
  // screen.getByTestId() grabs the element by it's 'data-testid' and asigns it a variable. 
  const todoElement = screen.getByTestId('todo-1')
  //write assertions with variable as an argument
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('Hello Todo!')
})