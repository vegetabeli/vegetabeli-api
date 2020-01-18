const model = require ('../models/help')
const helpers = require ('../helpers/index')

module.exports = {
    getHelp: (_, res) => {
        model
          .getHelp ()
          .then (response => {
            helpers.success (res, response)
          })
          .catch (err => {
            console.log (err);
          });
      },
    getHelpById: (req, res) => {
        const id_help = req.params.id_help
        model
          .getHelpByid (id_help)
          .then (response => {
            helpers.success (res, response)
          })
          .catch (err => {
            console.log (err);
          });
      },
    addHelp: (req, res) => {
                const { title, body } = req.body
                const data = {title, body}
        
                model.addHelp(data)
                    .then(result => {
                        res.json(result)
                    })
                    .catch(err => {
                        console.log(err)
                    })
        
    },
    editHelp: (req, res) => {
                const id_help = req.params.id_help
                const { title, body } = req.body
                const data = {title, body}
        
                model.editHelp(data, id_help)
                    .then(result => {
                        res.json(result)
                    })
                    .catch(err => {
                        console.log(err)
                    })
    },
    deleteHelp: (req, res) => {
        const id_help = req.params.id_help

        model.deleteHelp(id_help)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}