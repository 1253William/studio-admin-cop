// src/structure/deskStructure.js

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('Blog Posts'),
    ])
