// fetch("https://dummyjson.com/products", { method: "POST" })
//   .then((rest) => rest.json())
//   .then((data) => console.log(data));

fetch("https://dummyjsons.com/products/add", {
  method: "POST",
  header: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "BMW Pencil",
    category: "Stationery",
  }),
})
  .then((rest) => rest.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
