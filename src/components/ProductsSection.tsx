import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import type { CartItem } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductsSectionProps {
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  fullPage?: boolean;
}

export function ProductsSection({ addToCart, fullPage }: ProductsSectionProps) {
  const products = [
    {
      id: '1',
      name: 'Red Coral (Moonga)',
      category: 'Gemstone',
      price: 2499,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1663899940839-06ff68bebd50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZXMlMjBjcnlzdGFsc3xlbnwxfHx8fDE3NjMzNjE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Natural Italian Red Coral for Mars - Certified',
      benefits: 'Boosts confidence, courage & energy'
    },
    {
      id: '2',
      name: 'Yellow Sapphire (Pukhraj)',
      category: 'Gemstone',
      price: 4999,
      originalPrice: 7999,
      rating: 4.9,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1663899940839-06ff68bebd50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZXMlMjBjcnlzdGFsc3xlbnwxfHx8fDE3NjMzNjE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Ceylon Yellow Sapphire for Jupiter - Lab Certified',
      benefits: 'Brings prosperity, wisdom & good fortune'
    },
    {
      id: '3',
      name: 'Blue Sapphire (Neelam)',
      category: 'Gemstone',
      price: 8999,
      originalPrice: 12999,
      rating: 4.7,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1663899940839-06ff68bebd50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZXMlMjBjcnlzdGFsc3xlbnwxfHx8fDE3NjMzNjE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Natural Blue Sapphire for Saturn - Premium Quality',
      benefits: 'Success in career, removes obstacles'
    },
    {
      id: '4',
      name: '5 Mukhi Rudraksha',
      category: 'Rudraksha',
      price: 599,
      originalPrice: 999,
      rating: 4.9,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1622993361118-b6365d859ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWRyYWtzaGElMjBiZWFkc3xlbnwxfHx8fDE3NjMzNTg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Nepali 5 Face Rudraksha - Authentic & Energized',
      benefits: 'Peace of mind, health & meditation'
    },
    {
      id: '5',
      name: 'Ek Mukhi Rudraksha',
      category: 'Rudraksha',
      price: 3999,
      originalPrice: 5999,
      rating: 5.0,
      reviews: 123,
      image: 'https://images.unsplash.com/photo-1622993361118-b6365d859ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWRyYWtzaGElMjBiZWFkc3xlbnwxfHx8fDE3NjMzNTg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Rare 1 Mukhi Rudraksha - Supreme Consciousness',
      benefits: 'Spiritual awakening & divine connection'
    },
    {
      id: '6',
      name: 'Garud Rudraksha Mala',
      category: 'Rudraksha',
      price: 1299,
      originalPrice: 1999,
      rating: 4.8,
      reviews: 345,
      image: 'https://images.unsplash.com/photo-1622993361118-b6365d859ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWRyYWtzaGElMjBiZWFkc3xlbnwxfHx8fDE3NjMzNTg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: '108+1 Beads Rudraksha Mala - Lab Tested',
      benefits: 'Protection from negative energies'
    },
    {
      id: '7',
      name: 'Shri Yantra (Gold Plated)',
      category: 'Yantra',
      price: 1899,
      originalPrice: 2999,
      rating: 4.9,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1664447963491-862c3c0fc91e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YW50cmElMjBzYWNyZWQlMjBnZW9tZXRyeXxlbnwxfHx8fDE3NjMzNjE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Shri Yantra for Wealth & Prosperity - Energized',
      benefits: 'Attracts wealth, success & abundance'
    },
    {
      id: '8',
      name: 'Kuber Yantra',
      category: 'Yantra',
      price: 899,
      originalPrice: 1499,
      rating: 4.7,
      reviews: 432,
      image: 'https://images.unsplash.com/photo-1664447963491-862c3c0fc91e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YW50cmElMjBzYWNyZWQlMjBnZW9tZXRyeXxlbnwxfHx8fDE3NjMzNjE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Kuber Yantra for Financial Growth - Copper',
      benefits: 'Increases income & financial stability'
    },
  ];

  const displayProducts = fullPage ? products : products.slice(0, 4);

  return (
    <section className={`${fullPage ? '' : 'py-16 bg-gradient-to-b from-white to-orange-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-orange-900 mb-4">
            {fullPage ? 'Spiritual Products Store' : 'Featured Products'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Authentic gemstones, rudraksha, and yantras - All certified and energized by expert pandits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="relative overflow-hidden aspect-square">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-green-600 text-white">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
                {product.rating >= 4.8 && (
                  <Badge className="absolute top-3 left-3 bg-orange-600 text-white">
                    ⭐ Bestseller
                  </Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{product.rating}</span>
                    <span className="text-gray-400">({product.reviews})</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-sm">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-green-700 bg-green-50 p-2 rounded">
                    ✨ {product.benefits}
                  </p>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl text-orange-600">₹{product.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {!fullPage && (
          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              View All Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
