"use client";

import React from "react";
import { format } from "date-fns";
import Image from "next/image";

interface PrintProps {
  authUser: string;
  customerName: string;
  menu: { name: string; price: number; quantity: number }[];
  total: number;
}

export const PrintContent: React.FC<PrintProps> = ({ authUser, customerName, menu, total }) => {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Arial, sans-serif",
        fontSize: "40px",
        lineHeight: "1.6",
        padding: "0px",
        boxSizing: "border-box",
      }}
    >
      {/* Header with Logo and Title */}
      <div style={{ textAlign: "center", paddingBottom: "10px" }}>
        <div>
          <Image src="/Fatkid.png" width={100} height={70} alt="logo" />
        </div>
        <br />
        <div>FATKID CATERING</div>
      </div>

      {/* Contact Information */}
      <div style={{ textAlign: "center", borderBottom: "1px dashed #000", paddingBottom: "10px" }}>
        <p style={{ margin: "0" }}>Telp: 0813-1805-3671</p>
        <p style={{ margin: "0" }}>Instagram: @Fatkid.Poffertjes</p>
      </div>

      {/* Order Details */}
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <p style={{ margin: "0" }}>
          <strong>Waiter:</strong> {authUser}
        </p>
        <p style={{ margin: "0" }}>
          <strong>Customer:</strong> {customerName}
        </p>
        <p style={{ margin: "0" }}>
          <strong>Date:</strong> {format(new Date(), "yyyy-MM-dd")}
        </p>
      </div>

      {/* Menu Items */}
      <div>
        {menu.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px dashed #ccc",
              padding: "5px 0",
            }}
          >
            <div style={{ flex: "1", marginRight: "10px" }}>
              {item.name} <br /> ({item.quantity} x Rp{item.price.toLocaleString()})
            </div>
            <div style={{ flexShrink: "0" }}>Rp{(item.quantity * item.price).toLocaleString()}</div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div style={{ textAlign: "right", marginTop: "10px", fontWeight: "bold" }}>
        <p style={{ margin: "0" }}>Total: Rp{total.toLocaleString()}</p>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", borderTop: "1px dashed #000", paddingTop: "10px" }}>
        <p style={{ margin: "0" }}>Terima kasih atas pembelian Anda!</p>
        <p style={{ margin: "0" }}>Semoga hari Anda menyenangkan!</p>
      </div>
    </div>
  );
};
