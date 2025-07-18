import type {FC} from "react";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import useMediaQuery from "@/hooks/use-media-query.tsx";
import {Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle} from "@/components/ui/drawer.tsx";
import {cn} from "@/lib/utils.ts";

const normalStyle = 'cursor-pointer border-foreground border-1 text-background bg-foreground hover:text-foreground hover:bg-background'
const destructiveStyle = 'bg-destructive text-background border-destructive border-1 hover:bg-background hover:text-destructive'

const ConfirmationDialog: FC<{
    confirmationOpened: boolean,
    setConfirmationOpened: (b: boolean) => void,
    onAccepted: () => void,
    title: string,
    message: string,
    acceptText: string,
    cancelText?: string,
    destructive?: boolean,
}> = ({ confirmationOpened, setConfirmationOpened, onAccepted, title, message, acceptText, cancelText, destructive }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return isDesktop ? <Dialog open={confirmationOpened} onOpenChange={setConfirmationOpened}>
        <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
                <DialogTitle>{ title }</DialogTitle>
                <DialogDescription>{ message }</DialogDescription>
            </DialogHeader>
            <div className={"w-full flex flex-row-reverse gap-2"}>
                <Button className={cn('cursor-pointer', destructive ? destructiveStyle : normalStyle)} onClick={onAccepted}>{ acceptText }</Button>
                <Button className={normalStyle} onClick={() => setConfirmationOpened(false)}>{ cancelText ?? "Cancel" }</Button>
            </div>
        </DialogContent>
    </Dialog> : <Drawer open={confirmationOpened} onOpenChange={setConfirmationOpened}>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>{ title }</DrawerTitle>
                <DrawerDescription>{ message }</DrawerDescription>
            </DrawerHeader>
            <div className={'w-full px-3 pb-3'}>
                <div className={"w-full flex flex-col gap-2"}>
                    <Button className={cn('cursor-pointer', destructive ? destructiveStyle : normalStyle)} onClick={onAccepted}>{ acceptText }</Button>
                    <Button className={normalStyle} onClick={() => setConfirmationOpened(false)}>{ cancelText ?? "Cancel" }</Button>
                </div>
            </div>
        </DrawerContent>
    </Drawer>
}

export default ConfirmationDialog