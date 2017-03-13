export default class DistrictRepository {
  constructor(data) {
    this.data = this.removeDuplicates(data);
  }

  removeDuplicates(data) {
    const testData = data.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        acc[obj.Location] = [];
      }
      acc[obj.Location].push(obj)
      return acc;
    }, {});
    return testData;
  }

}
