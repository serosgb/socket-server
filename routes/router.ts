import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (request: Request, response: Response) => {
    response.json({
        ok: true,
        message: 'Todo está bien!'
    });
});

router.post('/messages', (request: Request, response: Response) => {

    const data = request.body;

    response.json({
        ok: true,
        message: 'POST - listo!',
        data
    });
});

router.post('/messages/:id', (request: Request, response: Response) => {

    const data = request.body;
    const id = request.params.id;

    response.json({
        ok: true,
        message: 'POST - listo!',
        data,
        id
    });
});

export default router;