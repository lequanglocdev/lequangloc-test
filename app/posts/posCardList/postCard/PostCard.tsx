import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
interface CardItemProps {
  image: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  slug: string;
}

const PostCard: React.FC<CardItemProps> = ({
  image,
  category,
  title,
  date,
  readTime,
  slug,
}) => {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="mt-10 w-[420px] h-[616px] rounded-3xl p-4 flex justify-center flex-col">
        <Image
          src={image}
          alt={title}
          width={505}
          height={475}
          objectFit="center"
        />
        <span className="text-lg w-[160px] py-2 text-center rounded-3xl bg-[#E2F0FE] my-4 text-blue-500 ">
          {category}
        </span>
        <h3 className="flex-3 text-lg font-bold">{title}</h3>
        <div className="flex flex-3 items-center gap-2 text-gray-600 text-sm">
          <FaRegCalendarAlt size={24} />
          <span className="text-base">{date}</span>
          <CiClock2 size={24} />
          <span className="text-base">{readTime} đọc</span>
        </div>
        <Link
          href={slug}
          className="text-blue-500 text-lg flex gap-4 items-center flex-3 underline mt-4 "
        >
          Khám phá thêm
          <IoIosArrowRoundForward size={24} />
        </Link>
      </div>
    </Link>
  );
};

export default PostCard;
