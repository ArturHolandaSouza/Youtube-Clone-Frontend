import VideoComponent from "../../components/videoComponent";
import { Container, NextButton, Tag, TagsContainer } from "./styles";
import Next from "../../assets/proximo.png"
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

interface Iprops {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}

const videos = [
    {
        image: '',
        title: 'Marilia Mendonça - Leão - Decretos Reais 2',
        channel: 'Marilia Mendonça',
        number: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marilia Mendonça - Leão - Sei de cor',
        channel: 'Marilia Mendonça',
        number: '50 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marilia Mendonça - Leão - Decretos Reais 2',
        channel: 'Marilia Mendonça',
        number: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marilia Mendonça - Leão - Decretos Reais 2',
        channel: 'Marilia Mendonça',
        number: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marilia Mendonça - Leão - Decretos Reais 2',
        channel: 'Marilia Mendonça',
        number: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marilia Mendonça - Leão - Decretos Reais 2',
        channel: 'Marilia Mendonça',
        views: '109 mi',
        time: '2 meses'
    },

]

function Home() {
    const {openMenu,setOpenMenu}:Iprops = useContext(UserContext);
    return(
        <div>

            <TagsContainer>
                <Tag>All</Tag>
                <Tag>Gaming</Tag>
                <Tag>Music</Tag>
                <Tag>Vivo</Tag>
                <Tag>Bolsonaro</Tag>
                <Tag>Lula</Tag>
                <Tag>Borboleta</Tag>
                <Tag>Ovo</Tag>
                <Tag>Oi</Tag>
                <Tag>Tim</Tag>
                <Tag>Claro</Tag>
                <Tag>Vivo</Tag>
                <Tag>Lula</Tag>
                <Tag>Borboleta</Tag>
                <NextButton src={Next}/>
            </TagsContainer>

            <Container openMenu={openMenu}>
                {videos.map((video) => (
                    <VideoComponent video = {video}/>
                ))}
            </Container>
            
        </div>
        )
}

export default Home;