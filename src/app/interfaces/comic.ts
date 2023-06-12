export interface IComic {
    _id?: string;
    name: string;
    author_id?: string;
    images: Array<{
        id?: number;
        image: string;
    }>;
    description: string;
    category_id?: string;
}
