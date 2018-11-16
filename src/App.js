import React, { Component } from 'react';
import { Button, Input, Card, Col, Row, Tag } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.props.getAllHotels();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ padding: '20px' }}>
            <t1 style={{ fontSize: '18px' }}>Pizzeria</t1>
            <span style={{ fontSize: '42px', fontWeight: 'Bold' }}>Veloce!</span>
            <span role="img" aria-label="Smile" style={{ fontSize: '72px' }}>
              🍕
          </span>
          </div>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                style={{ width: 300 }}
              >
                <div>
                  <Tag color="#f50" style={{ fontSize: '20px' }}>Valor Futuro</Tag>
                  <Input placeholder="Valor Futuro" style={{ margin: '10px' }} />
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                style={{ width: 300 }}
              >
                <div>
                  <Tag color="#2db7f5" style={{ fontSize: '20px' }}>Valor Presente</Tag>
                  <Input placeholder="Valor Presente" style={{ margin: '10px' }} />
                </div>
              </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ padding: '10px' }}>
            <Col span={12}>
              <Card
                style={{ width: 300 }}
              >
                <div>
                  <Tag color="#87d068" style={{ fontSize: '20px' }}>Tasa de Interés</Tag>
                  <Input placeholder="Tasa de Interés" style={{ margin: '10px' }} />
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                style={{ width: 300 }}
              >
                <div>
                  <Tag color="#108ee9" style={{ fontSize: '20px' }}>Número de Períodos</Tag>
                  <Input placeholder="Número de Períodos" style={{ margin: '10px' }} />
                </div>
              </Card>
            </Col>
          </Row>

          <br />

          <div>
            <h1>Inversion Total</h1>
            <h1>200.000.000$</h1>
          </div>

          <div>
            <Button type="primary">Recalcular?</Button>
          </div>
        </header>
      </div >
    );
  }
}

export default App;
