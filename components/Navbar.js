import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/"><strong>SMA</strong></Link>
      <div>
        <Link href="/businesses">Businesses</Link>
        <Link href="/learners">Learners</Link>
        <Link href="/impact">Impact</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/priority-compass">Community Data</Link>
      </div>
      <Link href="/learners" className="primary">Apply</Link>
    </nav>
  );
}
