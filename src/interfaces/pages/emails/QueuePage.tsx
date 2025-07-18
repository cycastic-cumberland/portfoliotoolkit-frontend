import MainLayout from "@/interfaces/layouts/MainLayout.tsx";
import ProjectGuard from "@/interfaces/layouts/ProjectGuard.tsx";
import {Label} from "@/components/ui/label.tsx";

const QueuePage = () => {
    return <MainLayout>
        <ProjectGuard>
            <div className={"w-full p-5 flex flex-col"}>
                <div className={"my-2"}>
                    <Label className={"text-2xl text-foreground font-bold"}>
                        Email queue
                    </Label>
                </div>
            </div>
        </ProjectGuard>
    </MainLayout>
}

export default QueuePage
