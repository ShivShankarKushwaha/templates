import { Request, Response } from "express";

export type NotFound = (req:Request,res:Response)=>Response
export type HomeController = (req:Request,res:Response)=>Response
