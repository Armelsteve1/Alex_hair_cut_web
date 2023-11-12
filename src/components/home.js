import "./home.css"
import logo from "./logo1.jpg"
const Home = ()=> {

    const handelContact=()=>{
        return(
            <div>contacter nous</div>
        )
    }
    return(
        <div>
            
            <section className="header">
                <div className="header1">
                    <p>mail : arceltatchum@gmail.com</p>
                    <p>number : +237 697 930 445</p>
                </div>
                <div className="header2">
                    {/* <a href="Home" classeName="logo" > Alex Hair Cut</a> */}
                    <img scr={logo} alt="Alex Hai Cut" className="logo"></img>
                    <nav className="navbar">
                        
                            <a href="Home">home</a>
                            <a href="Servive">service</a>
                            <a href="Shop">Shop</a>
                            <a href="Pages">Pages</a>
                       
                    </nav>
                </div>
            </section>
            <button onClick={handelContact}>Contacter nous</button>
        </div>
    )
}
export default Home