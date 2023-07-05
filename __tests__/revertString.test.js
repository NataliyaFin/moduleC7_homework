import { revertString } from "../utils/revertString.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("Mac")).toBe("caM"));
  it("should reverse string", () => expect(revertString("aAa")).toBe("aAa"));
  it("should reverse string", () => expect(revertString("Hello! How are you?")).toBe("?uoy era woH !olleH"));
});