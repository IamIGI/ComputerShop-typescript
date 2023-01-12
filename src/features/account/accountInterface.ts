import { GetAccountOpinions } from 'interfaces/Account.interfaces';

export interface InitialState {
    accountComments: {
        status: string;
        data: GetAccountOpinions;
        error: undefined | string | null;
        commentByIdStatus: string;
    };
}
