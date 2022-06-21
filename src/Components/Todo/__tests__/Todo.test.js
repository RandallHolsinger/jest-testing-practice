import { render, screen, cleanup } from '@testing-library/react'
//Have to import Component to acccess it
import Todo from '../Todo'

//clean up function runs after each test.
afterEach(() => {
  cleanup()
})

//call test function that accepts 2 arguments. 
// 1 description or name of test in quotes
// 2 a callbackfunction () => {}
test('Rendered non-completed todo', () => {
  //create test case item and assign it to variable
  const todo = {id:1, title:'wipe down stuff', completed: false}
  //Calling Render(<Component />) renders the Component to access it.
  render(<Todo todo={todo}/>)
  // screen.getByTestId() grabs the element by it's 'data-testid' and asigns it a variable. 
  const todoElement = screen.getByTestId('todo-1')
  //write assertions with variable as an argument
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('wipe down stuff')
})
test('Rendered completed todo', () => {
  const todo = {id:2, title:'clean dishes', completed: true}
  render(<Todo todo={todo}/>)
  const todoElement = screen.getByTestId('todo-2')
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('clean dishes')
})