export function getCurrencySymbol(currency) {
  const symbol = new Intl.NumberFormat('en', {style: 'currency', currency})
    .formatToParts(currency)
    .find((x) => x.type === 'currency');
  return symbol && symbol.value;
}
