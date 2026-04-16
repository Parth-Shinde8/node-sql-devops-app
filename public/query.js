var pool = require('./config');

module.exports = {

  // GET USERS
  getUsers: function (req, res) {
    pool.getConnection(function (err, connection) {

      if (err) {
        console.log("DB Connection Error:", err);
        return res.status(500).json(err);
      }

      connection.query('SELECT * FROM users', function (err, rows) {
        connection.release();

        if (err) {
          console.log("Query Error:", err);
          return res.status(500).json(err);
        }

        res.json(rows);
      });
    });
  },

  // ADD USER
  addUser: function (req, res) {
    var name = req.body.name;
    var age = req.body.age;
    var city = req.body.city;

    var query = 'INSERT INTO users (name, age, city) VALUES (?, ?, ?)';

    pool.getConnection(function (err, connection) {

      if (err) {
        console.log("DB Connection Error:", err);
        return res.status(500).json(err);
      }

      connection.query(query, [name, age, city], function (err, result) {
        connection.release();

        if (err) {
          console.log("Insert Error:", err);
          return res.status(500).json(err);
        }

        res.json({ message: "User added successfully", id: result.insertId });
      });
    });
  },

  // UPDATE USER
  updateUser: function (req, res) {
    var name = req.body.name;
    var age = req.body.age;
    var city = req.body.city;
    var id = req.params.id;

    var query = 'UPDATE users SET name = ?, age = ?, city = ? WHERE id = ?';

    pool.getConnection(function (err, connection) {

      if (err) {
        console.log("DB Connection Error:", err);
        return res.status(500).json(err);
      }

      connection.query(query, [name, age, city, id], function (err, result) {
        connection.release();

        if (err) {
          console.log("Update Error:", err);
          return res.status(500).json(err);
        }

        res.json({ message: "User updated successfully" });
      });
    });
  },

  // DELETE USER
  deleteUser: function (req, res) {
    var id = req.params.id;

    var query = 'DELETE FROM users WHERE id = ?';

    pool.getConnection(function (err, connection) {

      if (err) {
        console.log("DB Connection Error:", err);
        return res.status(500).json(err);
      }

      connection.query(query, [id], function (err, result) {
        connection.release();

        if (err) {
          console.log("Delete Error:", err);
          return res.status(500).json(err);
        }

        res.json({ message: "User deleted successfully" });
      });
    });
  }

};