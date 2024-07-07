// Functions, libraries, etc.
import { useEffect, useState } from "react";
import { getAdDtosByJobId } from "./adFunctions/getAdDtosByJobId.jsx";
import { deleteAd } from "./adFunctions/deleteAd";
import { downloadFile } from "./adFunctions/downloadFile.jsx";

// Styled Components
import { S_Header } from "../utils/styledGlobal";
import {
  S_Job_Container,
  S_FunctionalityButton_Box,
  S_HorizontalLine,
} from "./styledComponents/styledUserGlobal";
import { S_DeleteSvg, S_DownloadSvg } from "../utils/styledSVG.jsx";
import {
  S_TopButtons_Box,
  S_Ad_Tab,
  S_Iframe,
  S_IframeAndButtons_Container,
} from "./styledComponents/styledAd";

export default function Ad({ jobId, handleAdCRUDSuccess, numberOfAds }) {
  const [adList, setAdList] = useState([]);
  const [htmlCode, setHtmlCode] = useState("");
  const [adId, setAdId] = useState(0);
  const [activeAd, setActiveAd] = useState(null);

  useEffect(() => {
    getAdDtosByJobId(jobId, setAdList);
  }, [jobId]);

  useEffect(() => {
    getAdDtosByJobId(jobId, setAdList);
  }, [jobId, numberOfAds]);

  useEffect(() => {
    if (adList.length > 0) {
      const lastElement = adList[adList.length - 1];
      setAdId(lastElement.id);
      setActiveAd(adList.length - 1);
      setHtmlCode(lastElement.htmlCode);
    }
  }, [adList]);

  function handleDeleteAd(adId) {
    if (window.confirm("Are you sure you want to delete this ad?")) {
      deleteAd(adId, handleAdCRUDSuccess);
      setAdList(getAdDtosByJobId);
    }
  }

  const blob = new Blob([htmlCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  return (
    <>
      <S_Job_Container>
        <S_Header>Ad</S_Header>
        <S_HorizontalLine></S_HorizontalLine>
        <S_IframeAndButtons_Container>
          <S_TopButtons_Box>
            {adList.length > 0 &&
              adList.map((ad, index) => (
                <S_Ad_Tab
                  key={ad.id}
                  onClick={() => {
                    setHtmlCode(ad.htmlCode);
                    setActiveAd(index);
                    setAdId(ad.id);
                  }}
                  $active={activeAd === index ? "true" : "false"}
                >
                  Ad {index + 1}
                </S_Ad_Tab>
              ))}
          </S_TopButtons_Box>
          <S_Iframe src={url} title={"Ad Content"}></S_Iframe>
        </S_IframeAndButtons_Container>
        <S_FunctionalityButton_Box>
          <S_DeleteSvg onClick={() => handleDeleteAd(adId)} alt="delete" />
          <S_DownloadSvg
            onClick={() => downloadFile(htmlCode)}
            alt="download html file"
          />
        </S_FunctionalityButton_Box>
      </S_Job_Container>
    </>
  );
}
