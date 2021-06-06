require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL,
})

console.log('knex and driver installed correctly');



const qry = knexInstance
.select('product_id', 'name', 'price', 'category')
.from('amazong_products')
.where({ name: 'Point of view gun' })
.first()
.toQuery()
// .then(result => {
//   console.log(result)
// })

function getProductsWithImages() {
    knexInstance
      .select('product_id', 'name', 'price', 'category', 'image')
      .from('amazong_products')
      .whereNotNull('image')
      .then(result => {
        console.log(result)
      })
  }
  
  getProductsWithImages()