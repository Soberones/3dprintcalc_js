if ("serviceWorker" in navigator) {
  // Весь код регистрации у нас асинхронный.
  navigator.serviceWorker
    .register("../sw.js")
    .then(() =>
      navigator.serviceWorker.ready.then((worker) => {
        worker.sync.register("syncdata");
      })
    )
    .catch((err) => console.log(err));
}

window.onload = function () {
  document.getElementById("spoolWeight").value = localStorage.getItem(
    "spoolWeight"
  );
  document.getElementById("spoolPrice").value = localStorage.getItem(
    "spoolPrice"
  );
  document.getElementById("electricPrice").value = localStorage.getItem(
    "electricPrice"
  );
  document.getElementById("modelingPrice").value = localStorage.getItem(
    "modelingPrice"
  );
  document.getElementById("printingPrice").value = localStorage.getItem(
    "printingPrice"
  );
  document.getElementById("powerPrinter").value = localStorage.getItem(
    "powerPrinter"
  );
  document.getElementById("postPrice").value = localStorage.getItem(
    "postPrice"
  );
  document.getElementById("depreciationPrice").value = localStorage.getItem(
    "depreciationPrice"
  );
};

save.onclick = function () {
  // let delivery = Number(document.getElementById("delivery").value);
  let spoolWeight = Number(document.getElementById("spoolWeight").value);
  let spoolPrice = Number(document.getElementById("spoolPrice").value);
  let electricPrice = Number(document.getElementById("electricPrice").value);
  let powerPrinter = Number(document.getElementById("powerPrinter").value);
  let modelingPrice = Number(document.getElementById("modelingPrice").value);
  let printingPrice = Number(document.getElementById("printingPrice").value);
  let postPrice = Number(document.getElementById("postPrice").value);
  let depreciationPrice = Number(
    document.getElementById("depreciationPrice").value
  );

  let spentMaterial = Number(document.getElementById("spentMaterial").value);
  let printTime = Number(document.getElementById("printTime").value);
  let modelingTime = Number(document.getElementById("printTime").value);
  let postTime = Number(document.getElementById("printTime").value);

  // localStorage.setItem("delivery", delivery);
  localStorage.setItem("spoolWeight", spoolWeight);
  localStorage.setItem("spoolPrice", spoolPrice);
  localStorage.setItem("electricPrice", electricPrice);
  localStorage.setItem("modelingPrice", modelingPrice);
  localStorage.setItem("printingPrice", printingPrice);
  localStorage.setItem("postPrice", postPrice);
  localStorage.setItem("depreciationPrice", depreciationPrice);
  localStorage.setItem("powerPrinter", powerPrinter);
};
// load.onclick = function () {
//   // document.getElementById("delivery").value = localStorage.getItem("delivery");
//   document.getElementById("spoolWeight").value = localStorage.getItem(
//     "spoolWeight"
//   );
//   document.getElementById("spoolPrice").value = localStorage.getItem(
//     "spoolPrice"
//   );
//   document.getElementById("electricPrice").value = localStorage.getItem(
//     "electricPrice"
//   );
//   document.getElementById("modelingPrice").value = localStorage.getItem(
//     "modelingPrice"
//   );
//   document.getElementById("printingPrice").value = localStorage.getItem(
//     "printingPrice"
//   );
//   document.getElementById("powerPrinter").value = localStorage.getItem(
//     "powerPrinter"
//   );
//   document.getElementById("postPrice").value = localStorage.getItem(
//     "postPrice"
//   );
//   document.getElementById("depreciationPrice").value = localStorage.getItem(
//     "depreciationPrice"
//   );
// };

calculate.onclick = function () {
  const currency = "руб";
  let materialSum =
    (spoolPrice.value / spoolWeight.value / 1000) * spentMaterial.value;
  let electicSum =
    (electricPrice.value * powerPrinter.value * printTime.value) / 60;
  let modelingSum = (modelingTime.value / 60) * modelingPrice.value;
  let ptintSum = (printTime.value / 60) * printingPrice.value;
  let postSum = (postTime.value / 60) * postPrice.value;
  let depreciationSum = (printTime.value / 60) * depreciationPrice.value;
  let fullSum =
    materialSum +
    electicSum +
    modelingSum +
    ptintSum +
    postSum +
    depreciationSum;
  let fullSumtwo = fullSum - modelingSum;

  console.log(materialSum, "матер");
  console.log(electicSum, "элекст");
  console.log(modelingSum, "модел");
  console.log(ptintSum, "печать");
  console.log(postSum, "пост");
  console.log(depreciationSum, "аморт");
  console.log(fullSum, "цена детали");
  console.log(fullSumtwo, "цена вт детали");
  // document.getElementById("testss").innerHTML = materialSum;
  document.getElementById("mat").innerHTML = materialSum.toFixed(2);
  document.getElementById("ele").innerHTML = electicSum.toFixed(2);
  document.getElementById("mod").innerHTML = modelingSum.toFixed(2);
  document.getElementById("prt").innerHTML = ptintSum.toFixed(2);
  document.getElementById("pos").innerHTML = postSum.toFixed(2);
  document.getElementById("amr").innerHTML = depreciationSum.toFixed(2);
  document.getElementById("pone").innerHTML = fullSum.toFixed(2);
  document.getElementById("pnext").innerHTML = fullSumtwo.toFixed(2);
};

function myFunction() {
  document.location.replace("#popup-article");
}
