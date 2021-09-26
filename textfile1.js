function openTextFile(){
  alert('현재는 사용불가');
  // var input = document.createElement("input");
  // input.type = "file";
  // // document.write("Test");
  // input.accept ="text/plain";
  // input.onchange = function (event) {
  //   processFile(event.target.files[0]);
  // };
  // input.click();
}

function processFile(file) {
  var reader = new FileReader();
  reader.onload = function () {
    output.innerText = reader.result;
  };
  reader.readAsText(file,"euc-kr");
}
