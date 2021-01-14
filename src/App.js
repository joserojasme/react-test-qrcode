import './App.css';
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [values, setValues] = useState({
    value: 'https://www.mercadopago.com.ar/',
    renderAs: 'canvas',
    size: '128',
    level: 'L',
    includeMargin: 'false',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <QRCode value={values.value} renderAs={values.renderAs} size={values.size} level={values.level} includeMargin={values.includeMargin} />
        <p>
          Lee el código para ir a la qpage
        </p>
        <div>
          <div class="custom-form">
            <div class="custom-form-label">
              <label for="userid">Valor QR</label>
            </div>
            <input value={values.value} name='value' onChange={handleChange}class="custom-form-control" />
          </div>
          <div class="custom-form">
            <div class="custom-form-label">
              <label for="userid">Render como</label>
            </div>
            <input value={values.renderAs} name='renderAs' onChange={handleChange}class="custom-form-control" />
          </div>
          <div class="custom-form">
            <div class="custom-form-label">
              <label for="userid">Tamaño</label>
            </div>
            <input value={values.size} type='number' name='size' onChange={handleChange}class="custom-form-control" />
          </div>
          <div class="custom-form">
            <div class="custom-form-label">
              <label for="userid">Level</label>
            </div>
            <input value={values.level} name='level' onChange={handleChange}class="custom-form-control" />
          </div>
          <div class="custom-form">
            <div class="custom-form-label">
              <label for="userid">Incluye margen</label>
            </div>
            <input value={values.includeMargin} name='includeMargin' onChange={handleChange}class="custom-form-control" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
