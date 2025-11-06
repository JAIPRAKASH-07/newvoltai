// src/pages/CheckoutInfo.tsx
import { QRCodeCanvas } from "qrcode.react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function CheckoutInfo() {
  const navigate = useNavigate();

  const userInfo = {
    name: "Pradeep Chavda",
    mobile: "09892049499",
    email: "leo.pradi@gmail.com",
  };

  const qrData = JSON.stringify(userInfo, null, 2);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="flex flex-col items-center gap-6 p-8">
          <h2 className="text-2xl font-semibold text-gray-800">More About the Buyer</h2>

          {/* QR Code */}
          <QRCodeCanvas value={qrData} size={180} includeMargin />

          {/* User Info */}
          <div className="text-center space-y-2">
            <p><strong>Name:</strong> {userInfo.name}</p>
            <p><strong>Mobile:</strong> {userInfo.mobile}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
          </div>

          <Button variant="outline" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
