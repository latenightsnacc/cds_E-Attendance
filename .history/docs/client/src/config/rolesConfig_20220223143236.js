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
                component: 'AttendanceList',
                url: '/attendancelist'
            },
            {
                component: 'Attendance',
                url: '/attendance'
            },
            {
                component: 'Attendance',
                url: '/attendance'
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