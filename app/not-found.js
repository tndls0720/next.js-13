import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="container">
      <h2>404 페이지를 찾을 수 없습니다.</h2>
      <Link className="home" href="/">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
