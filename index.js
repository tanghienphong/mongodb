const mongoose = require('mongoose')
const User = require('./models/User')
const Customer = require('./models/Customer')

mongoose.connect('mongodb://localhost:27017/mongoose-test',{
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection.then(()=>{
    console.log('Database connected!');
})
.catch((err) => {
    console.log(err.message);
})

/**
 * Create Collection (Table)
 * Insert
 * Update
 * Delete
 * Select
 */


 /** Create One */
//  User.create({
//      username: "admin",
//      password: '123456789',
//      birthday: new Date(),
//  }).then(user => console.log(user))
//  .catch(err=>console.log(err))

//  const user = new User({
//     username: "admin1",
//     password: '123456789',
//     birthday: new Date(),
//  }).save(err => {
//      if(err) return console.log(err.message);
//  })

 /**Create Many */

//  User.insertMany([
//      {
//          username: 'teoem',
//          password: '1234567890'
//      },
//      {
//          username: 'tinguyen',
//          password:'1234567890'
//      }
//  ]).then(users=>console.log(users))
//  .catch(err =>console.log(err))

/**Select */

/ SELECT * FROM users 
// User.find((err,res)=>{
//     if(err) return;
//     console.log(res)
// })

// User.find()
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// SELECT * FROM users LIMIT 0,1
// User.findOne()
// .then(user=>console.log(user))
// .catch(err=>console.log(err))

// SELECT * FROM users WHERE id='12343' 
//5cb082737db7a60795a24a9d
// User.findById('5cb082737db7a60795a24a9d')
// .then(user=>console.log(user))
// .catch(err=>console.log('Error: '+err.message))

//SELECT * FROM users WHERE phone='098754321' AND username='admin'
// User.findOne({
//     phone: '098754321',
//     username: 'admin'
// })
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// SELECT * FROM users 
// WHERE (username='guest' OR username='admin') 
// AND password = '9876543'
// User.find({
//     $or :[ {
//         username:'admin'
//     },{
//         username:'guest'
//     }],
//     password: {
//         $eq : '9876543'
//     }
// })
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// LIKE: $regex: ....  username LIKE 'guest%'
// User.find({
//     username:{
//         $regex: /^guest/
//     }
// })
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// LIKE: $regex: ....  username LIKE '%guest'

// User.find({
//     username:{
//         $regex: /guest$/
//     }
// })
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// User.find({
//     username:{
//         $regex: /^guest02$/
//     }
// })
// .then(users=>console.log(users))
// .catch(err=>console.log(err))

// LIKE: $regex: ....  username LIKE '%guest%'
User.find({
    username:{
        $regex: /guest/
    }
})
.then(users=>console.log(users))
.catch(err=>console.log(err))