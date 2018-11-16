import React, { Component } from 'react';
import { Button, Input, Card, Tag } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import { Grid, Col, Row } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ValorFuturo: 200000000,
      ValorPresente: 20000000,
      TasaInteres: 1.500000,
      Periodo: 12
    }
  }

  componentDidMount = () => {
    this.CalcularValorFuturo();
    this.CalcularValorPresente();
  };

  CalcularValorFuturo = () => {
    const { ValorFuturo, TasaInteres, Periodo } = this.state;

    var auxValFuturo = (ValorFuturo * (1 + TasaInteres)) * (Periodo / 12);
    this.setState({
      ValorFuturo: auxValFuturo,
    });
  };

  CalcularValorPresente = () => {
    const { ValorPresente, TasaInteres, Periodo } = this.state;

    var auxValPresente = ValorPresente / (1 + TasaInteres) ^ (Periodo / 12);
    this.setState({
      ValorPresente: auxValPresente,
    });
  };

  FormatMoney = (n, c, d, t) => {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  };

  render() {
    const { ValorFuturo, ValorPresente, TasaInteres, Periodo } = this.state;

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
          <Grid>
            <Row style={{ padding: '10px' }}>
              <Col xs={12} md={8}>
                <Card
                  style={{ width: 300 }}
                >
                  <div>
                    <Tag color="#87d068"
                      style={{ fontSize: '20px', display: 'block' }}>Tasa de Interés</Tag>
                    <span style={{ fontSize: '45px', fontWeight: 'bold' }}>{`${TasaInteres}%`}</span>
                  </div>
                </Card>
              </Col>
              <Col xs={12} md={8}>
                <Card style={{ width: 300 }}>
                  <div>
                    <Tag color="#108ee9" style={{ fontSize: '20px' }}>Número de Períodos</Tag>
                    <span style={{ fontSize: '45px', fontWeight: 'bold' }}>{`${Periodo} Meses`}</span>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Card style={{ width: 300 }} >
                  <div>
                    <Tag color="#f50" style={{ fontSize: '20px' }}>Valor Futuro</Tag>
                    <span style={{ fontSize: '32px', fontWeight: 'bold' }}>{`${this.FormatMoney(ValorFuturo)}$`}</span>
                  </div>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  style={{ width: 300 }}
                >
                  <div>
                    <Tag color="#2db7f5" style={{ fontSize: '20px', display: 'block' }}>Valor Presente</Tag>
                    <span style={{ fontSize: '32px', fontWeight: 'bold' }}>{`${this.FormatMoney(ValorPresente)}$`}</span>
                  </div>
                </Card>
              </Col>
            </Row>

            <br />

            <div>
              <h1>Inversion Final</h1>
              <h1>${this.FormatMoney(ValorFuturo)}</h1>
            </div>
          </Grid>


        </header>
      </div >
    );
  }
}

export default App;
