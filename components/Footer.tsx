export default function Footer() {
    return (
        <footer className="mt-16 w-full border-t border-white/8 pt-8 pb-12 text-center text-xs sm:text-sm text-white/50">
            <p>
                Made with <span className="text-red-400">♥</span> by{" "}
                <a
                    href="https://manangandhi.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-white duration-200 transition underline underline-offset-2"
                >
                    Manan Gandhi
                </a>
            </p>
            <p className="mt-2">
                Source code on{" "}
                <a
                    href="https://github.com/MananGandhi1810/portfolio-v2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-white duration-200 transition underline underline-offset-2"
                >
                    GitHub
                </a>
            </p>
        </footer>
    );
}
