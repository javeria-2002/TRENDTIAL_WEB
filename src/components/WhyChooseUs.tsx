import React, { useEffect, useState, useRef } from "react";

function WhyChooseUs() {
  const [designWidth, setDesignWidth] = useState(0);
  const [marketingWidth, setMarketingWidth] = useState(0);
  const [developmentWidth, setDevelopmentWidth] = useState(0);
  const [photographyWidth, setPhotographyWidth] = useState(0);
  const sectionRef = useRef(null); // Create a reference for the section

  useEffect(() => {
    const animateWidth = (setter, targetWidth) => {
      let currentWidth = 0;
      const step = Math.ceil(targetWidth / 100); // Increment step
      const interval = setInterval(() => {
        if (currentWidth < targetWidth) {
          currentWidth += step;
          setter(Math.min(currentWidth, targetWidth)); // Ensure it doesn't exceed targetWidth
        } else {
          clearInterval(interval); // Clear interval when target reached
        }
      }, 20); // Adjust timing for speed
    };

    // Function for observing when the section enters view
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateWidth(setDesignWidth, 60);
              animateWidth(setMarketingWidth, 80);
              animateWidth(setDevelopmentWidth, 90);
              animateWidth(setPhotographyWidth, 65);
              observer.unobserve(sectionRef.current); // Stop observing once animated
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the section is in view
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current); // Start observing the section
      }

      // Cleanup observer on component unmount
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    } catch (error) {
      console.error("IntersectionObserver error:", error);
    }
  }, []);

  return (
    <div ref={sectionRef} className="mx-auto px-6 py-12" style={{ maxWidth: "85%" }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Why Choose Us</h2>
        <div className="w-12 h-1 mx-auto mt-5" style={{ backgroundColor: "#000" }}></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">
            Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt
            mollit anim id est laborum. Sed perspiciatis unde omnis an natus error sit
            voluptatem.
          </p>
          <p className="text-gray-500">
            Totam rem aperiam eaque ipsa quae illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>

        <div className="space-y-6">
          {/* Progress bar item for Design */}
          <div>
            <div className="flex justify-between">
              <span>Design</span>
              <span>{designWidth}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-gray-800 h-2 rounded transition-all duration-500"
                style={{ width: `${designWidth}%` }}
              ></div>
            </div>
          </div>

          {/* Progress bar item for Marketing */}
          <div>
            <div className="flex justify-between">
              <span>Marketing</span>
              <span>{marketingWidth}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-gray-800 h-2 rounded transition-all duration-500"
                style={{ width: `${marketingWidth}%` }}
              ></div>
            </div>
          </div>

          {/* Progress bar item for Development */}
          <div>
            <div className="flex justify-between">
              <span>Development</span>
              <span>{developmentWidth}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-gray-800 h-2 rounded transition-all duration-500"
                style={{ width: `${developmentWidth}%` }}
              ></div>
            </div>
          </div>

          {/* Progress bar item for Photography */}
          <div>
            <div className="flex justify-between">
              <span>Photography</span>
              <span>{photographyWidth}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-gray-800 h-2 rounded transition-all duration-500"
                style={{ width: `${photographyWidth}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
