import { Request, Response } from 'express';
import { Book, BookI } from '../models/book';

export const fetchBooks = async (req: Request, res: Response): Promise<void> => {
    try {
        const books: BookI[] = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        console.error("Error while fetching books:", error);
        res.status(500).json({ message: "Error while fetching books" });
    }
};

export const getBookById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const book: BookI | null = await Book.findById(id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.error("Error while finding the book:", error);
        res.status(500).json({ message: "Error while finding the book" });
    }
};

export const addNewBook = async (req: Request, res: Response): Promise<void> => {
    const { title, description, bookImage, bookPdfUrl, author } = req.body;

    try {
        const book: BookI = new Book({
            title,
            description,
            coverImage: bookImage,
            file: bookPdfUrl,
            author
        });

        await book.save();
        res.status(201).json({ success: true });
    } catch (error) {
        console.error("Error while adding the book:", error);
        res.status(500).json({ success: false, message: "Error while adding the book" });
    }
};
