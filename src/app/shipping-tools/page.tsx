import Banner from "@/components/shippingTools/Banner";
import NewFedEx from "@/components/shippingTools/NewFedEx";
import TakeControl from "@/components/shippingTools/TakeControl";

export default function ShippingToolsPage() {
  return (
    <div className="pt-[85px]">
      <Banner />
      <div className="custom_container">
        <NewFedEx />
        <TakeControl />
      </div>
    </div>
  );
}
