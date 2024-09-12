import express, { Router } from 'express';
import * as bookController from '../controllers/book';
import { bookSchema } from '../schema/bookSchema';
import { validateBook } from '../middleware';

const router: Router = express.Router();

router.get('/', bookController.fetchBooks);
router.get('/:id', bookController.getBookById);
router.post('/add', validateBook(bookSchema), bookController.addNewBook);

export default router;
