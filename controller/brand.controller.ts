import * as supertest from 'supertest';
const request= supertest(`https://practice-react.sdetunicorns.com/api/test`)

class brandcontroller{
     getBrands(){
        return request.get('/brands')
    }
    getBrandsById(id:string){
        return request.get(`/brands/${id}`)
    }
    postbrand(name:string,description:string){
        const postdata={
            "name": `${name}`,
            "description": `${description}`
          }
        return request.post('/brands').send(postdata);
    }
}

export default new brandcontroller();