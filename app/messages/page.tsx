import PageLayout from "@/layouts/dashboardLayout/layout";
import MessagesApp from "@/components/messages/messagesApp";

const MessagesPage = () => {
  return (
    <PageLayout pageTitle="Courses" pageText="">
      <MessagesApp />
    </PageLayout>
  );
};

export default MessagesPage;
