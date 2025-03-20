import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './input.css'

const Input = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)

    // Если поле поиска не пустое, перенаправляем на страницу библиотеки с параметром поиска
    if (newSearchTerm.trim() !== '') {
      navigate(`/library?search=${newSearchTerm}`)
    } else {
      // Если поле поиска очищено, удаляем параметр "search" из URL
      navigate('/library')
    }
  }
  React.useEffect(() => {
    // Если параметр поиска отсутствует в URL, очищаем поле ввода
    const searchParams = new URLSearchParams(location.search)
    const searchQuery = searchParams.get('search') || ''
    setSearchTerm(searchQuery) // Обновляем состояние в зависимости от URL
  }, [location])

  const clearSearch = () => {
    setSearchTerm('')
    navigate('/library')
  }

  return (
    <div className="search_container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Автор или название книги"
        className="search_input"
      />
      {searchTerm && (
        <button className="clear_btn" onClick={clearSearch}>
          ×
        </button>
      )}
    </div>
  )
}

export default Input
