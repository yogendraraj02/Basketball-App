import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"

function App() {

  return (
    <div className="app">
      <Nav />
      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}

export default App
