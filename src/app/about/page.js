import Link from 'next/link'

export default function Home() {
  return (
    <>
    <center><h1>เกื่ยวกับเรา</h1></center>
    <br />
    <center>
      <Link href="/"> หน้าเเรก</Link> |
      <Link href="/about"> เกื่ยวกับเรา</Link>  |
      <Link href="/service"> บริการของเรา</Link>  |
      <Link href="/contact"> ติดต่อเรา</Link>  |
    </center>
    </>
  );
}

