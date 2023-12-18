import path from 'path';
import { payloadCloud } from '@payloadcms/plugin-cloud'; // Import payloadCloud
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import Users from './collections/Users';
import accounts from './collections/accounts';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, accounts],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  // graphQL: {
  //   schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  // },
  plugins: [payloadCloud()], // Ensure that payloadCloud is imported and installed
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
