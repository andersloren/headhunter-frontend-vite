// Functions, libraries, etc.
import { useEffect, useState } from "react";
import { findAllAdsByJobId } from "./adFunctions/findAllAdsByJobId";
import { deleteAd } from "./adFunctions/deleteAd";

// Styled Components
import { S_Main } from "../utils/styledGlobal";
import {
  // S_FunctionalityButton,
  S_FunctionalityButton_Box,
  S_Header,
  S_JobList_Job_Ad_Container,
  S_DeleteSvg,
  S_PreviewBox,
} from "./styledComponents/styledUserGlobal";
import {
  S_TopButtons_Box,
  S_Buttons_Edit,
  S_Iframe,
  S_IframeAndButtons_Container,
} from "./styledComponents/styledAd";

/**
 * The UI for showing and deleting ads.
 *
 * States:
 * - 'adList': Array of ads belonging to a certain Job object.
 * - 'htmlCode': HTML-code in string format that makes up a publishable ad.
 * - 'adId': The String identifier for the ad.
 * - 'activeAd': The ad that is currently being shown in the UI.
 * @param {number} jobId - The number identifier for the Job object that the adList belongs to.
 * @param {function} handleAdCRUDSuccess - When front-end caused changes in the Ad database happens, the clickable tabs in the UI that allows the user to inspect different ads should update to show the available ads.
 */

export default function Ad({ jobId, handleAdCRUDSuccess, numberOfAds }) {
  // TODO - Change adList to adArray?
  const [adList, setAdList] = useState([]);
  const [htmlCode, setHtmlCode] = useState("");
  const [adId, setAdId] = useState(0);
  const [activeAd, setActiveAd] = useState(null);

  useEffect(() => {
    if (numberOfAds > 0 && jobId !== undefined) {
      findAllAdsByJobId(jobId, setAdList);
    }
  }, [jobId, numberOfAds]);

  /**
   * When the length of the adList changes, the current loaded HTML-code should be emptied to prevent that HTML-code from a deleted Ad object is being shown.
   *
   */

  useEffect(() => {
    if (!adList.length) {
      setHtmlCode("");
    }
  }, [setHtmlCode, adList.length]);

  /**
   * When a new Job object is being selected in the parent component, that jobId needs to be handed down to this component so its related ads chan be loaded and shown to the user.
   */

  useEffect(() => {
    findAllAdsByJobId(jobId, setAdList);
  }, [jobId]);

  /**
   * TODO - Write a comment for this useEffect
   */

  useEffect(() => {
    if (adList.length > 0) {
      const lastElement = adList[adList.length - 1];
      setAdId(lastElement.id);
      setActiveAd(adList.length - 1);
      setHtmlCode(lastElement.htmlCode);
    }
  }, [adList]);

  /**
   * An ad can be be handed a string value in a the htmlcode field. That string is passed a backend test for truly being in HTML-format.
   *
   * In order to turn htmlCode into a viewable HTML-page, we need to convert it to a blob that can be read by the iframe-element.
   */

  const blob = new Blob([htmlCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  /**
   * If the user clicks the delete button, an window alert asks the user to continue the process or cancel it.
   *
   * @function
   */

  function handleDeleteAd(adId) {
    if (window.confirm("Are you sure you want to delete this ad ?")) {
      deleteAd(adId, handleAdCRUDSuccess);
    } else {
      console.log("User cancelled delete");
    }
  }

  return (
    <S_Main>
      <S_JobList_Job_Ad_Container>
        <S_Header>Ad</S_Header>

        {
          // Ad list tabs
        }
        <S_IframeAndButtons_Container>
          <S_TopButtons_Box>
            {adList.map((ad, index) => (
              <S_Buttons_Edit
                key={ad.id}
                /**
                 * These buttons appears as tabs above the iframe element. By clicking these tabs, the user can switch between ads in the adsList. When a tab is being clicked it turns active and is being highlighted.
                 */
                onClick={() => {
                  setHtmlCode(ad.htmlCode);
                  setActiveAd(index);
                  setAdId(ad.id);
                }}
                $active={activeAd === index ? "true" : "false"}
              >
                Ad {index + 1}
              </S_Buttons_Edit>
            ))}
          </S_TopButtons_Box>
          {
            // Iframe for Ad
          }

          <S_PreviewBox>
            <S_Iframe src={url} title={"Ad Content"}></S_Iframe>
          </S_PreviewBox>
        </S_IframeAndButtons_Container>
        <S_FunctionalityButton_Box>
          {/* <S_FunctionalityButton> */}
          {
            // Delete Ad button
          }
          <S_DeleteSvg
            onClick={() => handleDeleteAd(adId)}
            src="/google-icons/delete.svg"
            alt="delete"
          />
          {/* </S_FunctionalityButton> */}
        </S_FunctionalityButton_Box>
      </S_JobList_Job_Ad_Container>
    </S_Main>
  );
}
