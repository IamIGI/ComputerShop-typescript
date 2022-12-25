import RecipientTemplates from 'components/molecules/RecipientTemplates/RecipientTemplates';

export interface RecipientTemplateSchema {
    name: string;
    street: string;
    zipCode: string;
    place: string;
    email: string;
    phone: string;
}

export interface RecipientTemplateInterface extends RecipientTemplateSchema {
    _id: string;
}

export interface RecipientFormDataInterface extends RecipientTemplateSchema {
    comment: string;
    recipientId: string;
}
