import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { Blue, Container, Input, SigninButton } from "./styles";

function Login() {
    const { handleLogin } = useContext(UserContext);
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return(
        
        <Container>
            <Blue src="https://th.bing.com/th/id/R.67827ff3dd64bbbcb160eefa6ab150a9?rik=j%2flB8VmEWIs9Bg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-qDc5kIFIhb8%2fUoJEpGN9DmI%2fAAAAAAABl1s%2fBfP6FcBY1R8%2fs320%2fBlueHead.jpg&ehk=dMHPxs9WRYvMgQqfGxuhupwv%2fwiQMvsXHHD9ReK4kNs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"></Blue>
            <br />
            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <br />
            <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <br />
            <SigninButton onClick={() => handleLogin(email,password)}>Fazer login</SigninButton>
        </Container>
        )
}

export default Login;