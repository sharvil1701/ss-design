export function Content() {
    return (
        <main className="flex-1 bg-background">
            <div className="layout-padding-container mx-auto h-[calc(100vh-128px)]">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        Welcome to Next.js
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Get started by editing app/page.tsx
                    </p>
                </div>
            </div>
        </main>
    )
}