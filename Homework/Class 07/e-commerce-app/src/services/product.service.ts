import type { AddProductProps, Product, ProductWithId } from "../types/product.type";

export class ProductService {
  static BASE_URL = "https://fakestoreapi.com/products";

  static async getAllProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${this.BASE_URL}`);
      if (!response.ok) {
        const error = new Error('Error while fetching data.')
        throw error
      }
      return await response.json();
    } catch (error) {
      console.error(`API request failed. Error: ${error}`);
      throw error;
    }
  }

  static async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const response = await fetch(`${this.BASE_URL}/category/${category}`)
      if (!response.ok) {
        throw new Error('Error while fetching data.')
      }
      return await response.json()
    }
    catch (error) {
      console.error(`API request failed. Error: ${error}`);
      throw error;
    }
  }

  static async getCategories(): Promise<string[]> {
    try {
      const response = await fetch(`${this.BASE_URL}/categories`)
      if (!response.ok) {
        throw new Error('Error while fetching data')
      }
      return await response.json()
    }
    catch (error) {
      console.error(`API request failed. Error: ${error}`);
      throw error;
    }
  }

  static async AddProduct(AddProductProps: AddProductProps): Promise<ProductWithId | undefined> {
    try {
      const response = await fetch(`${this.BASE_URL}`, {
        method: 'POST',
        body: JSON.stringify(AddProductProps),
        headers: { "Content-Type": "application/json" }
      })
      if (response.ok) {
        const data: ProductWithId = await response.json();
        console.log(data)
        return data
      }
    } catch (error) {
      console.error(`API request failed. Error: ${error}`);
      throw error;
    }
  }
}
