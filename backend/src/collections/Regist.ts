module.exports = {
  slug: 'registration',
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'nama',
      label: 'Nama',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      unique: true,
    },
    {
      name: 'asalSekolah',
      label: 'Asal Sekolah',
      type: 'text',
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: ['Waiting', 'Rejected', 'Accepted'],
      defaultValue: 'Waiting',
    },
    {
      name: 'tanggalPendaftaran',
      label: 'Tanggal Pendaftaran',
      type: 'date',
    },
  ],
};
