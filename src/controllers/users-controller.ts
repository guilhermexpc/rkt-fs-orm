import { Request, Response, NextFunction } from "express";

import { prisma } from "@/prisma";

class UsersController {
  async index(request: Request, response: Response) {
    return response.json();
  }

  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    // run inside `async` function
    const newUser = await prisma.user.create({
      data: { name, email }
    });
    return response.status(201).json(newUser);
  }

  async show(request: Request, response: Response) {
    return response.json();
  }
}

export { UsersController };
