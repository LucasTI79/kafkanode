import { Router } from 'express';

const routes = Router();

routes.post('/certifications', async (req, res) => {
  await req.producer.send({
        topic: 'issue-certificate',
        messages: [
          { 
            value: JSON.stringify({
              user: { id: 1, name: 'Lucas Feitosa' },
              course: 'Kafka com Node.js',
              grade: 5,
            })
          },
        ],
      })

  return res.json({ ok: true });
})

export default routes;