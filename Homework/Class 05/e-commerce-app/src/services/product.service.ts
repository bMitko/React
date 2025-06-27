import type { Product } from "../types/product.type";

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
}