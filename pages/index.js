import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="section container">
        <h2>What We Do</h2>
        <p>We support entrepreneurs and learners with access to capital, training, and opportunity.</p>
      </section>
    </>
  );
}
