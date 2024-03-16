import * as supertest from 'supertest'

const request= supertest(`https://practice-react.sdetunicorns.com/api/test`);
let id:string;

describe('postrequest',()=>{
    it('post request for creating a new brand', async ()=>{
        const postdata={
            "name": "ABC testing brand",
            "description": "this is a MM testing brand created"
          }
        const res= await request.post('/brands').send(postdata);
        expect(res.statusCode).toBe(200);
        console.log(res.body)
        id=res.body._id;
    })
    it('post request for creating a new brand', async ()=>{
        const res= await request.get(`/brands/${id}`)
        expect(res.statusCode).toBe(200);
        
    })

})