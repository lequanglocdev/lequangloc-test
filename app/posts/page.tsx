import Image from "next/image";
import React from "react";
import PostCardList from "./posCardList/PostCardList";
import { CiSearch } from "react-icons/ci";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "../shared/components/ui/button";
import CategoryList from "./category/CategoryList";
import { Banner } from "../shared/components/baner";

export default function Posts() {
  return (
    <div className="w-full">
      <Banner/>
      <div className="flex  justify-center items-start gap-4 p-7">
        <div className="basis-7/10 p-4">
          <h3 className="text-2xl font-bold mb-4">Tất cả bài viết</h3>
          <Image
            src="/images/banerPost.png"
            alt="banerPost"
            width={1024}
            height={318}
            objectFit="center"
          />
          <div className="w-full flex justify-center items-center gap-[32px]">
            <PostCardList />
          </div>
        </div>
        <div className="basis-3/10 p-4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Tìm kiếm bài viết" />
            <Button variant={"destructive"} size={"lg"}>
              <CiSearch color="white" />
            </Button>
          </div>
          <CategoryList />
          <Image
            src="/images/category2.png"
            alt="category2"
            width={366}
            height={650}
            objectFit="center"
            className="my-4"
          />
          <Image
            src="/images/category1.png"
            alt="category1"
            width={366}
            height={650}
            objectFit="center"
          />
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
