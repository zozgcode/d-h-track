"use client"

import Link from "next/link";
import { footerLinks, socialLinks } from "./MockData";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { IconBaseProps } from "react-icons";
import { usePathname } from "next/navigation";
import Image from "next/image";
import dhlLogo from "../../assets/glo-footer-logo.svg";

type FooterLinkItem = { title: string; slug: string } | { form: boolean };

function isFooterLinkWithSlug(
  item: FooterLinkItem
): item is { title: string; slug: string } {
  return (item as { slug: string }).slug !== undefined;
}

interface IconComponents {
  [key: string]: React.ComponentType<IconBaseProps>;
}

const iconComponents: IconComponents = {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
};

export default function Footer() {
  const pathname = usePathname();

  const noHeader = ["/track"];

  return (
    <>
      {noHeader.includes(pathname) ? null : (
        <div className="mt-[150px]">
          <div className="bg-[#FAFAFA] pt-[30px] pb-[30px]">
            <div className="custom_container">
              <div>
                <div className="flex flex-col gap-[20px] md:flex-row">
                  {footerLinks.map((fLinks, index) => (
                    <div key={index} className="w-full">
                      <h3 className="text-[#191919] text-base font-bold mb-[11px]">
                        {fLinks.title}
                      </h3>
                      <ul>
                        {fLinks.list.map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-[5px]">
                            <Link href={item.slug} className="text-[#666] hover:underline text-xs font-normal leading-slug">
                                {item.title}
                              </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#f2f2f2] py-6">
            <div className="flex custom_container flex-wrap items-center justify-between gap-[5px] mt-[30px]">
              <Image src={dhlLogo} alt="logo" width={150} height={150} />
              <div className="flex gap-[20px]">
                {socialLinks.map((sLinks, index) => (
                  <div key={index} className="w-full flex flex-col gap-2">
                    <h3 className="text-[#191919] text-[12px] font-bold">
                      {sLinks.title}
                    </h3>
                    <ul className="flex gap-3">
                      {sLinks.list.map((item, itemIndex) => {
                        const IconComponent = iconComponents[item.icon];
                        return (
                          <li key={itemIndex} className="mb-[5px]">
                            <Link href={item.slug} className="text-[#666] text-xl">
                              <IconComponent />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="custom_container text-[#666] flex flex-col gap-6">
              <ul className="flex flex-wrap gap-3 text-sm items-center">
                <li>
                  <Link className="hover:underline" href="">
                  Fraud Awareness
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="">
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="">
                    Privacy Notice
                  </Link>
                </li>
              </ul>
              <div className="text-center text-sm">© FedEx 1995-2023</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
