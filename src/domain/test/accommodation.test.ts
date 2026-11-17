import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation("Dormitorio",300);
    void accommodation;
  });

  describe("Accommodation name", () => {
    test("should set name correctly", () => {});
    // TODO: agregar más tests para el nombre
  });

   test("should get the correct name", () => {
    expect(accommodation.getName()).toBe("Dormitorio");
  });

  test("should get the correct cost", () => {
    expect(accommodation.getCost()).toBe(300);
  });

  test("should have a valid name", () => {
    expect(() => accommodation.setName("")).toThrow();
  });

  test("should have a valid name", () => {
    expect(() => accommodation.setName(34)).toThrow();
  });

  test("should have a valid cost", () => {
    expect(() => accommodation.setCost("hola")).toThrow();
  });

  test("cost can't be null", () => {
    expect(() => accommodation.setCost("")).toThrow();
  });

  test("cost should be bigger than 0", () => {
    expect(() => accommodation.setCost(-3)).toThrow();
  });

  describe("Accommodation cost", () => {
    test.todo("agregar tests para el costo");
  });
});
