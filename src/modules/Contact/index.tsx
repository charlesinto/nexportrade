import { Outlet } from "react-router-dom";
import styles from "./index.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.wrapper} style={{ paddingTop: 60 }}>
        <Outlet />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.01207153052!2d3.2934884044918773!3d6.529530613403157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja!5e0!3m2!1sen!2sng!4v1649467555418!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        title="location"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
