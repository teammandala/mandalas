const mongoose = require('mongoose');
const auction = require("../app/models/auction.js");
const url='mongodb://127.0.0.1:27017/ApiTesting';

beforeAll(async()=>{
    await mongoose.connect(url, {
        
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})

//register testing
// describe(' Add auction testing ', ()=>{
//     it('Add auction testing ', ()=>{
//         const addauctionTest={
//             itemName: "auction",   
//             image:"desription",      
//             description:"510561"  ,
//             created:"",
//             bidStart:"5",
//             bidEnd:"10",
//             seller:"5%",
//             status:"spproved",
//             usercontactstatus:"contacted",
//             auctioneercontactstatus:"contacted",
//             deliverystatus:"received" 

//         }
//         return auction.create(addauctionTest).then((pro_ret)=>{
//             expect(pro_ret.itemName).toEqual("auction88")
//         })
//     })
// })

it("Delete auction;", async() => {
    return auction.findByIdAndDelete(
        { _id: Object("62c8fc33c9fc8b56144471aa") }, // Add _id from product id
  
    )
  })