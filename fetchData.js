var data = "https://fakestoreapi.com/products";
async function GetData(data) {
  const getdata = await fetch(data);
  const jsondata = await getdata.json();
  return jsondata;
}
GetData(data).then((xx) => {
  const jss = xx;
  for (let index = 0; index < 20; index++) {
    const element = jss[index];
    console.log(element);
    document.getElementsByClassName("p-name")[index].innerHTML = element.title;
    document.getElementsByClassName("img-fluid mb-3")[index].src =
      element.image;
    document.getElementsByClassName("p-price")[index].innerHTML =
      "₹" + element.price;
  }
});
