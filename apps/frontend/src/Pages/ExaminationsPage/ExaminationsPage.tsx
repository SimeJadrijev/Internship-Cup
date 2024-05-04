import ExaminationCard from "../../components/Examinations/ExaminationCard";
import FilterIcon from "../../components/Examinations/FilterIcon";
import SearchBar from "../../components/Examinations/SearchBar";
import Navbar from "../../components/Other/Navbar";
import classes from "./index.module.css";

const ExaminationsPage = () => {
  return (
    <>
      <div className={classes.examinationsPageWrapper}>
        <h1>Preventivni pregledi</h1>

        <div className={classes.examinationsPageLower}>
          <div className={classes.examinationsPageSearch}>
            <SearchBar />
            <FilterIcon />
          </div>

          <p>
            Bio si na pregledu? <span>Upiši kod</span> i osvoji 100 bodova.
          </p>

          <div className={classes.examinationsContainer}>
            <ExaminationCard
              category="Stomatologija"
              description="Besplatan pregled oralnog zdravlja"
              location="gornji grad, Osijek"
              time="22.5. (Srijeda) u 8h"
            />
            <ExaminationCard
              category="Dermatologija"
              description="Besplatan pregled madeža"
              location="Đardin, Split"
              time="26.5. (Subota) u 10h"
            />
            <ExaminationCard
              category="Stomatologija"
              description="Besplatan pregled oralnog zdravlja"
              location="gornji grad, Osijek"
              time="22.5. (Srijeda) u 8h"
            />

            <ExaminationCard
              category="Stomatologija"
              description="Besplatan pregled oralnog zdravlja"
              location="gornji grad, Osijek"
              time="22.5. (Srijeda) u 8h"
            />

            <ExaminationCard
              category="Dermatologija"
              description="Besplatan pregled madeža"
              location="Đardin, Split"
              time="26.5. (Subota) u 10h"
            />
          </div>
        </div>
      </div>

      <Navbar />
    </>
  );
};

export default ExaminationsPage;
