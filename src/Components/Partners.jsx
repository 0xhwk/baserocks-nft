import Footer from "./Footer";

import baseNameService from "../assets/partner-baseNameService.webp";
import beagleSwap from "../assets/partner-beagleSwap.webp";
import bullsOnBase from "../assets/partner-bullsOnBase.webp";
import innovaz from "../assets/partner-innovaz.webp";
import nftFeed from "../assets/partner-nftFeed.webp";
import omnisea from "../assets/partner-omnisea.webp";

const Partners = () => {
  return (
    <div className="partners-container jc-center h100 w100 bg-grad2">
      <div className="partners-inner-container  bg-grad flex-col jc-center w100 h100">
        <div className="jc-center flex-col h100 w100">
          <div className="partners-description flex-col jc-center  w100">
            <h1 className="partners-header fstrong ">Partners</h1>
          </div>
          <div className="flex-col  w100">
            <div className="partner-logos flex-se w100 ">
              <div className="flex-col jc-center h100">
                <img src={baseNameService} />
                {/* <p className="jc-center">Base Name Service</p> */}
              </div>
              <div className="flex-col h100">
                <img src={beagleSwap} />
                {/* <p className="jc-center">Beagle Swap</p> */}
              </div>
              <div className="flex-col h100">
                <img src={omnisea} />
                {/* <p className="jc-center">Omnisea</p> */}
              </div>
              <div className="flex-col h100">
                <img src={nftFeed} />
                {/* <p className="jc-center">NFT Feed</p> */}
              </div>
              <div className="flex-col h100">
                <img src={innovaz} />
                {/* <p className="jc-center">Innovaz</p> */}
              </div>
              <div className="flex-col h100">
                <img src={bullsOnBase} />
                {/* <p className="jc-center">Base Pepe</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
