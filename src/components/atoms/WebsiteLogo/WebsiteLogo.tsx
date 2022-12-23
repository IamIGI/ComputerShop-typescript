import React from 'react';
import { Wrapper, Home, Icon, Title } from './WebsiteLogo.style';
import { VscVm } from 'react-icons/vsc';

const WebsiteLogo = () => {
    return (
        <Wrapper to="/">
            <Home>
                <Icon>
                    <span>
                        <VscVm />
                    </span>
                </Icon>
                <Title>
                    H<span>o</span>tSh<span>o</span>
                    <span>o</span>t
                </Title>
            </Home>
        </Wrapper>
    );
};

export default WebsiteLogo;
