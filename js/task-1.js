//ul#categories içindeki kategorilerin sayısını ve yani li.item öğelerinin sayısını hesaplar ve konsola yazdırır.
const categoriesList = document.querySelectorAll("li.item");

console.log(`Number of Categories: ${categoriesList.length}`);

//ul#categories listesindeki her li.item öğesi için, öğenin başlığının metnini ( <h2> etiketi) ve kategorideki öğe sayısını (içinde bulunan tüm <li> öğeleri) bulur ve konsola yazdırır.

categoriesList.forEach((item) => {
  const title = item.querySelector("h2").textContent; //h2'leri yazdırdık

  const elementsCount = item.querySelectorAll("ul li").length; //her item içindeki ul altındaki li öğelerinin sayısını bulduk

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
