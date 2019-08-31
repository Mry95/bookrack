module.exports = {
    devServer: {
        open: true,
        before(app) {
            let data = require('./mock/data.json')
            app.get('/list', (req, res) => {
                res.send(data)
            })
        }
    }
}