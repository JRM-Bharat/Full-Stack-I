import {useState} from "react";

export default function Exp1_3_2() {
    const [books, setBooks] = useState([
        {title: "Śrīmad Bhāgavatam", author: "HG A.C. Bhaktivedanta Swami Prabhupāda"},
        {title: "Snakes in the Ganga", author: "Rajiv Malhotra, Vijay Vishwanathan"},
        {title: "Malgudi Days", author: "R.K. Narayan"},
        {title: "Artificial Intelligence and Machine Learning", author: "Pradeep Singh, Tapan K Gandhi, Balasubramanian Raman"}
    ]);

    const [search, setSearch] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");

    const addBook = () => {
        if (newTitle && newAuthor) {
            setBooks([...books, {title: newTitle, author: newAuthor}]);
            setNewTitle("");
            setNewAuthor("");
        }
    };

    const removeBook = (index) => {
        setBooks(books.filter((_, i) => i !== index));
    };
    
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6">Library Management System</h1>

            <input
                type="text"
                placeholder="Search books..."
                className="w-full p-3 border rounded mb-4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Book Title"
                    className="p-3 border rounded"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Author Name"
                    className="p-3 border rounded"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
                    onClick={addBook}
                >
                    Add Book
                </button>
        </div>

        {filteredBooks.map((book, index) => (
            <div
                key={index}
                className="bg-white rounded shadow p-4 mb-4 flex justify-between items-center"
            >
                <div>
                    <h2 className="text-xl font-semibold">{book.title}</h2>
                    <p className="text-gray-600">by {book.author}</p>
                </div>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => removeBook(index)}
                >
                    Remove
                </button>
            </div>
        ))}
        </div>
    );
}