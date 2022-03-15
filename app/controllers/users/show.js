const ElevesModel = require('../../models/eleves.js')

const Show = class Show {
  /**
   * @constructor
   * @param {Object} app
   * @param {Object} config
   */
  constructor (app, connect, config) {
    this.app = app
    this.ElevesModel = connect.model('User', ElevesModel)

    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.get('/users/show/:id', (req, res) => {
      try {
        this.ElevesModel.findById(req.params.id).then((user) => {
          res.status(200).json(user || {})
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          })
        })
      } catch (err) {
        console.error(`[ERROR] users/show/:id -> ${err}`)

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        })
      }
    })
  }

  /**
   * Run
   */
  run () {
    this.middleware()
  }
}

module.exports = Show
