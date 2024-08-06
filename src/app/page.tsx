import ProductCard from '@/components/ ProductCard';

const products = [
  {
    id: '1',
    name: 'Project One',
    description: 'Description for project one.',
    image: '/images/project1.png',
  },
  {
    id: '2',
    name: 'Project Two',
    description: 'Description for project two.',
    image: '/images/project2.png',
  },
  // Add more products as needed
];

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Welcome to My Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
