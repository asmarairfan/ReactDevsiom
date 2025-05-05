import './ProcessWeFollow.css'
import Process2 from './Process2'
export default function WorkandPresence() {
    return <div style={{ margin: "40px" }}>
        <h2 style={{ fontFamily: "IBM Plex Sans", fontWeight: "700", fontSize: "36px" }}>Glimpse of our Work and Presence</h2>
        <div className="ProcessWeFollow">
            <Process2 heading="4500+" text="Apps Developed"> </Process2>
            <Process2 heading="2200+" text="Websites Designed"></Process2>
            <Process2 heading="2700+" text="Happy Clients"></Process2>
            <Process2 heading="1000+" text="Developers" />
            <Process2 heading="120+" text="AI & IoT Solutions"></Process2>
            <Process2 heading="140+" text="Games Developed"> </Process2>
            <Process2 heading="120+" text="Salesforce Solutions"> </Process2>
            <Process2 heading="40+" text="Data Science"> </Process2>
        </div>
    </div >
}