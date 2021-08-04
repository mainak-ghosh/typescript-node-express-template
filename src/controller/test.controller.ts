import { Request, Response } from 'express';

const testController = async (req: Request, res: Response) => {
  try {
    console.log(JSON.stringify(req.body));
    res.status(200).send({ message: 'succesful' });
  } catch (error) {
    console.log('error : ', error);
    res.status(500).send({ message: 'Internal server error' });
  }
};

export default testController;
