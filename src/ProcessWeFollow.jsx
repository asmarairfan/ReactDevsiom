import './ProcessWeFollow.css'
import Process from './Process'
export default function ProcessWeFollow() {
    const styles1 = { color: "green" };
    const styles2 = { color: "red" };
    const styles3 = { color: "green" };
    const styles4 = { color: "indigo" };
    const styles5 = { color: "green" };
    const styles6 = { color: "pink" };
    const styles7 = { color: "purple" };
    const p1 = "We follow the first and foremost priority of gathering requirements, resources and information to begin our project";
    const p2 = "We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience";
    const p3 = "After designing, you will get your prototype, which will be sent ahead for the development process for the product.";
    const p4 = "Development of mobile application/web/blockchain started using latest tools and technologies with transparency.";
    const p5 = "Hyperlink values quality and provides 100% bug free application with no compromisation in it.";
    const p6 = "After trail and following all processes, your app is ready to launch on the App Store or Play Store.";
    const p7 = "Our company offers you all support and the team is always ready to answer every query after deployment.";
    return <div style={{ margin: "40px" }}>
        <h2 style={{ fontFamily: "IBM Plex Sans", fontWeight: "700", fontSize: "36px" }}>Process We Follow </h2>
        <div className="ProcessWeFollow">
            <Process iconSrc="edit_square" heading="1. Requirement Gathering" para={p1} style={styles1} > </Process>
            <Process iconSrc="computer" heading="2. UI/UX Design" para={p2} style={styles2}></Process>
            <Process iconSrc="device_hub" heading="3. Prototype" para={p3} style={styles3}></Process>
            <Process iconSrc="security_update_good" heading="4. Development" para={p4} style={styles4} />
            <Process iconSrc="high_quality" heading="5. Quality Assurance" para={p5} style={styles5} className="equal"></Process>
            <Process iconSrc="deployed_code" heading="6. Deployment" para={p6} style={styles6} className="equal"> </Process>
            <Process iconSrc="engineering" heading="7. Support & Maintenance" para={p7} style={styles7} className="equal"> </Process>
        </div>
    </div >
}