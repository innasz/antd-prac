import "./App.css";
import { Form, Input, Button } from "antd";

function App() {
  const onFinish = (e: any) => {
    console.log(e);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form onFinish={onFinish}>
          <Form.Item label="User Name" name="username">
            <Input placeholder="User name" required></Input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password
              required
              placeholder="Password"
              maxLength={12}
            ></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
