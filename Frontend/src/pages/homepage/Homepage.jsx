import Navbar from "../../components/navbar/Navbar"
import "./Homepage.css"
const Homepage = () => {
    return (
        <>
            <Navbar />
            <section className='container__width layout'>
                <div className='section_container'>
                    <div className='left_container'>

                    </div>
                    <div className='right_container'>
                        <h1>Hello</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage