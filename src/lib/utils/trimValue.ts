const trimValue = (value: string) =>
  value.toLowerCase().replace(/ /gi, "").trim();

export default trimValue;
