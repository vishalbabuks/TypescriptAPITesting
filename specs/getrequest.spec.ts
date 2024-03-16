import * as supertest from 'supertest'

const request = supertest(`https://practice-react.sdetunicorns.com/api/test`);

describe('poc tests get request', ()=>{
    it('get request',async ()=>{
        const response=await request.get('/brands');
        expect(response.statusCode).toBe(200);
    })
    it('get request with query param', async ()=>{
        const id='65eea1bb986188d4dce44f52'
        const res=await request.get(`/brands/${id}`)
        console.log(res.body);
    })
})