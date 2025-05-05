import './ProcessWeFollow.css'
import Process3 from './Process3'
export default function IndustriesServed() {
    const styles1 = { color: "skyblue" };
    const styles2 = { color: "blue" };
    const styles3 = { color: "orange" };
    const styles4 = { color: "indigo" };
    const styles5 = { color: "green" };
    const styles6 = { color: "pink" };
    const styles7 = { color: "purple" };
    const styles8 = { color: "yellow" };
    const styles9 = { color: "purple" };
    return <div style={{ margin: "40px" }}>
        <h2 style={{ fontFamily: "IBM Plex Sans", fontWeight: "700", fontSize: "36px" }}>Industries We Serve</h2>
        <div className="IndustriesServed">
            <Process3 iconSrc="storefront" heading="Retail, Ecommerce" style={styles1} > </Process3>
            <Process3 iconSrc="school" heading="Education & e-learning" style={styles2}></Process3>
            <Process3 iconSrc="body_system" heading="Healthcare & Fitness" style={styles3}></Process3>
            <Process3 iconSrc="conveyor_belt" heading="Logistics & Distribution" style={styles4} />
            <Process3 iconSrc="diversity_3" heading="Social Networking" style={styles5} ></Process3>
            <Process3 iconSrc="real_estate_agent" heading="Real estate" style={styles6}> </Process3>
            <Process3 iconSrc="flight_takeoff" heading="Travel & Hospitality" style={styles7}> </Process3>
            <Process3 iconSrc="restaurant_menu" heading="Food & Restaurant" style={styles8}> </Process3>
            <Process3 iconSrc="emoji_objects" heading="On-Demand Solutions" style={styles9}> </Process3>
        </div>
    </div >
}