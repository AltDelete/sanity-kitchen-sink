export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618bdaaae4c13f3e538a334d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nbpsbsf5',
                  apiId: 'c483d76d-8731-47cd-bf0a-a5b73ed07dfa'
                },
                {
                  buildHookId: '618bdaaaad90db34c880552c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k5ec3n97',
                  apiId: '3c31a3b1-2c4d-4039-824f-5fb0e2bbf97a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AltDelete/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k5ec3n97.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
