import http from '@/core/http-common'

class CreateProductService {
    endpoint = '/sellers'
    registerProduct(sellerId, product){
        return http.post(`${this.endpoint}/${sellerId}/products`, product);
    }

    getAllProducts(){
        return http.get(`/products`)
    }

    getSellerOfProduct(sellerId) {
        return http.get(`/sellers/${sellerId}`)
    }
}

export default new CreateProductService();