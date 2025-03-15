import React, { useState } from "react";
import QrReader from "react-qr-reader";

const QRScanner = () => {
  const [result, setResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      alert(`Ticket Verified: ${data}`);
    }
  };

  return (
    <div className="qr-scanner">
      <h2>Scan QR Code</h2>
      <QrReader onScan={handleScan} onError={(err) => console.error(err)} />
      {result && <p>Ticket ID: {result}</p>}
    </div>
  );
};

export default QRScanner;
