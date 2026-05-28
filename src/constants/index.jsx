
import online from "../assets/icon-online.svg";
import budget from "../assets/icon-budgeting.svg";
import onboard from "../assets/icon-onboarding.svg";
import open from "../assets/icon-api.svg";

import currency from "../assets/image-currency.jpg";
import restaurant from "../assets/image-restaurant.jpg";
import confetti from "../assets/image-confetti.jpg";
import plane from "../assets/image-plane.jpg";


export const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

export const features = [
  {
    icon: online,
    text: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: budget,
    text: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    icon: onboard,
    text: "Fast Onboarding",
    description:
      "  We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
 
  {
    icon: open,
    text: "Open API",
    description:
      "  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
  
];

export const articles = [
  {
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    image: currency,
    text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
 {
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    image: restaurant,
    text: " Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
   {
    author: "Wilson Hutton",
    title: "Take your Digitalbank card wherever you go",
    image: plane,
    text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
{
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    image: confetti,
    text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
 
];

export const aboutLinks = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Contact" },
  { href: "#", text: "Blog" },
  
];

export const careerLinks = [
  { href: "#", text: "Careers" },
  { href: "#", text: "Support" },
  { href: "#", text: "Privacy Policy" },
];