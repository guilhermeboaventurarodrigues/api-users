module.exports = app => {
    const Users = app.models.users;

    app.post('/users', async (req, res) => {
        try {
          const result = await Users.create(req.body)
          res.json(result)
        } catch (error) {
          res.status(500).json(error)
        }
    })

    app.get('/users', async(req, res) => {
      try {
        const result = await Users.findAll();
        res.json(result)
      } catch (error) {
        res.status(500).json(error)
      }
    })

    app.get('/users/:id', async(req, res) => {
        try {
          const {id} = req.params;
          const where = {id: id}
          const result = await Users.findOne({where})
          res.json(result)
        } catch (error) {
          res.status(500).json(error)
        }
    })
    
    app.put('/users/:id', async(req, res) => {
        try {
          const {id} = req.params;
          const where = {id: id}
          await Users.update(req.body,{where})
          res.sendStatus(204)
        } catch (error) {
          res.status(500).json(error)
        }
    })

    app.delete('/users/:id', async(req, res) => {
        try {
          const {id} = req.params;
          const where = {id: id}
          await Users.destroy({where})
          res.sendStatus(204)
        } catch (error) {
          res.status(500).json(error)
        }
    })
}

