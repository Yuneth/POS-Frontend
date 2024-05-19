import React from "react";
import "./footer.css";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

export default function Footer() {
  
  return (
    <div class="footer-main">
      <div class="contact-area">
        <p>All Rights Reserved ©2024</p>
        <p>Contact : +94364455789</p>
        <p>Mail : etec10@gmail.com</p>
      </div>
      <div class="links">
        <BsInstagram /><div>Instagram</div>
        <BsFacebook /><div>Facebook</div>
        <BsTwitter /><div>Twitter</div>
        <BsLinkedin /><div>LinkedIn</div>
      </div>
    </div>
  );
}






