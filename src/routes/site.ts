import { Request, Response, Router } from 'express';
const router = Router();

router.get('/ping', (request: Request, response: Response): any => {
  return response.json({ pong: true })
})

export default router;
