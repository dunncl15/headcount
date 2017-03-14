export default class DistrictRepository {
  constructor(data) {
    this.data = this.removeDuplicates(data);
  }

  removeDuplicates(data) {
    this.sanitizeData(data);
    let mapped = data.map(obj => {
       obj.Location = obj.Location.toUpperCase();
       return obj;
    });
    return mapped.reduce((acc, val)=> {
      if (!acc[val.Location]) {
        acc[val.Location] = { locationData: [],
                              location: val.Location,
                              data: {[val.TimeFrame]: this.roundData(val.Data) }
                            };
      } else {
        acc[val.Location].data[val.TimeFrame] = this.roundData(val.Data);
      }

      acc[val.Location].locationData.push(val);

      return acc;
    }, {});
  }

  findByName(name) {
    if (!name) {
      return undefined;
    }
    return this.data[name.toUpperCase()];
  }

  sanitizeData(data) {
    const sanitized = data.map(location => {
      typeof location.Data === 'string' ? location.Data = 0 : location.Data;
      return location;
    });
    return this.formatData(sanitized)
  }

  formatData(data) {
    return data.reduce((obj, val) => {
      obj[val.TimeFrame] = val.Data
      return obj;
    }, {});
  }

  findAllMatches(location) {
    const keys = Object.keys(this.data);
    if (location === undefined) {
      return this.data;
    }
    if (!keys.includes(location.toUpperCase())) {
      return [];
    }
    const matches = this.data[location.toUpperCase()].locationData;
    return matches;
  }

  roundData(number) {
    return Math.round(number * 1000) / 1000;
  }

}
