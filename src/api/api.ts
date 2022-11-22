import { projectFireStore } from '../firebase';

const getData = (url: string) => {
  return projectFireStore.collection(url).get();
};

export default getData;
