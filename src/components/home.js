const Home = ()=> {

    const handelContact=()=>{
        return(
            <div>contacter nous</div>
        )
        console.alert('merci à vaous')
    }
    return(
        <div>
            <h1>Alex hair cut</h1>
            <h3>destination parfaite femmes, enfanst, hommes ☺️</h3>
            <button onClick={handelContact}>Contacter nous</button>
        </div>
    )
}
export default Home