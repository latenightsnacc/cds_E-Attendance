const roles = {
    coordinator: {
        routes: [
            {
                component: 'Coordinator',
                url: '/coordinator'
            }
        ]
    },
    president: {
        routes: [
            {
                component: 'President',
                url: '/president'
            }
        ]
    },
    secretarygeneral: {
        routes: [
            {
                component: 'SecretaryGeneral',
                url: '/secretarygeneral'
            },
            {
                component: 'MembersList',
                url: '/memberslist'
            },
            {
                component: 'NewAttendance',
                url: '/newattendance'
            },
            {
                component: 'AttendanceList',
                url: '/attendancelist'
            },
            {
                component: 'MonthlyAttendance',
                url: '/monthlyattendance'
            },
            {
                component: 'WeeklyAttendance',
                url: '/weeklyattendance'
            },
            {
                component: 'Newnote',
                url: '/newnote'
            },
            
        ]
    },
    treasurer: {
        routes: [
            {
                component: 'Treasurer',
                url: '/treasurer'
            }
        ]
    },
    member: {
        routes: [
            {
                component: 'Member',
                url: '/member'
            }
        ]
    }
    
}

export default roles;