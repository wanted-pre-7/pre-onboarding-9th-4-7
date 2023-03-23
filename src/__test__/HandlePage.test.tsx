import { describe, it } from "vitest";
import {
  getPageArrayIndex,
  handlePage,
  sliceArrayByLimit,
} from "../utils/handlePage";

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

describe("sliceArrayByLimit", () => {
  it("should return array of length 2 when totalPage is 6", () => {
    const result = sliceArrayByLimit(6);
    expect(result.length).toBe(2);
  });
  it("should return array of length 3 when totalPage is 15", () => {
    const result = sliceArrayByLimit(15);
    expect(result.length).toBe(3);
  });
});

describe("getPageArrayIndex", () => {
  it("should return 0 when current page is 2", () => {
    expect(getPageArrayIndex(currentPage)).toBe(0);
  });
  it("should return 1 when current page is 6", () => {
    expect(getPageArrayIndex(6)).toBe(1);
  });
});
