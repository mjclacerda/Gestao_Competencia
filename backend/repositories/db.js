import sequelize from "sequelize";

const Sequelize = new sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "gpc",
  username: "postgres",
  password: "gpcadmin",
  logging: false,
  define: { timestamps: false },
});
