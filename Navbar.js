export default function Navbar() {
  return (
    <nav style={{display:'flex',justifyContent:'space-between',padding:'20px',background:'#0a1f44',color:'#fff'}}>
      <h2>SMA</h2>
      <div>
        <a href="/" style={{marginRight:10,color:'#fff'}}>Home</a>
        <a href="/businesses" style={{marginRight:10,color:'#fff'}}>Businesses</a>
        <a href="/learners" style={{marginRight:10,color:'#fff'}}>Learners</a>
        <a href="/impact" style={{marginRight:10,color:'#fff'}}>Impact</a>
        <a href="/contact" style={{color:'#fff'}}>Contact</a>
      </div>
    </nav>
  );
}