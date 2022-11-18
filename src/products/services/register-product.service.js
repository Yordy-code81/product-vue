import http from '@/core/http-common'

class CreateProductService {
    endpoint = '/sellers'
    registerProduct(sellerId, product){
        return http.post(`${this.endpoint}/${sellerId}/products`, product);
    }

    getAllProducts(){
        return http.get(`/products`)
    }
}

export default new CreateProductService();