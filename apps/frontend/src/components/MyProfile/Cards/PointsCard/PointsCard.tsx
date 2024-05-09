import classes from "./index.module.css";

const PointsCard = () => {
  return (
    <>
      <div className={classes.pointsCard}>
        <span className={classes.pointsCardUpper}>
          <h4>BODOVI</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none">
            <path
              d="M12.2037 7.21099C13.893 4.18166 14.737 2.66699 15.9997 2.66699C17.2623 2.66699 18.1063 4.18166 19.7957 7.21099L20.233 7.99499C20.713 8.85633 20.953 9.28699 21.3263 9.57099C21.6997 9.85499 22.1663 9.96033 23.0997 10.171L23.9477 10.363C27.2277 11.1057 28.8663 11.4763 29.257 12.731C29.6463 13.9843 28.529 15.2923 26.293 17.907L25.7143 18.583C25.0797 19.3257 24.761 19.6977 24.6183 20.1563C24.4757 20.6163 24.5237 21.1123 24.6197 22.103L24.7077 23.0057C25.045 26.495 25.2143 28.239 24.193 29.0137C23.1717 29.7897 21.6357 29.0817 18.5663 27.6683L17.7703 27.303C16.8983 26.9003 16.4623 26.7003 15.9997 26.7003C15.537 26.7003 15.101 26.9003 14.229 27.303L13.4343 27.6683C10.3637 29.0817 8.82766 29.7883 7.80766 29.015C6.785 28.239 6.95433 26.495 7.29166 23.0057L7.37966 22.1043C7.47566 21.1123 7.52366 20.6163 7.37966 20.1577C7.23833 19.6977 6.91966 19.3257 6.285 18.5843L5.70633 17.907C3.47033 15.2937 2.353 13.9857 2.74233 12.731C3.133 11.4763 4.773 11.1043 8.053 10.363L8.901 10.171C9.833 9.96033 10.2983 9.85499 10.673 9.57099C11.0463 9.28699 11.2863 8.85633 11.7663 7.99499L12.2037 7.21099Z"
              stroke="#326A3E"
              strokeWidth="1.5"
            />
          </svg>
        </span>

        <span className={classes.pointsCardLower}>1038</span>
      </div>
    </>
  );
};

export default PointsCard;