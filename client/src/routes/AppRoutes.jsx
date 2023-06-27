import { Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<h1>Home page</h1>} />
      <Route path='/register' element={<h1>Register page</h1>} />
      <Route path='/login' element={<h1>Login page</h1>} />
      <Route path='/tasks' element={<h1>Tasks page</h1>} />
      <Route path='/task/:id' element={<h1>Task page</h1>} />
      <Route path='/add-task' element={<h1>Create task page</h1>} />
    </Routes>
  )
}

export default AppRoutes