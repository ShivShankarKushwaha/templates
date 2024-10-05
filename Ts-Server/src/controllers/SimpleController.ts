import { Request, Response } from "express";

const home = (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
};

export const simpleController={home}