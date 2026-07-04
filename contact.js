import Navbar from "../components/Navbar";
import JotformEmbed from "../components/JotformEmbed";

export default function Contact() {
  return (
    <>
      <Navbar />
      <h1>Contact</h1>
      <JotformEmbed src="https://form.jotform.com/YOUR_FORM_ID" />
    </>
  );
}