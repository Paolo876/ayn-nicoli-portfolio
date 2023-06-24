const importFolder = r =>  {
    let images = [];
    r.keys().forEach( item => images.push(r(item)) );
    return images;
  }

export default importFolder;