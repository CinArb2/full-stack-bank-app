const { app } = require('./app')

// Utils - connecting to database
const { db } = require('./utils/database');

//import Models 
// const { User } = require('./models/user.model')
// const { TRANSFER } = require('./models/transfer.model')

//authenticate database credentials
db.authenticate()
  .then(()=> console.log('exitosa la conexion'))
  .catch((err) => console.log(err))
  
// 1 User <----> M repairs
// User.hasMany(TRANSFER);
// TRANSFER.belongsTo(User);


//sync sequelize models
db.sync()
	.then(() => console.log('Database synced'))
	.catch(err => console.log(err));

// Spin up server
//define the port
const PORT = process.env.PORT || 4000
//start server and listen request
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`)
})