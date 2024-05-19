// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/ekam-8a4310216/"
        target="_blank"
        title="Ekam's Linkedin Profile"
      >
        Ekam
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Eats<span>Elite</span>
        </strong>
    </div>
  );
};

export default Footer;
