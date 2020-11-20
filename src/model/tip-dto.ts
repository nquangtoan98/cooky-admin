export class AddNewTipDto {
    userId: number;
    name: string;
    description: string;
    imgUrl: string;
}

export class TipDto {
    id: number;
    userId: number;
    name: string;
    description: string;
    imageUrl: string;
    status: number;
}
