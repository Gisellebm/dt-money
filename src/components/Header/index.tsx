import { HeaderContainer, HeaderContent, NewtransactionButton } from "./styles";
import logoImg from "../../assets/logo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="dt money" />
                <NewtransactionButton>Nova transação</NewtransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )   
}