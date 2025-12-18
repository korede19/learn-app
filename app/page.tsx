import CourseSlider from "@/components/courseSlider";
import DashboardComp from "@/components/dashboard";
import PageLayout from "@/layouts/dashboardLayout/layout";
import continueWatchingData from "../mocks/continueWatching.json";
import DashboardStats from "@/components/dashboardStat";
import dashboardStatsData from "../mocks/statsData.json";

const Dashboard = () => {
  return (
    <PageLayout pageTitle="Dashboard" pageText="">
      <DashboardComp />
      <CourseSlider
        title="Continue Learning"
        courses={continueWatchingData.courses}
      />
      <DashboardStats
        popularCourses={dashboardStatsData.popularCourses}
        myProgress={dashboardStatsData.myProgress}
      />
    </PageLayout>
  );
};

export default Dashboard;
