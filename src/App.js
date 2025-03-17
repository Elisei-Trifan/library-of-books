import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import BookList from './pages/BookList'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/library-of-books">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/library" element={<BookList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
