import { z } from 'zod';

export const bookSchema = z.object({
    title: z.string({ required_error: "Title is required!" })
        .min(5, { message: "Book Name must be at least 5 characters" }),
    
    description: z.string({ required_error: "Description is required!" })
        .min(10, { message: "Description must be at least 10 characters" })
        .max(200, { message: "Description must be no more than 200 characters" }),
    
    bookImage: z.string({ required_error: "Book Image URL is required!" })
        .url({ message: "Image URL is invalid" }),
    
    bookPdfUrl: z.string({ required_error: "Book PDF URL is required!" })
        .url({ message: "PDF URL is invalid" }),
    
    author: z.string({ required_error: "Author Name is required!" })
        .min(5, { message: "Author Name must be at least 5 characters" })
});

export type BookSchemaType = z.infer<typeof bookSchema>;
