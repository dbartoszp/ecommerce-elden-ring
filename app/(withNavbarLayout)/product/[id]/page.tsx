import { Product } from "@/modules/product/Product/Product";

export default function ProductPage({ params }: { params: { id: number } }) {
  return <Product id={params.id} />;
}
