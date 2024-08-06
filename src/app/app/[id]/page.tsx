import { Metadata } from 'next';
import { ReactElement } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type Product = {
    name: string;
    description: string;
    image: string;
    link: string;
};

type Products = {
    [key: string]: Product;
};

const products: Products = {
    '1': {
        name: 'Xnote',
        description: 'xNote is a simple text editor built with C and GTK3. It features basic text editing capabilities, such as opening and saving files, Day/Night mode, Font size adjustment, Multiple Windows.',
        image: '/xnote.jpeg',
        link: 'https://github.com/xanmoy/xnote/raw/main/xnote',
    },
    '2': {
        name: 'Project Two',
        description: 'Detailed description for project two.',
        image: '/images/project2.png',
        link: '#',
    },
};

interface Params {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const product = products[params.id as keyof typeof products];
    return {
        title: product ? product.name : 'Product Not Found',
        description: product ? product.description : 'Product details not available',
    };
}

export default function AppDetails({ params }: Params): ReactElement {
    const id = params.id as keyof typeof products;
    const product = products[id];

    if (!product) {
        return notFound();
    }

    return (
        <section className='p-5'>
            <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
            <div className="w-full h-96 relative mb-6">
                <Image
                    src={product.image}
                    layout="fill"
                    objectFit="cover"
                    alt={product.name}
                />
            </div>
            <p className="text-lg mb-6">{product.description}</p>
            <a
                href={product.link}
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Install Now
            </a>
        </section>
    );
}
