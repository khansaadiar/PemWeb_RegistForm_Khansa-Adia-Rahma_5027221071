import { CollectionConfig } from 'payload/types'

const accounts: CollectionConfig = {
  slug: 'accounts',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {   
      name: 'name',
      type: 'text',
      required: true,
    }
  ],
}

export default accounts