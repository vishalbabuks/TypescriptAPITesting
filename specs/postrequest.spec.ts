import * as supertest from 'supertest'
import brandController from '../controller/brand.controller'
let id:string;

describe('postrequest',()=>{
    it('post request for creating a new brand', async ()=>{
        const res= await brandController.postbrand('NPA brand','this is a testing brand')
        expect(res.statusCode).toBe(200);
        console.log(res.body)
        id=res.body._id;
    })
    it('post request for creating a new brand', async ()=>{
        const res= await brandController.getBrandsById(id)
        expect(res.statusCode).toBe(200);
        
    })

})