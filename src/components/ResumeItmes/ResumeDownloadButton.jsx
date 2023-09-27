import React from "react";
// import {down} from '../../assets/images/contact/contactImg.png'
import { project1 } from "../../assets";
function DownloadButton() {
  const resumePdfUrl = {project1}; // Replace with your resume PDF URL

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = resumePdfUrl;
    a.download = "Unish_Rai.pdf"; // Rename the downloaded file as desired
    a.click();
  };

  return (
    <button className="text-white" onClick={handleDownload}>Download Resume</button>
  );
}

export default DownloadButton;
