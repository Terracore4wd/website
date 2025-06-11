export default function Contact() {
  return (
    <div className="bg-matte text-ash min-h-full p-6 bg-topography">
      <h2 className="text-3xl font-bold mb-4 text-burnt">Contact Us</h2>
      <form className="max-w-md space-y-4 mb-8">
        <input className="w-full p-2 rounded bg-matte border border-ash" placeholder="Name" />
        <input className="w-full p-2 rounded bg-matte border border-ash" placeholder="Email" type="email" />
        <textarea className="w-full p-2 rounded bg-matte border border-ash" rows="4" placeholder="Message"></textarea>
        <button type="submit" className="bg-burnt text-white px-4 py-2 rounded">Send</button>
      </form>
      <div className="aspect-video w-full max-w-3xl">
        <iframe
          title="map"
          className="w-full h-full border-0"
          src="https://maps.google.com/maps?q=New%20Zealand&t=&z=5&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
