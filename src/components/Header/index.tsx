import { HeaderContainer, HeaderContent, NewtransactionButton } from "./styles";
import logoImg from "../../assets/logo.svg"
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="dt money" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewtransactionButton>Nova transação</NewtransactionButton>
                    </Dialog.Trigger>
                    
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )   
}