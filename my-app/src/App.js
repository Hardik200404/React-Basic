import ExpenseItems from "./components/ExpenseItems"
import Counter from "./components/Counter"

function App() {
  let expenses = [
    {"id": 1, "item": "Food - 40Rs"},
    {"id": 2, "item": "Petrol - 50Rs"}
  ]
  return (
    <div className="App">
      <p>Hello World</p>
      {
        expenses.map(expense => {
          return (
          <ExpenseItems key = {expense.id} item = {expense.item}></ExpenseItems>
          )
        })
      }
      <Counter></Counter>
    </div>
  )
}

export default App
