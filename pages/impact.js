import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Impact() {
  return (
    <>
      <Navbar />
      <section className="section container">
        <h1>Our Impact</h1>
        <ul>
          <li>$10M+ Capital Deployed</li>
          <li>1,000+ Jobs Created</li>
          <li>500+ Businesses Supported</li>
          <li>200+ Learners Trained</li>
        </ul>
        <Image
          src="/impact.png"
          alt="Community impact"
          width={800}
          height={500}
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '2rem' }}
        />
      </section>
    </>
  );
}
