"use client";

import { utilities } from "@/utility";
import { useEffect } from "react";

const PreLoader = () => {
  useEffect(() => {
    utilities.preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default PreLoader;
