import Link from 'next/link';

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-zinc-800 text-zinc-100 rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-300">{product.description}</p>
                <Link href={`/app/${product.id}`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                   
                        Download
                   
                </Link>
            </div>
        </div>
    );
}
