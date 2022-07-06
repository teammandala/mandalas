const mongoose = require('mongoose');
const kyc = require("../app/models/kyc.js");
const url='mongodb://127.0.0.1:27017/ApiTesting';

beforeAll(async()=>{
    await mongoose.connect(url, {
        
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})
//new kyc testing
// describe(' Add kyc testing ', ()=>{
//     it('Add kyc testing ', ()=>{
//         const addkycTest={
//             fullname: "wrishav",
//             email:"wrishav@gmail.com",
//             status:"pending",
//                         phone: "9862005855",
// address: "ktm",
// country: "nepal",
// idImage: "",
// user: "",
// reqDate : "2022"   
//         }
//         return kyc.create(addkycTest).then((pro_ret)=>{
//             expect(pro_ret.cName).toEqual("hello")
//         })
//     })
// })
  


it("Delete kyc;", async() => {
    return kyc.findByIdAndDelete(
        { _id: Object("62c8fa96bc651b0b84edb443") }, // Add _id from product id
  
    )
  })