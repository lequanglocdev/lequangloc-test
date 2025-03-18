import { PostDetail } from "./components/postDetail/PostDetail";

interface PostDetailPageProps {
  params: {
    slug: string;
  };
}

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { slug } = await params;

  return <PostDetail slug={slug} />;
};

export default PostDetailPage;
