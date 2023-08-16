const db = require("../db");

class User {
  constructor({ id, email, first_name, last_name, current_state = "active" }) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.current_state = current_state;
  }

  //   find all users
  static async all() {
    const results = await db.query(`
    SELECT * FROM users`);
    return results.rows.map((u) => new User(u));
  }

  //   save a new user
  async save() {
    const result = await db.query(
      `INSERT INTO users (email, first_name, last_name, current_state) 
            VALUES ($1, $2, $3, $4)
            RETURNING id`,
      [
        this.email,
        this.first_name,
        this.last_name,
        (this.current_state = "active"),
      ]
    );
    this.id = result.rows[0].id;
  }

  fullname() {
    return `${this.first_name} ${this.last_name}`;
  }
}

module.exports = User;
