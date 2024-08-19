import dynamic from "next/dynamic";
import React from "react";
import IssueFormSkeletoton from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeletoton />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
