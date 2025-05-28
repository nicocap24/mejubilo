'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { articles } from './articles';

export default function ArticlePage() {
  const params = useParams();
  
  if (!params?.slug) {
    return (
      <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center" style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
        <div className="pt-8 pb-16 px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl px-8 md:px-12 py-16 max-w-4xl w-full">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Artículo no encontrado</h1>
            <Link href="/" className="text-orange-400 hover:text-orange-500 font-semibold inline-flex items-center">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const slug = params.slug as string;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center" style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
        <div className="pt-8 pb-16 px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl px-8 md:px-12 py-16 max-w-4xl w-full">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Artículo no encontrado</h1>
            <Link href="/" className="text-orange-400 hover:text-orange-500 font-semibold inline-flex items-center">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center" style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
      <div className="pt-8 pb-16 px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl px-8 md:px-12 py-16 max-w-4xl w-full">
          <Link href="/" className="text-orange-400 hover:text-orange-500 font-semibold inline-flex items-center mb-8">
            ← Volver al inicio
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <p className="text-gray-500 mb-8">Por: {article.author}</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 whitespace-pre-line">{article.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 