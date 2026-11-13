import { Request, Response } from "express";
import { prisma } from "@/prisma";

class QuestionsController {
  async index(request: Request, response: Response) {
    const title = typeof request.query.title === "string" ? request.query.title.trim() : undefined;
    const content = typeof request.query.content === "string" ? request.query.content.trim() : undefined;

    const questions = await prisma.questions.findMany({
      where: {
        ...(title && {
          title: { contains: title, mode: "insensitive" }
        }),
        ...(content && {
          content: { contains: content, mode: "insensitive" }
        })
      },
      orderBy: {
        title: "asc"
      }
    });
    return response.json(questions);
  }

  async create(request: Request, response: Response) {
    const { title, content, user_id } = request.body;

    const newQuestion = await prisma.questions.create({
      data: {
        title,
        content,
        userId: user_id
      }
    });
    return response.status(201).json(newQuestion);
  }

  async update(request: Request, response: Response) {
    return response.json();
  }

  async remove(request: Request, response: Response) {
    return response.json();
  }
}

export { QuestionsController };
