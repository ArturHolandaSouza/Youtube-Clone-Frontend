import {
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton
} from "./styles";
import HamburguerIcon from '../../assets/hamburger_2e5c6c0eec5a49acb97201c3f1e16542.png';
import Logo from '../../assets/YouTube-Logo_2cad60d8881f48c099a2043ad35e0b4b.png';
import SearchIcon from '../../assets/search_117b78df834249fdb899e63f5f5a8aac.png';
import MicIcon from '../../assets/microfone-gravador_5aec03c3660f4d97b7d99219e43f0185.png';
import VideoIcon from '../../assets/video_1a3f517c18cd4d86ab8f61fabd033f5a.png';
import NotificationIcon from '../../assets/sino_382bed4de97b4204abbd5eb05c8795d9.png';
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

interface Iprops {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}

function Header() {
    const navigate = useNavigate();
    const {openMenu,setOpenMenu}:Iprops = useContext(UserContext);
    const { login, logOut, user } = useContext(UserContext);

    return(
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img
                style={{ cursor: 'pointer', width: '100px' }}
                alt=""
                src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon}/>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon}/>
                </ButtonContainer>

                {login?
                    <>
                        <ButtonContainer margin='0 0 0 10px' onClick={() => navigate('/login')}>
                            {user.nome}
                        </ButtonContainer>
                        <span onClick={() => logOut()}>Sair</span>
                    </>
                :
                    <button onClick={() => navigate('/login')}>fazer login</button>
                }
            </HeaderButton>

        </Container>
    )
}

export default Header;