import './Sugges.css'
import img from '../../assests/images/89689857_251090159392543_1332680196775477248_n.jpg'
import img1 from '../../assests/images/242382435_980569042791578_7799602376101157829_n.jpg'

const Suggest = () => {
    const data = [
        {
            name: "lifeatims",
            image: img
        },
        {
            name: "IsmailJan",
            image: img1
        }
    ]
    return (
        <div className="suggest_container">
            <div className="suggest_header">
                <p>Sugestions For You</p>
                <div className="see_all_button">See All</div>
            </div>
            {data.map((item, index) => (
                <SuggestPerson data={item} key={index}/>
            ))}
        </div>
    )
}

const SuggestPerson = ({data}) => {
    const {name, image} = data
    return (
        <div className="suggest_profile">
            <div>
                <div className="suggest_profile_img"><img src={image} alt="" /></div>
                <div>
                    <div className="suggest_profile_name">{name}</div>
                    <div className="suggest_profile_desc">Suggested for you</div>
                </div>
            </div>
            <div className="suggest_follow_button">Follow</div>
        </div>
    )
}

export default Suggest