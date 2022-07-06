const mongoose = require('mongoose');
const users = require("../app/models/user.js");
const url='mongodb://127.0.0.1:27017/ApiTesting';

beforeAll(async()=>{
    await mongoose.connect(url, {
        
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})


//user admin register testing
describe(' User Registration testing ', ()=>{
  it('User Registration testing ', ()=>{
      const userTest={
        username: "wrishav",
        email:"wrishav1415@gmail.com",
        password:"wrishav@1",
        password1: "wrishav@1",
        name: "wrishav",
        avatar: "",
        phone: "1234567890",
        role: "ADMIN",
        address: "ktm",
        bio: "hello",
        created: "2022"

      }
      return users.create(userTest).then((pro_ret)=>{
          expect(pro_ret.name).toEqual("wrishav")
      })
  })
})





//user login testing
describe("test user sign up", () => {
    it("can sign up as new user", async () => {
      // we will write this function next
      
      password="wrishav@1",
      username= "banish"
    })
  });

     // the code below is for delete testing
  //Comment This code before executing test
  it("to test the delete product is working or not", async () => {
    //   const status = await users.deleteMany();
    //   expect(status.ok).toBe(undefined);
    })







    // testing fot updating 
it("to test the update", async () => {
  return users.findByIdAndUpdate(
    // { _id: Object("62c8f72fb964e93d4c204494   ") }, // Add _id from product id
    // { $set: { name: "wrishav143567" } }
  )
});


it("Delete User", async() => {
  return users.findByIdAndDelete(
      { _id: Object("62c8f8b5f7a0e86810a5b245") }, // Add _id from product id

  )
})