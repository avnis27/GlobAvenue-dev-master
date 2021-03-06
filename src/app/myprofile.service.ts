import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

 // uri = 'http://localhost:4000/products';
  uri = 'https://globe-admin.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    console.log(ProductName, ProductDescription, ProductPrice);
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this.http.get(`${this.uri}`);
  }

  editProduct(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http.post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }
  
  updateProfile(email,phone,country,location,language,profile_image) {
    const obj = {
	  phone,
	  country,
	  location,
	  language,
	  profile_image
    };
    this.http.post(`${this.uri}/update/13245`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteProduct(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
