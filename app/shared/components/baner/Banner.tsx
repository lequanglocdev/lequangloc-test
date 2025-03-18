import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="w-full h-[392px] bg-white-400 flex justify-center items-center flex-col ">
      <div className="w-full h-[85px] flex justify-center items-center	">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Tài nguyên</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-between items-center ">
        <Image
          src="/images/baner1.png"
          alt="banner"
          width={282}
          height={268}
          className="object-cover"
        />
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[64px] font-[400] text-[#050505]">
            Blog <span className="text-[#53B086] font-bold">FOSO</span> –
          </h1>
          <h1 className="text-[64px] font-[400] text-[#050505] leading-tight">
            Cập Nhật Tin Tức{" "}
            <span className="font-bold relative inline-block">
              <span className="absolute left-0 bottom-0 w-full h-[40%] bg-[#A7F2DD] rounded-lg"></span>
              <span className="relative">Mới Nhất</span>
            </span>
          </h1>
          <p className="text-lg text-[#33404A]">
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </p>
        </div>
        <Image
          src="/images/baner2.png"
          alt="banner"
          width={282}
          height={268}
          className="object-cover"
        />
      </div>
    </div>
  );
};
