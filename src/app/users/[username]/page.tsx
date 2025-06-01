import { CardList } from "@/components/CardList";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const SingleUserPage = () => {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Loan Matteus</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* LEFT */}
                <div className="w-full xl:w-1/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">Badge</div>
                    <div className="bg-primary-foreground p-4 rounded-lg">Info</div>
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transactions" />
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-full xl:w-2/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
                    <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
                </div>
            </div>
        </>
    );
}

export default SingleUserPage;
