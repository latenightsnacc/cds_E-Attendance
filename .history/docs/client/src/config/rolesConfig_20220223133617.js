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
                component: 'Coordinator',
                url: '/coordinator'
            }
        ]
    },
    secretarygeneral: {
        routes: [
            {
                component: 'Coordinator',
                url: '/coordinator'
            }
        ]
    },
    treasurer: {
        routes: [
            {
                component: 'Treasurer',
                url: '/coordinator'
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