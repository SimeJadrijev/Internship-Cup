import classes from "./index.module.css";

const HighlightedQuiz = ({
  message,
  quizDescription,
}: {
  message: string;
  quizDescription: string;
}) => {
  return (
    <div className={classes.highlightedQuiz}>
      <div className={classes.highlightedQuizUpper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="108"
          viewBox="0 0 85 108"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.1391 0C35.7471 0.329526 36.3329 0.574658 36.9471 0.749933C39.0844 1.35599 41.324 1.04235 45.8031 0.41508L45.8031 0.415075L48.7764 0H76.0357C76.5347 0.376739 76.9852 0.812582 77.3918 1.31304C81.2671 6.08297 78.5789 13.5611 73.2027 28.5172L73.1942 28.5409L71.8017 32.4162L71.8017 32.4162C70.2704 36.6719 69.5048 38.7998 69.6603 41.0159C69.8158 43.232 70.8813 45.2944 73.0123 49.4192L74.9464 53.1686L74.9534 53.1821C82.4294 67.6755 86.1647 74.9168 82.9878 79.9483C79.8104 84.9725 71.8158 84.457 55.8271 83.4171L51.6916 83.1461L51.6503 83.1435C47.1377 82.8515 44.869 82.7048 42.8368 83.4634C40.7938 84.228 39.2106 85.8154 36.049 88.9864L33.1698 91.8776L33.1475 91.9C22.0239 103.051 16.4625 108.626 10.6274 106.962C5.69302 105.56 3.32353 99.7716 0 88.6076V16C0 7.16345 7.16344 0 16 0H35.1391Z"
            fill="#5C93C9"
          />
        </svg>

        <svg
          id={classes.highlightedQuizBrain}
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="52"
          viewBox="0 0 51 52"
          fill="none"
        >
          <path
            d="M47.8124 21.2535C47.8124 18.9513 47.3589 16.6716 46.4779 14.5446C45.5969 12.4176 44.3055 10.485 42.6776 8.85707C41.0497 7.22915 39.117 5.9378 36.99 5.05678C34.8631 4.17575 32.5834 3.72229 30.2811 3.72229H17.5311C13.7269 3.72229 10.0785 5.2335 7.38856 7.92348C4.69859 10.6135 3.18738 14.2618 3.18738 18.066V22.8473C3.18738 24.9607 4.02694 26.9876 5.52137 28.482C7.0158 29.9765 9.04268 30.816 11.1561 30.816H12.0928C12.5679 30.816 12.9711 31.1529 13.1132 31.6063C13.5775 33.0872 14.4664 34.4065 15.6778 35.3954C17.1008 36.5571 18.8816 37.1914 20.7186 37.191H22.3377C22.6965 37.191 23.0279 37.3833 23.2059 37.6949L28.7944 47.4747C29.0694 47.9559 29.6833 48.1217 30.1631 47.8444L31.1828 47.2549C31.6616 46.9782 31.8248 46.3653 31.5472 45.8871L25.6752 35.7726C25.4187 35.2558 25.0268 34.8183 24.5413 34.5068C24.0557 34.1952 23.4947 34.0213 22.918 34.0035H20.7186C19.4506 34.0035 18.2344 33.4998 17.3378 32.6031C16.4411 31.7065 15.9374 30.4904 15.9374 29.2223C15.9374 27.9542 16.4411 26.7381 17.3378 25.8414C18.2344 24.9448 19.4506 24.441 20.7186 24.441H21.3124C21.8647 24.441 22.3124 23.9933 22.3124 23.441V22.2535C22.3124 21.7013 21.8647 21.2535 21.3124 21.2535H20.7186C18.8816 21.2532 17.1008 21.8875 15.6778 23.0492C14.4664 24.0381 13.5775 25.3574 13.1132 26.8383C12.9711 27.2917 12.5679 27.6285 12.0928 27.6285H11.1561C9.88806 27.6285 8.67193 27.1248 7.77527 26.2281C6.87862 25.3315 6.37488 24.1154 6.37488 22.8473V20.6598C6.37488 20.1075 6.82259 19.6598 7.37488 19.6598H9.56238C10.8304 19.6598 12.0466 19.1561 12.9432 18.2594C13.8399 17.3627 14.3436 16.1466 14.3436 14.8785V14.2848C14.3436 13.7325 13.8959 13.2848 13.3436 13.2848H12.1561C11.6038 13.2848 11.1561 13.7325 11.1561 14.2848V14.8785C11.1561 15.3012 10.9882 15.7066 10.6893 16.0055C10.3904 16.3044 9.98507 16.4723 9.56238 16.4723H7.65708C7.04795 16.4723 6.57729 15.9306 6.72613 15.3399C7.28212 13.1334 8.50266 11.1397 10.2358 9.63698C12.261 7.88103 14.8507 6.91293 17.5311 6.90979H26.0936C26.6459 6.90979 27.0936 7.35751 27.0936 7.90979V10.0973C27.0936 10.52 26.9257 10.9254 26.6268 11.2242C26.3279 11.5231 25.9226 11.691 25.4999 11.691H23.3124C22.7601 11.691 22.3124 12.1388 22.3124 12.691V13.8785C22.3124 14.4308 22.7601 14.8785 23.3124 14.8785H25.4999C26.7679 14.8785 27.9841 14.3748 28.8807 13.4781C29.7774 12.5815 30.2811 11.3654 30.2811 10.0973V7.91115C30.2811 7.35834 30.7302 6.90678 31.2816 6.94609C33.5993 7.11131 35.8475 7.83764 37.8297 9.06884C39.638 10.192 41.1677 11.6998 42.3146 13.4773C42.7168 14.1009 42.2404 14.8785 41.4984 14.8785H41.4374C40.1693 14.8785 38.9532 15.3823 38.0565 16.2789C37.1599 17.1756 36.6561 18.3917 36.6561 19.6598V20.2535C36.6561 20.8058 37.1038 21.2535 37.6561 21.2535H38.8436C39.3959 21.2535 39.8436 20.8058 39.8436 20.2535V19.6598C39.8436 19.2371 40.0115 18.8317 40.3104 18.5328C40.6093 18.234 41.0147 18.066 41.4374 18.066H43.4651C43.9297 18.066 44.3369 18.3854 44.4169 18.8431C44.5557 19.6386 44.6254 20.4451 44.6249 21.2535V22.8473C44.6249 24.9607 43.7853 26.9876 42.2909 28.482C40.7965 29.9765 38.7696 30.816 36.6561 30.816H32.8749C32.3226 30.816 31.8749 31.2638 31.8749 31.816V33.0035C31.8749 33.5558 32.3226 34.0035 32.8749 34.0035H36.6561C37.9484 34.0018 39.2278 33.7755 40.4378 33.3375C40.9107 33.1663 41.4374 33.5006 41.4374 34.0035C41.4374 35.2716 40.9336 36.4877 40.037 37.3844C39.1403 38.2811 37.9242 38.7848 36.6561 38.7848H36.0624C35.5101 38.7848 35.0624 39.2325 35.0624 39.7848V40.9723C35.0624 41.5246 35.5101 41.9723 36.0624 41.9723H36.6561C38.7696 41.9723 40.7965 41.1327 42.2909 39.6383C43.7853 38.1439 44.6249 36.117 44.6249 34.0035V31.049C44.6249 30.7873 44.7291 30.5374 44.9053 30.3439C46.7691 28.297 47.8088 25.6254 47.8124 22.8473V21.2535Z"
            fill="white"
            stroke="white"
          />
        </svg>

        <svg
          id={classes.highlightedQuizQuestionMark}
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
        >
          <path
            d="M31.9987 41.2606C28.8117 42.1112 26.5911 41.6939 23.7783 39.7021C23.7072 39.1323 23.6685 38.559 23.6626 37.9848C23.7918 34.378 23.9183 30.7711 24.1121 27.167C24.1928 25.7135 24.3005 24.2304 25.2641 22.8603C26.4 22.6154 27.6274 22.7392 28.8414 22.7446C30.848 22.7567 32.8434 22.443 34.7496 21.8159C36.5099 21.2399 37.6108 20.0852 38.2945 18.4325C38.6405 17.6463 38.7125 16.7667 38.4991 15.9346C37.3901 11.9671 34.6015 10.1233 30.9732 10.6724C28.3542 11.0654 25.9693 12.2013 23.7945 13.7275C22.306 14.7638 21.3397 16.2603 20.4245 17.7892L19.2751 19.7137C16.8688 18.7501 14.6938 17.2879 12.8932 15.4232C12.9228 14.3681 13.6038 13.5848 14.2202 12.8284C16.6131 9.89183 19.2536 7.19746 22.3706 5.00644C22.7366 4.72341 23.1255 4.47132 23.5334 4.25277C27.6974 2.28247 32.0095 1.53687 36.5638 2.65661C39.0589 3.26762 41.0562 4.65921 42.7546 6.51647C43.8313 7.71157 44.803 9.01972 45.8285 10.2848C46.8325 11.5559 47.6383 12.9716 48.2187 14.4838C49.2765 17.1055 49.2469 19.7972 48.5579 22.435C47.7504 25.517 45.6239 27.6084 42.8138 29.0242C41.9725 29.4106 41.0434 29.5658 40.1222 29.4737C38.7386 29.3903 37.3524 29.3445 35.9635 29.3122C35.5022 29.3046 35.0413 29.3443 34.5881 29.4307C33.8398 29.5653 33.3445 29.969 33.2422 30.7765C33.0484 32.1493 32.7793 33.514 32.6285 34.8921C32.4509 36.5071 32.3594 38.1221 32.2382 39.7371C32.1548 40.2566 32.0633 40.7761 31.9987 41.2606Z"
            fill="white"
          />
          <path
            d="M28.5668 59.7551C24.8927 59.8305 22.2817 56.8454 22.8147 53.6262C23.1377 51.6801 24.3166 50.0974 25.9316 48.94C26.379 48.6439 26.912 48.5048 27.4471 48.5443C30.101 48.7973 32.4078 49.6667 33.4926 52.4042C33.6555 52.7465 33.774 53.1084 33.8452 53.4808C34.0982 55.6557 32.2517 58.6381 30.1656 59.3837C29.6434 59.5499 29.1088 59.6741 28.5668 59.7551Z"
            fill="white"
          />
        </svg>
      </div>

      <div className={classes.highlightedQuizLower}>
        <h4>
          {message}: <br />
          {quizDescription}
        </h4>
      </div>
    </div>
  );
};

export default HighlightedQuiz;