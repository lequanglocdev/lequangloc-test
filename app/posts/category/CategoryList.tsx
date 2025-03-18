export default function CategoryList() {
  const categories = [
    { name: "Tất cả", count: 108 },
    { name: "Thiết Kế Website", count: 36 },
    { name: "Thiết Kế App Mobile", count: 13 },
    { name: "Quản Lý Sản Xuất", count: 25 },
    { name: "Quản Lý Bán Hàng", count: 22 },
    { name: "Báo Chí Nói Về FOSO", count: 7 },
    { name: "Tin Tức FOSO", count: 5 },
  ];

  return (
    <div className="p-4 w-full">
      <h3 className="font-bold text-lg mb-2">Danh Mục</h3>
      <hr className="border-t border-dotted border-gray-400 mb-2" />
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex justify-between text-gray-700 text-md hover:text-green-400 cursor-pointer"
          >
            <span>{category.name}</span>
            <span className="text-gray-500">{category.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
