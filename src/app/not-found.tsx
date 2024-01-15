import Link from 'next/link';
import { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div>
      <div> 404 존재하지 않는 페이지</div>
      <Link href={'/search'}>검색</Link>
    </div>
  );
};

export default NotFound;
