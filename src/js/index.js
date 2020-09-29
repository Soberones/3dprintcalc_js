save.onclick = function () {
  let delivery = Number(document.getElementById("delivery").value);
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
  localStorage.setItem("delivery", delivery);
  localStorage.setItem("spoolWeight", spoolWeight);
  localStorage.setItem("spoolPrice", spoolPrice);
  localStorage.setItem("electricPrice", electricPrice);
  localStorage.setItem("modelingPrice", modelingPrice);
  localStorage.setItem("printingPrice", printingPrice);
  localStorage.setItem("postPrice", postPrice);
  localStorage.setItem("depreciationPrice", depreciationPrice);
  localStorage.setItem("powerPrinter", powerPrinter);
};
load.onclick = function () {
  document.getElementById("delivery").value = localStorage.getItem("delivery");
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
  document.getElementById("postPrice").value = localStorage.getItem(
    "postPrice"
  );
  document.getElementById("depreciationPrice").value = localStorage.getItem(
    "depreciationPrice"
  );
};

calculate.onclick = function () {
  const k = Number(1000);
  let materialSum = (spoolPrice.value + delivery.value) / spoolWeight.value;
  let materialSumValue = materialSum / (k * spentMaterial.value);

  console.log(materialSumValue);
  document.getElementById("testss").innerHTML = materialSumValue;
};
