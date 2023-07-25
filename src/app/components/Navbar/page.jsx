import "./style.css"
import Link from "next/link"
export default function Navbar() {
    return (
        <>
            <div className="container">
                <nav className="navbar">
                    <div className="NavAll">
                        <div className="logo">
                            OMEGA
                        </div>

                        <div className="NavlistDiv">
                            <ul className="navList">
                                <Link href=""><li className="navTitle">Demos</li></Link>
                                <Link href=""><li className="navTitle">Pages</li></Link>
                                <Link href=""><li className="navTitle">Support</li></Link>
                            </ul>

                            <div className="navButton">
                                <Link href="">
                                    <button className="red_btn">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
