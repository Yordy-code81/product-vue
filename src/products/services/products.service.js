import http from '@/core/http-common'

class ProductsService {
    endpoint = '/food/products/search?query=arroz&number=50&apiKey=f09ed6a8234f4cb089e94c8fe1b4a72d';
    getAll(){
        return http.get(`${this.endpoint}`);
    }

    /*getById(id){
        return http.get(`${this.endpoint}/${id}`)
    }

    getAllCoursesById(id){
        return http.get(`${this.endpoint}/${id}/courses`)
    }*/
}

export default new ProductsService();