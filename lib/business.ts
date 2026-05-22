// Business identity for legal pages. Values read from public env vars so they can be edited without code change.

export const BUSINESS = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "FlyPro",
  osek: process.env.NEXT_PUBLIC_BUSINESS_OSEK || "000000000",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "hello@flypro.co.il",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+972000000000",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "תל אביב, ישראל",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://flypro.co.il",
};

export const ACCESSIBILITY = {
  contactName: process.env.NEXT_PUBLIC_ACCESSIBILITY_CONTACT_NAME || "רכז נגישות",
  contactEmail: process.env.NEXT_PUBLIC_ACCESSIBILITY_CONTACT_EMAIL || "accessibility@flypro.co.il",
  contactPhone: process.env.NEXT_PUBLIC_ACCESSIBILITY_CONTACT_PHONE || "+972000000000",
};
