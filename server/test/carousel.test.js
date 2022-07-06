const mongoose = require('mongoose');
const carousel = require("../app/models/carousel.js");
const url='mongodb://127.0.0.1:27017/ApiTesting';

beforeAll(async()=>{
    await mongoose.connect(url, {
        
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})

//register testing
describe(' Add carousel testing ', ()=>{
    it('Add carousel testing ', ()=>{
        const addcarouselTest={
            itemName: "carousel88",   
            image:"desription",      
            description:"510561"  , 

        }
        return carousel.create(addcarouselTest).then((pro_ret)=>{
            expect(pro_ret.itemName).toEqual("carousel88")
        })
    })
})

it("Delete carousel;", async() => {
    return carousel.findByIdAndDelete(
        { _id: Object("62c8fc33c9fc8b56144471aa") }, // Add _id from product id
  
    )
  })