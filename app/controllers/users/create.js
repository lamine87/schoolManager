const ElevesModel = require('../../models/eleves.js')

const Create = class Create {
  /**
   * @constructor
   * @param {Object} app
   * @param {Object} config
   */
  constructor (app, connect, config) {
    this.app = app
    this.ElevesModel = connect.model('Eleves', ElevesModel)

    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.post('/eleves/', (req, res) => {
      try {
        const elevesModel = new this.ElevesModel(req.body)

        elevesModel.save().then((eleves) => {
          res.status(200).json(eleves || {})
        }).catch(() => {
          res.status(200).json({})
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

module.exports = Create
