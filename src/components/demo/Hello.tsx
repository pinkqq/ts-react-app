import React from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
}

const Hello = (props: Greeting) => <Button>hello {props.name}</Button>;

export default Hello;
