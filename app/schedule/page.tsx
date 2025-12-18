import PageLayout from "@/layouts/dashboardLayout/layout";
import scheduleData from "../../mocks/scheduleData.json";
import WeeklyCalendar from "@/components/schedule/weeklyCalender";
import UpcomingDeadlines from "@/components/schedule/upcomingDeadlines";

const SchedulePage = () => {
  return (
    <PageLayout pageTitle="Courses" pageText="">
      <div>
        <WeeklyCalendar events={scheduleData.events} />
        <UpcomingDeadlines deadlines={scheduleData.upcomingDeadlines} />
      </div>
    </PageLayout>
  );
};

export default SchedulePage;
