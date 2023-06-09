export interface IComic {
    id?: number;
    name: string;
    author_id?: number;
    images: Array<{
        id?: number;
        image: string;
    }>;
    description: string;
    cate_id?: number;
}
