import { Metadata } from 'next';
import { ReactElement } from 'react';
import { notFound } from 'next/navigation';

const products = {
    '1': {
        name: 'Project One',
        description: 'Detailed description for project one.',
        image: '/images/project1.png',
        link: '#', // Replace with your app installation link or further details
    },
    '2': {
        name: 'Project Two',
        description: 'Detailed description for project two.',
        image: '/images/project2.png',
        link: '#', // Replace with your app installation link or further details
    },
};

interface Params {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const product = products[params.id];
    return {
        title: product ? product.name : 'Product Not Found',
        description: product ? product.description : 'Product details not available',
    };
}

export default function AppDetails({ params }: Params): ReactElement {
    const id = params.id;
    const product = products[id];

    if (!product) {
        return notFound();
    }

    return (
        <>
            <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
            <img className="w-full h-96 object-cover mb-6" src={product.image} alt={product.name} />
            <p className="text-lg mb-6">{product.description}</p>
            <a
                href={product.link}
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Install Now
            </a>
        </>
    );
}
