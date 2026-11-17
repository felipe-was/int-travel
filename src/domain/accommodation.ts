class Accommodation {
  // TODO: implementar clase Accommodation con los campos name y cost
  #name!: string;
  #cost!: number;

  constructor(
    accomodationName: unknown,
    accomodationCost: unknown,
  ) {
    this.setName(accomodationName);
    this.setCost(accomodationCost);
  }
  getName(): string {
    return this.#name;
  }

  getCost(): number {
    return this.#cost;
  }

  setName(name: string): void {
    if (name === null || name === "") {
      throw new Error("name is required");
    }
    if (typeof name !== "string") {
      throw new Error("name must be a string");
    }
    this.#name = name.trim();
  }

  setCost(cost: unknown): void {
    if (cost === null || cost === "") {
      throw new Error("cost is required");
    }
    if (typeof cost !== "number") {
      throw new Error("cost must be a number");
    }
    if (cost  < 0) {
      throw new Error("cost must be bigger than 0");
    }
    this.#cost = cost;
  }


}
export default Accommodation;
