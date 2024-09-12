import mongoose, { Schema, Document, model } from 'mongoose';

export interface BookI extends Document {
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: string;
}

const bookSchema: Schema<BookI> = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5 
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200,
    },
    coverImage: {
        type: String,
        required: true,
    },
    file: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        minlength: 5
    }
});

const Book = model<BookI>('Book', bookSchema);

export { Book };
