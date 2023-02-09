export const toDecimals = (num, dp = 2) => {
  const pow = Math.pow(10, dp);
  return Math.round(num * pow) / pow;
};
