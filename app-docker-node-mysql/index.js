import express from 'express';
const app = express()
const port = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

import { createConnection } from 'mysql';
var connection = createConnection(config)

connection.query("DROP TABLE IF EXISTS people;")
const create_sql = "CREATE TABLE people (id int not null auto_increment, name varchar(255), primary key(id));"
connection.query(create_sql)

connection.end()

app.get('/', (_req, res) => {

  var connection = createConnection(config)

  const insert_sql = "INSERT INTO people(name) VALUES ('list_db')"
  connection.query(insert_sql)

  connection.query(
    "SELECT * FROM people",
    function (err, rows) {
      if (err) throw err;

      var html = "<h1>List</h1> <ul>"
      for (var i in rows) html += "<li>" + rows[i].name + "</li>";
      html += "</ul>"

      res.send(html);
    }
  );
  
  connection.end()
})

app.listen(port, () => {

  console.log('PORT UP' + port)
  
})