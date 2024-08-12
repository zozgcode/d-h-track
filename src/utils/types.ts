// src/utils/types.ts
export interface Package {
  package_id: string;
  sender: {
    name: string;
    address: string;
    contact_number: string;
    email: string;
  };
  recipient: {
    name: string;
    address: string;
    contact_number: string;
    email: string;
  };
  tracking_number: string;
  package_details: {
    weight_kg: number;
    dimensions_cm: {
      length: number;
      width: number;
      height: number;
    };
    courier: string;
    packages: string;
    mode: string;
    typeOfShipment?: string;
    quantity: string;
    paymentMode: string;
    origin: string;
    destination: string;
    comment: string;
    value_usd: number;
  };
  package_received_date: string;
  package_received_time: string;
  in_transit_date: string;
  in_transit_time: string;
  out_for_delivery_date: string;
  out_for_delivery_time: string;
  on_hold_date?: string;
  on_hold_time?: string;
  estimated_delivery_date: string;
  estimated_delivery_time: string;
  pickup_date?: string;
  pickup_time?: string;
}
