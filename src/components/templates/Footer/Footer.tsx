import { Wrapper } from './Footer.styles';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Wrapper>
            <p>Copyright ⓒ {year}</p>
        </Wrapper>
    );
};

export default Footer;
