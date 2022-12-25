import { Menu, MenuOption, MenuOptionHover, MenuOptionNoHover } from './ArticlesMenu.style';

const ArticlesMenu = () => {
    return (
        <Menu>
            <MenuOption to="/articles/all/none" hoverClass={'MenuHover1'}>
                Wszystkie <MenuOptionHover className="MenuHover1" />
                <MenuOptionNoHover className="MenuNoHover1" />
            </MenuOption>
            <MenuOption to="/articles/all/news" hoverClass={'MenuHover2'}>
                Aktualności <MenuOptionHover className="MenuHover2" />
                <MenuOptionNoHover className="MenuNoHover2" />
            </MenuOption>
            <MenuOption to="/articles/all/guide" hoverClass={'MenuHover3'}>
                Poradniki <MenuOptionHover className="MenuHover3" />
                <MenuOptionNoHover className="MenuNoHover3" />
            </MenuOption>
        </Menu>
    );
};

export default ArticlesMenu;
