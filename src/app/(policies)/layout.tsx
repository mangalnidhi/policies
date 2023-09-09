import Link from "next/link";
import Connect from "../../components/Connect";

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="h-[80px] relative mx-auto bg-[#edeae5] text-[#343935] flex justify-between items-center px-12">
        <h3
          data-aos="fade-right"
          className="cursor-pointer absolute z-20 text-2xl w-[58%] font-made-mirage tracking-wide"
        >
          <p className="ul relative duration-700 tracking-wider w-fit">
            <Link href="https://aboutcraftindika.com/">CRAFTINDIKA©</Link>
          </p>
        </h3>
        <ul
          data-aos="fade-left"
          className="menu w-fit absolute z-20 right-0 text-sm tracking-wider hidden lg:flex justify-end items-center"
        >
          <li className="px-5 ul relative">
            <Link href="https://aboutcraftindika.com/">Company</Link>
          </li>
          <li className="ul relative px-5">
            <Link href="https://craftindika.com/">Collections</Link>
          </li>
          <li className="ul relative px-5">
            <Link href="https://craftindika.com/">Curations</Link>
          </li>
          <li className="ul relative px-5">
            <Link href="https://aboutcraftindika.com/partnership">
              CraftPartner
            </Link>
          </li>
          <li className="relative ul px-5">
            <span className=" cursor-pointer">
              <Connect />
            </span>
          </li>
        </ul>
        <div className="hidden max-lg:flex absolute z-20 right-0 justify-end w-[40%] items-center"></div>
      </nav>
      {children}
      <footer>this is the footer</footer>
    </section>
  );
}
