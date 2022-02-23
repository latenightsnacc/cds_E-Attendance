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
                component: 'NewNote',
                url: '/newnote'
            },
            {
                component: 'Note',
                url: '/note'
            },
            {
                component: 'NotesLis',
                url: '/noteslist'
            }
            
        ]
    },
    treasurer: {
        routes: [
            {
                component: 'Treasurer',
                url: '/treasurer'
            },
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