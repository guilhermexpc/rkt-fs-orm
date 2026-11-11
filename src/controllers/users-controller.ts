import { Request, Response, NextFunction } from "express";

class UsersController {
  async index(request: Request, response: Response) {
    return response.json();
  }

  async create(request: Request, response: Response, next: NextFunction) {
    throw new Error("Error creating user");
    return response.status(201).json({ message: "User created successfully" });
  }

  async show(request: Request, response: Response) {
    return response.json();
  }
}

export { UsersController };
