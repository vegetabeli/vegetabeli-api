const db = require('../configs/db')

module.exports = {
    getProduct: (data) => {

        let pagination = ``,
        search = '',
        sort_by = '',
        order = '',
        category =''

        if (data.name != undefined){
          search = `WHERE product.name LIKE '%${data.name}%'`
        }

        if (data.category != undefined){
          category = `WHERE category = '${data.category}'`
        }

        if(data.sort_by != undefined){
          sort_by = `ORDER BY ${data.sort_by}`
        }else{
          sort_by = `ORDER BY product.date_created`
        }

        if(data.order != undefined){
          order = `${data.order}`
        }

        if(data.limit != undefined && data.page != undefined){
          data.page = data.limit*(data.page-1)
          pagination = `LIMIT ${data.limit} OFFSET ${data.page}`
        }

        return new Promise ((resolve, reject) =>{
            db.query(`SELECT product.id_product, product.name, product.description, product.price, product.image, category.name AS category, product.stock, product.sold, product.date_created, product.date_updated, market.name AS market
            FROM product
            LEFT JOIN category ON category.name = product.category
            LEFT JOIN market ON market.id_market = product.id_market
            ${category}
            ${search}
            ${sort_by} ${order}
            ${pagination}`
            , (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    getProductById: (id) => {
      return new Promise ((resolve, reject) =>{
          db.query(`SELECT product.id_product, product.name, product.description, product.price, product.image, category.name AS category, product.stock, product.sold, product.date_created, product.date_updated, market.name AS market
          FROM product
          LEFT JOIN category ON category.name = product.category
          LEFT JOIN market ON market.id_market = product.id_market
          WHERE product.id_product = ${id}`
          , (err, response) =>{
              if (!err) {
                  resolve (response)
              }else{
                  reject (err)
              }
          })
      })
    },
    addProduct: (data) => {
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO product SET ?', data, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editProduct: (data, id_product) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE product SET ? WHERE id_product = ?', [data, id_product], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteProduct: (id_product) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM product WHERE id_product = ?', id_product, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}