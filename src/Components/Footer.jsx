import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          Copyright &copy;
          <strong>
            <span> Hermannwebdev - {date}</span>
          </strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
