import FrameComponent from "../components/FrameComponent";
import CheckBox from "../components/CheckBox";
import NewEmployees from "../components/NewEmployees";
import TotalaEmployees from "../components/TotalaEmployees";
import FrameComponent2 from "../components/FrameComponent2";
import Button from "../components/Button";
import ItemDetails from "../components/ItemDetails";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./DashboardDesktop.module.css";

const DashboardDesktop = () => {
  return (
    <div className={styles.dashboardDesktop}>
      <div className={styles.dashboardDesktopInner}>
        <FrameComponent />
      </div>
      <main className={styles.background}>
        <div className={styles.backgroundChild} />
        <div className={styles.copyShift} />
        <section className={styles.checkBoxParent}>
          <CheckBox />
          <div className={styles.dashboardParent}>
            <h3 className={styles.dashboard}>Dashboard</h3>
            <div className={styles.frameParent}>
              <div className={styles.positionContainerParent}>
                <div className={styles.positionContainer}>
                  <div className={styles.positionsGrid}>
                    <NewEmployees
                      propBackgroundColor="#ffefe7"
                      availablePosition="Available Position"
                      prop="24"
                      urgentlyNeeded="4 Urgently needed"
                      propColor="#ff5151"
                    />
                    <NewEmployees
                      propBackgroundColor="#e8f0fb"
                      availablePosition="Job Open"
                      prop="10"
                      urgentlyNeeded="4 Active hiring"
                      propColor="#3786f1"
                    />
                    <NewEmployees
                      availablePosition="New Employees"
                      prop="24"
                      urgentlyNeeded="4 Department"
                    />
                  </div>
                </div>
                <div className={styles.employeeWidget}>
                  <div className={styles.talentRequest}>
                    <div className={styles.employeeCount}>
                      <div className={styles.totalCount}>
                        <div className={styles.totalEmployees}>
                          Total Employees
                        </div>
                        <div className={styles.countPlaceholder}>216</div>
                      </div>
                      <div className={styles.genderCount}>
                        <div className={styles.men}>120 Men</div>
                        <div className={styles.men}>96 Women</div>
                      </div>
                    </div>
                    <div className={styles.pastMonthContainerWrapper}>
                      <div className={styles.pastMonthContainer}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameWrapper}>
                            <div className={styles.vectorParent}>
                              <img
                                className={styles.frameChild}
                                alt=""
                                src="/vector-3.svg"
                              />
                              <div className={styles.chartPlaceholder}>+2%</div>
                              <img
                                className={styles.chartLabelIcon}
                                loading="lazy"
                                alt=""
                                src="/frame-20.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.vectorWrapper}>
                            <img
                              className={styles.frameItem}
                              alt=""
                              src="/vector-2.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.pastMonthLabel}>
                          <div className={styles.pastMonth}>+2% Past month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <TotalaEmployees />
                </div>
                <div className={styles.announcement}>
                  <div className={styles.announcementChild} />
                  <div className={styles.announcementsContent}>
                    <div className={styles.announcementList}>
                      <div className={styles.checkBox}>
                        <div className={styles.announcement1}>Announcement</div>
                        <div className={styles.checkBox1}>
                          <div className={styles.checkBox2}>
                            <div className={styles.today13Sep}>
                              Today, 13 Sep 2021
                            </div>
                          </div>
                          <img
                            className={styles.checkBox3}
                            alt=""
                            src="/frame-10-1.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.instanceParent}>
                        <FrameComponent2
                          propPosition="unset"
                          propTop="unset"
                          propLeft="unset"
                          propWidth="unset"
                          propAlignSelf="stretch"
                          outingScheduleForEveryDeparteme="Outing schedule for every departement"
                          minutesAgo="5 Minutes ago"
                          propPadding="10px 0px 0px"
                          bipinAngleFill="/bipinanglefill.svg"
                        />
                        <FrameComponent2
                          propPosition="unset"
                          propTop="unset"
                          propLeft="unset"
                          propWidth="unset"
                          propAlignSelf="stretch"
                          outingScheduleForEveryDeparteme="Meeting HR Department"
                          minutesAgo="Yesterday, 12:30 PM"
                          propPadding="10px 0px 0px"
                          bipinAngleFill="/bipinanglefill-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.instanceGroup}>
                    <FrameComponent2
                      outingScheduleForEveryDeparteme="IT Department need two more talents for UX/UI Designer position"
                      minutesAgo="Yesterday, 09:15 AM"
                      bipinAngleFill="/bipinanglefill-1.svg"
                    />
                    <button className={styles.checkBox4}>
                      <div className={styles.seeAllAnnouncement}>
                        See All Announcement
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.recentlyActivityParent}>
                <div className={styles.recentlyActivity}>
                  <div className={styles.recentlyActivityChild} />
                  <div className={styles.checkBox5}>
                    <div className={styles.recentlyActivity1}>
                      Recently Activity
                    </div>
                  </div>
                  <div className={styles.jobPostActivity}>
                    <div className={styles.jobPostDetails}>
                      <div className={styles.amFri10}>
                        10.40 AM, Fri 10 Sept 2021
                      </div>
                      <div className={styles.youPostedA}>
                        You Posted a New Job
                      </div>
                      <div className={styles.kindlyCheckThe}>
                        Kindly check the requirements and terms of work and make
                        sure everything is right.
                      </div>
                    </div>
                  </div>
                  <div className={styles.activitySummary}>
                    <div className={styles.checkBox6}>
                      <div className={styles.activityCountLabel}>
                        <div className={styles.todayYouMakes}>
                          Today you makes 12 Activity
                        </div>
                      </div>
                      <Button />
                    </div>
                  </div>
                </div>
                <div className={styles.upcomingSchedule}>
                  <div className={styles.upcomingScheduleChild} />
                  <div className={styles.scheduleList}>
                    <div className={styles.scheduleItems}>
                      <div className={styles.scheduleHeader}>
                        <div className={styles.checkBox7}>
                          <div className={styles.upcomingSchedule1}>
                            Upcoming Schedule
                          </div>
                          <div className={styles.checkBox1}>
                            <div className={styles.checkBox2}>
                              <div className={styles.today13Sep}>
                                Today, 13 Sep 2021
                              </div>
                            </div>
                            <img
                              className={styles.checkBox3}
                              alt=""
                              src="/frame-10-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <ItemDetails
                        priority="Priority"
                        thisIsTitle="Review candidate applications"
                        today1130AM="Today - 11.30 AM"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propWidth="unset"
                        propFlex="1"
                        propAlignSelf="unset"
                        propMinWidth1="168px"
                        propFontWeight="unset"
                        propHeight="unset"
                        propDisplay1="unset"
                        propPadding="10px 0px 0px"
                      />
                      <ItemDetails
                        priority="Other"
                        propDisplay="unset"
                        propMinWidth="unset"
                        thisIsTitle="Interview with candidates"
                        today1130AM="Today - 10.30 AM"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propWidth="unset"
                        propFlex="1"
                        propAlignSelf="unset"
                        propMinWidth1="168px"
                        propFontWeight="unset"
                        propHeight="unset"
                        propDisplay1="unset"
                        propPadding="10px 0px 0px"
                      />
                      <FrameComponent1
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propWidth="unset"
                        propFlex="unset"
                        propAlignSelf="stretch"
                        propMinWidth="168px"
                        thisIsTitle="Short meeting with product designer from IT Departement"
                        propFontWeight="unset"
                        today1130AM="Today - 09.15 AM"
                        propHeight="unset"
                        propDisplay="unset"
                        propPadding="22px 0px 0px"
                      />
                    </div>
                  </div>
                  <div className={styles.newSchedule}>
                    <FrameComponent1
                      thisIsTitle="Sort Front-end developer candidates"
                      today1130AM="Today - 11.30 AM"
                    />
                    <button className={styles.checkBox11}>
                      <div className={styles.seeAllAnnouncement}>
                        Creat a New Schedule
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.checkBox12} />
      </main>
    </div>
  );
};

export default DashboardDesktop;
