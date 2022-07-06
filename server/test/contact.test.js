const mongoose = require('mongoose');
const contact = require("../app/models/contact.js");
const url='mongodb://127.0.0.1:27017/ApiTesting';

beforeAll(async()=>{
    await mongoose.connect(url, {
        
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})
//new contact testing
describe(' Add contact testing ', ()=>{
    it('Add contact testing ', ()=>{
        const addcontactTest={
            fullName: "wrishav",
            email:"wrishav@gmail.com",
            status:"pending",
            message:"hello"      
        }
        return contact.create(addcontactTest).then((pro_ret)=>{
            expect(pro_ret.fullName).toEqual("wrishav")
        })
    })
})
  


it("Delete contact;", async() => {
    return contact.findByIdAndDelete(
        { _id: Object("62c8fa96bc651b0b84edb443") }, // Add _id from product id
  
    )
  })