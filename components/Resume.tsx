import { FaLocationArrow } from "react-icons/fa6";
import animationData from "@/data/confetti.json";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import { useState } from "react";
import Lottie from "react-lottie";
import { IoMdDownload } from "react-icons/io";

const Footer = () => {
  const [download, setDownload] = useState(false);

  const defaultOptionsDownload = {
    loop: download,
    autoplay: download,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/Anish Kumar Resume.pdf"; // Path to your PDF file
    link.download = "Anish Kumar Resume.pdf"; // Download attribute specifies the filename for the downloaded file

    // Append to the body, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownload(true);
  };

  return (
    <div className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          width={100}
          height={100}
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Want to work with me? Download my<span className="text-purple"> {" "}Resume</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Explore my Resume and see how we can work together!
        </p>
        
          



            <div className="mt-5 relative">
              
              <div
                className={`absolute -bottom-5 right-0 ${download ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                {/* <Lottie options={defaultOptionsDownload} height={200} width={400} /> */}
              </div>

              <DownloadButton
                title={download ? "Resume is Downloaded!" : "Download my Resume"}
                icon={<IoMdDownload />}
                position="left"
                handleClick={handleDownload}
                otherClasses="!bg-[#161A31]"
              />
            </div>
         
        
      </div>
      
    </div>
  );
};

export default Footer;
