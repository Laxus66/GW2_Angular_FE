export interface IComic {
    _id?: string;
    name: string;
    author_id?: string;
    story: String;
    images: Array<{
        id?: number;
        image: string;
    }>;
    description: string;
    category_id?: string;
}
