import simpati from "./assets/img/simpati.png";
import xl from "./assets/img/xl.png";

export const homeProps = [
  {
    name: "Pulsa",
    id: 1,
  },
  {
    name: "Paket",
    id: 2,
  },
  {
    name: "PDAM",
    id: 3,
  },
  {
    name: "Listrik",
    id: 4,
  },
];

export const mockHomeNew = [
  {
    name: "Pulsa 50.000",
    src: simpati,
    alt: "simpati",
    id: 1,
  },
  {
    name: "Paket 5GB",
    src: xl,
    alt: "xl",
    id: 2,
  },
];

export const mockCheckoutOption = [
  {
    text: "Option 1",
    val: 1,
  },
  {
    text: "Option 2",
    val: 2,
  },
];

export const historyProps = [
  {
    id: 1,
    name: "Pulsa 10.000",
    price: "Rp12.500",
    status: "Success",
    created_at: "2021-08-29",
    category: "Pulsa",
  },
  {
    id: 2,
    name: "Paket 10GB",
    price: "Rp25.500",
    status: "Pending",
    created_at: "2021-08-29",
    category: "Paket",
  },
];
