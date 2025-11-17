import data from "../data/products.json" assert { type: "json" };

export default function handler(req, res) {
  res.status(200).json(data.products);
}
