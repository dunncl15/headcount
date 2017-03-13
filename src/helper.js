export default class DistrictRepository {
  constructor(data) {
    this.data = this.removeDuplicates(data);
  }

  removeDuplicates(data) {
    const testData = data.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        acc[obj.Location.toUpperCase()] = [];
      }
      acc[obj.Location.toUpperCase()].push(obj)
      return acc;
    }, {});
    return testData;
  }

  findByName(name) {
    let upperName = name.toUpperCase();

    let keys = Object.keys(this.data);

    if(!upperName || !keys.includes(upperName)){
      return undefined
    }

    const location = this.data[upperName][0]
    console.log(location)
    return location

  }

}

// let upperName = name.toUpperCase()
//
// // const regex = new RegExp(name, 'i')
//
// let mapped = keys.map((key) => {
//   return key.toUpperCase()
//   // let match = key.match(regex)
//   // return match
// })
//
// let filtered = mapped.filter(key => {
//   return key === upperName
// })







