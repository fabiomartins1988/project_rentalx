import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    throw new Error("some error");
  }

  list(): Category[] {
    throw new Error("some error");
  }

  create({ name, description }: ICreateCategoryDTO) {
    throw new Error("some error");
  }
}

export { PostgresCategoriesRepository };
