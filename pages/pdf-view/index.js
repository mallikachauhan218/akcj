import Footer from "@/components/common/footer2";
import Header from "@/components/common/header/header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const PdfViewer = () => {
  const router = useRouter();
  const { path } = router.query;

  const [loading, setLoading] = useState(true);
  const [isValidPath, setIsValidPath] = useState(false);

  useEffect(() => {
    if (path) {
      try {
        // Validate the provided URL
        new URL(path);
        setIsValidPath(true);
      } catch {
        setIsValidPath(false);
      } finally {
        setLoading(false); // Stop loading regardless of validation result
      }
    } else {
      setLoading(false); // Stop loading if path is not provided
    }
  }, [path]);

  if (loading) {
    return (
      <div
        className="flex justify-center items-center h-screen w-full"
        aria-busy="true"
      >
        <div className="loader">
          <ClipLoader color="#1A2A5B" size={40} />
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      {isValidPath ? (
        <div style={{ width: "100%", height: "100vh" }}>
          <iframe
            src={`${path}#toolbar=0&navpanes=0&scrollbar=0`}
            style={{ width: "100%", height: "100%", border: "none" }}
            title="PDF Viewer"
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen w-full">
          <p className="text-gray-600">
            {path
              ? "The provided URL is invalid or cannot be displayed."
              : "No file path provided. Please specify a valid PDF URL."}
          </p>
        </div>
      )}
      <Footer />
    </>
  );
};

export default PdfViewer;
