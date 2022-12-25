import { DescriptionContent, Icon, LeftWrapper, Wrapper, RightWrapper } from './Newsletter.style';
import { BsMailbox } from 'react-icons/bs';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
const Newsletter = () => {
    return (
        <Wrapper>
            <LeftWrapper>
                <DescriptionContent>
                    <h2>Newsletter</h2>
                    <p>Nie przegap żadnej promocji, zdobywaj dodatkowe rabaty.</p>
                </DescriptionContent>

                <Input name="email" placeholder="E-mail" />
            </LeftWrapper>
            <RightWrapper>
                <Icon>
                    <BsMailbox />
                </Icon>
                <Button type="submit">Zapisz się!</Button>
            </RightWrapper>
        </Wrapper>
    );
};

Newsletter.propTypes = {};
export default Newsletter;
