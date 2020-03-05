describe('testing add visitor', ()=>{
    const axios = require('axios')
    let server
    const {addNewVisitor,listAllVisitors,deleteVisitor,deleteVisitors,viewVisitor,updateVisitor} = require('../public/app')


    beforeEach(()=>{
        server = require('../public/index')
    });

    it('should check status code is 200', async (done)=>{
        try {
            const route = await axios.get("http://127.0.0.1:3000/viewVisitor/50")
            expect(route.status).toEqual(200)
        } catch (err) {
            console.log(err)
        }
        done()
    })

})

describe('testing delete visitor', ()=>{
    const axios = require('axios')
    let server
    const {addNewVisitor,listAllVisitors,deleteVisitor,deleteVisitors,viewVisitor,updateVisitor} = require('../public/app')


    beforeEach(()=>{
        server = require('../public/index')
    });

    it('should check status code is 200', async (done)=>{
        try {
            const route = await axios.get("http://127.0.0.1:3000/deleteVisitor/50")
            expect(route.status).toEqual(200)
        } catch (err) {
            console.log(err)
        }
        done()
    })

    it('should return empty array after deleting visitor', async (done)=>{
        try {
            const route = await axios.get("http://127.0.0.1:3000/deleteVisitor/50")
            expect(route.outputData).toEqual([])
        } catch (err) {
            console.log(err)
        }
        done()
    })


})