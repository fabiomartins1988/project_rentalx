import { Specification } from "../model/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specifictation = new Specification();

    Object.assign(specifictation, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specifictation);
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationsRepository };
