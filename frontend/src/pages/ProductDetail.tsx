import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { id } = useParams()

  const products: Record<string, any> = {
    '1': {
      name: 'E-Scooter Battery Pack',
      price: '$299',
      rating: 4.8,
      specs: ['Capacity: 36V 10Ah', 'Range: 40km', 'Charging Time: 4 hours', 'Weight: 2.5kg'],
    },
    '2': {
      name: 'E-Rickshaw Battery',
      price: '$599',
      rating: 4.9,
      specs: ['Capacity: 48V 100Ah', 'Range: 100km', 'Charging Time: 6 hours', 'Weight: 15kg'],
    },
    '3': {
      name: 'Inverter Battery',
      price: '$399',
      rating: 4.7,
      specs: ['Capacity: 150Ah', 'Voltage: 12V', 'Backup: 8 hours', 'Warranty: 2 years'],
    },
  }

  const product = products[id || '1'] || products['1']

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="h-96 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-9xl">
            🔋
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-primary">{product.price}</span>
              <span className="text-yellow-500">⭐ {product.rating}</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Specifications</h3>
            <ul className="space-y-2 mb-8">
              {product.specs.map((spec: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="btn-primary">Add to Cart</button>
              <button className="btn-secondary">Request Quote</button>
            </div>

            <div className="mt-12 p-6 bg-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Premium quality materials</li>
                <li>✓ 2-year warranty</li>
                <li>✓ Free shipping on orders</li>
                <li>✓ Expert technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
