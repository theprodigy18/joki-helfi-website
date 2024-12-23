import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export default function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
    return (
        <div className={cn("max-w-7xl inset-x-0 w-full h-full mx-4 sm:mx-8 md:mx-12 lg:mx-20", className)}>
            {children}
        </div>
    )
}