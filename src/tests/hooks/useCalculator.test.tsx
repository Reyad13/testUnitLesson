import { renderHook } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator/index";

test("show multiple examples", () => {
  const { result } = renderHook(() => useCalculator());
  const {
    addition,
    substraction,
    square,
    division,
    modulo,
  } = result.current;

  expect(addition('1','1')).toEqual('2');
  expect(substraction('2','2')).toEqual('0');
  expect(square('9')).toEqual('3');
  expect(division('8','2')).toEqual('4');
  expect(modulo('5','2')).toEqual('1');
});
