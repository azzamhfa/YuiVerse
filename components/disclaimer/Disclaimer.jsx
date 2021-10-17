import styles from "./Disclaimer.module.scss";

export default function Disclaimer() {
  return (
    <div className={styles.disclaimer}>
      <div className={styles.container}>
        <h1>Disclaimers</h1>
        <div>
          <p>
            Hello this is Azzam who build Yuiverse. Yuiverse is a non-profit,
            fanmade landing page created for Kobayashi Yui from Sakurazaka46. I
            build this page in purpose for Educational Purpose that is Learning
            ReactJS Framework (NEXTJS) and ExpressJs and for promoting my oshi
            Kobayashi Yui Herself.
          </p>
          <p>
            If you found bugs with this page, you can contact me via Twitter.
          </p>
          <p>
            All Contents has Credits from Sakurazaka46’s Official Website,
            Seed&Flower LLC, Sakuzaka Central, Sakurazka46’ Official Youtube and
            @yuiponpics (twitter). If there’s a problem with credits, feel free
            to DM me via Twitter @azzamhfa
          </p>
        </div>
      </div>
    </div>
  );
}
