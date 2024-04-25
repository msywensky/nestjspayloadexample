import { buildConfig } from 'payload/config';
import { Modules } from './collections/modules.collection';
import * as path from 'path';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export default buildConfig({
  collections: [Modules],
  db: mongooseAdapter({
    url: 'mongodb://localhost:27017', //configService.get('mongo.url'),
  }),
  editor: lexicalEditor({}),
  routes: {
    admin: '/cms/admin',
    api: '/cms/api',
    graphQL: '/cms/graphql',
    graphQLPlayground: '/cms/playground',
  },
  typescript: {
    outputFile: path.resolve(__dirname, './cms/types/cms.types.ts'),
  },
});
