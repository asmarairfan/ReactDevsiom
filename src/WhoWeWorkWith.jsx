import './WhoWeWorkWith.css'
import Process4 from './Process4'
export default function WhoWeWorkWith() {
    const style1 = { color: "blue" };
    const style2 = { color: "green" };
    const style3 = { color: "pink" };
    const style4 = { color: "orange" };
    return <div style={{ margin: "40px" }}>
        <h2 style={{ fontFamily: "IBM Plex Sans", fontWeight: "700", fontSize: "36px" }}>Who We Work With</h2>
        <div className="WhoWeWorkWith">
            <div className="details">
                <h2>Who We Work With</h2>
                <p>As a leading mobile app development company in USA and India, we worked with 2000+ businesses either it is a startup or enterprise and delivers the best solution in the industry. At Hyperlink InfoSystem, we offer a broad range of app development services based on business requirements.</p>
            </div>
            <div className="motives">
                <Process4 iconSrc="handshake" heading="Start Up Business" style={style1} > </Process4>
                <Process4 iconSrc="finance_mode" heading="Small & Medium Business" style={style2}></Process4>
                <Process4 iconSrc="enterprise" heading="Enterprise" style={style3}> </Process4>
                <Process4 iconSrc="domain" heading="Agencies" style={style4}></Process4>
            </div>
        </div>
    </div >
}