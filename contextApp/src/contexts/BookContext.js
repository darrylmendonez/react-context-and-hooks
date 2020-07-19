import React, { createContext, useState } from 'react'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title:'Angels & Demons',
    },
    {
      id: 2,
      title:'The Da Vinci Code',
    },
    {
      id: 3,
      title:'The Lost Symbol',
    },
    {
      id: 4,
      title:'Inferno',
    },
    {
      id: 5,
      title:'Origin',
    }
  ])
  return (
    <BookContext.Provider value={{books}} >
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;