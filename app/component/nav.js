import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
    return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">magic</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">หน้าหลัก</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/service">บริการของเรา</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/contact">ติดต่อเรา</Link>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-secondary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    <center classname='mt-2'>
        <Link href="/" className='btn btn-dark'> หน้าเเรก</Link> |
        <Link href="/about"className='btn btn-dark'>เกื่ยวกับเรา</Link>  |
        <Link href="/service"className='btn btn-dark'>บริการของเรา</Link>  |
        <Link href="/contact"className='btn btn-dark'> ติดต่อเรา</Link>  |
    </center>
    </>
    );
}    