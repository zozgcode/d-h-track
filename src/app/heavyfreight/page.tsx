import Banner from "@/components/heavyFreight/Banner";
import BenefitsOfShipping from "@/components/heavyFreight/BenefitsOfShipping";
import SendingHeavyFreight from "@/components/heavyFreight/SendingHeavyFreight";

export default function HeavyFreightPage() {
  return (
    <div className="pt-[85px]">
      <Banner />
      <div className="custom_container">
       <SendingHeavyFreight />
       <BenefitsOfShipping />
      </div>
    </div>
  );
}
