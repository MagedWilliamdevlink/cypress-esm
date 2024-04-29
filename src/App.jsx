import { useEffect, useState } from "react";
import DynamicForm from "Components/DynamicForm";
import taqymShamelData from "./FormSchema";
import { Skeleton } from "antd";

const TaqymShamel = () => {
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    async function getInitialValues() {
      const res = await fetch('/src/assets/initialValue-example-sample.json');
      const data = await res.json();
      if (res.ok && res.status === 200) {
        setInitialData(data);
      }
    }
    getInitialValues();
  }, [])

  return initialData ? (
    <>
      <DynamicForm
        initialData={initialData}
        schamaData={taqymShamelData}
      />
    </>
  )
    :
    <Skeleton className="px-10" active />
}
export default TaqymShamel;