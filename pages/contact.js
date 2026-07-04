import Navbar from '../components/Navbar';
import JotformEmbed from '../components/JotformEmbed';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="section container">
        <h1>Contact Us</h1>
        <p>Reach out to the Southern Minority Alliance team.</p>
        <JotformEmbed src="https://form.jotform.com/251785732684167" />
      </section>
    </>
  );
}
