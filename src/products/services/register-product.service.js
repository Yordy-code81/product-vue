import http from '@/core/http-common'

class CreateProductService {
    endpoint = '/sellers'
    registerProduct(sellerId, product){
        return http.post(`${this.endpoint}/${sellerId}/products`, product);
    }

    /*getAllCoursesById(id){
        return http.get(`${this.endpoint}/${id}/courses`)
    }*/
}

export default new CreateProductService();