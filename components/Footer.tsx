export default function Footer() {
    return (
        <footer className="mt-12 w-full border-t border-white/6 pt-6 pb-12 text-center text-sm text-white/40">
            Made with &#10084; by{' '}
            <a
                href="https://manangandhi.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-white duration-200 transition underline underline-offset-2"
            >
                Manan Gandhi
            </a>
            . Source code on{' '}
            <a
                href="https://github.com/MananGandhi1810/portfolio-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-white duration-200 transition underline underline-offset-2"
            >
                GitHub
            </a>
        </footer>
    );
}