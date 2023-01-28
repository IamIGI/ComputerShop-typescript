import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { GetAccountOpinionsInterface } from 'interfaces/Account.interfaces';

export interface InitialState {
    accountComments: {
        status: string;
        data: GetAccountOpinionsInterface;
        error: undefined | string;
        commentByIdStatus: string;
        refreshComments: boolean;
    };
}
