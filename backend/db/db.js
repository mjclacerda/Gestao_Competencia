import sequelize from "sequelize";

//usar esses dados para a configuração do banco de dados e a aplicação vai utilizar
const Sequelize = new sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "postgres",
  username: "postgres",
  password: "gpcadmin",
  logging: false,
  define: { timestamps: false, undercored: true },
});

export default Sequelize;
