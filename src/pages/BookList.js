import React from 'react'
import { books } from '../data/books'
import BookCard from '../components/BookCard/BookCard'
import Filter from '../components/Filter/Filter'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination/Pagination'

const BookList = () => {
  const [youthMagazines, setYouthMagazines] = React.useState(books)
  const [kinderMagazines, setKinderMagazines] = React.useState(books)
  const [heraldMagazines, setHeraldMagazines] = React.useState(books)
  const selectCategory = useSelector((state) => state.filter.category)
  const location = useLocation()
  const navigate = useNavigate()

  const searchParams = new URLSearchParams(location.search)
  const searchQuery = searchParams.get('search')?.toLowerCase() || ''

  const filteredBooks = React.useMemo(() => {
    let result = books

    if (selectCategory) {
      result = result.filter((book) => book.category === selectCategory)
    }

    if (
      selectCategory === 'Молодежные журналы' ||
      selectCategory === 'Детские журналы'
    ) {
      result = [...result].sort(
        (a, b) => (a.number || Infinity) - (b.number || Infinity)
      )
    }

    // if (selectCategory === `Журналы 'Вестник истины'`) {
    //   result = [...result].sort((a, b) => {
    //     if (b.year !== a.year) {
    //       return a.year - b.year // Сортировка по году (по убыванию)
    //     }
    //     return (a.number || Infinity) - (b.number || Infinity) // Сортировка по номеру (по возрастанию)
    //   })
    // }

    if (selectCategory === `Журналы 'Вестник истины'`) {
      result.sort((a, b) =>
        b.year !== a.year
          ? a.year - b.year
          : (a.number || Infinity) - (b.number || Infinity)
      )
    }

    return result
  }, [selectCategory])

  // const filterByCategory = selectCategory
  //   ? filteredBooks.filter((book) => book.category === selectCategory)
  //   : books

  const filteredByInput = searchQuery
    ? filteredBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery) ||
          book.author.toLowerCase().includes(searchQuery)
      )
    : filteredBooks

  const booksPerPage = 20
  const [currentPage, setCurrentPage] = React.useState(1)

  const totalPages = Math.ceil(filteredByInput.length / booksPerPage)
  const startIndex = (currentPage - 1) * booksPerPage
  const paginatedBooks = filteredByInput.slice(
    startIndex,
    startIndex + booksPerPage
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0) // Прокрутка страницы наверх
    // Обновление URL для текущей страницы
    navigate(`?search=${searchQuery}&page=${page}`)
  }

  React.useEffect(() => {
    const params = new URLSearchParams(location.search)
    const page = parseInt(params.get('page') || '1', 10)
    setCurrentPage(page)
  }, [location.search])

  return (
    <>
      <Filter
        resetPage={() => setCurrentPage(1)}
        // setBooks={setYouthMagazines}
      />
      <div className="book_list">
        {paginatedBooks.length > 0 ? (
          paginatedBooks.map((item) => <BookCard key={item.id} book={item} />)
        ) : (
          <h1 className="book_not">По вашему запросу ничего не найдено...</h1>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => handlePageChange(page)}
        />
      )}
    </>
  )
}

export default BookList
