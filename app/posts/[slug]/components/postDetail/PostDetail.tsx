"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/shared/components/ui/breadcrumb";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { ChevronUp, ChevronDown } from "lucide-react";
interface PostDetailProps {
  slug: string;
}
import { FaQuoteLeft } from "react-icons/fa";
import PostCard from "@/app/posts/posCardList/postCard/PostCard";

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
    slug: "#",
  },
  {
    image: "/images/post.png",
    category: "Chuỗi Cung Ứng",
    title: "Tối ưu chuỗi cung ứng bằng công nghệ AI",
    date: "20/11/2022",
    readTime: "8 phút",
    slug: "#",
  },
  {
    image: "/images/post.png",
    category: "Chuỗi Cung Ứng",
    title: "Tối ưu chuỗi cung ứng bằng công nghệ AI",
    date: "20/11/2022",
    readTime: "8 phút",
    slug: "#",
  },
];
export const PostDetail: React.FC<PostDetailProps> = ({ slug }) => {
  const [isOpen, setIsOpen] = useState(true);
 console.log("Slug:", slug); 
  return (
    <div className="w-full">
      <div className="flex  justify-start items-start mt-4">
        <div className="flex-2 flex justify-center items-center flex-col gap-[10px]  ">
          <div className="w-[48px] h-[48px] border border-[#1AD598] ml-8 rounded-xl flex justify-center items-center ">
            <Image
              src="/images/social_Icon3.png"
              alt="iconLanguage"
              width={21.95}
              height={21.95}
              objectFit="center"
            ></Image>
          </div>
          <div className="w-[48px] h-[48px] border border-[#1AD598] ml-8 rounded-xl flex justify-center items-center  ">
            <Image
              src="/images/facebook.png"
              alt="iconLanguage"
              width={21.95}
              height={21.95}
              objectFit="center"
            ></Image>
          </div>
          <div className="w-[48px] h-[48px] border border-[#1AD598] ml-8 rounded-xl flex justify-center items-center ">
            <Image
              src="/images/social_Icons.png"
              alt="iconLanguage"
              width={21.95}
              height={21.95}
              objectFit="center"
            ></Image>
          </div>
          <div className="w-[48px] h-[48px] border border-[#1AD598] ml-8 rounded-xl flex justify-center items-center ">
            <Image
              src="/images/social_Icons1.png"
              alt="iconLanguage"
              width={21.95}
              height={21.95}
              objectFit="center"
            ></Image>
          </div>
          <div className="w-[48px] h-[48px] border border-[#1AD598] ml-8 rounded-xl flex justify-center items-center ">
            <Image
              src="/images/social_Icons2.png"
              alt="iconLanguage"
              width={21.95}
              height={21.95}
              objectFit="center"
            ></Image>
          </div>
        </div>
        <div className="flex-6 flex items-start flex-col">
          <div className="w-full h-[85px] 	">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Trang chủ</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Tài nguyên</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Quản lý sản xuất</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-start flex-col">
            <span className="text-lg w-[160px] py-2 text-center rounded-xl bg-[#E2F0FE] my-4 text-blue-500 ">
              <p className="text-xs">Quản lý sản xuất</p>
            </span>
            <h3 className="text-4xl font-bold">
              Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
            </h3>
            <div className="w-full mt-4 flex justify-between items-center mb-4  ">
              <div className="flex justify-center items-center gap-3">
                <Image
                  src="/images/avartar.png"
                  alt="avartar"
                  width={33.69}
                  height={32}
                  objectFit="center"
                />
                <div>
                  <h5 className="text-sm">Tác giả</h5>
                  <h5 className="text-base font-bold">FOSO Creator</h5>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center">
                  <FaRegCalendarAlt size={20} />
                  <p>Cập nhật vào: 17/11/2022</p>
                </div>
                <div className="flex justify-center items-center ">
                  <CiClock2 size={20} />
                  <p>Cập nhật vào: 17/11/2022</p>
                </div>
              </div>
            </div>
            <Image
              src="/images/content.png"
              alt="avartar"
              width={900}
              height={600}
              objectFit="center"
            />
            <span className="text-[#667F93] text-center w-full py-2">
              Quy trình 5s là gì?
            </span>

            <div className="flex justify-between gap-3">
              <FaQuoteLeft size={60} width={40} className="text-[#1AD598]" />
              <span className="italic text-gray-700 text-center">
                Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì?
                Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời
                cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo
                nên thành công của quy trình bạn nhé.
              </span>
            </div>
            <div className="p-6 rounded-lg max-w-3xl mx-auto text-gray-800">
              <h2 className="text-lg font-bold text-[#15AA7A]">
                <p className="text-[#15AA7A] underline">
                  1.Quy trình 5S là gì?
                </p>
              </h2>
              <p className="mt-2">
                Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong
                sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào
                Nhật Bản.
              </p>
              <p className="mt-2">
                Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận
                dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5
                chữ S, đầu trong tiếng Nhật:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>
                  <p className="text-green-600 underline hover:text-[#15AA7A]">
                    Seiri <span className="text-black">(Ngăn nắp)</span>
                  </p>
                </li>
                <li>
                  <p className="text-green-600 underline hover:text-[#15AA7A]">
                    Seiso <span className="text-black">(Sạch sẽ)</span>
                  </p>
                </li>
                <li>
                  <p className="text-green-600 underline hover:text-[#15AA7A]">
                    Seiton <span className="text-black">(Trật tự)</span>
                  </p>
                </li>
                <li>
                  <p className="text-green-600 underline hover:text-[#15AA7A]">
                    Shitsuke <span className="text-black">(Kỷ luật)</span>
                  </p>
                </li>
                <li>
                  <p className="text-green-600 underline hover:text-[#15AA7A]">
                    Seiketsu
                    <span className="text-black">(Tiêu chuẩn hóa)</span>
                  </p>
                </li>
              </ul>

              <h2 className="text-lg font-bold text-[#15AA7A] mt-6">
                <p className="text-[#15AA7A] underline ">
                  2.Lợi ích quy trình 5S đem lại
                </p>
              </h2>
              <p className="mt-2">
                Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho
                mỗi bước của quy trình với mục đích cải tiến môi trường làm việc
                của doanh nghiệp.
              </p>
              <p className="mt-2">
                Khi doanh nghiệp áp dụng quy trình vào tổ chức, doanh nghiệp sẽ
                tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi
                làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được
                đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.
              </p>
            </div>
            <Image
              src="/images/content2.png"
              alt="avartar"
              width={900}
              height={600}
              objectFit="center"
            />

            <div className="p-6 rounded-lg max-w-3xl mx-auto text-gray-800">
              <h2 className="text-lg font-bold text-[#15AA7A]">
                3.Tại sao doanh nghiệp nên áp dụng quy trình 5S?
              </h2>
              <p className="mt-2">
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>
              <h4 className="text-lg font-bold text-[#15AA7A]">
                3.1 Cải thiện rõ nét môi trường làm việc
              </h4>
              <p className="mt-2">
                Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn
                gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm
                việc hiệu quả cho từng cá nhân trong doanh nghiệp.
              </p>
              <h4 className="text-lg font-bold text-[#15AA7A]">
                3.2 Tiết kiệm thời gian đáng kể
              </h4>
              <p className="mt-2">
                Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được
                thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ
                dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ
                đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.
              </p>

              <h4 className="text-lg font-bold text-[#15AA7A]">
                3.3 Tăng năng suất làm việc
              </h4>
              <p className="mt-2">
                Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết,
                tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm
                và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm
                thời gian và tăng năng suất làm việc.
              </p>

              <h4 className="text-lg font-bold text-[#15AA7A]">
                3.4 Tiết kiệm chi phí
              </h4>
              <p className="mt-2">
                Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và
                sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu
                chi phí vận hành đáng kể cho doanh nghiệp của mình.
              </p>
              <h4 className="text-lg font-bold text-[#15AA7A]">
                3.5 Tăng chất lượng sản phẩm
              </h4>
              <p className="mt-2">
                5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ
                đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản
                xuất không mong muốn.
              </p>
            </div>
            <Image
              src="/images/content3.png"
              alt="avartar"
              width={900}
              height={600}
              objectFit="center"
            />
            <div className="p-6 rounded-lg max-w-3xl mx-auto text-gray-800">
              <h2 className="text-lg font-bold text-[#15AA7A]">
                4.Quy trình 5S gồm các bước
              </h2>
              <p className="mt-2">
                5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường
                hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao
                gồm năm bước cơ bản sau:
              </p>
              <h4 className="text-lg font-bold text-[#15AA7A]">
                4.1 Seiri (Ngăn nắp)
              </h4>
              <p className="mt-2">
                Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp,
                nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để
                tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm
                thời gian.
              </p>
              <h4 className="text-lg font-bold text-[#15AA7A]">
                4.2 Seiton (Sắp xếp)
              </h4>
              <p className="mt-2">
                Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết
                bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm
                kiếm và sử dụng chúng một cách dễ dàng.
              </p>

              <h4 className="text-lg font-bold text-[#15AA7A]">
                4.3 Seiso (Vệ sinh)
              </h4>
              <p className="mt-2">
                Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân
                trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ.
                Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây
                nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
              </p>

              <h4 className="text-lg font-bold text-[#15AA7A]">
                4.4 Seiketsu (Tiêu chuẩn hóa)
              </h4>
              <p className="mt-2">
                Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước
                này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách
                thức sử dụng các dụng cụ, thiết bị, tài liệu.
              </p>
              <h4 className="text-lg font-bold text-[#15AA7A]">
                4.5 Shitsuke (Kỷ luật)
              </h4>
              <p className="mt-2">
                Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng
                vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S
                trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật
                và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì
                và tuân thủ theo quy trình.
              </p>
            </div>

            <Image
              src="/images/content4.png"
              alt="avartar"
              width={900}
              height={600}
              objectFit="center"
            />
            <div className="p-6 rounded-lg max-w-3xl mx-auto text-gray-800">
              <h2 className="text-lg font-bold text-[#15AA7A]">
                5. Quy trình được thực hiện như sau:
              </h2>
              <p className="mt-2">
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>
              <h4 className="text-lg font-bold text-[#15AA7A]">
                5.1 Giai đoạn chuẩn bị
              </h4>
              <p className="mt-2">
                Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng
                ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc
                phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ
                hiệu quả hơn.
              </p>
              <h4 className="text-lg font-bold text-[#15AA7A]">
                5.2 Triển khai rộng rãi
              </h4>
              <p className="mt-2">
                Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy
                trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến
                thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.
              </p>

              <h4 className="text-lg font-bold text-[#15AA7A]">
                5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
              </h4>
              <p className="mt-2">
                Đây là bước có thể khiến mọi người không hào hứng trong các bước
                của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo
                không khí hào hứng cho từng cá nhân.
              </p>

              <h4 className="text-lg font-bold text-[#15AA7A]">
                5.4 Sàng lọc, sắp xếp và đánh giá
              </h4>
              <p className="mt-2">
                Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ
                doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc
                thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn
                và dễ dàng tìm kiếm sau này.
              </p>
              <h4 className="text-lg font-bold text-[#15AA7A]">5.5 Đánh giá</h4>
              <p className="mt-2">
                Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá
                trình cải tiến và xem xét cần cải tiến phương diện nào hay không
                trong quá trình thực hiện quy trình 5S.
              </p>
            </div>
            <div className="max-w-3xl mx-auto text-gray-800">
              <h2 className="text-lg font-bold text-[#15AA7A]">
                6. Quy trình 5S có giống với Kaizen?
              </h2>
              <p className="mt-2">
                Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
                không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng
                giữa chúng có mối quan hệ chặt chẽ với nhau.
              </p>

              <div className="mt-4 border-l-4 border-green-500 pl-4 italic text-gray-700">
                <p>
                  Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục
                  trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi
                  tích cực, mang tính liên tục và bền vững.
                </p>
              </div>

              <div className="mt-4 border-l-4 border-green-500 pl-4 italic text-gray-700">
                <p>
                  Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải
                  tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ,
                  sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
                </p>
              </div>
              <p className="mt-4">
                Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy
                tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm
                việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước
                đầu tiên trong quá trình cải tiến liên tục của phương pháp
                Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải
                tiến tiếp theo.
              </p>
            </div>
            <div className="max-w-3xl mx-auto text-gray-800">
              <h2 className="text-lg font-bold text-[#15AA7A]">
                7. Đối tượng nào nên áp dụng 5S?
              </h2>
              <p className="mt-2">
                Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng
                rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác
                nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản
                xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các
                doanh nghiệp nhỏ.
              </p>
              <p className="mt-2">
                Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức
                tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng
                hiệu quả.
              </p>
            </div>
            <Image
              src="/images/content5.png"
              alt="avartar"
              width={900}
              height={600}
              objectFit="center"
            />
          </div>
          <div className="max-w-3xl mx-auto text-gray-800">
            <h2 className="text-lg font-bold text-[#15AA7A]">
              8. Các yếu tố tạo nên thành công cho quy trình 5S
            </h2>
            <p className="mt-2">
              Và những nhân tố quyết định đến quá trình thành công của quy trình
              nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
            </p>

            <ul className="mt-4 space-y-3">
              <li className="flex">
                <span className="font-bold text-green-700">•</span>
                <p className="ml-2">
                  <span className="font-semibold">Lãnh đạo cởi mở</span> và ủng
                  hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan
                  trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này
                  hay không.
                </p>
              </li>

              <li className="flex">
                <span className="font-bold text-green-700">•</span>
                <p className="ml-2">
                  <span className="font-semibold">
                    Chương trình, kế hoạch thực hiện quy trình:
                  </span>{" "}
                  Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên
                  ý tưởng, kế hoạch thực hiện triển khai 5S.
                </p>
              </li>

              <li className="flex">
                <span className="font-bold text-green-700">•</span>
                <p className="ml-2">
                  <span className="font-semibold">
                    Sự tự nguyện tham gia của toàn thể nhân viên:
                  </span>{" "}
                  Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện
                  thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.
                </p>
              </li>
            </ul>
            <p className="mt-4">
              Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng
              là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay
              vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với
              những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được
              doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương
              lai.
            </p>
          </div>
          <div className="w-full mt-4 flex justify-center items-center flex-col">
            <h4 className="text-[20px] font-bold ">
              Bạn thấy bài viết như thế nào?
            </h4>
            <span className="py-2">4 phản hồi</span>
            <div className="flex justify-center items-center gap-10 ">
              <div className="flex justify-center items-center flex-col cursor-pointer ">
                <Image
                  src="/images/imotion5.png"
                  alt="avartar"
                  width={48}
                  height={48}
                  objectFit="center"
                />
                <span>1</span>
                <span>Hữu ích</span>
              </div>
              <div className="flex justify-center items-center flex-col cursor-pointer">
                <Image
                  src="/images/imotion6.png"
                  alt="avartar"
                  width={48}
                  height={48}
                  objectFit="center"
                />
                <span>2</span>
                <span>Yêu thích</span>
              </div>
              <div className="flex justify-center items-center flex-col cursor-pointer">
                <Image
                  src="/images/imotion.png"
                  alt="avartar"
                  width={48}
                  height={48}
                  objectFit="center"
                />
                <span>0</span>
                <span>Thú vị</span>
              </div>

              <div className="flex justify-center items-center flex-col cursor-pointer">
                <Image
                  src="/images/imotion2.png"
                  alt="avartar"
                  width={48}
                  height={48}
                  objectFit="center"
                />
                <span>1</span>
                <span>Bất ngờ</span>
              </div>
              <div className="flex justify-center items-center flex-col cursor-pointer">
                <Image
                  src="/images/imotion3.png"
                  alt="avartar"
                  width={48}
                  height={48}
                  objectFit="center"
                />
                <span>0</span>
                <span>Nhàm chán</span>
              </div>
              <div className="flex justify-center items-center flex-col cursor-pointer">
                <Image
                  src="/images/imotion4.png"
                  alt="avartar"
                  width={48}
                  height={48}
                  objectFit="center"
                />
                <span>0</span>
                <span>Tức giận</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-4 ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg p-4 shadow-md">
            {/* Tiêu đề */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h3 className="text-lg font-bold text-gray-900">
                Nội Dung Bài Viết
              </h3>
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {/* Nội dung mục lục */}
            {isOpen && (
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>
                  <a
                    href="#section-1"
                    className="text-green-700 font-semibold hover:underline"
                  >
                    1. Quy trình 5S là gì?
                  </a>
                </li>
                <li>
                  <a href="#section-2" className="hover:underline">
                    2. Lợi ích quy trình 5S đem lại
                  </a>
                </li>
                <li>
                  <a href="#section-3" className="hover:underline">
                    3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
                  </a>
                  <ul className="ml-4 space-y-1 text-sm text-gray-600">
                    <li>
                      <a href="#section-3-1" className="hover:underline">
                        3.1 Cải thiện rõ nét môi trường làm việc
                      </a>
                    </li>
                    <li>
                      <a href="#section-3-2" className="hover:underline">
                        3.2 Tiết kiệm thời gian đáng kể
                      </a>
                    </li>
                    <li>
                      <a href="#section-3-3" className="hover:underline">
                        3.3 Tăng năng suất làm việc
                      </a>
                    </li>
                    <li>
                      <a href="#section-3-4" className="hover:underline">
                        3.4 Tiết kiệm chi phí
                      </a>
                    </li>
                    <li>
                      <a href="#section-3-5" className="hover:underline">
                        3.5 Tăng chất lượng sản phẩm
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#section-4" className="hover:underline">
                    4. Quy trình 5S gồm các bước:
                  </a>
                  <ul className="ml-4 space-y-1 text-sm text-gray-600">
                    <li>
                      <a href="#section-4-1" className="hover:underline">
                        4.1 Seiri (Ngăn nắp)
                      </a>
                    </li>
                    <li>
                      <a href="#section-4-2" className="hover:underline">
                        4.2 Seiton (Sắp xếp)
                      </a>
                    </li>
                    <li>
                      <a href="#section-4-3" className="hover:underline">
                        4.3 Seiso (Vệ sinh)
                      </a>
                    </li>
                    <li>
                      <a href="#section-4-4" className="hover:underline">
                        4.4 Seiketsu (Tiêu chuẩn hóa)
                      </a>
                    </li>
                    <li>
                      <a href="#section-4-5" className="hover:underline">
                        4.5 Shitsuke (Kỷ luật)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#section-5" className="hover:underline">
                    5. Quy trình được thực hiện như sau:
                  </a>
                  <ul className="ml-4 space-y-1 text-sm text-gray-600">
                    <li>
                      <a href="#section-5-1" className="hover:underline">
                        5.1 Giai đoạn chuẩn bị
                      </a>
                    </li>
                    <li>
                      <a href="#section-5-2" className="hover:underline">
                        5.2 Triển khai rộng rãi
                      </a>
                    </li>
                    <li>
                      <a href="#section-5-3" className="hover:underline">
                        5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
                      </a>
                    </li>
                    <li>
                      <a href="#section-5-4" className="hover:underline">
                        5.4 Sàng lọc, sắp xếp và đánh giá
                      </a>
                    </li>
                    <li>
                      <a href="#section-5-5" className="hover:underline">
                        5.5 Đánh giá
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#section-6" className="hover:underline">
                    6. Quy trình 5S có giống với Kaizen?
                  </a>
                </li>
                <li>
                  <a href="#section-7" className="hover:underline">
                    7. Đối tượng nào nên áp dụng 5S?
                  </a>
                </li>
                <li>
                  <a href="#section-8" className="hover:underline">
                    8. Các yếu tố tạo nên thành công cho quy trình 5S
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="ml-4">
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
      </div>

      <h4 className="text-[20px] font-bold mt-4 ml-[240px]">
        Bài viết liên quan
      </h4>
      <div className=" flex justify-center items-center gap-8 flex-wrap">
        {cardData.map((item) => (
          <PostCard key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
};
