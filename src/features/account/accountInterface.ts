import { GetAccountOpinionsInterface } from 'interfaces/Account.interfaces';

export interface InitialState {
    accountComments: {
        status: string;
        data: GetAccountOpinionsInterface;
        error: undefined | string | null;
        commentByIdStatus: string;
    };
}
