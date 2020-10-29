import React from "react";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-muted text-center text-small">
      <p className="mb-3">&copy; {currentYear} Vladimir Skesov</p>
    </footer>
  );
}

export default Footer;
