const Footer = () => {
  return (
    <div className="grid-cols-2">
      <div className="Contact">
        <h1>CONTACT INFORMATION</h1>
        <p>
          Phone:&nbsp;
          <a href="#">608.822.3262</a>
        </p>
        <p>
          Toll Free:&nbsp;
          <a href="#">800.362.3322</a>
        </p>
        <p>Line Graphic</p>
        <p>
          TDD (hearing impared):&nbsp;
          <a href="#">608.822.2072</a>
        </p>
        <p>
          FAX:&nbsp;
          <a href="#">608.822.6019</a>
        </p>
      </div>
      <div className="Links">
        <h1>CAMPUS LINKS</h1>
        <div className="CampLinks">
          <a href="#">Bookstore</a>
          <a href="#">Campus Closures</a>
          <a href="#">GED/HSED Services</a>
          <a href="#">Library Services</a>
          <a href="#">Maps</a>
          <a href="#">Student Password Reset</a>
          <a href="#">Sign up for Text Alerts</a>
          <a href="#">Testing Center</a>
          <a href="#">Transcript Requests</a>
        </div>
      </div>
      <div className="Forms">
        <h1>FORMS</h1>
        <div className="Form">
          <a href="#">Accommodation Request Form</a>
          <a href="#">Complaints Process</a>
          <a href="#">Health/Physical Forms</a>
          <a href="#">Information Request Form</a>
          <a href="#">Report a(n) Concern/Incident</a>
        </div>
      </div>
      <div className="Tools"></div>
      <div className="Employment"></div>
      <div className="Hours"></div>
    </div>
  );
};

export default Footer;
