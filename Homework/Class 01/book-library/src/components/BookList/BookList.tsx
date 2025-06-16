import { useState } from 'react'
import './BookList.css'

export const BookList = () => {
    interface Book {
        id: number,
        title: string,
        author: string,
        year: number,
        isRead: boolean
    }

    const books: Book[] = [
        { id: 1, title: "Coders at Work", author: "Peter Seibel", year: 2009, isRead: true },
        { id: 2, title: "Domain-Driven Design", author: "Eric Evans", year: 2003, isRead: false },
        { id: 3, title: "Programming Pearls", author: "Jon Bentley", year: 1997, isRead: true },
        { id: 4, title: "Clean Code", author: "Robert C. Martin", year: 2008, isRead: true },
        { id: 5, title: "Refactoring", author: "Martin Fowler", year: 2018, isRead: false },
        { id: 6, title: "Effective Java", author: "Joshua Bloch", year: 2017, isRead: false },
        { id: 7, title: "System Design Interview", author: "Alex Xu", year: 2020, isRead: false },
        { id: 8, title: "Algorithms Unlocked", author: "Thomas H. Cormen", year: 2013, isRead: true }
    ]

    const [booksCount, setBooksCount] = useState(0)

    const calculateBooksCount = () => {
        setBooksCount(books.length)
    }

    const resetBooksCount = () => {
        setBooksCount(0)
    }
    return (
        <>
            <ul>
                {books.map((book) => {
                    return <li className={book.isRead ? 'read' : 'notRead'} key={book.id}>"{book.title}" - {book.author} ({book.year})</li>
                })}
            </ul>
            <hr/>
            <p>Total books: {booksCount} </p>
            <button onClick={() => calculateBooksCount()}>Count books</button>
            &nbsp;
            <button onClick={() => resetBooksCount()}>Reset</button>
            
        </>
    )
}