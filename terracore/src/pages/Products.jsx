import { useState } from 'react'

const products = [
  { id: 1, name: 'TrailGuard Bumper', category: 'TrailGuard', price: '$799' },
  { id: 2, name: 'Traverse-X Suspension', category: 'Traverse-X', price: '$1299' },
  { id: 3, name: 'Recovery Strap', category: 'Third-Party Gear', price: '$99' },
  { id: 4, name: 'TrailGuard Skid Plate', category: 'TrailGuard', price: '$499' },
]

export default function Products() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'TrailGuard', 'Traverse-X', 'Third-Party Gear']
  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter)
  return (
    <div className="bg-matte min-h-full text-ash p-6 bg-topography">
      <h2 className="text-3xl font-bold mb-6 text-burnt">Products</h2>
      <div className="flex space-x-4 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded border ${filter === cat ? 'bg-burnt text-white' : 'border-ash text-ash'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="border border-ash p-4 rounded bg-matte/70">
            <h3 className="font-bold mb-2">{p.name}</h3>
            <p className="mb-2 text-sm italic">{p.category}</p>
            <p className="mb-4">{p.price}</p>
            <button className="bg-burnt text-white px-4 py-1 rounded">Buy</button>
          </div>
        ))}
      </div>
    </div>
  )
}
