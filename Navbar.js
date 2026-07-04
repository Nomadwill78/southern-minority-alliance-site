export default function Navbar() {
  return (
    <nav className="nav">
      <strong>SMA</strong>
      <div>
        <a href="/businesses">Businesses</a>
        <a href="/learners">Learners</a>
        <a href="/impact">Impact</a>
        <a href="/contact">Contact</a>
      </div>
      <a href="/learners" className="primary">Apply</a>
    </nav>
  );
}
