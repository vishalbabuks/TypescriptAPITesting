import brandController from '../controller/brand.controller'
let id:string;

describe('postrequest',()=>{
    it('post request for creating a new brand', async ()=>{
        const data = {
            'name': 'Test Brand ' + Math.floor(Math.random() * 100000),
            'description': 'this is a test brand created'
          }
        const res= await brandController.postbrand(data)
        expect(res.statusCode).toBe(200);
        console.log(res.body)
        id=res.body._id;
    })
    it('post request for creating a new brand', async ()=>{
        const res= await brandController.getBrandsById(id)
        expect(res.statusCode).toBe(200);
        
    })

})