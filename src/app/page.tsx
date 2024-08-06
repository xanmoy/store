import ProductCard from '@/components/ ProductCard';

const products = [
  {
    id: '1',
    name: 'Xnote',
    description: 'xNote is a simple text editor built with C and GTK3. It features basic text editing capabilities, such as opening and saving files, Day/Night mode, Font size adjustment, Multiple Windows.',
    image: '/xnote.jpeg',
    link: 'https://github.com/xanmoy/xnote/raw/main/xnote',
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
    <section className='m-5'>
      <h1 className="text-4x text-center font-bold mb-6">Explore My Projects and Download from XStore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
