import ExCards from "../Components/ExCards";
import "../Components/style.css";
import InfyLogo from "../Assets/Infy.jpg";
import TcsLogo from "../Assets/tcs.png";
import MogliLogo from "../Assets/moglix.png";
import StickyBar from "../Components/StickyBar";

function Experience() {
  return (
    <>
      <StickyBar></StickyBar>
      <div className="experience-container">
        {[
          {
            cardTitle: "Infosys",
            designation: "Technology Analyst",
            Responsibilities:
              "Cloud Engineer | Full Stack Developer | AEM Developer",
            imgSrc: InfyLogo,
            bColor: "#0579c2",
          },
          {
            cardTitle: "TCS",
            designation: "Systems Engineer",
            Responsibilities:
              "Full Stack Developer | Security Ninja | Cloud Architecture Spoc | Project Induction Trainer",
            imgSrc: TcsLogo,
            bColor: "#a309b6",
          },
          {
            cardTitle: "Moglix",
            designation: "Digital Marketing and Analytics Intern",
            Responsibilities:
              "Digital Marketing | Competitive Research Analyst | Data Analyst",
            imgSrc: MogliLogo,
            bColor: "#db232e",
          },
        ].map((variant) => (
          <ExCards
            cardTitle={variant.cardTitle}
            Designation={variant.designation}
            Responsibilities={variant.Responsibilities}
            imgSrc={variant.imgSrc}
            bColor={variant.bColor}
          ></ExCards>
        ))}
      </div>
    </>
  );
}

export default Experience;
