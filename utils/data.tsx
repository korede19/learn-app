import Courses from "@/svgs/courses";
import DashboardIcon from "@/svgs/dashboard";
import Logout from "@/svgs/logout";
import Messages from "@/svgs/messages";
import Payments from "@/svgs/payments";
import Schedule from "@/svgs/schedule";
import Settings from "@/svgs/settings";
import Teams from "@/svgs/teams";

export const countryCodes = [
  { code: "+234", country: "Nigeria" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+86", country: "China" },
];

export interface SignupFormData {
  firstName: string | number | readonly string[] | undefined;
  lastName: string | number | readonly string[] | undefined;
  email: string;
  companyName: string;
  phoneNumber: string;
  countryCode: string;
  password: string;
  agreedToTerms: boolean;
}

export const sideBar = [
  {
    icon: <DashboardIcon />,
    label: "Dashboard",
    link: "/",
  },
  {
    icon: <Schedule />,
    label: "Schedule",
    link: "/schedule",
  },
  {
    icon: <Courses />,
    label: "My Courses",
    link: "/courses ",
  },
  {
    icon: <Messages />,
    label: "Messages",
    link: "/messages",
  },
  {
    icon: <Teams />,
    label: "Teams",
    link: "#",
  },
  {
    icon: <Payments />,
    label: "Payments",
    link: "#",
  },
  {
    icon: <Settings />,
    label: "Settings",
    link: "/settings",
  },
  {
    icon: <Logout />,
    label: "",
    link: "#",
  },
];
