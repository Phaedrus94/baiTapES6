const tinhDTB = (...args) => {
  let dtb = 0;
  args.map((diem) => {
    dtb += diem / args.length;
  });
  return dtb;
};

document.getElementById("btnKhoi1").onclick = () => {
  let toan = parseFloat(document.getElementById("inpToan").value);
  let ly = parseFloat(document.getElementById("inpLy").value);
  let hoa = parseFloat(document.getElementById("inpHoa").value);
  let dtb1 = tinhDTB(toan, ly, hoa);

  document.getElementById("tbKhoi1").innerHTML = dtb1.toFixed(2);
};

document.getElementById("btnKhoi2").onclick = () => {
  let van = parseFloat(document.getElementById("inpVan").value);
  let su = parseFloat(document.getElementById("inpSu").value);
  let dia = parseFloat(document.getElementById("inpDia").value);
  let anh = parseFloat(document.getElementById("inpEnglish").value);

  let dtb2 = tinhDTB(van, su, dia, anh);

  document.getElementById("tbKhoi2").innerHTML = dtb2.toFixed(2);
};
