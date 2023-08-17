import { useState } from "react";

export function getNameObject(obj: any) {
  return Object.keys(obj)[0];
}

export function addFieldToObject(obj: any, objAdder: any) {
  return { ...obj, objAdder };
}
export function removeFieldObject(obj: any, fieldName: string) {
  delete obj[fieldName];
  return obj;
}
export function useControllHandleListObject(listItem: any, setDemo: void) {
  const [list, setlist] = useState(listItem);

  const UnActiveObj = () => {
    listItem.map((item: any) => {
      if (item[getNameObject(item)].active !== null) {
        removeFieldObject(item, "active");
      }
      setlist([...listItem]);
    });
  };

  const handleActiveObj = (objectID: string) => {
    let value = objectID.split(" ").join("").toLowerCase();

    UnActiveObj();

    listItem.map((item: any) => {
      if (Object.is(getNameObject(item), value)) {
        item[value] = { ...item[value], active: true };
        console.log(item[value]);
      }
    });
    setlist([...listItem]);
  };

  return { handleActiveObj, UnActiveObj, list };
}
