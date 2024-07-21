export default function RatingPage() {
  return (
    <div className="pt-[85px]">
      <div className="custom_container">
        <div className="text-[35px] font-light text-[#333333] text-center mt-[50px] mb-[30px]">
          Calculate FedEx shipping rates
        </div>
        <div className="flex flex-col gap-2 max-w-[600px] mx-auto">
          <input type="text" className="p-5 bg-gray-100" placeholder="From" />
          <input type="text" className="p-5 bg-gray-100" placeholder="To" />
        </div>
      </div>
    </div>
  );
}
