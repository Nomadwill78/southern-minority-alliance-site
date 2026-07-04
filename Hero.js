export default function Hero() {
  return (
    <section className="hero container">
      <div>
        <h1>Building Economic Power in the South</h1>
        <p>
          Access capital, workforce training, and pathways to long-term economic mobility.
        </p>
        <button className="primary">Apply Now</button>
      </div>

      <img
        src="/assets/hero.png"
        alt="Community impact"
        style={{ width: "45%", borderRadius: "8px" }}
      />
    </section>
  );
}
