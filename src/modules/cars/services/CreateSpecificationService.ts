import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadtExist =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadtExist) {
      throw new Error("Specifications already exist!");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
