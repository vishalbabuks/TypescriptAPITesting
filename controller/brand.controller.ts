import * as supertest from 'supertest';
const request= supertest(`https://practice-react.sdetunicorns.com/api/test`)

class brandcontroller{
     getBrands(){
        return request.get('/brands')
    }
    getBrandsById(id:string){
        return request.get(`/brands/${id}`)
    }
    postbrand(data: {[key: string]: string | number}){

        return request.post('/brands').send(data);
    }
}

export default new brandcontroller();