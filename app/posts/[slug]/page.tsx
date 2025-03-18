import { PostDetail } from "./components/postDetail/PostDetail";

type PostDetailProps = {
  params: {
    slug: string;
  };
};

const PostDetailPage = ({ params }: PostDetailProps) => {
  const { slug } = params;

  return <PostDetail params={params} />;
};

export default PostDetailPage;
