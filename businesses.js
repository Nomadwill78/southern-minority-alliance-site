import Navbar from "../components/Navbar";
import JotformEmbed from "../components/JotformEmbed";

export default function Businesses() {
  return (
    <>
      <Navbar />
      <h1>For Businesses</h1>
      <JotformEmbed src="https://form.jotform.com/YOUR_FORM_ID" />
    </>
  );
}