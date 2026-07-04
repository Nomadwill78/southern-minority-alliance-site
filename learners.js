import Navbar from "../components/Navbar";
import JotformEmbed from "../components/JotformEmbed";

export default function Learners() {
  return (
    <>
      <Navbar />
      <h1>For Learners</h1>
      <JotformEmbed src="https://form.jotform.com/YOUR_FORM_ID" />
    </>
  );
}