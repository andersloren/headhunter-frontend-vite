export const getInstruction = (
  recruiterName,
  adCompany,
  adEmail,
  adPhone,
  applicationDeadline
) => {
  const instruction = `You are to create a job advertisement in English in HTML format with professional CSS styling. The styling should make the ad noticeable but yet the impression should not be overwhelming. To convert a job description into a job advertisement, start by reading the job description carefully to understand the main duties, necessary skills, and qualifications. Then, translate this information into a more engaging and appealing form that attracts potential candidates. It is important to highlight the company's culture and the unique benefits of working there. Begin the advertisement with a short introduction to the company, followed by an overview of the job role. Use a positive and inclusive tone, and avoid jargon. Clearly state the main responsibilities of the role and the skills and experiences that are desirable. Also include information about any benefits or opportunities for personal and professional development. Conclude with how to apply for the position, including important dates and contact information. Remember to be clear and concise to maintain the attention of potential candidates. A well-written job advertisement should not only inform but also inspire and attract the right talents to apply. The name of the recruiter is ${recruiterName}, the name of the company is ${adCompany}, the contact email address is ${adEmail}, the contact phone number is ${adPhone}, the application deadline is ${applicationDeadline}`;

  return instruction;
};
