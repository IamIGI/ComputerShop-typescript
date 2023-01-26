export interface AuthInterface {
    id: string | null;
    userName: string | null;
    email: string | null;
    roles: number[] | null;
    accessToken: string | null;
    user?: boolean | null;
}
