// Libraries, functions, etc...
import { useEffect, useState } from "react";
import { update } from "./jobFunctions/update.jsx";
import { getJobDto } from "./jobFunctions/getJobDto.jsx";
import { generateJobAd } from "./jobFunctions/generateJobAd.jsx";
import { getInstruction } from "./jobFunctions/getInstruction.jsx";

// Styled Components
import { S_Header, S_SubHeader } from "../utils/styledGlobal.jsx";
import {
  S_Job_Container,
  S_FunctionalityButton_Box,
  S_HorizontalLine,
} from "./styledComponents/styledUserGlobal.jsx";
import {
  S_UpdateSvg,
  S_GenerateSvg,
  S_Decision_HtmlSvg,
  S_HourglassBottom,
} from "../utils/styledSVG.jsx";
import {
  S_JobEdit_Container,
  S_JobEdit_Details_Container,
  S_Input,
  S_TextArea,
  S_Animation_Text,
  S_Animation_Rotate,
} from "./styledComponents/styledJobEdit.jsx";

/**
 * The UI for showing, updating and deleting jobs. Different decisions creates hidden instructions for the AI API. It is also here that ads are being generated.
 *
 * States:
 * - 'job': When a job is being fetched from the database, it is being set as a state.
 * - 'active': Being active means that the current Job object being handled is highlighted in the parent component UI.
 * - 'activeButton': Functionality buttons in this components shows tooltips when the mouse hovers above them. ActiveButton tells which button is being hovered over, and triggers a tooltip to show below it.
 * - 'isGenerating': Turns to true when the user clicks the generate button, causing all functionality buttons will blur during the communication with the backend and the AI API.
 *
 * @param {function} handleJobCRUDSuccess - Callback function that is invoked upon successful deletion to refresh the UI.
 * @param {number} jobId - The id of the Job object currently being selected by the user.
 * @param {function} handleAdCRUDSuccess - When the user makes any changes in the job text area, this state sets to true.
 * @param {Function} handleAdCRUDSuccess - Callback function invoked to refresh the list of job ads in the UI upon successful ad generation.
 */

export default function JobEdit({
  savedJobTitle,
  jobId,
  handleJobCRUDSuccess,
  handleAdCRUDSuccess,
}) {
  // States related to functionality
  const [isGenerating, setIsGenerating] = useState(false);

  // States related to job
  const [savedTitle] = useState(savedJobTitle);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [recruiterName, setRecruiteName] = useState("");
  const [adCompany, setAdCompany] = useState("");
  const [adEmail, setAdEmail] = useState("");
  const [adPhone, setAdPhone] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");

  const [instruction, setInstruction] = useState("");

  useEffect(() => {
    getJobDto(
      jobId,
      setTitle,
      setDescription,
      setRecruiteName,
      setAdCompany,
      setAdEmail,
      setAdPhone,
      setApplicationDeadline,
    );
  }, [jobId]);

  useEffect(() => {
    setInstruction(
      getInstruction(
        recruiterName,
        adCompany,
        adEmail,
        adPhone,
        applicationDeadline,
      ),
    );
  }, [
    recruiterName,
    adCompany,
    adEmail,
    adPhone,
    applicationDeadline,
    setInstruction,
  ]);

  useEffect(() => {
    getJobDto(
      jobId,
      setTitle,
      setDescription,
      setRecruiteName,
      setAdCompany,
      setAdEmail,
      setAdPhone,
      setApplicationDeadline,
    );
    handleAdCRUDSuccess();
  }, [jobId, handleAdCRUDSuccess]);

  function handleGenerate() {
    if (
      window.confirm(
        "Are you sure you want to generate a new ad? Remember, generating a new ad consumes credits.",
      )
    ) {
      setIsGenerating(true);
      generateJobAd(jobId, handleAdCRUDSuccess, setIsGenerating);
    } else {
      console.log("User cancelled generation");
    }
  }

  function handleUpdate() {
    if (title.length == 0) {
      window.alert("Title cannot be empty");
      setTitle(savedTitle);
    } else {
      update(
        jobId,
        handleJobCRUDSuccess,
        title,
        description,
        instruction,
        recruiterName,
        adCompany,
        adEmail,
        adPhone,
        applicationDeadline,
      );
    }
  }
  return (
    <>
      <S_Job_Container>
        <S_Header>Edit Job</S_Header>
        <S_HorizontalLine></S_HorizontalLine>
        <S_JobEdit_Container>
          <S_JobEdit_Details_Container>
            <S_SubHeader>Title</S_SubHeader>
            <S_Input
              value={title}
              placeholder={"Add a title"}
              onChange={(e) => setTitle(e.target.value)}
            ></S_Input>
            <S_SubHeader>Ad Format</S_SubHeader>
            <S_Decision_HtmlSvg
              $active={"true"} // Should the possibility to add more document types be implemented, change this to: $active={activeFormat === "1" ? "true" : "false"} where activeFormat handles which button is selected, hence which format type should be used.
              alt="html"
            />
            <S_SubHeader>Job application deadline</S_SubHeader>
            <S_Input
              type="date"
              value={applicationDeadline}
              onChange={(e) => setApplicationDeadline(e.target.value)}
            ></S_Input>
            <S_SubHeader>Job Description</S_SubHeader>
          </S_JobEdit_Details_Container>
          <S_JobEdit_Details_Container>
            <S_SubHeader>Job Details</S_SubHeader>

            <S_Input
              placeholder={"Name of recruiter"}
              value={recruiterName}
              onChange={(e) => setRecruiteName(e.target.value)}
            ></S_Input>
            <S_Input
              placeholder={"Name of the company"}
              value={adCompany}
              onChange={(e) => setAdCompany(e.target.value)}
            ></S_Input>
            <S_Input
              type="email"
              placeholder={"Contact email"}
              value={adEmail}
              onChange={(e) => setAdEmail(e.target.value)}
            ></S_Input>
            <S_Input
              type="tel"
              placeholder={"Contact phone number"}
              value={adPhone}
              onChange={(e) => setAdPhone(e.target.value)}
            ></S_Input>
          </S_JobEdit_Details_Container>
        </S_JobEdit_Container>
        <S_TextArea
          value={description}
          placeholder={"Add a description"}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></S_TextArea>
        <S_FunctionalityButton_Box>
          {" "}
          <S_UpdateSvg
            alt="save job"
            $blur={isGenerating === true ? "true" : "false"}
            onClick={() => {
              handleUpdate();
            }}
          />
          <S_GenerateSvg
            alt="generate ad"
            $blur={isGenerating === true ? "true" : "false"}
            onClick={() => {
              handleUpdate();
              handleGenerate(jobId);
            }}
          />
        </S_FunctionalityButton_Box>
        {isGenerating && (
          <>
            <S_Animation_Rotate
              $blur={isGenerating === true ? "true" : "false"}
            >
              <S_HourglassBottom />
            </S_Animation_Rotate>
            <S_Animation_Text>
              Ad is being generated. Please wait...
            </S_Animation_Text>
          </>
        )}
      </S_Job_Container>
    </>
  );
}
