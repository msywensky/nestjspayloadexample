import { CollectionConfig } from 'payload/types';

export const Modules: CollectionConfig = {
  slug: 'modules',
  fields: [
    {
      name: 'code',
      type: 'text',
      label: 'Code',
      required: true,
      unique: true
    },
    {
      name: 'version',
      type: 'text',
      label: 'Version'
    },
    {
      name: 'data',
      type: 'json',
      label: 'data',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'Created At',
      required: true,
      defaultValue: () => Date.now()
    },
    {
      name: 'updated_at',
      type: 'date',
      label: 'Updated At',
      required: true,
      defaultValue: () => Date.now()
    }
  ]
};
