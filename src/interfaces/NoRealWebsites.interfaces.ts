export interface NoRealWebsiteInterface {
    _id: string;
    version: number;
    date: string;
    changes: { added: string[]; fixes: string[] };
    __v: number;
}
