import { Request, Response, NextFunction } from 'express';

const getAllFamily = (req: Request, res: Response, next: NextFunction) => {
  res.send('Get all Family');
};

const getOneFamily = (req: Request, res: Response, next: NextFunction) => {
  res.send('Get an existing Family');
};

const createNewFamily = (req: Request, res: Response, next: NextFunction) => {
  res.send('Create a new Family');
};

const updateOneFamily = (req: Request, res: Response, next: NextFunction) => {
  res.send('Update an existing Family');
};

const deleteOneFamily = (req: Request, res: Response, next: NextFunction) => {
  res.send('Delete an existing Family');
};

module.exports = {
  getAllFamily,
  getOneFamily,
  createNewFamily,
  updateOneFamily,
  deleteOneFamily,
};
