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
                component: 'SecretaryGeneral',
                url: '/secretarygeneral'
            }
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