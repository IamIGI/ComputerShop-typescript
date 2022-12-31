import formatPrices from 'helpers/formatPrices';
import { RecipientTemplateInterface } from 'interfaces/RecipientTemplates.interfaces';

import { MdOutlineDeleteOutline } from 'react-icons/md';
import { ChangeRecipient, DeleteRecipient, TemplateContainer, TemplateWrapper } from './RecipientTemplates.style';

interface RecipientTemplatesProps {
    showOptions: boolean;
    recipientTemplates: RecipientTemplateInterface[];
    handlePreloadValues: (arg0: RecipientTemplateInterface) => void;
    handleDelete?: (arg0: string) => void;
}

const RecipientTemplates = ({
    showOptions = false,
    recipientTemplates,
    handlePreloadValues,
    handleDelete,
}: RecipientTemplatesProps) => {
    return (
        <TemplateWrapper>
            {recipientTemplates.map((template, index) => (
                <TemplateContainer key={index}>
                    <ul>
                        <li>{template.name}</li>
                        <li>{template.email}</li>
                        <li>{formatPrices(template.phone)}</li>
                        <li>{template.place}</li>
                        <li>{template.street}</li>
                        <li>{template.zipCode}</li>
                    </ul>

                    <ChangeRecipient onClick={() => handlePreloadValues(template)}>
                        {showOptions ? 'Zmień' : 'Użyj'}
                    </ChangeRecipient>
                    {showOptions && (
                        <DeleteRecipient onClick={() => handleDelete!(template._id)}>
                            <MdOutlineDeleteOutline />
                        </DeleteRecipient>
                    )}
                </TemplateContainer>
            ))}
        </TemplateWrapper>
    );
};

export default RecipientTemplates;
