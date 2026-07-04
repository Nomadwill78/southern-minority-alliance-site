import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero container">
      <div>
        <h1>Building Economic Power in the South</h1>
        <p>
          Access capital, workforce training, and pathways to long-term economic mobility.
        </p>
        <a href="/learners" className="primary">Apply Now</a>
      </div>
      <Image
        src="/hero.png"
        alt="Community impact"
        width={600}
        height={400}
        style={{ width: '45%', borderRadius: '8px', height: 'auto' }}
      />
    </section>
  );
}
