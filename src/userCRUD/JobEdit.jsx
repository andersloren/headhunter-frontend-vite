// Libraries, functions, etc...
import { useEffect, useState } from "react";
import { updateJob } from "./jobFunctions/updateJob.jsx";
import { getJobById } from "./jobFunctions/getJobById.jsx";
import { generateJobAd } from "./jobFunctions/generateJobAd.jsx";

// Styled Components
import { S_Main } from "../utils/styledGlobal.jsx";
import {
  S_JobList_Job_Ad_Container,
  S_Header,
  S_PreviewBox,
  S_FunctionalityButton_Box,
} from "./styledComponents/styledUserGlobal.jsx";
import {
  S_UpdateSvg,
  S_GenerateSvg,
  S_Decision_HtmlSvg,
} from "./styledComponents/styledSvg.jsx";
import {
  S_Title_Input,
  S_TextArea,
  S_Animation_Text,
  S_Animation_Rotate,
  S_HourglassBottom,
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
 * @param {function} setIsChange - When the user makes any changes in the job text area, this state sets to true. If the user clicks on a new job when isChange is true, a window confirm alert shows up asking the user if it wants to proceed before saving.
 * @param {function} handleAdCRUDSuccess - When the user makes any changes in the job text area, this state sets to true. If the user clicks on a new job when isChange is true, a window confirm alert shows up asking the user if it wants to proceed before saving.
 * @param {Function} handleAdCRUDSuccess - Callback function invoked to refresh the list of job ads in the UI upon successful ad generation.
 */

export default function JobEdit({
  jobId,
  setIsChange,
  handleJobCRUDSuccess,
  handleAdCRUDSuccess,
}) {
  // States related to functionality
  const [job, setJob] = useState({}); // TODO - Either use it or remove it.
  const [active, setActive] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  // States related to job
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState(defaultInstructions);

  /**
   * If jobId changes, that new job is being fetched from the backend.
   *
   * Instruction is also set to 1, meaning that the file format that will be asked from the AI API is set to HTML. To change this, the user has to make an active decision on what file type it wants.
   */

  useEffect(() => {
    getJobById(jobId, setTitle, setDescription);
    handleAdCRUDSuccess();
  }, [jobId, handleAdCRUDSuccess]);

  useEffect(() => {}, []);

  /**
   * When clicking the button for generating an ad, a window confirm alert will show to prevent unwanted credit usage and time consuming events.
   *
   * If the user clicks OK, the HTTP request is being sent to the backend and isGenerating is set to true. This means that a loading animation will show on the screen and the user won't be able to interact with the functionality buttons until the response from the backend comes.
   */

  function handleGenerate() {
    if (
      window.confirm(
        "Are you sure you want to generate a new ad? Remember, the generation will take a short moment and consume credits."
      )
    ) {
      setIsGenerating(true);
      generateJobAd(jobId, handleAdCRUDSuccess, setIsGenerating);
    } else {
      console.log("User cancelled generation");
    }
  }

  /**
   * At the end of the process of updating a job, the isChange state is being reset by handleIsChange.
   *
   * Since the job is already being saved when the job is updated, there is no need for a window confirm alert to show unless the user changes the text areas again.
   */

  function handleUpdate() {
    updateJob(
      jobId,
      handleJobCRUDSuccess,
      title,
      description,
      instruction,
      handleIsChange
    );
  }

  // TODO - Maybe just put setIsChange where it is supposed to happen instead of pointing to this function.
  function handleIsChange() {
    setIsChange(false);
  }

  console.log("MyJobs, title", title);
  console.log("MyJobs, description", description);

  return (
    <S_Main>
      <S_JobList_Job_Ad_Container>
        {
          // Title input field
        }

        <S_Header>Title</S_Header>
        <S_Title_Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></S_Title_Input>

        {
          // Format decision buttons
          // As of right now, the only format option is HTML. The button is kept for the sake of clearity.
        }

        <S_Header>Format</S_Header>
        <S_FunctionalityButton_Box>
          <S_Decision_HtmlSvg
            $active={"true"} // Should the possibility to add more document types be implemented, change this to: $active={activeFormat === "1" ? "true" : "false"} where activeFormat handles which button is selected, hence which format type should be used.
            alt="html"
          />
        </S_FunctionalityButton_Box>
        {
          // Description text area
        }

        <S_Header>Description</S_Header>
        <S_PreviewBox>
          <S_TextArea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></S_TextArea>
        </S_PreviewBox>

        {
          // Functionality buttons
        }

        {
          // Save Job button
        }
        <S_FunctionalityButton_Box>
          {" "}
          <S_UpdateSvg
            alt="save job"
            $blur={isGenerating === true ? "true" : "false"}
            onClick={() => {
              handleUpdate();
            }}
          />
          {
            // Generate Ad button
          }
          <S_GenerateSvg
            alt="generate ad"
            $blur={isGenerating === true ? "true" : "false"}
            onClick={() => {
              setIsGenerating(true);
              handleUpdate();
              handleGenerate(jobId);
            }}
          />
          {
            // Delete Job button
          }
        </S_FunctionalityButton_Box>

        {
          // Generate loader animation
        }
        {isGenerating && (
          <>
            <S_Animation_Rotate
              $blur={isGenerating === true ? "true" : "false"}
            >
              <S_HourglassBottom />
            </S_Animation_Rotate>
            <S_Animation_Text>Generating ad...</S_Animation_Text>
          </>
        )}
        {
          // Instructions (for developing purposeses)
        }
        {/* <S_Header>Instructions</S_Header>
        <S_PreviewBox>
          <S_TextArea
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
          ></S_TextArea>
        </S_PreviewBox> */}
      </S_JobList_Job_Ad_Container>
    </S_Main>
  );
}

const defaultInstructions =
  "Du ska skapa en jobbannons på svenska i HTML-format med en professionell CSS styling. För att omarbeta en arbetsbeskrivning till en jobbannons, börja med att läsa igenom arbetsbeskrivningen noggrant för att förstå de huvudsakliga arbetsuppgifterna, nödvändiga kompetenser och kvalifikationer. Sedan, översätt denna information till en mer engagerande och tilltalande form som lockar potentiella kandidater. Det är viktigt att framhäva företagets kultur och de unika fördelarna med att arbeta där. Börja annonsen med en kort introduktion till företaget, följt av en översikt av jobbrollen. Använd en positiv och inkluderande ton, och undvik jargong. Gör klart vilka huvudsakliga ansvarsområden rollen innefattar och vilka färdigheter och erfarenheter som är önskvärda. Inkludera även information om eventuella förmåner eller möjligheter till personlig och professionell utveckling. Avsluta med hur man ansöker till tjänsten, inklusive viktiga datum och kontaktinformation. Kom ihåg att vara tydlig och koncis för att hålla potentiella kandidaters uppmärksamhet. En välformulerad jobbannons ska inte bara informera utan också inspirera och locka rätt talanger till att söka.";

const defaultDescription =
  "Tjänsten omfattar en utvecklare som behärskar frontend, backend och databashantering. I frontend används React för att skapa en interaktiv web applikation. Användaren lotsas runt med hjälp av React Router. Även DOMPurify, Bootstrap 5, CSS och Styled Components används för att lösa olika utmaningar. I backend används Java, Spring Boot, Spring Security och en koppling mot ett AI API. Databasen hanteras av MySQL. Azure används som molnplattform för projektet. Utvecklaren arbetar både indivuduellt och i tillsammans med teamet. Nya libraries och frameworks kan komma att introduceras. Projektet beräknas ha passerat utvecklingsfasen om 2 år.";
