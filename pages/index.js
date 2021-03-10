import BaseLayout from "../components/layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      {/*Everything inside BaseLayout is passed as props.children to BaseLayout component*/}
      <h1>Index</h1>
    </BaseLayout>
  )
};
