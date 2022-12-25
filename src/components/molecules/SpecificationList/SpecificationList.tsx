import { LiDesc, LiName, List, LiWrapper } from './SpecificationList.style';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { VscListUnordered } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import { getProductById } from 'features/products/productsSlice';
import { ProductDataInterface } from 'interfaces/Product.interfaces';

const SpecificationList = () => {
    const product = useSelector(getProductById) as ProductDataInterface;
    const PS = product.specification;
    return (
        <>
            <SectionDescription title={'Specyfikacja'} icon={<VscListUnordered />} />
            <List>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Procesor</span>
                        </LiName>
                        <LiDesc>{PS.processor.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Pamięć Ram</span>
                        </LiName>
                        <LiDesc>{PS.ram.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Dysk SS2 M.2 PCIe</span>
                        </LiName>
                        <LiDesc>{PS.disk.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Przekątna ekranu</span>
                        </LiName>
                        <LiDesc>{PS.screen_diagonal.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Rozdzielczość ekranu</span>
                        </LiName>
                        <LiDesc>{PS.resolution.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Karta graficzna</span>
                        </LiName>
                        <LiDesc>{PS.graphics_card.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Komunikacja</span>
                        </LiName>
                        <LiDesc>
                            {PS.communication.map(({ com }, index) => (
                                <p key={index}>{com}</p>
                            ))}
                        </LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Porty</span>
                        </LiName>
                        <LiDesc>
                            {PS.ports.map(({ port }, index) => (
                                <p key={index}>{port}</p>
                            ))}
                        </LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Pojemność baterii</span>
                        </LiName>
                        <LiDesc>{PS.battery_capacity.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Kolor dominujący</span>
                        </LiName>
                        <LiDesc>{PS.color.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>System operacyjny</span>
                        </LiName>
                        <LiDesc>{PS.operating_system.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Dodatkowe informacje</span>
                        </LiName>
                        <LiDesc>
                            {PS.additional_information.map(({ info }, index) => (
                                <p key={index}>{info}</p>
                            ))}
                        </LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Wysokość</span>
                        </LiName>
                        <LiDesc>{PS.height.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Szerokość</span>
                        </LiName>
                        <LiDesc>{PS.width.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Długość</span>
                        </LiName>
                        <LiDesc>{PS.depth.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Waga</span>
                        </LiName>
                        <LiDesc>{PS.weigth.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Dołączone akcesora</span>
                        </LiName>
                        <LiDesc>{PS.supplied_accessories.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Gwarancja</span>
                        </LiName>
                        <LiDesc>{PS.guarantees.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Kod producenta</span>
                        </LiName>
                        <LiDesc>{PS.producent_code.description}</LiDesc>
                    </LiWrapper>
                </li>
                <li>
                    <LiWrapper>
                        <LiName>
                            <span>Kod sklepu</span>
                        </LiName>
                        <LiDesc>{product._id}</LiDesc>
                    </LiWrapper>
                </li>
            </List>
        </>
    );
};

export default SpecificationList;
