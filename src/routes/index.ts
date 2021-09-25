import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const router = Router();

router.use("/categoires", categoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
