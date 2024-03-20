import { HeaderContainer, HeaderContent, NewtransactionButton } from "./styles";
import logoImg from "../../assets/logo.svg"
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="dt money" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewtransactionButton>Nova transação</NewtransactionButton>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay />

                        <Dialog.Content>
                            <Dialog.Title>Nova transação</Dialog.Title>
                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )   
}