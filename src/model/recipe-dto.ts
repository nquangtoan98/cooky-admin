import { MaterialDTO } from './material-dto';
import { StepDTO } from './step-dto';

export class Recipe {
    userId: number;
    name: string;
    // description: string;
    imgUrl: string;
    stepList: string;
    categoryId: number;
    note: string;
    status: number;


}

export class RecipeDto {
    imageBackgroundUrl: string;
    name: string;
    note: string;
    id: number;
    categoryId: number;
    userid: number;
    contestId: number;
    stepList: Array<StepDTO>;
    materialList: Array<MaterialDTO>;
    status: number;
}