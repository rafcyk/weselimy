import { Heading } from "../Heading/Heading";

export const PrivacyPolicySection = ({ title, privacyPolicyText }) => {
  return (
    <section className={`section`}>
      <Heading className={`sectionHeading`}>{title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: privacyPolicyText }} />
    </section>
  );
};
