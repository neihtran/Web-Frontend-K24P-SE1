import CategorySection from "@/components/albums/category-section";
import { Product } from "@/components/albums/product-card";

type Category = {
  name: string;
  products: Product[];
};

const albumsData: Category[] = [
  {
    name: "Biscuit Snacks",
    products: [
      {
        id: 1,
        name: "Biscoff Crunchy Spread",
        description: "Light crunchy biscuit with sweet caramel flavor.",
        price: "$31.00",
        imageUrl:
          "https://images.pexels.com/photos/4109990/pexels-photo-4109990.jpeg?auto=compress&w=300",
      },
      {
        id: 2,
        name: "Chocolate Chunk Cookies",
        description: "Crispy outside, chewy inside, full of choco chunks.",
        price: "$29.00",
        imageUrl:
          "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&w=300",
      },
    ],
  },
  {
    name: "Chocolate",
    products: [
      {
        id: 3,
        name: "Coco Lightweight Granola Shot",
        description: "Perfect mix of dark chocolate and granola.",
        price: "$31.00",
        imageUrl:
          "https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg?auto=compress&w=300",
      },
      {
        id: 4,
        name: "Milk Chocolate Bar",
        description: "Smooth, creamy milk chocolate for any time.",
        price: "$21.00",
        imageUrl:
          "https://images.pexels.com/photos/918328/pexels-photo-918328.jpeg?auto=compress&w=300",
      },
    ],
  },
  {
    name: "Shakes Biscuit",
    products: [
      {
        id: 5,
        name: "Hazelnut Biscuit Shake",
        description: "Cold shake with biscuit crumbs and hazelnut.",
        price: "$19.00",
        imageUrl:
          "https://images.pexels.com/photos/4109992/pexels-photo-4109992.jpeg?auto=compress&w=300",
      },
      {
        id: 6,
        name: "Caramel Biscuit Latte",
        description: "Coffee, milk and biscuit caramel topping.",
        price: "$23.00",
        imageUrl:
          "https://images.pexels.com/photos/3738888/pexels-photo-3738888.jpeg?auto=compress&w=300",
      },
    ],
  },
];

export default function AlbumsPage() {
  return (
    <main className="albums-page">
      <div className="albums-container">
        <div className="albums-header">
          <h1>Snacks & Drinks</h1>
          <p>Simple albums list page (static data)</p>
        </div>

        <div className="albums-grid">
          {albumsData.map((category) => (
            <CategorySection
              key={category.name}
              title={category.name}
              products={category.products}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
