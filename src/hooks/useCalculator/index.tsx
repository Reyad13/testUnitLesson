const useCalculator = () => {
  const addition = (value1: string, value2: string) => {
    return Number(Number(value1) + Number(value2)).toString();
  };
  const substraction = (value1: string, value2: string) => {
    return Number(Number(value1) - Number(value2)).toString();
  };
  const modulo = (value1: string, value2: string) => {
    return Number(Number(value1) % Number(value2)).toString();
  };
  const square = (value1: string) => {
    return Number(Math.sqrt(Number(value1))).toString();
  };
  const division = (value1: string, value2: string) => {
    return Number(Number(value1) / Number(value2)).toString();
  };
  return {
    addition,
    modulo,
    substraction,
    division,
    square
  };
};

export default useCalculator;
