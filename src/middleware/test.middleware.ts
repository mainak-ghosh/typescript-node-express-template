import { RSA_NO_PADDING } from 'constants';
import { Request, Response, NextFunction } from 'express';

const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    if (req.body.testValue === 'passionate') {
      next();
    }
    res.status(404).send({ message: 'Unsuccesfull, require proper test value.' });
  } catch (err) {
      console.log("Error :", err);
    res.status(500).send({ message: "server error", error: err });
  }
};

export default testMiddleware;
