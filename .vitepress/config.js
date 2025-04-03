export default {
    base: "/service_reservation_doc/",
    title: 'Load Testing Course',
    description: 'Documentation for testing course',
    themeConfig: {
        nav: [{ text: 'Home', link: '/' }],
        sidebar: {
            '/': [
                {
                    text: 'Introduction',
                    collapsible: true,
                    items: [
                        { text: '- Purpose object and subject of load testing', link: '/theory/PurposeObjectAndSubjectOfLoadTesting.md' },
                        { text: '- Load testing theory', link: '/theory/LoadTestingTheory.md' },
                        { text: '- Team composition and responsibilities in load testing', link: '/theory/TeamCompositionAndResponsibilitiesInLoadTesting.md' },
                    ]
                },
                {
                    text: 'Documentations',
                    collapsible: true,
                    items: [
                        { text: '- Methodology', link: '/documentations/Methodology.md' },
                        { text: '- Scenarios', link: '/documentations/Scenarios.md' },
                        { text: '- Reporting', link: '/documentations/Reporting.md' },
                    ]
                },
                {
                    text: 'Process',
                    link: '/process/',
                },
                {
                    text: 'Tools',
                    link: '/tools/',
                },
                {
                    text: 'Analytics',
                    link: '/analytics/',
                }
            ]
        }
    }
}
