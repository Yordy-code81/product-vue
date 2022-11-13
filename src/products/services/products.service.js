import http from '@/core/http-common'

class ProductsService {
    endpoint = '/food/products'
    key = '8a7606a8bb6a43038afa67f32d739ca1'
    getAll(name){
        return http.get(`${this.endpoint}/search?query=${name}&number=100&apiKey=${this.key}`);
    }

    getById(id){
        return http.get(`${this.endpoint}/${id}?apiKey=${this.key}`)
    }

    /*getAllCoursesById(id){
        return http.get(`${this.endpoint}/${id}/courses`)
    }*/
}

export default new ProductsService();