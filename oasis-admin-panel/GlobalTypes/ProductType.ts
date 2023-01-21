export interface specificationType {
  key?: string,
  value?: string,
}

export interface ProductType {
    "crawl_timestamp": string,
    "product_url": string,
    "product_name": string,
    "product_category_tree": string[],
    "pid": string,
    "retail_price": number,
    "discounted_price": number,
    "image": string[],
    "is_FK_Advantage_product"?: string | Boolean,
    "description": string,
    "product_rating"?: string,
    "overall_rating"?: string,
    "brand": string,
    "product_specifications"?: {
      "product_specification"?: specificationType[]
    }
    "id": string,
    "rating": number,
    "stock": number,
    "discount": number
  }