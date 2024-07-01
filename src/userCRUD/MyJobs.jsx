// Libraries, functions, etc.
import { useEffect, useState } from "react";
import { addJob } from "./jobFunctions/addJob.jsx";
import { getJobDtos } from "./jobFunctions/getJobDtos.jsx";
import { deleteJob } from "./jobFunctions/deleteJob.jsx";

// Custom components
import JobEdit from "./JobEdit.jsx";
import Ad from "./Ad.jsx";

// CSS
import { S_Header } from "../utils/styledGlobal.jsx";
import {
  S_JobList_Job_Ad_Container,
  S_FunctionalityButton_Box,
  S_JobEdit_Ad_Container,
} from "./styledComponents/styledUserGlobal.jsx";

import { S_AddSvg, S_DeleteSvg } from "../utils/styledSVG.jsx";

import {
  S_HorizontalLine,
  S_Preview,
  S_JobList_Container,
  S_JobCard,
  S_JobTitle,
  S_JobDetails,
  S_CheckboxContainer,
  S_CheckboxOptionContainer,
  S_Checkbox,
  S_CheckboxLabel,
} from "./styledComponents/styledMyJobs.jsx";
import { getNumberOfAds } from "./adFunctions/getNumberOfAds.jsx";

/**
 *
 *
 * States:
 * - 'jobList': An array of all the jobs that belong to the user.
 * - 'jobId': The identifier for the job currently being selected in jobList.
 * - 'refreshTable': When a change is made to the jobList, this function triggers the fetching of an updated list of jobs from the backend.
 * - 'jobVisible': If a job is being selected, it shows in the child component that deals with job UI.
 * - 'isChange': If a different job is being selected while there are unsaved changes in the text area of the child component that handles the job UI, a window confirm alert sets off that asks the user if it wants to proceed without saving.
 * - 'adsExist' - Sets to true if the job has a number of ad objects being more than 0.
 */

export default function MyJobs() {
  const [jobList, setJobList] = useState([]);
  const [jobId, setJobId] = useState(null);
  const [refreshTable, setRefreshTable] = useState(false);
  const [jobVisible, setJobVisible] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [numberOfAds, setNumberOfAds] = useState(0);

  console.log("MyJobs", jobId);

  /**
   * When the component mounts, all the jobs belonging to the user is being fetched from the backend.
   */

  useEffect(() => {
    // getAllMyJobs(setJobList);
    getJobDtos(setJobList);
  }, []);

  useEffect(() => {
    getJobDtos(setJobList);
  }, [refreshTable]);

  useEffect(() => {}, [jobId]);

  function handleAddJob(jobListLength) {
    addJob(handleJobCRUDSuccess, jobListLength);
  }

  /**
   * When clicking the delete button, a window confirm alert is being shown to the user.
   *
   * If the user clicks ok, and the deletion is successful, the job component will be invisible until a new job has been selected from the job list in the parent component.
   *
   * @param {number} jobId - This is the identifier for the current Job being handled by the user.
   */

  function handleDeleteJob(jobId) {
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob(jobId, handleJobCRUDSuccess);
      setJobVisible(false);
    } else {
      console.log("User cancelled delete");
    }
  }

  // TODO - Remove 'id', also check where this function is being invoked
  function handleUnsavedChanges() {
    if (window.confirm("Click OK to leave without saving?")) {
      setIsChange(false);
    }
  }

  /**
   * handlePreview compares the clicked id with the selected id. If it's not the same, the newly clicked job will be the new selected and a new job will show in the job UI. If it is the same, nothing happens.
   *
   * @param {number} id - The id of the job that was just clicked. It's not necessarily (but can be) the same as jobId, which is the job being selected.
   */

  // TODO - Look over the namings here. Is it still Preview we want to call it?
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

  /**
   * When a job is successfully added, updated, or deleted, refreshTable toggles (which then triggers an update of jobList)
   */

  function handleJobCRUDSuccess() {
    setRefreshTable((refresh) => !refresh);
  }

  /**
   * When a new job is selected, the ads related to that job needs to be shown in the ad UI.
   */

  async function handleAdCRUDSuccess() {
    console.log("MyJobs, handleAdCRUDSuccess called");

    const adsCount = await getNumberOfAds(jobId);
    if (adsCount !== undefined) {
      setNumberOfAds(adsCount);
    }
  }

  return (
    <>
      <S_JobList_Job_Ad_Container>
        {
          // Joblist
        }

        <S_Header>Jobs</S_Header>
        <S_HorizontalLine />
        <S_CheckboxContainer>
          <S_CheckboxOptionContainer>
            <S_Checkbox type="checkbox"></S_Checkbox>
            <S_CheckboxLabel htmlFor="current">Current</S_CheckboxLabel>
          </S_CheckboxOptionContainer>
          <S_CheckboxOptionContainer>
            <S_Checkbox type="checkbox"></S_Checkbox>
            <S_CheckboxLabel htmlFor="archived">Archived</S_CheckboxLabel>
          </S_CheckboxOptionContainer>
        </S_CheckboxContainer>
        <S_JobList_Container>
          {jobList.map((job) => (
            <S_JobCard
              key={job.id}
              $active={jobId === job.id ? "true" : "false"}
              onClick={() => {
                isChange ? handleUnsavedChanges(job.id) : handlePreview(job.id);
              }}
            >
              <S_JobTitle key={job.id}>
                {job.title.length > 20
                  ? job.title.slice(0, 20) + "..."
                  : job.title}
              </S_JobTitle>
              <S_JobDetails key={job.id}>
                {job.applicationDeadline}
              </S_JobDetails>
            </S_JobCard>
          ))}
        </S_JobList_Container>

        <S_FunctionalityButton_Box>
          {
            // Add New Job button
          }
          <S_AddSvg
            onClick={() => handleAddJob(jobList.length + 1)}
            alt="add"
          />
          {
            // Delete Job button
          }
          <S_DeleteSvg onClick={() => handleDeleteJob(jobId)} alt="delete" />
        </S_FunctionalityButton_Box>
      </S_JobList_Job_Ad_Container>
      {
        // Job and Ad components
      }
      <>
        {/* TODO - See if it's possible to remove S_Preview */}
        <S_Preview>
          {/**
           * Only if a job is selected will the job UI show.
           */}
          {jobVisible && (
            <>
              <S_JobEdit_Ad_Container>
                <JobEdit
                  key={jobId}
                  handleJobCRUDSuccess={handleJobCRUDSuccess}
                  jobId={jobId}
                  setIsChange={setIsChange}
                  setJobVisible={setJobVisible}
                  handleAdCRUDSuccess={handleAdCRUDSuccess}
                />
                {/**
                 * Only if the selected job has one or more ads will the ad UI show.
                 */}
                {numberOfAds > 0 && (
                  <Ad
                    numberOfAds={numberOfAds}
                    setNumberOfAds={setNumberOfAds}
                    jobId={jobId}
                    handleAdCRUDSuccess={handleAdCRUDSuccess}
                  />
                )}
              </S_JobEdit_Ad_Container>
            </>
          )}
        </S_Preview>
      </>
    </>
  );
}
