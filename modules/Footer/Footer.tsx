import { Link } from "../ui/Button/Link";
import { ImageCard } from "../ui/ImageCard/ImageCard";
import { FooterItem } from "./FooterItem/FooterItem";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="items-center">
      <div className="flex flex-col items-center space-y-10 bg-dark-green py-10 text-center text-elden-beige ">
        <FooterItem>
          <h3 className="mb-12 font-semibold">
            Meet us in one of our locations:
          </h3>
          <div className="flex flex-row md:space-x-24">
            <ImageCard
              alt="location liurnia"
              src="/images/location-liurnia.jpg"
              title="Main shop in Liurnia"
              description="Liurnia 15/3d"
              width={400}
              height={400}
            />
            <ImageCard
              alt="location leyndell"
              src="/images/location-leyndell.jpg"
              title="Secondary shop in Leyndell"
              description="Leyndel Colosseum 22d"
              width={400}
              height={400}
            />
          </div>
        </FooterItem>
        <FooterItem>
          <div className="flex-col space-y-4">
            <div className="justify-between space-x-4">
              <Link href="contact">Contact</Link>
              <Link href="faq">FAQ</Link>
              <Link href="about">About</Link>
            </div>
            <div className="flex justify-between space-x-4 text-2xl">
              <Link href="#">
                <BsTwitter />
              </Link>
              <Link href="#">
                <BsFacebook />
              </Link>
              <Link href="#">
                <BsGithub />
              </Link>
            </div>
          </div>
        </FooterItem>
      </div>
    </footer>
  );
}
