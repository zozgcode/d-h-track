import { Package } from "@/utils/types";

export const mockPackages: Package[] = [
  {
    package_id: 'PKG001',
    sender: {
      name: 'John Doe',
      address: '123 Main St, Springfield, IL, 62701',
      contact_number: '555-1234',
      email: 'sender@example.com',
    },
    recipient: {
      name: 'Jane Smith',
      address: '456 Elm St, Shelbyville, IL, 62565',
      contact_number: '555-5678',
      email: 'recipient@example.com',
    },
    tracking_number: 'DFCE0085E33',
    package_details: {
      weight_kg: 2.5,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15,
      },
      courier: 'Fedex',
      packages: 'Books',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Springfield, IL',
      destination: 'Shelbyville, IL',
      comment: 'Handle with care',
      mode: 'Road',
      value_usd: 50.0,
    },
    package_received_date: '2024-05-23',
    package_received_time: '06:09:00',
    in_transit_date: '2024-05-23',
    in_transit_time: '06:10:00',
    out_for_delivery_date: '2024-05-23',
    out_for_delivery_time: '06:11:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2024-05-23',
    estimated_delivery_time: '06:13:00',
  },
];
