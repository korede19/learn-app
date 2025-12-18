import CourseApp from "@/components/courses";
import PageLayout from "@/layouts/dashboardLayout/layout";

const CoursesPage = () => {
  return (
    <PageLayout pageTitle="Schedule" pageText="">
      <CourseApp />
    </PageLayout>
  );
};

export default CoursesPage;
