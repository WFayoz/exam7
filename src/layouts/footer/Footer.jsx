import { IoLocationOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { FaPhoneVolume, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/icons/LogoGreen.svg";
import Group1 from "../../assets/imgs/g1.png";
import Group2 from "../../assets/imgs/g2.png";
import Group3 from "../../assets/imgs/g3.png";
import Pay from "../../assets/imgs/pay.png";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/", icon: FaFacebookF },
    { href: "https://www.instagram.com/", icon: FaInstagram },
    { href: "https://x.com/", icon: FaTwitter },
    { href: "https://www.linkedin.com/", icon: FaLinkedinIn },
    { href: "https://www.youtube.com/", icon: FaYoutube }
  ];

  const accountLinks = ["My Account", "Contact us", "Contact us", "Contact", "Specials"];
  const helpCenterLinks = ["Help Center", "How to Buy", "Shipping & Delivery", "Product Policy", "How to Return"];
  const productLinks = ["House Plants", "Potter Plants", "Seeds", "Small Plants", "Accessories"];

  return (
    <div className="mt-24">
      <div className="flex gap-4 bg-[#FBFBFB] p-7">
        {[Group1, Group2, Group3].map((src, idx) => (
          <div key={idx} className="p-7 flex items-center border-r-2 last:border-0">
            <img src={src} alt={`img-${idx}`} className="w-40 h-52 object-contain" />
          </div>
        ))}
        <div className="flex-1 p-7">
          <h1 className="text-xl font-bold mb-4">Would you like to join newsletters?</h1>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="enter your email address..."
              className="flex-1 p-2 border border-gray-300 rounded-l-md outline-none"
            />
            <button className="h-full bg-green-700 text-white py-2 px-4 rounded-r-md cursor-pointer">
              Join
            </button>
          </div>
          <p className="text-[#727272]">
            We usually post offers and challenges in newsletters. We’re your online houseplant destination.
            We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="flex p-7 bg-[#46A3581A] gap-16">
        <img src={Logo} alt="logo" />
        <div className="flex gap-3 items-center cursor-pointer">
          <IoLocationOutline className="w-6 h-6 text-green-500" />
          <a
            href="https://www.google.com/maps/place/Rayhon+National+Meals+Restaurant/@41.2831386,69.2043005,15z/data=!4m6!3m5!1s0x38ae8a31ca66d417:0x5755ff29b7bf33a!8m2!3d41.2858377!4d69.2056945!16s%2Fg%2F11gd21npmv?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <p>
              70 West Buckingham Ave.<br /> Farmingdale, NY 11735
            </p>
          </a>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <TiContacts className="w-6 h-6 text-green-500" />
          <p>
            <a href="mailto:contact@greenshop.com" className="cursor-pointer">
              contact@greenshop.com
            </a>
          </p>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <FaPhoneVolume className="w-5 h-5 text-green-500" />
          <p>+88 01911 717 490</p>
        </div>
      </div>
      <div className="flex bg-[#FBFBFB] justify-between">
        <div className="p-7">
          <ul>
            <li className="text-xl font-semibold mb-3 text-black">My Account</li>
            {accountLinks.map((link, idx) => (
              <li key={idx} className="text-[#3D3D3D] opacity-80 mb-1 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-7">
          <ul>
            <li className="text-xl font-semibold mb-3 text-black">Help & Guide</li>
            {helpCenterLinks.map((link, idx) => (
              <li key={idx} className="text-[#3D3D3D] opacity-80 mb-1 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-7">
          <ul>
            <li className="text-xl font-semibold mb-3 text-black">Categories</li>
            {productLinks.map((link, idx) => (
              <li key={idx} className="text-[#3D3D3D] opacity-80 mb-1 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-7">
          <ul>
            <li className="text-xl font-semibold mb-5 text-black">Social Media</li>
            <div className="flex gap-2">
              {socialLinks.map(({ href, icon: Icon }, idx) => (
                <p key={idx} className="border p-2 rounded-md border-[#46A35833] cursor-pointer">
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-[#46A35899]" />
                  </a>
                </p>
              ))}
            </div>
            <li className="text-xl font-semibold my-5 text-black">We accept</li>
            <img src={Pay} alt="payment methods" />
          </ul>
        </div>
      </div>
      <hr />
      <h1 className="text-[#3D3D3D] my-2 text-center">© 2021 GreenShop. All Rights Reserved.</h1>
    </div>
  );
};

export default Footer;
