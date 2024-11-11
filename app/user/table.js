const pool = require('../../databasePool');

class UserTable {
  static storeUser(user) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO user VALUES($1, $2, $3, $4) RETURNING id',
        [birthdate, generationId, nickname, traits],
        (error, response) => {
          if (error) return reject(error);

          resolve(response);
        }
      );
    });
  }
}

module.exports = UserTable;
