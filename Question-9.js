//function to find the oldest book
function findOldestBook(bookList) {

    let publishYear = 5000;
    let oldestBook;

    for (const book of bookList) {
        if (book.year < publishYear) {
            publishYear = book.year;
            oldestBook = book;
        }
    }

    return oldestBook;
}


// function to find author name with most books
function findAuthorWithMostBooks(bookList) {

    const bookFrequency = {};
    let maxFrequency = 0;
    let authorWithMostBooks;

    for (const book of bookList) {

        if (bookFrequency[book.author] === undefined)
            bookFrequency[book.author] = 1;

        if (bookFrequency[book.author] !== undefined)
            bookFrequency[book.author] += 1

        if (bookFrequency[book.author] > maxFrequency) {
            maxFrequency = bookFrequency[book.author];
            authorWithMostBooks = book.author;
        }
    }

    return authorWithMostBooks;

}

//function to find books of a specific author
function findBooksByAuthor(bookList, author) {

    const authorBooks = [];

    for (const book of bookList) {
        if (book.author === author)
            authorBooks.push(book);
    }

    return authorBooks;
}


//function to find frequency of each genre of books
function countBooksByGenre(bookList) {

    const countGenreFrequency = {};

    for (const book of bookList) {

        if (countGenreFrequency[book.genre] === undefined)
            countGenreFrequency[book.genre] = 1;
        else
            countGenreFrequency[book.genre] += 1;

    }

    return countGenreFrequency;
}

// array of book objects
const books = [
    {
        title: "Book 1",
        author: "Author A",
        year: 1990,
        genre: "Science Fiction",
    },
    {
        title: "Book 2",
        author: "Author B",
        year: 1985,
        genre: "Mystery",
    },
    {
        title: "Book 3",
        author: "Author A",
        year: 2005,
        genre: "Science Fiction",
    },
    {
        title: "Book 4",
        author: "Author C",
        year: 1998,
        genre: "Fantasy",
    },
];


console.log("Oldest Book:", findOldestBook(books)); // Output: { title: "Book 2", author: "Author B", year: 1985, genre: "Mystery" }

console.log("Author with Most Books:", findAuthorWithMostBooks(books)); // Output: "Author A"

console.log("Books by Author A:", findBooksByAuthor(books, "Author A")); // Output: [{ title: "Book 1", author: "Author A", year: 1990, genre: "Science Fiction" }, { title: "Book 3", author: "Author A", year: 2005, genre: "Science Fiction" }]

console.log("Count of Books by Genre:", countBooksByGenre(books));// Output: { "Science Fiction": 2, "Mystery": 1, "Fantasy": 1 }