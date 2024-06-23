import React from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  spinnerContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    zIndex: 9999,
  },
};

function FallbackSpinner() {
  return (
    <div style={styles.spinnerContainerStyle}>
      <Spinner animation="grow" />
      <div style={{ marginLeft: '10px', fontWeight: 'bold',  }}>Loading...</div>
    </div>
  );
}

export default FallbackSpinner;