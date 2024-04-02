import { Card } from '../ui/card';
import { Product } from '../product';


interface ProductData {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface ProductProps {
  data: ProductData;
}

export function ProductItem({ data }: ProductProps) {
  return (
    <Product.Card className="bg-blue-400">
      <Product.AddToCart data={data}></Product.AddToCart>
    </Product.Card>
  );
}
