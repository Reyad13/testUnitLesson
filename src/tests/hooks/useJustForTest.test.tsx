import { renderHook } from "@testing-library/react-hooks";
import useJustForTest, { User } from "../../hooks/useJustForTest";

test("show multiple examples", () => {
  const { result } = renderHook(() => useJustForTest());
  const {
    testBoolTrue,
    testAssertEquals,
    testToBeInstanceOf,
    testToHaveReturned,
    toContainEqual,
    testToStrictEqual,
    testToBeLessThan,
    testToBeNull,
  } = result.current;

  expect(testBoolTrue()).toBeTruthy();
  expect(testAssertEquals()).toEqual("same");
  expect(1).not.toBeNaN();
  expect(testToBeInstanceOf()).toBeInstanceOf(User);
  const fnTest = jest.fn(testToHaveReturned);
  fnTest();
  expect(fnTest).toHaveReturnedWith(0);
  const tableau = {delicious: true, sour: false};
  expect(toContainEqual()).toContainEqual(tableau);
  const tableau2 = [{delicious: true, sour: false}];
  expect(testToStrictEqual()).toStrictEqual(tableau2);
  expect(testToBeLessThan()).toBeLessThan(1001);
  expect(testToBeNull()).toBeNull();
  
});
