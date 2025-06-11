import { Link } from 'react-router-dom'

export default function Home() {
  const featured = [
    { id: 1, name: 'TrailGuard Bumper', price: '$799' },
    { id: 2, name: 'Traverse-X Suspension', price: '$1299' },
    { id: 3, name: 'All-Terrain Recovery Kit', price: '$299' },
  ]
  return (
    <div className="text-ash bg-matte bg-topography">
      <section className="relative h-96 flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="bg-black/50 p-8 rounded">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-burnt">Gear Up for Adventure</h1>
          <Link to="/products" className="bg-burnt text-white px-6 py-2 rounded shadow hover:bg-orange-700">Shop Now</Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-4 text-burnt">Welcome to Terracore</h2>
        <p className="mb-8">Terracore delivers rugged 4WD gear designed and tested in New Zealand's toughest terrain. From custom armor to trail-ready accessories, our products keep you exploring.</p>
        <h3 className="text-xl font-semibold mb-4">Featured Products</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {featured.map((p) => (
            <div key={p.id} className="border border-ash p-4 rounded bg-matte/70">
              <h4 className="font-bold mb-2">{p.name}</h4>
              <p className="mb-4">{p.price}</p>
              <button className="bg-burnt text-white px-4 py-1 rounded">Buy</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
