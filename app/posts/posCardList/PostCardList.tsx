import React from "react";
import PostCard from "./postCard/PostCard";

const cardData = [
  {
    image: "/images/post.png",
    category: "Quản Lý Sản Xuất",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    date: "17/11/2022",
    readTime: "10 phút",
    slug: "tai-sao-bom-quan-trong",
  },
  {
    image: "/images/post.png",
    category: "Chuỗi Cung Ứng",
    title: "Tối ưu chuỗi cung ứng bằng công nghệ AI",
    date: "20/11/2022",
    readTime: "8 phút",
    slug: "tai-sao-bom-quan-trong",
  },
  {
    image: "/images/post.png",
    category: "Chuỗi Cung Ứng",
    title: "Tối ưu chuỗi cung ứng bằng công nghệ AI",
    date: "20/11/2022",
    readTime: "8 phút",
    slug: "tai-sao-bom-quan-trong",
  },
  {
    image: "/images/post.png",
    category: "Chuỗi Cung Ứng",
    title: "Tối ưu chuỗi cung ứng bằng công nghệ AI",
    date: "20/11/2022",
    readTime: "8 phút",
    slug: "tai-sao-bom-quan-trong",
  },
];

const PostCardList: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center flex-wrap">
      {cardData.map((item) => (
        <PostCard key={item.slug} {...item} />
      ))}
    </div>
  );
};

export default PostCardList;
