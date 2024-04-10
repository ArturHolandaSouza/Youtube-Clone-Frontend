import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent({ video }: any) {
    return(
        <Container>
            <ImageBanner src="https://th.bing.com/th/id/OIP.nBOGomhqNVJzqe44K_zzrAHaEK?rs=1&pid=ImgDetMain"/>
            <TitleContainer>
                <ChannelImage>
                    PV
                </ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.views} visualizações - há {video.time}</TextCard>
                </TextContainer>
            </TitleContainer>

        </Container>
    )
}

export default VideoComponent;