document.writeln('<hr>');
document.writeln('<h3>Input Angka</h3>')

const a = prompt('masukan angka1:');
const b = prompt('masukan angka2:');

document.writeln(`<p>Angka yang kamu Masukan1 = ${a}</p>`);
document.writeln('<br>');
document.writeln(`<p>Angka yang kamu Masukan2 = ${b}</p>`);

document.writeln('<h3>Hasil</h3>')

// pertambahan
document.writeln('<p>Hasil Pertambahan</p>');
document.writeln(`<p>hasil ${a} + ${b} = ${Number(a) + Number(b)}</p>`);

document.writeln('<br>');

// kurang 
document.writeln('<p>Hasil Pengurangan</p>');
document.writeln(`<p>hasil ${a} - ${b} = ${Number(a) - Number(b)}</p>`);

document.writeln('<br>');

// perkalian 
document.writeln('<p>Hasil Perkalian</p>');
document.writeln(`<p>hasil ${a} x ${b} = ${Number(a) * Number(b)}</p>`);



// pembagian 
document.writeln('<br>');
document.writeln('<p>Hasil Pembagian</p>');
document.writeln(`<p>hasil ${a} / ${b} = ${Number(a) / Number(b)}</p>`);
document.writeln('<hr>');


