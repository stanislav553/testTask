import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ObjectsPage from './pages/ObjectsPage'
import UsersPage from './pages/UsersPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="objects" element={<ObjectsPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  )
}

export default App
