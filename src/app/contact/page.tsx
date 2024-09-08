import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="We’re here to help! If you have any questions, feedback, or need assistance, please don’t hesitate to reach out. "
      />

      <Contact />
    </>
  );
};

export default ContactPage;
