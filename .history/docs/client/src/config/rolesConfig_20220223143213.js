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
                component: 'Attendance',
                url: '/secretarygeneral'
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