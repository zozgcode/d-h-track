import Banner from "@/components/packaging/Banner";
import FirstSection from "@/components/packaging/FirstSection";
import PackGeneral from "@/components/packaging/PackGeneral";


export default function PackagingPage() {
  return (
    <div className="pt-[85px]">
      <Banner />
      <div className="custom_container">
        <FirstSection />
        <PackGeneral />
      </div>
    </div>
  );
}
