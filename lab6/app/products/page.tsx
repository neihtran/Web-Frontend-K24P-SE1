import Link from "next/link";
import { Card } from "@/components/ui/card";

const products = [
  { id: 1, name: "Product 1"},
  { id: 2, name: "Product 2"},
];

export default function ProductList() {
  return (
    <div className="p-6 space-y-3">
      <h1 className="text-xl font-bold">Products</h1>

      {products.map(p => (
        <Card key={p.id} className="p-4">
          <Link href={`/products/${p.id}`} className="underline">
            {p.name}
          </Link>
        </Card>
      ))}
    </div>
  );
}
