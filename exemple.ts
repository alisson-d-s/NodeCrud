import { QueryRunner } from "typeorm";
import { Food } from "../../../entities/Food";

export function food(queryRunner: QueryRunner) {
    const food = queryRunner.manager.create<Food>(Food, [
        {
            name: "batata inglesa cozida",
            grams: 100,
            energy: 51.6,
            protein: 1.2,
            carbohydrates: 11.9,
            fat: 0,
            fibre: 1.3
        },
        {
            name: "peito de frango sem pele cru",
            grams: 100,
            energy: 113,
            protein: 21.5,
            carbohydrates: 0,
            fat: 3,
            fibre: 0
        },
        {
            name: "arroz tipo 1 cozido",
            grams: 100,
            energy: 128.3,
            protein: 3,
            carbohydrates: 28,
            fat: 0,
            fibre: 0
        },
        {
            name: "abacate cru",
            grams: 100,
            energy: 96,
            protein: 1,
            carbohydrates: 6,
            fat: 8,
            fibre: 6
        },
        {
            name: "aveia em flocos",
            grams: 100,
            energy: 388.7,
            protein: 16,
            carbohydrates: 67,
            fat: 6,
            fibre: 10
        },
        {
            name: "feijão carioca cozido",
            grams: 100,
            energy: 76,
            protein: 5,
            carbohydrates: 14,
            fat: 1,
            fibre: 9
        },
        {
            name: "leite em pó integral",
            grams: 100,
            energy: 482,
            protein: 26,
            carbohydrates: 36,
            fat: 26,
            fibre: 0
        },
    ]);
    
    return food;
};
