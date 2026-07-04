import Navbar from '../components/Navbar';
import Card from '../components/Card';
import JotformEmbed from '../components/JotformEmbed';

export default function Businesses() {
  return (
    <>
      <Navbar />

      <section className="section container">
        <h1>For Businesses</h1>
        <p>Accelerate growth with targeted support.</p>

        <div className="card-grid">
          <Card title="Consulting" text="Strategic growth and operations support." />
          <Card title="Capital Access" text="Funding pathways and readiness." />
          <Card title="Scaling Support" text="Expand your business sustainably." />
          <Card title="Technical Assistance" text="Tools, systems, and infrastructure." />
        </div>
      </section>

      <section className="section container">
        <h2>Apply for Support</h2>
        <div className="card">
          <JotformEmbed src="https://form.jotform.com/251785732684167" />
        </div>
      </section>
    </>
  );
}
