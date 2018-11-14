import React, { Component } from 'react';
import { Button, Input, Card, Col, Row, Tag } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';

// const Header = styled.span`
//  fontSize: '32px'
// `;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <t1 style={{ fontSize: '18px' }}>Pizzeria</t1>
            <span style={{ fontSize: '42px', fontWeight: 'Bold' }}>Veloce</span>
            <span role="img" aria-label="Smile" style={{ fontSize: '72px' }}>
              🍕
          </span>
          </div>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                title="Valor Futuro"
                style={{ width: 300 }}
              >
                <div style={{ padding: '20px' }}>
                  <Input placeholder="Valor Inversion" />
                  <Input placeholder="Tasa" />
                  <Tag color="blue" style={{ fontSize: '18px' }}>Total Valor Futuro</Tag>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="Valor Presente"
                style={{ width: 300 }}
              >
                <div style={{ padding: '20px' }}>
                  <Input placeholder="Valor Inversion" />
                  <Input placeholder="Tasa" />
                </div>
              </Card>
            </Col>
          </Row>

          <br />

          <div>
            <Button type="primary">Button</Button>
          </div>
        </header>
      </div >
    );
  }
}

export default App;
