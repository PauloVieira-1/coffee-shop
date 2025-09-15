import CoffeeBag from "../../assets/coffeeBag.png"; // Reuse the same image for now

const AvailableCoffees = {
  "Classic Arabica": {
    name: "Classic Arabica",
    underline: "Smooth, naturally sweet, with notes of chocolate and caramel.",
    price: "Price: To be determined",
    img: CoffeeBag,
    specs: [
      "Flavour: Smooth, naturally sweet, with notes of chocolate and caramel",
      "Handpicked in the heart of Central Uganda, our Arabica beans are slow-roasted to highlight their delicate balance of sweetness and light acidity. Perfect for a refined, easy-drinking cup.",
    ],
  },
  "Bold Robusta": {
    name: "Bold Robusta",
    underline: "Strong, earthy, with nutty undertones and a lingering richness.",
    price: "Price: To be determined",
    img: CoffeeBag,
    specs: [
      "Flavour: Strong, earthy, with nutty undertones and a lingering richness",
      "For those who love a deep, full-bodied coffee, our Robusta beans deliver intensity and higher caffeine content. Grown with care by single-mother farmers, it’s a bold taste with a bold story.",
    ],
  },
  "Pearldutch Signature Blend": {
    name: "Pearldutch Signature Blend",
    underline: "A perfect harmony of chocolate, fruit, and subtle spice.",
    price: "Price: To be determined",
    img: CoffeeBag,
    specs: [
      "Flavour: A perfect harmony of chocolate, fruit, and subtle spice",
      "A house blend of Arabica and Robusta beans, designed to represent the best of both worlds. Smooth yet strong, comforting yet exciting. This is Pearldutch’s flagship coffee.",
    ],
  },
};

export default AvailableCoffees;
