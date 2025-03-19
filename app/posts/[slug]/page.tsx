import { PostDetail } from "./components/postDetail/PostDetail";

interface PageProps {
  params: { slug: string };
}

export default function PostDetailPage({ params }: PageProps) {
  const { slug } = params as { slug: string };

  if (!slug) {
    return <div>Không tìm thấy bài viết</div>;
  }

  return <PostDetail slug={slug} />;
}

