import DashboardIcon from '@mui/icons-material/Dashboard';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';

export const navBarPrimaryItems = [
    {
        id: "dashboard",
        icon: <DashboardIcon/>,
        element: "Dashboard",
        route: "/dashboard"
    }, 
    {
        id: "calender",
        icon: <DateRangeIcon/>,
        element: "Calender",
        route: "/calender"
    }
]

export const navbarSecondaryItems = [
    {
        id: "my_upcoming",
        icon: <PersonIcon />,
        element: "My Upcoming Vacation",
        route: "/upcoming"
    },
    {
        id: "team_upcoming",
        icon: <GroupsIcon />,
        element: "Team Upcoming Vacations",
        route: "/team/upcoming"
    }
]