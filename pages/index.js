import BaseLayout from "../components/layouts/BaseLayout";
import {Container} from "reactstrap";

export default function Home() {
  return (
    <BaseLayout>
      <Container>
        {/*Everything inside BaseLayout is passed as props.children to BaseLayout component*/}
        <h1>Index</h1>
      </Container>
    </BaseLayout>
  )
};
