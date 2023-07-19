export const luuLocal = (key,value) => { 
    const newData = JSON.stringify(value)
    localStorage.setItem(key,newData)
 }

 export const getData = (key) => { 
    const value = localStorage.getItem(key);
    //Khi parse xong có 2 trường hợp xảy ra, 1 là có dữ liệu 2 là null
    //JSON.parse(value) ? (JSON.parse(value)): ("");
    if(JSON.parse(value)){
        return JSON.parse(value)
    }else{
        return null;
    }
  }