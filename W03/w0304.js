for (let i = 0; i < 5; ++i) {
  let variable = "variable-" + i;
  console.log(variable);
  setTimeout(function () {
    console.log(i + " " + variable);
  }, 100);
}
