import TodosPage from 'pages/TodosPage'
import { Link, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <>
      <nav style={{ marginBottom: '10px' }}>
        <Link to='/'>home</Link>
        <Link to='/todos'>todos</Link>
      </nav>
      <Routes>
        <Route path='/' element={<div>home</div>} />
        <Route path='todos' element={<TodosPage />} />
      </Routes>
    </>
  )
}
export default AppRoutes
