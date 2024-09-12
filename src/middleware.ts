import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export const validateBook = (schema: ZodSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (err) {
        if (err instanceof ZodError) {
            res.status(400).json({ msg: err.errors[0].message });
        } else {
            next(err);
        }
    }
};
