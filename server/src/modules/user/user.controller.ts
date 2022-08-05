import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { MongoError } from "mongodb";
import { RegisterUserBody } from "./user.schema";
import { createUser } from "./user.service";

export async function registerUserHandler(
  req: Request<{}, {}, RegisterUserBody>, // first argument: params, second: response body, third: request body
  res: Response
) {
  const { username, email, password } = req.body;

  try {
    await createUser({ username, email, password });
    return res.status(StatusCodes.CREATED).send("User created successfully");
  } catch (err) {
    if ((err as MongoError).code === 11000) {
      return res.status(StatusCodes.CONFLICT).send("User already exists.");
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send((err as Error).message);
  }
}
