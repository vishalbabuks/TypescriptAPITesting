import * as supertest from 'supertest'
import brandController from '../controller/brand.controller';


describe('poc tests get request', ()=>{
    it('get request',async ()=>{
        const response=await brandController.getBrands();
        expect(response.statusCode).toBe(200);
    })
    it('get request with query param', async ()=>{
        const id='65eea1bb986188d4dce44f52'
        const res=await brandController.getBrandsById(id)
        console.log(res.body);
    })
})