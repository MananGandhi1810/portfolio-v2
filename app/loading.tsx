import AsciiLoader from "@/components/AsciiLoader";

export default function Loading() {
    return (
        <main className="mx-auto my-12 max-w-5xl px-6">
            <div className="flex min-h-[40vh] items-center justify-center">
                <AsciiLoader />
            </div>
        </main>
    );
}
