// Libraries, functions, etc.
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";
import axios from "axios";

/**
 * Saves an ad. If successful, the user will see the new Ad in a refreshed list of ads.
 *
 * On success: Logs a success message in the console.
 * On failure: Logs a failure message in the console.
 *
 * @function
 * @async
 * @param {number} jobId - The unique identifier for the job that the ad will be associated to.
 * @param {String} htmlCode - The generated text in Html-format, created by the AI API that the backend connects to.
 * @param {function} handleAdCRUDSuccess - Callback function that is invoked upon successful save to refresh the ad list.
 * @return {Promise<void>} A promise that resolves when the ad has been saved.
 */

export async function addJob(handleJobCRUDSuccess) {
  const instruction =
    "Du ska skapa en jobbannons på svenska i HTML-format med en professionell CSS styling. För att omarbeta en arbetsbeskrivning till en jobbannons, börja med att läsa igenom arbetsbeskrivningen noggrant för att förstå de huvudsakliga arbetsuppgifterna, nödvändiga kompetenser och kvalifikationer. Sedan, översätt denna information till en mer engagerande och tilltalande form som lockar potentiella kandidater. Det är viktigt att framhäva företagets kultur och de unika fördelarna med att arbeta där. Börja annonsen med en kort introduktion till företaget, följt av en översikt av jobbrollen. Använd en positiv och inkluderande ton, och undvik jargong. Gör klart vilka huvudsakliga ansvarsområden rollen innefattar och vilka färdigheter och erfarenheter som är önskvärda. Inkludera även information om eventuella förmåner eller möjligheter till personlig och professionell utveckling. Avsluta med hur man ansöker till tjänsten, inklusive viktiga datum och kontaktinformation. Kom ihåg att vara tydlig och koncis för att hålla potentiella kandidaters uppmärksamhet. En välformulerad jobbannons ska inte bara informera utan också inspirera och locka rätt talanger till att söka.";
  const email = extractEmailFromToken();
  const url = "http://localhost:8080/api/v1/jobs/addJob";

  try {
    const response = await axios.post(
      url,
      {
        email: email,
        title: "Add a Title",
        description: "Add a description",
        instruction: instruction,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Job Add Success");
    handleJobCRUDSuccess();
  } catch (error) {
    console.error("Error adding job", error);
  }
}
