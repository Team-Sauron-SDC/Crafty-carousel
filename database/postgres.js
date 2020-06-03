const {Pool,Client} = require ('pg')

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "3.22.81.170",
    port: 5432,
    database: "url_images"
})

const getImages = (id, callback) => {

  const queryString = `SELECT * FROM images where id=${id.id}`
  pool.query(queryString, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(err,result);
    }
    
  }
  )

}


module.exports = {getImages};
