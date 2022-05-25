require('../src/db/mongoose')
const User = require('../src/models/user.js')

// 6286329fe59328268475d2c3

// User.findByIdAndUpdate('6286329fe59328268475d2c3', { age: 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async(id, age)=>{
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

const deleteTaskAndCOunt = async(id) =>{
    const user = await User.findByIdAndDelete(id)
    const count = await User.countDocuments({completed: false})
    return count
}

deleteTaskAndCOunt('628788e87781d51f148f501a').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})

// updateAgeAndCount('628788e87781d51f148f501a',2).then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })