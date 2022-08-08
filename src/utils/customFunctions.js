//formato numero con puntos 100.000
export const numberFormatFn = (num) => new Intl.NumberFormat("cl").format(num);

//primera letra del string mayuscula
export const firstLetterUpperCase = (str) =>
  str[0].toUpperCase() + str.slice(1);
