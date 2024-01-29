const calculatorModulo = (angka, angkaPembagi) => {
  const sisabagi = angka % angkaPembagi;
  const hasilBagi = angka / angkaPembagi;
  return { sisabagi, hasilBagi };
};

console.log(calculatorModulo(24, 8));
