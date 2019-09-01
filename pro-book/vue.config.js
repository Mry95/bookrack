module.exports = {
    devServer: {
        open: true,
        before(app) {
            let data = require('./mock/data.json')
            app.get('/list', (req, res) => {
                res.send(data)
            });
            app.get('/itemList', (req, res) => {
                let { index } = req.query;
                res.send(data['ranklist' + index])
            });
            app.get('/details', (req, res) => {
                let { id, index } = req.query;
                let item = data['ranklist' + index].filter(item => item.bookId == id);
                res.send(item)
            })
        }
    }
}