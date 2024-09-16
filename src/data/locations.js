const locations = [
  {
    _id: { $oid: '66e3fffd4fd7f2c6c6ee6903' },
    geo: { coordinates: [] },
    court: 'Brooke',
    courtNumber: { $numberInt: '8' },
    issues: [],
    createdAt: { $date: { $numberLong: '1726218237514' } },
    updatedAt: { $date: { $numberLong: '1726218237514' } },
    __v: { $numberInt: '0' }
  },
  {
    _id: { $oid: '66e2ef5507d90c40cbcc7e48' },
    geo: { coordinates: [] },
    court: 'Spencer',
    courtNumber: { $numberInt: '5' },
    issues: [
      { $oid: '66e40481ba6df7172632c860' },
      { $oid: '66e40493ba6df7172632c862' },
      { $oid: '66e4049cba6df7172632c864' }
    ],
    createdAt: { $date: { $numberLong: '1726148437063' } },
    updatedAt: { $date: { $numberLong: '1726221765201' } },
    __v: { $numberInt: '0' }
  },
  {
    _id: { $oid: '66e814006a8ab4da660dcc1e' },
    geo: { coordinates: [] },
    court: 'Pope',
    courtNumber: { $numberInt: '9' },
    issues: [],
    createdAt: { $date: { $numberLong: '1726485504354' } },
    updatedAt: { $date: { $numberLong: '1726485504354' } },
    __v: { $numberInt: '0' }
  }
]

module.exports = { locations }
