require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('62878213072d181ddc07d7e9').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})