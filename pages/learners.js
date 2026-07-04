import Navbar from '../components/Navbar';
import JotformEmbed from '../components/JotformEmbed';

export default function Learners() {
  return (
    <>
      <Navbar />
      <section className="section container">
        <h1>For Learners</h1>
        <p>Access workforce training, scholarships, and career pathways.</p>
        <JotformEmbed src="https://form.jotform.com/251785732684167" />
      </section>
    </>
  );
}
