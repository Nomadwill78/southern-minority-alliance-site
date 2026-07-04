export default function JotformEmbed({ src }) {
  return (
    <iframe
      src={src}
      width="100%"
      height="600"
      style={{ border: 'none' }}
      title="Application Form"
    />
  );
}
