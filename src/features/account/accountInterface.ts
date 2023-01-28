import { GetAccountOpinionsInterface } from 'interfaces/Account.interfaces';
import { RecipientTemplateInterface } from 'interfaces/RecipientTemplates.interfaces';

export interface InitialStateAccountOpinions {
    accountComments: {
        status: string;
        data: GetAccountOpinionsInterface;
        error: undefined | string;
        commentByIdStatus: string;
        refreshComments: boolean;
    };
}

export interface InitialStateAccountTemplates {
    status: string;
    data: RecipientTemplateInterface[];
    error: undefined | string;
    templateByIdStatus: string;
    refresh: boolean;
}
