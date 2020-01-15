const model = require ('../models/category')
const helpers = require ('../helpers/index')

module.exports = {
    getCategory: (_, res) => {
        model
          .getCategory ()
          .then (response => {
            helpers.success (res, response)
          })
          .catch (err => {
            console.log (err);
          });
      },
    addCategory: (req, res) => {
                const { name } = req.body
                const data = {name}
        
                model.addCategory(data)
                    .then(result => {
                        res.json(result)
                    })
                    .catch(err => {
                        console.log(err)
                    })
        
    },
    editCategory: (req, res) => {
                const id_category = req.params.id_category
                const { name } = req.body
                const data = {name}
        
                model.editCategory(data, id_category)
                    .then(result => {
                        res.json(result)
                    })
                    .catch(err => {
                        console.log(err)
                    })
    },
    deleteCategory: (req, res) => {
        const id_category = req.params.id_category

        model.deleteCategory(id_category)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}