import "./Footer.css";

function Footer() {
    return (
        <footer className="block">
            <p className="copyright">
                Copyright {new Date().getFullYear()}, Yasir Ahmed.
            </p>
            <p>Email: ui.yazir@gmail.com</p>
        </footer>
    );
}

export default Footer;
