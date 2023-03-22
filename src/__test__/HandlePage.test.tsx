import { describe, it } from "vitest";
import handlePage from "../utils/handlePage";

const currentPage = 2;
const lastPage = 5;
describe("handlePage", () => {
  it("should return 1 when type is doubleLeft", () => {
    const result = handlePage("doubleLeft", currentPage, lastPage);
    expect(result).toBe(1);
  });

  it("should return 1 when type is left", () => {
    const result = handlePage("left", currentPage, lastPage);
    expect(result).toBe(1);
  });

  it("should return 3 when type is right", () => {
    const result = handlePage("right", currentPage, lastPage);
    expect(result).toBe(3);
  });

  it("should return 5 when type is doubleRight", () => {
    const result = handlePage("doubleRight", currentPage, lastPage);
    expect(result).toBe(5);
  });
});
