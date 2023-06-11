export interface IComic {
    _id?: number;
    name: string;
    author_id?: string;
    images: Array<{
        id?: number;
        image: string;
    }>;
    description: string;
    category_id?: string;
}
