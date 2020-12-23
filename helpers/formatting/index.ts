export const titlelize = (
  handle: any,
  capitalized = false,
  unCapitlized = false
) => {
  let title = handle;

  if (capitalized) {
    title = title.charAt(0).toUpperCase() + handle.slice(1);
  }

  if (unCapitlized) {
    title = title.charAt(0).toLowerCase() + handle.slice(1);
  }

  const strippedTitle = title.split("-").join(" ");

  return strippedTitle;
};

export const formatCurrency = (stringVal: string) => {
  const value = parseFloat(stringVal);
  const formatter = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });

  return formatter.format(value);
};
