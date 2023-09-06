module.exports = app => {
    app.get('/login', app.auth.authenticate(),  async(req, res) => {
        try {
            res.json({login: "Feito com successo"})
        } catch (error) {
            res.status(501).json(error)
        }
    })
}