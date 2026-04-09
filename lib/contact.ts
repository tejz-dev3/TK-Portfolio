export const CONTACT_EMAIL = "tejaswini.webdev11@gmail.com";
export const CONTACT_PHONE_DISPLAY = "+91 8106906911";
export const CONTACT_PHONE_TEL = "tel:+918106906911";
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/tejaswini-k-a4561122a/";

/** Gmail compose — avoids Windows routing mailto: to Edge instead of a mail app. */
const HIRE_ME_SUBJECT = "Application Opportunity - Frontend Developer";
const HIRE_ME_BODY =
  "Hi Tejaswini,\n\nI came across your portfolio and would like to discuss a role/opportunity with you.\n\nCompany:\nRole:\nLocation:\n\nThanks,";

export const GMAIL_COMPOSE_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(HIRE_ME_SUBJECT)}&body=${encodeURIComponent(HIRE_ME_BODY)}`;
