import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import styles from "./HomePage.module.css";
import heroImage from "../../assets/hero_img.webp";
import { GoArrowUpRight } from "react-icons/go";
import { FaCheck, FaUser, FaQuestion } from "react-icons/fa";
import clsx from "clsx";
import { useAuth } from "../../hooks/useAuth";

const HomePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (currentUser) {
      navigate("/psychologists");
    } else {
      toast.error("Please login or register to continue");
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          The road to the <span className={styles.italicAccent}>depths</span> of
          the human soul
        </h1>
        <p className={styles.description}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button onClick={handleGetStarted} className={styles.ctaButton}>
          <GoArrowUpRight size={20} />
        </button>
      </div>

      <div className={styles.imageContainer}>
        <img
          src={heroImage}
          alt="Psychologist session"
          className={styles.heroImage}
        />

        <div className={clsx(styles.floatingElement, styles.usersIcon)}>
          <FaUser size={20} />
        </div>

        <div className={clsx(styles.floatingElement, styles.questionIcon)}>
          <FaQuestion size={20} />
        </div>

        <div className={clsx(styles.floatingElement, styles.experienceBadge)}>
          <div className={styles.checkIconWrapper}>
            <FaCheck size={30} />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.experienceText}>
              Experienced psychologists
            </span>
            <div className={styles.experienceCount}>15,000</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
