const Delete = class Delete {
    /**
     * @constructor
     * @param {Object} app
     * @param {Object} config
     */
    constructor (app, config) {
      this.app = app
      this.run()
    }
  
    /**
     * Middleware
     */
    middleware () {
      this.app.post('/users/delete/:id', (req, res) => {
        try {
          res.status(200).json({
            code: 200,
            message: `OK id : ${req.params.id}`
          })
        } catch (err) {
          console.error(`[ERROR] users/delete/:id -> ${err}`)
  
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
  
  module.exports = Delete
  