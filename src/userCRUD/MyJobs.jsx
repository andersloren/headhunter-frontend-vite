// Libraries, functions, etc.
import { useEffect, useState } from "react";
import { addJob } from "./jobFunctions/addJob.jsx";
import { getJobCardDtosByEmail } from "./jobFunctions/getJobCardDtosByEmail.jsx";
import { deleteJob } from "./jobFunctions/deleteJob.jsx";
import { getNumberOfAdsByJobId } from "./adFunctions/getNumberOfAdsByJobId.jsx";

// Custom components
import JobEdit from "./JobEdit.jsx";
import Ad from "./Ad.jsx";

// CSS
import { S_Header } from "../utils/styledGlobal.jsx";
import {
  S_JobList_JobEdit_JobAd_Container,
  S_MyJobs_Container,
  S_FunctionalityButton_Box,
  S_HorizontalLine,
} from "./styledComponents/styledUserGlobal.jsx";

import { S_AddSvg, S_DeleteSvg } from "../utils/styledSVG.jsx";

import {
  S_JobList_Container,
  S_JobCard,
  S_JobTitle,
  S_JobDetails,
  S_CheckboxContainer,
  S_CheckboxOptionContainer,
  S_Checkbox,
  S_CheckboxLabel,
} from "./styledComponents/styledMyJobs.jsx";

/**
 *
 *
 * States:
 * - 'jobList': An array of all the jobs that belong to the user.
 * - 'jobId': The identifier for the job currently being selected in jobList.
 * - 'refreshTable': When a change is made to the jobList, this function triggers the fetching of an updated list of jobs from the backend.
 * - 'jobVisible': If a job is being selected, it shows in the child component that deals with job UI.
 * - 'adsExist' - Sets to true if the job has a number of ad objects being more than 0.
 */

export default function MyJobs() {
  const [jobList, setJobList] = useState([]);
  const [jobId, setJobId] = useState(null);
  const [refreshTable, setRefreshTable] = useState(false);
  const [jobVisible, setJobVisible] = useState(false);
  const [numberOfAds, setNumberOfAds] = useState(0);

  const [showArchived, setShowArchived] = useState(true);
  const [showCurrent, setShowCurrent] = useState(true);

  useEffect(() => {
    getJobCardDtosByEmail(setJobList);
  }, []);

  useEffect(() => {
    getJobCardDtosByEmail(setJobList);
  }, [refreshTable]);

  function handleAddJob(jobListLength) {
    addJob(handleJobCRUDSuccess, jobListLength);
  }

  function handleDeleteJob(jobId) {
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob(jobId, handleJobCRUDSuccess);
      setJobVisible(false);
    } else {
      console.log("User cancelled delete");
    }
  }

  function handlePreview(id) {
    if (jobId === null) {
      setJobId(id);
      setJobVisible(true);
    } else if (jobId !== id) {
      setJobId(id);
      setJobVisible(true);
    } else {
      setJobVisible(true);
    }
  }

  function handleJobCRUDSuccess() {
    setRefreshTable((refresh) => !refresh);
  }

  async function handleAdCRUDSuccess() {
    console.log("--> handleAdCrudSuccess");
    console.log("--> Get number of Ads after Generate", numberOfAds);
    const adsCount = await getNumberOfAdsByJobId(jobId);
    if (adsCount !== undefined) {
      setNumberOfAds(adsCount);
      console.log("--> Get number of Ads after setNumberOfAds", numberOfAds);
    }
  }

  function checkIfArchivedDate(jobDeadline) {
    let today = new Date();
    let jobDeadlineObject = new Date(jobDeadline);
    return jobDeadlineObject < today;
  }

  return (
    <>
      <S_JobList_JobEdit_JobAd_Container>
        <S_MyJobs_Container>
          <S_Header>Jobs</S_Header>
          <S_HorizontalLine />
          <S_CheckboxContainer>
            <S_CheckboxOptionContainer>
              <S_Checkbox
                type="checkbox"
                checked={showCurrent}
                value={showCurrent}
                onChange={() => setShowCurrent((is) => !is)}
              ></S_Checkbox>
              <S_CheckboxLabel htmlFor="current">Current</S_CheckboxLabel>
            </S_CheckboxOptionContainer>
            <S_CheckboxOptionContainer>
              <S_Checkbox
                type="checkbox"
                checked={showArchived}
                value={showArchived}
                onChange={() => setShowArchived((is) => !is)}
              ></S_Checkbox>
              <S_CheckboxLabel htmlFor="archived">Archived</S_CheckboxLabel>
            </S_CheckboxOptionContainer>
          </S_CheckboxContainer>
          <S_JobList_Container>
            {jobList.map((job) => {
              if (
                (showArchived &&
                  checkIfArchivedDate(job.applicationDeadline)) ||
                (showCurrent && !checkIfArchivedDate(job.applicationDeadline))
              )
                return (
                  <S_JobCard
                    key={job.id}
                    $active={jobId === job.id ? "true" : "false"}
                    onClick={() => {
                      handlePreview(job.id);
                    }}
                  >
                    <S_JobTitle>
                      {job.title.length > 20
                        ? job.title.slice(0, 20) + "..."
                        : job.title}
                    </S_JobTitle>
                    <S_JobDetails>{job.applicationDeadline}</S_JobDetails>
                  </S_JobCard>
                );
            })}
          </S_JobList_Container>
          <S_FunctionalityButton_Box>
            <S_AddSvg
              onClick={() => handleAddJob(jobList.length + 1)}
              alt="add"
            />
            <S_DeleteSvg onClick={() => handleDeleteJob(jobId)} alt="delete" />
          </S_FunctionalityButton_Box>
        </S_MyJobs_Container>
        {jobVisible && (
          <>
            <JobEdit
              key={jobId}
              handleJobCRUDSuccess={handleJobCRUDSuccess}
              jobId={jobId}
              setJobVisible={setJobVisible}
              handleAdCRUDSuccess={handleAdCRUDSuccess}
            />
            {numberOfAds > 0 && (
              <Ad
                setNumberOfAds={setNumberOfAds}
                jobId={jobId}
                handleAdCRUDSuccess={handleAdCRUDSuccess}
                numberOfAds={numberOfAds}
              />
            )}
          </>
        )}
      </S_JobList_JobEdit_JobAd_Container>
    </>
  );
}
