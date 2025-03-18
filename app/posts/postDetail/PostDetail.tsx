// postDetails.ts
export type PostType = {
  title: string;
  image: string;
  content: string;
};

export const postDetails: Record<string, PostType> = {
  "tai-sao-bom-quan-trong": {
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    image: "/images/post.png",
    content:
      "BOM (Bill of Materials) rất quan trọng trong quản lý sản xuất vì...",
  },
  "toi-uu-chuoi-cung-ung-ai": {
    title: "Tối ưu chuỗi cung ứng bằng công nghệ AI",
    image: "/images/post.png",
    content: "Công nghệ AI giúp tối ưu chuỗi cung ứng bằng cách...",
  },
};
