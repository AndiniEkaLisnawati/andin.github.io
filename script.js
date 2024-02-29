alert("SELAMAT DATANG DI PERMAINAN SUIT JAWA");
alert(
  "PERATURAN BERMAIN :                                                                      GAJAH VS ORANG = MENANG GAJAH                                                   ORANG VS SEMUT = MENANG ORANG                                           SEMUT VS GAJAH = MENANG SEMUT"
);
let tanya = true;
while (tanya) {
  let playerInput = prompt("PILIH : GAJAH, ORANG, SEMUT!!");
  let player = playerInput.toLowerCase(); // Convert input to lowercase
  let bot = Math.floor(Math.random() * 10);

  if (bot < 3) {
    bot = "gajah";
  } else if (bot > 3 && bot <= 6) {
    bot = "orang";
  } else {
    bot = "semut";
  }

  let hasil;

  if (player == bot) {
    hasil = "KALIAN SERI, SILAHKAN COBA LAGI!";
  } else if (bot == "semut") {
    if (player == "orang") {
      hasil = "YEEYYY KAMU MENANG!!";
    } else if (player == "gajah") {
      hasil = "YAHAHAHA KAMU KALAH";
    } else {
      alert("Salah input!");
    }
  } else if (bot == "gajah") {
    if (player == "orang") {
      hasil = "YAHAHAHA KAMU KALAH";
    } else if (player == "semut") {
      hasil = "YEEYYY KAMU MENANG!!";
    } else {
      alert("Salah input!");
    }
  } else if (bot == "orang") {
    if (player == "gajah") {
      hasil = "YEEYYY KAMU MENANG!!";
    } else if (player == "semut") {
      hasil = "YAHAHAHA KAMU KALAH";
    } else {
      alert("KAMU SALAH INPUT, COBA CEK LAGI!");
    }
  }
  alert(
    "kamu milih " +
      player +
      ", sedangkan Clara memilih " +
      bot +
      ", makaaaa...... " +
      hasil
  );

  tanya = confirm("MAU MAIN LAGI?");
}

alert("TERIMA KASIH SUDAH BERMAIN <3");
